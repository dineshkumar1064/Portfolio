import { motion } from 'framer-motion';

/**
 * Reveal
 * Fades + slides its children into view the first time they scroll into the
 * viewport. Wrap any section/element with this to animate it.
 *
 * Props:
 *  - as: element/component to render as the wrapping tag (default 'div')
 *  - delay: seconds before the animation starts (for staggering siblings)
 *  - y: pixels to slide up from (default 28)
 *  - duration: animation duration in seconds (default 0.6)
 *  - className: forwarded to the wrapper
 */
export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 28,
  duration = 0.6,
  className,
  ...rest
}) {
  const Wrapper = motion[as] || motion.div;

  return (
    <Wrapper
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Wrapper>
  );
}
