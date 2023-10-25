import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Path
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.62 20.81a2.181 2.181 0 0 1-1.24 0C8.48 19.82 2 15.69 2 8.69A5.574 5.574 0 0 1 7.56 3.1 5.515 5.515 0 0 1 12 5.34a5.547 5.547 0 0 1 10 3.35c0 7-6.48 11.13-9.38 12.12Z"
    />
  </Svg>
)
export default SvgComponent
