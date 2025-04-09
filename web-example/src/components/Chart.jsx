import ChartJs from 'chart.js/auto'
import { useEffect, useRef } from 'react'
import styles from './Chart.module.css'
import { formatAmount } from '../utils/formatAmount'
import Icon from './Icon'
import Redacted from './Redacted'
import { renderToString } from 'react-dom/server'

const Chart = ({ categories, currentMonthTransactionsByCategory, currentMonthSpentAmount }) => {
  const chartRef = useRef()

  useEffect(() => {
    if (!chartRef.current) {
      return
    }

    let imageCache = {}

    const iconPlugin = {
      id: 'iconPlugin',
      afterDraw: (chart) => {
        const { ctx } = chart

        chart.data.datasets.forEach((dataset, datasetIndex) => {
          const datasetMeta = chart.getDatasetMeta(datasetIndex)

          datasetMeta.data.forEach((datapoint, index) => {
            const x = datapoint.tooltipPosition().x
            const y = datapoint.tooltipPosition().y
            const categoryName = chart.data.labels[index]
            const iconSize = ((datapoint.outerRadius - datapoint.innerRadius) / 2) - 10
            const iconName = categories[categoryName].icon
            let img

            if (imageCache[iconName]) {
              img = imageCache[iconName]
            } else {
              // We render the Icon component to an SVG string, then convert it to base64
              // before we can draw it on the canvas
              const svgString = renderToString(<Icon name={iconName} width='100px' fill='#ffffff' />)
              const base64 = btoa(svgString)

              img = new Image()
              img.src = `data:image/svg+xml;base64,${base64}`
              imageCache[iconName] = img
            }

            ctx.drawImage(img, x - (iconSize / 2), y - (iconSize / 2), iconSize, iconSize)
          })
        })
      },
    }
    const ctx = chartRef.current?.getContext('2d');
    const data = Object.values(currentMonthTransactionsByCategory).map((transactions) => Object.values(transactions).reduce((acc, transaction) => acc + transaction.amount, 0))
    const chart = new ChartJs(ctx, {
      type: 'doughnut',
      data: {
        labels: Object.keys(currentMonthTransactionsByCategory),
        datasets: [{
          label: 'Expenses',
          data,
          backgroundColor: Object.keys(currentMonthTransactionsByCategory).map((category) => categories[category].color)
        }]
      },
      options: {
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }
        },
        responsive: true,
        maintainAspectRatio: false,
        hoverOffset: 10,
        layout: {
          padding: 10
        },
        transitions: {
          show: {
            animation: {
              duration: 0
            }
          }
        }
      },
      plugins: [iconPlugin]
    })

    return () => {
      chart.destroy()
    }
  }, [categories, currentMonthTransactionsByCategory])

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.chart} unredacted`}>
        <canvas ref={chartRef}></canvas>
        <div className={styles.spent}>
          Spent
          <Redacted>
            <span className={styles.amount}>{formatAmount(currentMonthSpentAmount)}</span>
          </Redacted>
          this month
        </div>
      </div>
    </div>
  );
}

export default Chart
