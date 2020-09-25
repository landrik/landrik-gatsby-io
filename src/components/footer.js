import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer 
    style={{
        marginTop: `2rem`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
    }}>
    © {new Date().getFullYear()} | handcrafted with 
    {` `}
    <span class="heart">♥</span>
    {` `}
    by
    {` `}
    <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
  </footer>
)

Footer.propTypes = {
    siteTitle: PropTypes.string,
}

Footer.defaultProps = {
    siteTitle: `Landry Karege`,
}

export default Footer
