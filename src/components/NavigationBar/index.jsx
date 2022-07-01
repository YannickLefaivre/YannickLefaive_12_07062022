import PropTypes from 'prop-types'
import React from 'react'
import './style.css'

/**
 *
 * @param {Object} props
 * @param {React.ElementType} props.children
 * @param {React.ElementType} [props.homepageLink]
 *
 * @param {Object} [styleModifier=null]
 * @param {String} [styleModifier.navigationBarContainer=undefined]
 * @param {String} [styleModifier.linkList=undefined]
 *
 * @returns
 */
function NavigationBar({ children, homepageLink, styleModifier }) {
  return (
    <nav
      className={`navigation-bar${
        styleModifier ? ` ${styleModifier.navigationBarContainer}` : ''
      }`}
    >
      {homepageLink && homepageLink}
      <ul
        className={`navigation-bar__link-list${
          styleModifier ? ` ${styleModifier.linkList}` : ''
        }`}
      >
        {children}
      </ul>
    </nav>
  )
}

NavigationBar.propTypes = {
  children: PropTypes.node.isRequired,
  homepageLink: PropTypes.node,
  styleModifier: PropTypes.object,
}

NavigationBar.defaultProps = {
  children: (
    <div>
      <div>Company logo place</div>
      <ul>
        <li>First link</li>
        <li>Second Link</li>
        <li>Third Link</li>
      </ul>
    </div>
  ),
  homepageLink: null,
  styleModifier: null,
}

export default NavigationBar
