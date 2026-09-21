import { useRef } from 'react'
import { Outlet, useLoaderData, useLocation } from 'react-router'
import Main from '../../components/Main'
import Sidebar from '../../components/Sidebar'
import TransactionList from '../../components/TransactionList'
import { getTransactions, groupByMonth } from '../../utils/transactions'

const hideMobileSidebarPaths = ['transactions/', 'fraud']

export const loader = async () => {
  const transactions = groupByMonth(getTransactions())

  return { transactions }
}

const DashboardLayout = () => {
  const { transactions } = useLoaderData()
  const { pathname } = useLocation()
  const sidebarRef = useRef()
  const hideMobileSidebar = hideMobileSidebarPaths.some(path => pathname.includes(path))

  return (
    <>
      <Main>
        <Outlet />
      </Main>
      <Sidebar ref={sidebarRef} className={hideMobileSidebar ? 'hide-on-mobile' : ''}>
        <TransactionList transactions={transactions} />
      </Sidebar>
    </>
  )
}

export default DashboardLayout
