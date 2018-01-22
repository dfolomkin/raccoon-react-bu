import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import '../header.less'

export const MenuButton = ({ children, isMenu }) => {
  const wrapperClass = isMenu
    ? classNames('navbar__button', 'navbar__button--menu')
    : 'navbar__button'
  return (
    <div className={wrapperClass}>
      <div className="navbar__button-inner">{children}</div>
    </div>
  )
}

MenuButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  isMenu: PropTypes.bool,
}

MenuButton.defaultProps = {
  isMenu: false,
}
