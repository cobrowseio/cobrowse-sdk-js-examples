import ChartJs from 'chart.js/auto'
import { useEffect, useRef } from 'react'
import styles from './Chart.module.css'
import { formatAmount } from '../utils/formatAmount'
import Redacted from './Redacted'

const Chart = ({ categories, currentMonthTransactionsByCategory, currentMonthSpentAmount }) => {
  const chartRef = useRef()

  useEffect(() => {
    if (!chartRef.current) {
      return
    }

    const iconPlugin = {
      id: 'iconPlugin',
      afterDraw: (chart) => {
        if (chart.config.type === 'doughnut') {
          const ctx = chart.ctx

          ctx.save()
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          ctx.fillStyle = 'white'

          chart.data.datasets.forEach((dataset, datasetIndex) => {
            const datasetMeta = chart.getDatasetMeta(datasetIndex)

            datasetMeta.data.forEach((arc, index) => {
              const angle = (arc.startAngle + arc.endAngle) / 2
              const radius = (arc.innerRadius + arc.outerRadius) / 2
              const iconSize = (arc.outerRadius - arc.innerRadius) / 2

              ctx.font = `${iconSize}px Material Symbols Outlined`

              const posX = arc.x + radius * Math.cos(angle)
              const posY = arc.y + radius * Math.sin(angle)

              const categoryName = chart.data.labels[index]
              const iconName = categories[categoryName].icon

              ctx.fillText(iconName, posX, posY)
            })
          })

          ctx.restore()
        }
      }
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
      <div className={styles.chart}>
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
