import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
    <Svg viewBox="0 0 25 25" {...props}>
        <Path
            fill={props.color}
            fillRule="evenodd"
            d="m18.148 12.48 5.665-5.66a4.002 4.002 0 0 0 0-5.66 3.996 3.996 0 0 0-5.665 0l-5.664 5.66L6.82 1.16a3.994 3.994 0 0 0-5.664 0 4.002 4.002 0 0 0 0 5.66l5.664 5.66-5.664 5.67a4.002 4.002 0 0 0 0 5.66 3.994 3.994 0 0 0 5.664 0l5.664-5.66 5.664 5.66a3.996 3.996 0 0 0 5.665 0 4.002 4.002 0 0 0 0-5.66l-5.665-5.67"
        />
    </Svg>
);

export default SvgComponent;