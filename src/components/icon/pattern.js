import PropTypes from "prop-types"
import clsx from "clsx"
import styles from "./styles.module.scss"

export const Pattern = ({
  children,
  className,
  pattern,
  color,
  bgColor,
  bgSize,
  ...rest
}) => {
  const inlineStyle = {
    backgroundImage: `url(//s.svgbox.net/heropatterns.svg?fill=${color}#${pattern})`,
    backgroundColor: bgColor,
    backgroundSize: bgSize
  }

  return (
    <div className={clsx([styles.icon, className])} style={inlineStyle} {...rest}>
      {children}
    </div>
  )
}

Pattern.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  color: PropTypes.string,
  bgColor: PropTypes.string.isRequired,
  bgSize: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.object
  ])
}
