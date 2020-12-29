import PropTypes from "prop-types"
import clsx from "clsx"
import styles from "./styles.module.scss"

export const Social = ({ className, icon, color, ...rest }) => {
  return (
    <img
      {...rest}
      className={clsx([styles.icon, className])}
      src={`//s.svgbox.net/social.svg?fill=${color}#${icon}`} />
  )
}

Social.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string
}
