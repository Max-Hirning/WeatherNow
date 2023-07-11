import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg viewBox="0 -5 24 24" {...props}>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M23.688.28a1.008 1.008 0 0 0-1.42 0L11.984 11.57 1.702.28a1.008 1.008 0 0 0-1.42 0c-.392.4-.392 1.04 0 1.43l10.943 12.01c.209.21.486.3.759.28.274.02.551-.07.761-.28L23.688 1.71c.391-.39.391-1.03 0-1.43"
    />
  </Svg>
);

export default SvgComponent;