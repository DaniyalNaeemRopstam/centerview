import * as React from 'react';
import Svg, {SvgProps, Mask, Path, G} from 'react-native-svg';
const ArrowBack = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}>
    <Mask
      id="a"
      width={25}
      height={25}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}>
      <Path fill="#D9D9D9" d="M.851.127h24v24h-24z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#1C1B1F"
        d="m8.676 13.127 4.9 4.9c.2.2.296.433.287.7-.008.267-.112.5-.312.7-.2.183-.433.279-.7.287a.916.916 0 0 1-.7-.287l-6.6-6.6a.878.878 0 0 1-.213-.325 1.107 1.107 0 0 1-.062-.375c0-.134.02-.259.062-.375a.877.877 0 0 1 .213-.325l6.6-6.6a.933.933 0 0 1 .688-.275c.274 0 .512.092.712.275.2.2.3.437.3.712 0 .275-.1.513-.3.713l-4.875 4.875h11.175c.283 0 .52.096.713.287.191.192.287.43.287.713s-.096.52-.287.712a.968.968 0 0 1-.713.288H8.676Z"
      />
    </G>
  </Svg>
);
export default ArrowBack;
