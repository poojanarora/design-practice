import * as React from "react"
import Svg, {
  SvgProps,
  Circle,
  G,
  Path,
  Defs,
  ClipPath,
} from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    {...props}
  >
    <Circle cx={17} cy={17} r={17} fill="#FEFEFE" />
    <G fill="#000" clipPath="url(#a)">
      <Path d="M26.966 22.9a1.605 1.605 0 0 0-.71-1.033 1.607 1.607 0 0 0-1.235-.215l-1.98.453v-.81c.397-.373.81-.862 1.104-1.308a7.674 7.674 0 0 0 1.085-2.555 7.827 7.827 0 0 0 .015-3.323.371.371 0 1 0-.726.155c.211.985.207 2.024-.013 3.006a6.936 6.936 0 0 1-.98 2.308c-.139.21-.306.43-.485.64v-4.113a.371.371 0 0 0-.372-.371h-2.935v-3.963a.371.371 0 0 0-.37-.371l-3.307-.011a.37.37 0 0 0-.372.37v2.062H12.75a.371.371 0 0 0-.37.372v3.674h-.828v-.504a.371.371 0 0 0-.37-.37H10.8a7.015 7.015 0 0 1 .536-4.205.371.371 0 0 0-.673-.314 7.716 7.716 0 0 0-.617 4.518H8.371a.371.371 0 0 0-.371.371v6.523c0 .205.166.371.371.371h2.81a.371.371 0 0 0 .37-.37v-.354h1.396l5.655 2.218a4.472 4.472 0 0 0 2.746.172l4.432-1.126a1.614 1.614 0 0 0 1.186-1.897Zm-4.668-6.424v5.8l-.992.227a3.795 3.795 0 0 1-1.567.022l-.005-.001v-.563c.283-.422.377-.957.228-1.446a1.665 1.665 0 0 0-.227-.47h-.001v-3.569h2.564Zm-5.87-4.344 2.564.009v7.314l-1.433-.593-1.132-.469v-6.26Zm-3.308 2.432h2.565v3.522l-.46-.19a.372.372 0 0 0-.143-.029H13.12v-3.303Zm-2.311 8.951H8.742v-5.78H10.81v5.78Zm14.789.562-4.433 1.127a3.729 3.729 0 0 1-2.292-.144l-5.72-2.243a.372.372 0 0 0-.136-.026h-1.466V18.61h3.458l2.4.993 1.315.544a.928.928 0 0 1 .496 1.203.957.957 0 0 1-1.121.596l-.009-.002a.952.952 0 0 1-.064-.019l-2.496-.96-.031-.012a.371.371 0 1 0-.267.693 3318.156 3318.156 0 0 0 2.546.979l.825.317c.249.096.497.191.756.258a4.481 4.481 0 0 0 2.113.026l1.28-.293.004-.001 2.43-.556a.868.868 0 0 1 .669.116.873.873 0 0 1-.257 1.585ZM12.745 10.64a.37.37 0 0 0 .248-.095 7.055 7.055 0 0 1 2.287-1.38 7.07 7.07 0 0 1 2.866-.407 6.96 6.96 0 0 1 2.023.44.371.371 0 1 0 .264-.693 7.7 7.7 0 0 0-2.239-.487 7.816 7.816 0 0 0-3.168.45 7.801 7.801 0 0 0-2.53 1.526.371.371 0 0 0 .248.646Z" />
      <Path d="M21.17 13.288a.37.37 0 0 0 .523-.037l3.053-3.514a.371.371 0 1 0-.56-.487l-3.053 3.514a.37.37 0 0 0 .037.524Zm2.736-1.587a.933.933 0 0 0 0 1.864.933.933 0 0 0 0-1.864Zm0 1.121a.19.19 0 1 1 0-.379.19.19 0 0 1 0 .38Zm-2.061-1.947a.933.933 0 0 0 0-1.863.933.933 0 0 0 0 1.863Zm0-1.121a.19.19 0 0 1 0 .379.19.19 0 0 1 0-.38Zm-10.419 1.758c.06.142.206.236.36.228a.375.375 0 0 0 .336-.257.374.374 0 0 0-.127-.408.375.375 0 0 0-.432-.014.374.374 0 0 0-.137.45Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M8 8h19v19H8z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent