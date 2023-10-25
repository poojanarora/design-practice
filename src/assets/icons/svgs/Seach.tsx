import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 256 256"
    {...props}>
    <Path
      fill="#787474"
      strokeMiterlimit={10}
      d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.947 9.947 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.947 9.947 0 0 0 23 13c0-5.511-4.489-10-10-10zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8z"
      fontFamily="none"
      fontSize="none"
      fontWeight="none"
      style={{
        mixBlendMode: 'normal',
      }}
      textAnchor="none"
      transform="scale(8.53333)"
    />
  </Svg>
);
export default SvgComponent;