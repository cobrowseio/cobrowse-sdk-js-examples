import { Outlet } from 'react-router-dom'
import Content from '../components/Content'
import Header from '../components/Header'
import { getQueryParam } from '../utils/getQueryParam'

export const loader = async () => {
  const isDemoMode = getQueryParam('demo')

  return { isDemoMode }
}

const Root = () => {
  return (
    <>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </>
  )
}

export default Root
