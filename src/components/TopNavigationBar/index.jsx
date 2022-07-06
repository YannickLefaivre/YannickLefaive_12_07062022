import { Link, NavLink, useParams } from 'react-router-dom'
import NavigationBar from '../NavigationBar'
import companyLogo from '../../assets/logos/sportsee-logo.svg'
import './style.css'

function TopNavigationbar() {
  const activeNavLinkClassName = 'navigation-bar__link-list__item__navlink'

  const { userId } = useParams()

  return (
    <header className="navigation-bar-wrapper navigation-bar-wrapper--top-navbar">
      <NavigationBar
        id="top-navbar"
        homepageLink={
          <Link className="navigation-bar__company-logo" to="/">
            <img src={companyLogo} alt="Page d'accueil de SportSee" />
          </Link>
        }
      >
        <li className="navigation-bar__link-list__item">
          <NavLink
            className={({ isActive }) =>
              isActive ? activeNavLinkClassName : ''
            }
            to="/"
          >
            Accueil
          </NavLink>
        </li>
        <li className="navigation-bar__link-list__item">
          <NavLink
            className={({ isActive }) =>
              isActive ? activeNavLinkClassName : ''
            }
            to={`/${userId}`}
          >
            Profil
          </NavLink>
        </li>
        <li className="navigation-bar__link-list__item">
          <NavLink
            className={({ isActive }) =>
              isActive ? activeNavLinkClassName : ''
            }
            to="/"
          >
            Réglage
          </NavLink>
        </li>
        <li className="navigation-bar__link-list__item">
          <NavLink
            className={({ isActive }) =>
              isActive ? activeNavLinkClassName : ''
            }
            to="/"
          >
            Communauté
          </NavLink>
        </li>
      </NavigationBar>
    </header>
  )
}

export default TopNavigationbar
