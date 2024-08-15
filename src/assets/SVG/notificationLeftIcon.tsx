import * as React from 'react';
import Svg, {SvgProps, Rect, G, Path, Defs, ClipPath} from 'react-native-svg';
const NotificationLeftIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}>
    <Rect width={40} height={40} fill="#0890FE" rx={10} />
    <G fill="#fff" clipPath="url(#a)">
      <Path d="M19.074 21.667a1 1 0 0 1-.663-.244.79.79 0 0 1-.274-.59v-9.166c0-.442.197-.866.549-1.179A2.001 2.001 0 0 1 20.012 10h9.378c.498 0 .975.176 1.327.488.351.313.549.737.549 1.179V17.5c0 .442-.198.866-.55 1.178a2.001 2.001 0 0 1-1.326.489h-6.252l-3.5 2.333c-.163.108-.36.167-.564.167Z" />
      <Path d="M23.764 20.833v5.834a.79.79 0 0 1-.275.589 1 1 0 0 1-.663.244h-9.379a1 1 0 0 1-.663-.244.79.79 0 0 1-.274-.59V15a.79.79 0 0 1 .274-.59 1 1 0 0 1 .663-.243h2.814v-2.5h-2.813c-.747 0-1.462.263-1.99.732-.527.469-.824 1.105-.824 1.768V27.5c0 .663.296 1.299.824 1.768a3.002 3.002 0 0 0 1.99.732h9.378c.746 0 1.462-.263 1.99-.732.527-.47.823-1.105.823-1.768v-6.667h-1.875Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M8.758 10h22.508v20H8.758z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default NotificationLeftIcon;
