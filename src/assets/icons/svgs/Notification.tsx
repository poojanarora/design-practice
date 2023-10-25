import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <G fill="none" stroke="#fff" strokeWidth={1.5}>
      <Path
        strokeLinecap="round"
        d="M12.02 2.91a6 6 0 0 0-6 6v2.89a4.778 4.778 0 0 1-.57 2.06L4.3 15.77a1.919 1.919 0 0 0 1.08 2.93 20.921 20.921 0 0 0 13.27 0 2 2 0 0 0 1.08-2.93l-1.15-1.91a4.91 4.91 0 0 1-.56-2.06V8.91a6.018 6.018 0 0 0-6-6Z"
      />
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.87 3.2a6.054 6.054 0 0 0-.96-.2 6.754 6.754 0 0 0-2.74.2 1.988 1.988 0 0 1 3.7 0Z"
        data-name="Vector"
      />
      <Path
        d="M15.02 19.06a3.009 3.009 0 0 1-3 3 3.011 3.011 0 0 1-2.12-.88 3.011 3.011 0 0 1-.88-2.12"
        data-name="Vector"
      />
    </G>
  </Svg>
)
export default SvgComponent
