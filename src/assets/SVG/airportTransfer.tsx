import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function AirportTransferIcon(props:SvgProps) {
  return (
    <Svg
      width={18}
      height={20}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.495 0A4.495 4.495 0 000 4.495v11.878h.005a2.729 2.729 0 002.724 2.89h6.596a5.485 5.485 0 01-1.114-1.285H2.729a1.445 1.445 0 110-2.889h4.655a5.458 5.458 0 018.026-4.817V2.568A2.568 2.568 0 0012.842 0H4.495zM2.729 13.805c-.53 0-1.026.151-1.445.413V4.495c0-1.317.793-2.448 1.926-2.944v12.254H2.73z"
        fill={props.color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.633 11.236c-.615 0-1.163.393-1.36.978l-.258.772a.642.642 0 00-.545 1.107c-.308.307-.5.73-.5 1.2v1.576a1.434 1.434 0 002.772.51h3.124a1.434 1.434 0 002.773-.51v-1.576c0-.476-.197-.905-.513-1.212a.642.642 0 00-.533-1.099l-.258-.768a1.433 1.433 0 00-1.36-.978h-3.342zm-.141 1.385l-.328.98h4.281l-.327-.98a.149.149 0 00-.142-.1h-3.343a.149.149 0 00-.141.1z"
        fill={props.color}
      />
    </Svg>
  )
}

export default AirportTransferIcon
