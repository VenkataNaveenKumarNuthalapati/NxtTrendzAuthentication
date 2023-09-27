import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  console.log('Header')
  return (
    <div className="head-container">
      <img
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <div className="links-container">
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/products">
            Products
          </Link>
        </li>
        <li>
          <Link className="link" to="/cart">
            Cart
          </Link>
        </li>
        <li>
          <Link className="link logout" to="/logout">
            Logout
          </Link>
        </li>
      </div>
    </div>
  )
}

export default Header
