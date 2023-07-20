import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
		<title>{"comment-3"}</title>
		<path
			fill={props.color}
			fillRule="evenodd"
			d="M24 12a2 2 0 1 0 .001 4.001A2 2 0 0 0 24 12Zm-8 14c-1.168 0-2.296-.136-3.38-.367l-4.708 2.83.063-4.639C4.366 21.654 2 18.066 2 14 2 7.373 8.268 2 16 2s14 5.373 14 12c0 6.628-6.268 12-14 12Zm0-26C7.164 0 0 6.269 0 14c0 4.419 2.345 8.354 6 10.919V32l7.009-4.253c.97.16 1.968.253 2.991.253 8.836 0 16-6.268 16-14 0-7.731-7.164-14-16-14ZM8 12a2 2 0 1 0 .001 4.001A2 2 0 0 0 8 12Zm8 0a2 2 0 1 0 .001 4.001A2 2 0 0 0 16 12Z"
		/>
	</svg>
);

export default SvgComponent;