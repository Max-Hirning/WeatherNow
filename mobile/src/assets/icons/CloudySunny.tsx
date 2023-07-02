import * as React from "react"
import Svg, { SvgProps, G, Circle, Ellipse, Rect, Path, Defs, LinearGradient, Stop, RadialGradient } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
    <Svg fill="none" {...props}>
        <G filter="url(#a)">
            <Circle cx={41.333} cy={24} r={7} fill="url(#b)" />
        </G>
        <Ellipse cx={41.271} cy={24.19} fill="url(#c)" rx={8.814} ry={8.8} />
        <Rect width={0.8} height={1.593} x={40.8} y={13} fill="url(#d)" rx={0.4} />
        <Path
            fill="url(#e)"
            clipRule="evenodd"
            fillRule="evenodd"
            d="M47.9 15.68a.4.4 0 1 1 .611.515l-.513.61a.4.4 0 0 1-.611-.514l.514-.61Z"
        />
        <Path
            fill="url(#f)"
            clipRule="evenodd"
            fillRule="evenodd"
            d="M51.867 21.975a.398.398 0 0 1 .138.785l-.791.139a.398.398 0 1 1-.138-.785l.791-.139Z"
        />
        <Path
            fill="url(#g)"
            clipRule="evenodd"
            fillRule="evenodd"
            d="M50.84 29.334a.399.399 0 1 1-.398.692l-.695-.4a.399.399 0 0 1 .398-.69l.694.398Z"
        />
        <Path
            fill="url(#h)"
            clipRule="evenodd"
            fillRule="evenodd"
            d="M45.303 34.314a.4.4 0 0 1-.751.274l-.273-.746a.4.4 0 0 1 .751-.274l.273.746Z"
        />
        <Path
            fill="url(#i)"
            clipRule="evenodd"
            fillRule="evenodd"
            d="M37.848 34.588a.4.4 0 0 1-.751-.274l.273-.746a.4.4 0 1 1 .75.274l-.272.746Z"
        />
        <Path
            fill="url(#j)"
            clipRule="evenodd"
            fillRule="evenodd"
            d="M31.958 30.026a.399.399 0 1 1-.397-.692l.694-.399a.399.399 0 1 1 .398.692l-.695.399Z"
        />
        <Path
            fill="url(#k)"
            clipRule="evenodd"
            fillRule="evenodd"
            d="M30.395 22.76a.398.398 0 0 1 .138-.785l.79.139a.398.398 0 0 1-.137.785l-.79-.14Z"
        />
        <Path
            fill="url(#l)"
            clipRule="evenodd"
            fillRule="evenodd"
            d="M33.889 16.195a.4.4 0 0 1 .61-.514l.514.61a.4.4 0 0 1-.61.514l-.514-.61Z"
        />
        <G filter="url(#m)">
            <Path
                fill="url(#n)"
                clipRule="evenodd"
                fillRule="evenodd"
                d="M45.678 44.667H27.373v-.014C20.487 44.346 15 38.712 15 31.806c0-7.103 5.805-12.861 12.966-12.861 5.74 0 10.608 3.7 12.315 8.825a9.29 9.29 0 0 1 5.397-1.718c5.148 0 9.322 4.168 9.322 9.308 0 5.027-3.992 9.123-8.983 9.302v.006h-.339Z"
            />
        </G>
        <G filter="url(#o)">
        <Path
            fill="url(#p)"
            clipRule="evenodd"
            fillRule="evenodd"
            d="M45.678 44.667H27.373v-.014C20.487 44.346 15 38.712 15 31.806c0-7.103 5.805-12.861 12.966-12.861 5.74 0 10.608 3.7 12.315 8.825a9.29 9.29 0 0 1 5.397-1.718c5.148 0 9.322 4.168 9.322 9.308 0 5.027-3.992 9.123-8.983 9.302v.006h-.339Z"
        />
        </G>
        <Defs>
        <LinearGradient
            id="c"
            x1={36.396}
            x2={36.396}
            y1={16.099}
            y2={25.835}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#FFC100" />
            <Stop offset={1} stopColor="#FF8E00" />
        </LinearGradient>
        <LinearGradient
            id="d"
            x1={40.979}
            x2={40.979}
            y1={13.064}
            y2={13.946}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#FFC100" />
            <Stop offset={1} stopColor="#FF8E00" />
        </LinearGradient>
        <LinearGradient
            id="e"
            x1={48.251}
            x2={47.683}
            y1={15.538}
            y2={16.215}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#FFC100" />
            <Stop offset={1} stopColor="#FF8E00" />
        </LinearGradient>
        <LinearGradient
            id="f"
            x1={52.227}
            x2={51.355}
            y1={22.092}
            y2={22.246}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#FFC100" />
            <Stop offset={1} stopColor="#FF8E00" />
        </LinearGradient>
        <LinearGradient
            id="g"
            x1={51.041}
            x2={50.274}
            y1={29.657}
            y2={29.214}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#FFC100" />
            <Stop offset={1} stopColor="#FF8E00" />
        </LinearGradient>
        <LinearGradient
            id="h"
            x1={45.25}
            x2={44.949}
            y1={34.691}
            y2={33.862}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#FFC100" />
            <Stop offset={1} stopColor="#FF8E00" />
        </LinearGradient>
        <LinearGradient
            id="i"
            x1={37.566}
            x2={37.868}
            y1={34.843}
            y2={34.014}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#FFC100" />
            <Stop offset={1} stopColor="#FF8E00" />
        </LinearGradient>
        <LinearGradient
            id="j"
            x1={31.58}
            x2={32.347}
            y1={30.04}
            y2={29.598}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#FFC100" />
            <Stop offset={1} stopColor="#FF8E00" />
        </LinearGradient>
        <LinearGradient
            id="k"
            x1={30.097}
            x2={30.968}
            y1={22.526}
            y2={22.68}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#FFC100" />
            <Stop offset={1} stopColor="#FF8E00" />
        </LinearGradient>
        <LinearGradient
            id="l"
            x1={33.809}
            x2={34.377}
            y1={15.823}
            y2={16.5}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#FFC100" />
            <Stop offset={1} stopColor="#FF8E00" />
        </LinearGradient>
        <RadialGradient
            id="b"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="rotate(112.114 16.406 23.393) scale(10.6317 18.7228)"
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#FFC100" />
            <Stop offset={1} stopColor="#FF3100" />
        </RadialGradient>
        <RadialGradient
            id="n"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(0 30.1634 -46.9051 0 36.137 24.502)"
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#fff" />
            <Stop offset={1} stopColor="#DEE5EE" />
        </RadialGradient>
        <RadialGradient
            id="p"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(0 30.1634 -46.9051 0 36.137 24.502)"
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#fff" stopOpacity={0.103} />
            <Stop offset={1} stopColor="#DEE5EE" />
        </RadialGradient>
        </Defs>
    </Svg>
)
export default SvgComponent
