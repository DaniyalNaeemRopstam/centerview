import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function LocationIcon(props:SvgProps) {
  return (
    <Svg
      width={12}
      height={14}
      viewBox="0 0 12 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.429.155c-.55-.16-1.473-.2-2.043-.1-3.418.64-5.657 4.18-4.321 7.382 1.512 3.6 3.417 7.042 5.107 10.563 1.689-3.521 3.594-6.942 5.107-10.543 1.276-3.061-.688-6.402-3.85-7.302zM6.172 8.837c-1.65 0-2.986-1.38-2.986-3.08 0-1.701 1.336-3.062 2.986-3.062 1.65 0 2.985 1.38 2.985 3.081 0 1.7-1.335 3.061-2.985 3.061z"
        fill="#FF2417"
      />
    </Svg>
  )
}

export default LocationIcon
