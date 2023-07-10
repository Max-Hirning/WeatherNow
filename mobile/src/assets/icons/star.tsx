import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
    <Svg viewBox="0 0 32 32" {...props}>
        <Path
            fill={props.color}
            fillRule="evenodd"
            d="M32 12.244 20.962 10.56 16 0l-4.962 10.56L0 12.244l7.985 8.176L6.095 32 16 26.53 25.905 32l-1.89-11.58L32 12.244"
        />
    </Svg>
);

export default SvgComponent;