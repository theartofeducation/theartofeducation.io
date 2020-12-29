import PropTypes from "prop-types"
import clsx from "clsx"
import styles from "./styles.module.scss"

export const HeroSolid = ({ className, icon, color, ...rest }) => {
  return (
    <img
      {...rest}
      className={clsx([styles.icon, className])}
      src={`//s.svgbox.net/hero-solid.svg?fill=${color}#${icon}`} />
  )
}

HeroSolid.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string
}
