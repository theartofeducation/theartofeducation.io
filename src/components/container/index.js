import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import styles from "./styles.module.scss"

export const Container = ({
  children,
  className
}) => (
  <div className={ clsx([styles.container, className])}>
    {children}
  </div>
)

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.object
  ]),
  className: PropTypes.string
}
