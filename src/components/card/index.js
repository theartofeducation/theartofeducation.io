import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import styles from "./styles.module.scss"

export const Card = ({ children, className }) => (
  <div className={ clsx([styles.card, className])}>
    {children}
  </div>
)

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.object
  ]),
  className: PropTypes.string
}
