import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function LeftIcon(props:SvgProps) {
  return (
    <Svg
      width={12}
      height={20}
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3.525 10l7.35 7.35c.25.25.37.546.363.887a1.259 1.259 0 01-.388.888c-.25.25-.546.375-.887.375-.342 0-.638-.125-.888-.375l-7.675-7.7c-.2-.2-.35-.425-.45-.675-.1-.25-.15-.5-.15-.75s.05-.5.15-.75c.1-.25.25-.475.45-.675l7.7-7.7c.25-.25.542-.37.875-.363.333.009.625.138.875.388s.375.546.375.888c0 .341-.125.637-.375.887L3.525 10z"
        fill="#212121"
      />
    </Svg>
  )
}

export default LeftIcon
