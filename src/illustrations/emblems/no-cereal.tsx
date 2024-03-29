import * as React from "react";

function SvgComponent({
  color = "#000",
  ...props
}: React.SVGProps<SVGSVGElement & { color?: string }>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 221 221" {...props}>
      <defs>
        <style>
          {`.prefix__cls-1,.prefix__cls-2{fill:none;stroke:${color};stroke-linecap:round;stroke-width:5px}.prefix__cls-1{stroke-linejoin:round}.prefix__cls-2{stroke-miterlimit:10}`}
        </style>
      </defs>
      <g id="prefix__Layer_1" data-name="Layer 1">
        <path
          className="prefix__cls-1"
          d="M109.19 85.76V4.14M77.34 113.83l-2.21-1.94v3.89M88.42 141.64L109.19 160v-12.53a12.28 12.28 0 00-4.16-9.21l-6.38-5.63M99 132.45l10.15 9v-12.53a12.25 12.25 0 00-1-4.73M87.86 104.57L75.13 93.34v12.48a12.29 12.29 0 002.65 7.62M98.39 95.3L75.13 74.79v12.48a12.3 12.3 0 004.16 9.22l8.87 7.82M108.1 86.77a12.37 12.37 0 00-3.1-4.16L75.13 56.24v12.48a12.3 12.3 0 004.16 9.22L98.68 95M75.13 37.69v12.49a12.3 12.3 0 004.16 9.21l29.9 26.37V73.28a12.32 12.32 0 00-4.19-9.22z"
        />
        <path
          className="prefix__cls-1"
          d="M143.24 111.88v12.49a12.26 12.26 0 01-4.16 9.21L109.19 160v-12.53a12.25 12.25 0 014.16-9.21zM143.24 93.34v12.48a12.28 12.28 0 01-4.16 9.22l-29.89 26.37v-12.49a12.26 12.26 0 014.16-9.21zM75.13 153.34v9.47a12.3 12.3 0 004.16 9.19l29.9 26.37v-12.46a12.32 12.32 0 00-4.16-9.22l-28.19-24.86M77.39 151.35a11.92 11.92 0 001.9 2.12l29.9 26.38v-12.49a12.3 12.3 0 00-4.16-9.21l-17.66-15.58"
        />
        <path
          className="prefix__cls-1"
          d="M143.24 150.32v12.49a12.26 12.26 0 01-4.16 9.21l-29.89 26.37v-12.48a12.28 12.28 0 014.16-9.22zM143.24 131.78v12.48a12.26 12.26 0 01-4.16 9.21l-29.89 26.38v-12.49a12.26 12.26 0 014.16-9.21zM143.24 37.69v12.49a12.26 12.26 0 01-4.16 9.21l-29.89 26.37V73.28a12.28 12.28 0 014.16-9.22zM75.13 115.78V10.36M143.24 55.81V9.34M143.24 164.84v-71.5M126.21 52.71V5.25M92.16 52.71V5.25M77.34 113.83l100.08-88.1M75.13 115.78l2.21-1.95M17.92 166.15l57.21-50.37M98.94 132.37l98.16-86.41M98.66 132.63l.28-.26M88.42 141.64l10.24-9.01M35.82 187.95l52.6-46.31"
        />
        <path
          className="prefix__cls-2"
          d="M177.42 25.72a108 108 0 00-159.5 140.43M35.52 188.23A108 108 0 00197.1 46"
        />
        <path className="prefix__cls-1" d="M109.19 123.36v95.11" />
      </g>
    </svg>
  );
}

export default SvgComponent;
