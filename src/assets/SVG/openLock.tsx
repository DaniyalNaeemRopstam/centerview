import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const OpenLock = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#9DA6AB"
      d="M5.055 3.246a.75.75 0 1 0-1.11 1.008L5.749 6.24C2.344 8.33.879 11.55.815 11.696a.75.75 0 0 0 0 .61c.032.074.827 1.834 2.592 3.6C5.759 18.256 8.73 19.5 12 19.5c1.68.01 3.344-.336 4.882-1.015l2.062 2.27a.75.75 0 1 0 1.11-1.01L5.055 3.246Zm4.437 7.11 3.907 4.298a3 3 0 0 1-3.907-4.298ZM12 18c-2.886 0-5.407-1.05-7.493-3.117A12.484 12.484 0 0 1 2.344 12c.44-.824 1.843-3.13 4.439-4.63L8.47 9.223a4.5 4.5 0 0 0 5.968 6.563l1.381 1.518A10.501 10.501 0 0 1 12 18Zm.563-8.947a.75.75 0 0 1 .28-1.473 4.515 4.515 0 0 1 3.635 3.997.75.75 0 0 1-.676.817.636.636 0 0 1-.07 0 .75.75 0 0 1-.75-.68 3.008 3.008 0 0 0-2.42-2.66Zm10.62 3.253c-.04.088-.99 2.19-3.128 4.106a.752.752 0 0 1-1.068-.05.75.75 0 0 1 .068-1.068A12.448 12.448 0 0 0 21.66 12a12.482 12.482 0 0 0-2.168-2.885C17.407 7.05 14.886 6 12 6c-.608 0-1.215.048-1.815.147a.75.75 0 1 1-.248-1.48A12.562 12.562 0 0 1 12 4.5c3.27 0 6.24 1.243 8.593 3.595 1.765 1.766 2.56 3.527 2.592 3.601a.75.75 0 0 1 0 .61h-.002Z"
    />
  </Svg>
);
export default OpenLock;