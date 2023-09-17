import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default function MenuBar() {
  const location = useLocation()
  return (
    <Menu>
      <Menu.Item header active={location.pathname.includes('/form')}>
        <Link as={Menu.Item} to={`form`}>
          Form
        </Link>
      </Menu.Item>
      <Menu.Item active={location.pathname.includes('/segments')}>
        <Link to={`segments`}>Segments</Link>
      </Menu.Item>
    </Menu>
  )
}
