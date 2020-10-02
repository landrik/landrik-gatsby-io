import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header> 
  <nav id="nav">
      <ul className="clearfix onepage-pagination">
          <li><Link to="/about"> Profile</Link></li>
          <li><Link to="/index">Portfolio</Link></li>
          <li><Link to="/contact"> Contact</Link></li>
      </ul>
  </nav>
</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Welcome`,
}

export default Header
