import PropTypes from "prop-types"
import clsx from "clsx"
import styles from "./styles.module.scss"

export const MaterialUi = ({ className, icon, color, ...rest }) => {
  return (
    <img
      {...rest}
      className={clsx([styles.icon, className])}
      src={`//s.svgbox.net/materialui.svg?fill=${color}#${icon}`} />
  )
}

MaterialUi.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string
}
