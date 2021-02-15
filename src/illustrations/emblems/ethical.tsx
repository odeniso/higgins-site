import * as React from "react";

function SvgComponent({
  color = "#000",
  ...props
}: React.SVGProps<SVGSVGElement & { color?: string }>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 221 221" {...props}>
      <defs>
        <style>
          {`.prefix__cls-1{fill:none;stroke:${color};stroke-linecap:round;stroke-width:5px;stroke-miterlimit:10}`}
        </style>
      </defs>
      <g id="prefix__Layer_1" data-name="Layer 1">
        <path
          className="prefix__cls-1"
          d="M154.47 106.6s17.34 10.51 32.23-1.76c0 0-7-22.42-29.61-12.43-7.18 3.67-11.91-.36-14.54-12.62M217.62 91c-21.12 1.06-36.7 2-36.7 2"
        />
        <path
          d="M114.52 78.22s2.63 15.41 15.07 15.94c0 0-9.46 1.57-10 20a42.42 42.42 0 01-11.91 28.73s2.28 16.82 15.59 13 30-13.14 34-5.43 5.95 10.51 7.53 20.5c1.18 7.44 9.36 17.71 24.2 15.41"
          strokeLinejoin="round"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeWidth={5}
        />
        <path
          className="prefix__cls-1"
          d="M46.56 101.4s-2.06 18.48-20.46 23.52a170.89 170.89 0 01-20.23 4.35M41.25 166.08s-6.36 7.28-4.24 22.73M43.37 182.71s21.13-7.27 20.22-23 0-28.4 2-37.26M53.36 177.44s11 17.12 10 29.85M71.62 71.14s10.19 8 11.48 13.1 5.64 8.57 9.9 11.15 5.87 11.51-2.47 12.45-20.66-4.23-26.3-5.28"
        />
        <path
          className="prefix__cls-1"
          d="M53.88 72.39s-3.4 1-5.23-8S41.2 46.51 37 45.6s-7.84 9.8-6.8 15.68 10.2 13.85 15 18.17 2.21 16.23 1.31 22M70.64 71.14S94.79 56.44 99 52s8.55 2.78 3 12.94c-3.74 6.84-2.5 10-12.58 12.28M63.4 207.29A102.26 102.26 0 0137 188.58M188.2 186.41a108.1 108.1 0 01-124.8 20.88M5 129.39A108 108 0 01217.62 91"
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
