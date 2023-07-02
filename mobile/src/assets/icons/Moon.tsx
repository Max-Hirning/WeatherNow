import * as React from "react"
import Svg, { SvgProps, G, Path, Circle, Defs, RadialGradient, Stop, LinearGradient } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
    <Svg fill="none" {...props}>
        <G filter="url(#a)">
        <Path
            fill="url(#b)"
            clipRule="evenodd"
            fillRule="evenodd"
            d="M24.219 18.911c-4.831-.664-8.552-4.81-8.552-9.823a9.886 9.886 0 0 1 2.96-7.067C13.813 2.311 10 6.314 10 11.211c0 5.084 4.112 9.206 9.184 9.206a9.125 9.125 0 0 0 5.035-1.506Z"
        />
        </G>
        <Circle cx={25.583} cy={11.921} r={1.417} fill="#D8D8D8" opacity={0.2} />
        <Path
            fill="url(#c)"
            clipRule="evenodd"
            fillRule="evenodd"
            d="m24.167 6.25-1.666.876.318-1.855-1.347-1.313 1.862-.27L24.167 2l.832 1.687 1.862.27-1.347 1.314.318 1.855-1.665-.876Z"
        />
        <Defs>
            <RadialGradient
                id="b"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(0 21.5659 -16.699 0 17.525 6)"
            >
                <Stop stopColor="#fff" />
                <Stop offset={1} stopColor="#DEE5EE" />
            </RadialGradient>
            <LinearGradient
                id="c"
                x1={21.39}
                x2={21.39}
                y1={3.567}
                y2={9.121}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#fff" />
                <Stop offset={1} stopColor="#CECECE" />
            </LinearGradient>
        </Defs>
    </Svg>
)
export default SvgComponent
