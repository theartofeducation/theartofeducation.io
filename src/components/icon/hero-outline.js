import PropTypes from "prop-types"
import clsx from "clsx"
import styles from "./styles.module.scss"

export const HeroOutline = ({ className, icon, color, ...rest }) => {
  return (
    <img
      {...rest}
      className={clsx([styles.icon, className])}
      src={`//s.svgbox.net/hero-outline.svg?fill=${color}#${icon}`} />
  )
}

HeroOutline.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string
}
