import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
    <Svg viewBox="0 0 32 32" {...props}>
        <Path
            fill={props.color}
            fillRule="evenodd"
            d="M26.667 0H5.333C2.388 0 0 2.371 0 5.297v16.89C0 25.111 2.055 27 5 27h6.639L16 32.001 20.361 27H27c2.945 0 5-1.889 5-4.813V5.297C32 2.371 29.612 0 26.667 0"
        />
    </Svg>
);

export default SvgComponent;