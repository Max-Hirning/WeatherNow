import * as React from "react"
import Svg, { SvgProps, G, Circle, Ellipse, Rect, Path, Defs, LinearGradient, Stop, RadialGradient } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
    <Svg fill="none" {...props}>
        <G filter="url(#a)">
        <Circle cx={104} cy={55} r={21} fill="url(#b)" />
        </G>
        <Ellipse cx={103.814} cy={55.57} fill="url(#c)" rx={26.441} ry={26.4} />
        <Rect
            width={2.4}
            height={4.78}
            x={102.4}
            y={22}
            fill="url(#d)"
            rx={1.195}
        />
        <Path
            fill="url(#e)"
            fillRule="evenodd"
            d="M123.704 30.04a1.198 1.198 0 0 1 1.832 1.544l-1.545 1.833a1.197 1.197 0 0 1-1.832-1.543l1.545-1.834Z"
            clipRule="evenodd"
        />
        <Path
            fill="url(#f)"
            fillRule="evenodd"
            d="M135.601 48.925a1.195 1.195 0 0 1 .414 2.355l-2.373.416a1.195 1.195 0 0 1-.414-2.354l2.373-.417Z"
            clipRule="evenodd"
        />
        <Path
            fill="url(#g)"
            fillRule="evenodd"
            d="M132.519 71.004a1.196 1.196 0 0 1-1.193 2.074l-2.084-1.198a1.196 1.196 0 0 1 1.192-2.075l2.085 1.199Z"
            clipRule="evenodd"
        />
        <Path
            fill="url(#h)"
            fillRule="evenodd"
            d="M115.911 85.946a1.2 1.2 0 0 1-2.253.823l-.821-2.246a1.198 1.198 0 0 1 2.253-.824l.821 2.247Z"
            clipRule="evenodd"
        />
        <Path
            fill="url(#i)"
            fillRule="evenodd"
            d="M93.542 86.769a1.199 1.199 0 0 1-2.253-.823l.822-2.247a1.199 1.199 0 0 1 2.252.824l-.82 2.246Z"
            clipRule="evenodd"
        />
        <Path
            fill="url(#j)"
            fillRule="evenodd"
            d="M75.874 73.078a1.196 1.196 0 0 1-1.192-2.074l2.084-1.199a1.196 1.196 0 0 1 1.193 2.075l-2.085 1.198Z"
            clipRule="evenodd"
        />
        <Path
            fill="url(#k)"
            fillRule="evenodd"
            d="M71.186 51.28a1.195 1.195 0 0 1 .413-2.355l2.373.417a1.195 1.195 0 0 1-.413 2.354l-2.373-.416Z"
            clipRule="evenodd"
        />
        <Path
            fill="url(#l)"
            fillRule="evenodd"
            d="M81.664 31.584a1.197 1.197 0 0 1 1.832-1.544l1.545 1.834a1.197 1.197 0 0 1-1.832 1.543l-1.545-1.833Z"
            clipRule="evenodd"
        />
        <G filter="url(#m)">
        <Path
            fill="url(#n)"
            fillRule="evenodd"
            d="M117.034 117H62.119v-.04C41.462 116.038 25 99.134 25 78.416c0-21.31 17.415-38.585 38.898-38.585 17.22 0 31.825 11.098 36.945 26.476a27.867 27.867 0 0 1 16.191-5.153c15.445 0 27.966 12.502 27.966 27.923 0 15.082-11.975 27.37-26.949 27.905V117h-1.017Z"
            clipRule="evenodd"
        />
        </G>
        <G filter="url(#o)">
        <Path
            fill="url(#p)"
            fillRule="evenodd"
            d="M117.034 117H62.119v-.04C41.462 116.038 25 99.134 25 78.416c0-21.31 17.415-38.585 38.898-38.585 17.22 0 31.825 11.098 36.945 26.476a27.867 27.867 0 0 1 16.191-5.153c15.445 0 27.966 12.502 27.966 27.923 0 15.082-11.975 27.37-26.949 27.905V117h-1.017Z"
            clipRule="evenodd"
        />
        </G>
        <Ellipse cx={89} cy={138.5} fill="url(#q)" rx={6} ry={8.5} />
        <Ellipse cx={67} cy={128.5} fill="url(#r)" rx={5} ry={8.5} />
        <Ellipse cx={111} cy={128.5} fill="url(#s)" rx={5} ry={8.5} />
        <Defs>
        <LinearGradient
            id="c"
            x1={89.188}
            x2={89.188}
            y1={31.298}
            y2={60.505}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#FFC100" />
            <Stop offset={1} stopColor="#FF8E00" />
        </LinearGradient>
        <LinearGradient
            id="d"
            x1={102.936}
            x2={102.936}
            y1={22.193}
            y2={24.837}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#FFC100" />
            <Stop offset={1} stopColor="#FF8E00" />
        </LinearGradient>
        <LinearGradient
            id="e"
            x1={124.754}
            x2={123.05}
            y1={29.613}
            y2={31.644}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#FFC100" />
            <Stop offset={1} stopColor="#FF8E00" />
        </LinearGradient>
        <LinearGradient
            id="f"
            x1={136.68}
            x2={134.065}
            y1={49.276}
            y2={49.737}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#FFC100" />
            <Stop offset={1} stopColor="#FF8E00" />
        </LinearGradient>
        <LinearGradient
            id="g"
            x1={133.123}
            x2={130.824}
            y1={71.97}
            y2={70.642}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#FFC100" />
            <Stop offset={1} stopColor="#FF8E00" />
        </LinearGradient>
        <LinearGradient
            id="h"
            x1={115.751}
            x2={114.846}
            y1={87.074}
            y2={84.586}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#FFC100" />
            <Stop offset={1} stopColor="#FF8E00" />
        </LinearGradient>
        <LinearGradient
            id="i"
            x1={92.699}
            x2={93.605}
            y1={87.529}
            y2={85.041}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#FFC100" />
            <Stop offset={1} stopColor="#FF8E00" />
        </LinearGradient>
        <LinearGradient
            id="j"
            x1={74.742}
            x2={77.041}
            y1={73.12}
            y2={71.793}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#FFC100" />
            <Stop offset={1} stopColor="#FF8E00" />
        </LinearGradient>
        <LinearGradient
            id="k"
            x1={70.29}
            x2={72.906}
            y1={50.58}
            y2={51.041}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#FFC100" />
            <Stop offset={1} stopColor="#FF8E00" />
        </LinearGradient>
        <LinearGradient
            id="l"
            x1={81.427}
            x2={83.131}
            y1={30.468}
            y2={32.5}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#FFC100" />
            <Stop offset={1} stopColor="#FF8E00" />
        </LinearGradient>
        <LinearGradient
            id="q"
            x1={86.387}
            x2={86.387}
            y1={135.007}
            y2={142.41}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#fff" />
            <Stop offset={1} stopColor="#fff" />
        </LinearGradient>
        <LinearGradient
            id="r"
            x1={64.823}
            x2={64.823}
            y1={125.007}
            y2={132.41}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#fff" />
            <Stop offset={1} stopColor="#fff" />
        </LinearGradient>
        <LinearGradient
            id="s"
            x1={108.823}
            x2={108.823}
            y1={125.007}
            y2={132.41}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#fff" />
            <Stop offset={1} stopColor="#fff" />
        </LinearGradient>
        <RadialGradient
            id="b"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="rotate(112.114 44.939 54.948) scale(31.895 56.1684)"
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
            gradientTransform="matrix(0 90.4901 -140.715 0 88.41 56.505)"
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
            gradientTransform="matrix(0 90.4901 -140.715 0 88.41 56.505)"
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#fff" stopOpacity={0.103} />
            <Stop offset={1} stopColor="#DEE5EE" />
        </RadialGradient>
        </Defs>
    </Svg>
)
export default SvgComponent
