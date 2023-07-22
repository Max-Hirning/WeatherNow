import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
    <Svg viewBox="0 -4 32 32" {...props}>
        <Path
            fill={props.color}
            fillRule="evenodd"
            d="M23.067 5.028C21.599 2.053 18.543 0 15 0c-4.749 0-8.63 3.682-8.967 8.345C2.542 9.34 0 12.39 0 16c0 4.26 3.54 7.755 8 8h15c4.966 0 9-4.253 9-9.5 0-5.056-3.951-9.177-8.933-9.472"
        />
    </Svg>
);

export default SvgComponent;