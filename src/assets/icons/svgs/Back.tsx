import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#0F1828"
      d="m8.288 12 6.01 6.01 1.414-1.414-4.6-4.6 4.6-4.6-1.414-1.406L8.288 12Z"
    />
  </Svg>
)
export default SvgComponent
