import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Notification = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={26}
    fill="none"
    {...props}>
    <Path
      fill="#0078C1"
      fillRule="evenodd"
      d="M19.388 9.859a6.284 6.284 0 0 0 1.465 2.933 4.57 4.57 0 0 1 .772 2.3v.256a4.572 4.572 0 0 1-1.119 3.022 5.605 5.605 0 0 1-3.522 1.745 47.153 47.153 0 0 1-12 0 5.605 5.605 0 0 1-3.567-1.745 4.504 4.504 0 0 1-1.04-3.022v-.256a4.68 4.68 0 0 1 .75-2.3A6.408 6.408 0 0 0 2.613 9.86c.033-.422.033-.847.033-1.272 0-.425 0-.85.034-1.273C3.106 3.26 7.02.46 10.934.46h.112c3.869 0 7.861 2.8 8.275 6.855.034.417.034.842.034 1.268 0 .427 0 .855.033 1.277Zm-6.933 11.956c.621.018 1.232.17 1.789.444h.034c.465.38.544 1.058.178 1.534a3.852 3.852 0 0 1-2.896 1.633 4.607 4.607 0 0 1-3.355-.922 2.031 2.031 0 0 1-.872-1.456c0-.622.581-.91 1.118-1.033.629-.133 1.27-.2 1.913-.2h2.09Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Notification;
