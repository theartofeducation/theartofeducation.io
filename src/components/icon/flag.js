import PropTypes from "prop-types"
import clsx from "clsx"
import styles from "./styles.module.scss"

export const Flag = ({ className, flag, quality, ...rest }) => {
  const definition = quality === "high" ? "hd" : "ld"

  return (
    <img
      {...rest}
      className={clsx([styles.icon, className])}
      src={`//s.svgbox.net/flags-${definition}.svg?#${flag}`} />
  )
}

Flag.propTypes = {
  className: PropTypes.string,
  flag: PropTypes.string.isRequired,
  quality: PropTypes.oneOf(["high", "low"])
}

Flag.defaultProps = {
  quality: "high"
}
