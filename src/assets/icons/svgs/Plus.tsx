import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fillRule="evenodd"
    {...props}
  >
    <Path d="M11 2v9H2v2h9v9h2v-9h9v-2h-9V2Z" />
  </Svg>
)
export default SvgComponent
