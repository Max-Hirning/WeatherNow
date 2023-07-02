import * as React from "react"
import Svg, { SvgProps, Path, Ellipse, Defs, LinearGradient, Stop } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
    <Svg fill="none" {...props}>
        <Path
            fill="url(#a)"
            fillRule="evenodd"
            d="M19.283 2.828a.28.28 0 0 1 .398-.035l.23.196a.28.28 0 0 1 .034.392l-.744.9a.28.28 0 0 1-.398.035l-.23-.195a.28.28 0 0 1-.034-.393l.744-.9Z"
            clipRule="evenodd"
        />
        <Path
            fill="url(#b)"
            fillRule="evenodd"
            d="M12.13.283a.28.28 0 0 1 .283-.282l.3.002a.28.28 0 0 1 .278.279l.006 1.172a.28.28 0 0 1-.282.282l-.3-.001a.28.28 0 0 1-.279-.28L12.131.283Z"
            clipRule="evenodd"
        />
        <Path
            fill="url(#c)"
            fillRule="evenodd"
            d="M23.582 9.79a.28.28 0 0 1 .325.228l.053.304a.28.28 0 0 1-.227.324l-1.136.203a.28.28 0 0 1-.326-.228l-.052-.304a.28.28 0 0 1 .227-.324l1.136-.203Z"
            clipRule="evenodd"
        />
        <Path
            fill="url(#d)"
            fillRule="evenodd"
            d="M22.471 17.93a.28.28 0 0 1 .102.381l-.151.266a.28.28 0 0 1-.386.104l-1-.587a.28.28 0 0 1-.102-.38l.151-.266a.28.28 0 0 1 .386-.104l1 .587Z"
            clipRule="evenodd"
        />
        <Path
            fill="url(#e)"
            fillRule="evenodd"
            d="M16.46 23.44a.28.28 0 0 1-.166.359l-.28.103a.28.28 0 0 1-.36-.169l-.398-1.107a.28.28 0 0 1 .167-.358l.28-.103a.28.28 0 0 1 .36.169l.398 1.107Z"
            clipRule="evenodd"
        />
        <Path
            fill="url(#f)"
            fillRule="evenodd"
            d="M8.369 23.733a.28.28 0 0 1-.362.169l-.279-.103a.28.28 0 0 1-.167-.358l.397-1.107a.28.28 0 0 1 .361-.169l.28.104a.28.28 0 0 1 .166.357l-.396 1.107Z"
            clipRule="evenodd"
        />
        <Path
            fill="url(#g)"
            fillRule="evenodd"
            d="M1.986 18.68a.28.28 0 0 1-.386-.103l-.151-.266a.28.28 0 0 1 .102-.38l1-.587a.28.28 0 0 1 .386.104l.151.266a.28.28 0 0 1-.102.38l-1 .587Z"
            clipRule="evenodd"
        />
        <Path
            fill="url(#h)"
            fillRule="evenodd"
            d="M.289 10.646a.28.28 0 0 1-.227-.324l.052-.304A.28.28 0 0 1 .44 9.79l1.136.203a.28.28 0 0 1 .227.324l-.053.304a.28.28 0 0 1-.325.228l-1.136-.203Z"
            clipRule="evenodd"
        />
        <Path
            fill="url(#i)"
            fillRule="evenodd"
            d="M4.077 3.38a.28.28 0 0 1 .034-.391l.23-.196a.28.28 0 0 1 .397.035l.745.9a.28.28 0 0 1-.034.393l-.23.195a.28.28 0 0 1-.398-.035l-.744-.9Z"
            clipRule="evenodd"
        />
        <Ellipse cx={12.011} cy={11.949} fill="url(#j)" rx={8.014} ry={8.058} />
        <Defs>
        <LinearGradient
            id="a"
            x1={19.543}
            x2={18.926}
            y1={2.766}
            y2={3.501}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#FFC100" />
            <Stop offset={1} stopColor="#FF8E00" />
        </LinearGradient>
        <LinearGradient
            id="b"
            x1={12.194}
            x2={12.194}
            y1={0.07}
            y2={1.031}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#FFC100" />
            <Stop offset={1} stopColor="#FF8E00" />
        </LinearGradient>
        <LinearGradient
            id="c"
            x1={23.819}
            x2={22.883}
            y1={9.91}
            y2={10.075}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#FFC100" />
            <Stop offset={1} stopColor="#FF8E00" />
        </LinearGradient>
        <LinearGradient
            id="d"
            x1={22.579}
            x2={21.752}
            y1={18.17}
            y2={17.692}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#FFC100" />
            <Stop offset={1} stopColor="#FF8E00" />
        </LinearGradient>
        <LinearGradient
            id="e"
            x1={16.392}
            x2={16.063}
            y1={23.691}
            y2={22.786}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#FFC100" />
            <Stop offset={1} stopColor="#FF8E00" />
        </LinearGradient>
        <LinearGradient
            id="f"
            x1={8.15}
            x2={8.479}
            y1={23.88}
            y2={22.975}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#FFC100" />
            <Stop offset={1} stopColor="#FF8E00" />
        </LinearGradient>
        <LinearGradient
            id="g"
            x1={1.72}
            x2={2.547}
            y1={18.649}
            y2={18.171}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#FFC100" />
            <Stop offset={1} stopColor="#FF8E00" />
        </LinearGradient>
        <LinearGradient
            id="h"
            x1={0.107}
            x2={1.042}
            y1={10.455}
            y2={10.62}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#FFC100" />
            <Stop offset={1} stopColor="#FF8E00" />
        </LinearGradient>
        <LinearGradient
            id="i"
            x1={4.055}
            x2={4.672}
            y1={3.121}
            y2={3.857}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#FFC100" />
            <Stop offset={1} stopColor="#FF8E00" />
        </LinearGradient>
        <LinearGradient
            id="j"
            x1={7.578}
            x2={7.578}
            y1={4.54}
            y2={13.455}
            gradientUnits="userSpaceOnUse"
        >
            <Stop stopColor="#FFC100" />
            <Stop offset={1} stopColor="#FF8E00" />
        </LinearGradient>
        </Defs>
    </Svg>
)
export default SvgComponent
