import MenuBar from '../../components/MenuBar'
import { Outlet } from 'react-router-dom'

export default function HomePage() {
  return (
    <>
      <MenuBar></MenuBar>
      <div className="custom-container">
        <Outlet />
      </div>
    </>
  )
}
