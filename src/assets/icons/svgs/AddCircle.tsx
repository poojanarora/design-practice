import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={46.041}
    height={46.041}
    {...props}
  >
    <Path
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M23.02 43.483A20.462 20.462 0 1 0 2.558 23.02 20.523 20.523 0 0 0 23.02 43.483Z"
    />
    <Path
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M15.832 23.02h14.376M23.02 30.208V15.832"
      data-name="Vector"
    />
  </Svg>
)
export default SvgComponent
