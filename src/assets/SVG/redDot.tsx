import * as React from "react"
import Svg, { Rect, SvgProps } from "react-native-svg"

function RedDot(props:SvgProps) {
  return (
    <Svg
      width={6}
      height={6}
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={6} height={6} rx={3} fill="#FF2417" />
    </Svg>
  )
}

export default RedDot
