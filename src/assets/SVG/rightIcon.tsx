import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function RightIcon(props:SvgProps) {
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
        d="M8.475 10l-7.35-7.35a1.17 1.17 0 01-.362-.887A1.26 1.26 0 011.15.874C1.4.625 1.696.5 2.038.5c.341 0 .637.125.887.375l7.675 7.7c.2.2.35.425.45.675.1.25.15.5.15.75s-.05.5-.15.75c-.1.25-.25.475-.45.675l-7.7 7.7c-.25.25-.542.37-.875.363a1.246 1.246 0 01-.875-.388 1.213 1.213 0 01-.375-.888c0-.341.125-.637.375-.887L8.475 10z"
        fill="#212121"
      />
    </Svg>
  )
}

export default RightIcon
