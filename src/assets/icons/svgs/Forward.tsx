import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={13}
    fill="none"
    {...props}
  >
    <Path
      fill="#0F1828"
      d="m7.712 6.01-6.01 6.01-1.414-1.414 4.6-4.6-4.6-4.6L1.702 0l6.01 6.01Z"
    />
  </Svg>
)
export default SvgComponent
