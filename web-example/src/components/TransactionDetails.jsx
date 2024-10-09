import { useEffect } from 'react'
import styles from './TransactionDetails.module.css'
import { formatAmount } from '../utils/formatAmount'
import { formatDate } from '../utils/formatDate'
import Icon from './Icon'
import LinkButton from './LinkButton' // Change this import
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const TransactionDetails = ({ transaction }) => {
  const hasCoordinates = transaction && transaction.lat && transaction.lng

  useEffect(() => {
    if (hasCoordinates) {
      const position = new L.LatLng(transaction.lat, transaction.lng)
      const map = L.map('map', {
        center: position,
        zoom: 14,
        dragging: false,
        touchZoom: false,
        doubleClickZoom: false,
        scrollWheelZoom: false,
        boxZoom: false,
        zoomControl: false,
        attributionControl: false
      })

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png').addTo(map)

      const markerIcon = new L.Icon({
        iconUrl: 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-2x-violet.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      })

      L.marker(position, { icon: markerIcon }).addTo(map)

      return () => {
        map.remove()
      }
    }
  }, [transaction, hasCoordinates])

  if (!transaction) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.receipt}>
      <div className={styles.header}>
        <div className={styles.details}>
          <h1 className={styles.title}>{transaction.title}</h1>
          <p className={styles.amount}>{formatAmount(transaction.amount)}</p>
          <p className={styles.subtitle}>{formatDate(transaction.date)}</p>
        </div>
        <div className={styles.category}>
          <Icon name={transaction.icon} style={{ color: transaction.color }} />
        </div>
      </div>
      {hasCoordinates && <div id='map' className={styles.map} />}
      <div className={styles.actionContainer}>
        <LinkButton to='/fraud'>
          Don't recognise this?
        </LinkButton>
        {transaction.contactUrl && (
          <LinkButton to={transaction.contactUrl} target='_blank' appendQueryString={false}>
            Contact us
          </LinkButton>
        )}
      </div>
    </div>
  )
}

export default TransactionDetails
