import React from 'react'
import { Box } from 'theme-ui'
import { keyframes } from '@emotion/core'

const fadeOut = keyframes({ from: { opacity: 1 }, to: { opacity: 0 } })

const FadeOut = ({ duration = 300, delay = 0, ...props }) => (
  <Box
    {...props}
    sx={{
      ...(props.sx || {}),
      '@media (prefers-reduced-motion: no-preference)': {
        animationName: fadeOut,
        animationFillMode: 'backwards',
        animationDuration: duration + 'ms',
        animationDelay: delay + 'ms'
      }
    }}
  />
)

export default FadeOut
