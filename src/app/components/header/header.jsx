import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import { MenuButton } from './menu-button'

import './header.less'

export const Header = () => {
  const menu = [
    { label: 'javascript', href: '/' },
    { label: 'css', href: '/' },
    { label: 'latest', href: '/articles-list' },
    { label: 'html', href: '/article/10' },
    { label: 'design', href: '/' },
  ]

  return (
    <div>
      <div className="logo">
        <span>racco</span>
        <svg className="logo__icon">
          <use xlinkHref={`${IMG_PATH}/sprite.svg#icon-racoon-negative`} />
        </svg>
        <span>nblog</span>
      </div>

      <nav className="navbar">
        <div className="navbar__control">
          <MenuButton>?</MenuButton>

          <ul className="menu">
            {menu.map(item => (
              <li key={item.label} className="menu__item">
                <Link to={item.href} className="menu__link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <MenuButton>!</MenuButton>

          <MenuButton>
            <svg className="navbar__button-icon">
              <use xlinkHref="dist/img/sprite.svg#icon-tag" />
            </svg>
          </MenuButton>
        </div>

        <MenuButton isMenu>
          <svg className="navbar__button-icon">
            <use xlinkHref="dist/img/sprite.svg#icon-menu" />
          </svg>
        </MenuButton>
      </nav>
    </div>
  )
}

// Header.propTypes = {
//   name: PropTypes.string.isRequired,
// }
