import { Outlet } from 'react-router'
import Menu from '../../components/Menu/Menu'
import { rootList } from '../../constants/indes'

const RootLayout = () => {
  return (
    <>
      <Menu list={rootList} />
      <Outlet />
    </>
  )
}

export default RootLayout
