import * as React from "react";

function SvgComponent({
  color = "#000",
  ...props
}: React.SVGProps<SVGSVGElement & { color?: string }>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 221 221" {...props}>
      <defs>
        <style>
          {`.prefix__cls-1,.prefix__cls-2{fill:none;stroke:${color};stroke-linecap:round;stroke-width:5px}.prefix__cls-1{stroke-miterlimit:10}.prefix__cls-2{stroke-linejoin:round}`}
        </style>
      </defs>
      <g id="prefix__Layer_1" data-name="Layer 1">
        <path
          className="prefix__cls-1"
          d="M69 10.76a108.11 108.11 0 00-56.7 144.76M198.6 48A108.11 108.11 0 0069 10.76M83.29 215A108.08 108.08 0 00218.5 110.5a104.47 104.47 0 00-3.66-28"
        />
        <path
          className="prefix__cls-1"
          d="M3 100.23s8.83-33.91 42-14.77 39.2 14.3 64.33 11.76 52.32 28.36 50.46 58.58c-1.86 30.66-18.72 66.2-76.5 59.2"
        />
        <path
          className="prefix__cls-1"
          d="M49.56 176.67c-27-17.87-33.81-39.76-34.95-57.81C13.22 96.74 33.68 89.58 53.23 100l1.26.69c15.46 8.56 29.59 10.79 48.57 8.88s40.74 19 39.34 44c-.56 10.13-2.85 19.21-7 26.78 0 0-13.34 26.74-60.25 18.07"
        />
        <circle className="prefix__cls-1" cx={100.59} cy={160.17} r={18.68} />
        <path
          className="prefix__cls-1"
          d="M155.42 114.06s42.41-13.84 33.2-35.26c-8.51-19.78-28-21.27-80.23 10.44M187.78 75.66l27.06 6.87M187.78 75.66l22.42-6.76M187.78 75.66l18.07-15.93M187.78 75.66l10.82-27.65M170.15 107.36l-4.81-16.54M153.19 89.29l-4.8-16.55M123.56 91.28l-2.4-8.27M45 85.46S41 38.87 78.54 47"
        />
        <path
          className="prefix__cls-2"
          d="M136.16 64.6c-3.67-30.73-41.34-17.76-41.34-17.76V35.63M94.82 35.63s-1.07-23.87-28.13-23.87c0 0-2.88 24.57 28.13 23.87z"
        />
        <path className="prefix__cls-1" d="M63.11 76.44s-1.2-15.5 15.43-15.5" />
      </g>
    </svg>
  );
}

export default SvgComponent;
