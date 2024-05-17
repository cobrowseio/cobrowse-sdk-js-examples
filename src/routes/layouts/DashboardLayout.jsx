import { useRef } from 'react'
import { Outlet, useLoaderData, useLocation } from 'react-router-dom'
import Main from '../../components/Main'
import Sidebar from '../../components/Sidebar'
import TransactionList from '../../components/TransactionList'
import { getTransactions, groupByMonth } from '../../utils/transactions'

export const loader = async () => {
  const transactions = groupByMonth(getTransactions())

  return { transactions }
}

const DashboardLayout = () => {
  const { transactions } = useLoaderData()
  const { pathname } = useLocation()
  const sidebarRef = useRef()

  return (
    <>
      <Main>
        <Outlet />
      </Main>
      <Sidebar ref={sidebarRef} className={pathname.includes('transactions/') ? 'hide-on-mobile' : ''}>
        <TransactionList transactions={transactions} />
      </Sidebar>
    </>
  )
}

export default DashboardLayout
