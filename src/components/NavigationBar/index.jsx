import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

/**
 * Displays a customizable navigation bar with a
 * list of navigation links and a company logo *(optional)*
 * that can be used as a backlink to the home page.
 *
 * @param {Object} [props] Properties of the
 * functional component.
 *
 * @param {React.ReactNode[]} [props.children=<div> <div>Company logo place</div> <ul> <li>First link</li> <li>Second Link</li> <li>Third Link</li> </ul> </div>]
 * The list of navigation links.
 *
 * @param {React.ReactNode} [props.homepageLink=null]
 * The logo of the company / organization /
 * institution or other.
 *
 * @param {Object} [props.styleModifier=null]
 * Allows you to add one or more BEM-type modifier
 * CSS classes to customize the style of the
 * elements making up the component.
 *
 * @param {String} [props.styleModifier.navigationBarContainer=undefined]
 * Allows you to change the style of
 * the navigation bar items container.
 *
 * @param {String} [props.styleModifier.linkList=undefined]
 * Allows you to change the style of the link list
 * container.
 *
 * @returns {JSX.Element} A NavigationBar component.
 */
function NavigationBar({ children, homepageLink, styleModifier }) {
  return (
    <nav
      className={`navigation-bar${
        styleModifier && styleModifier.navigationBarContainer
          ? ` ${styleModifier.navigationBarContainer}`
          : ''
      }`}
    >
      {homepageLink && homepageLink}
      <ul
        className={`navigation-bar__link-list${
          styleModifier && styleModifier.linkList
            ? ` ${styleModifier.linkList}`
            : ''
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
    <ul>
      <li>First link</li>
      <li>Second Link</li>
      <li>Third Link</li>
    </ul>
  ),
  homepageLink: null,
  styleModifier: null,
}

export default NavigationBar
