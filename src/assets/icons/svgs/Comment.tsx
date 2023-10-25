import * as React from "react"
import Svg, { SvgProps, G, Path, Circle } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={19}
    data-name="Group 48"
    {...props}
  >
    <G fill="none" stroke="#fff" strokeWidth={1.5} data-name="Rectangle 20">
      <Path
        stroke="none"
        d="M9.5 0A9.5 9.5 0 0 1 19 9.5 9.5 9.5 0 0 1 9.5 19H3.167A3.167 3.167 0 0 1 0 15.833V9.5A9.5 9.5 0 0 1 9.5 0Z"
      />
      <Path d="M9.5.75a8.75 8.75 0 0 1 8.75 8.75 8.75 8.75 0 0 1-8.75 8.75H3.278A2.528 2.528 0 0 1 .75 15.722V9.5A8.75 8.75 0 0 1 9.5.75Z" />
    </G>
    <G fill="#fff" data-name="Group 47" transform="translate(4.971 9.034)">
      <Circle cx={0.968} cy={0.968} r={0.968} data-name="Ellipse 2" />
      <Circle
        cx={0.968}
        cy={0.968}
        r={0.968}
        data-name="Ellipse 3"
        transform="translate(3.436)"
      />
      <Circle
        cx={0.968}
        cy={0.968}
        r={0.968}
        data-name="Ellipse 4"
        transform="translate(6.776)"
      />
    </G>
  </Svg>
)
export default SvgComponent
