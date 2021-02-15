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
          d="M74.27 30.1s24.58 7 40.22 44.2 40.18 61.35 102.21 49"
        />
        <path
          className="prefix__cls-2"
          d="M152 116.73s-8.89-34.73-9.65-54.29 6.82-37.77 15.14-42.65a130 130 0 00.95 24.2c1.78 12.09 15.12 58.07-6.44 72.74zM114.49 74.3s16.16-19.88 13.44-60.76c0 0-23.34 5.95-13.44 60.76z"
        />
        <path
          className="prefix__cls-2"
          d="M114.49 74.3s-21.92-19-36.37-14.9c0 0 7.3 23.5 36.37 14.9z"
        />
        <circle className="prefix__cls-1" cx={64.88} cy={23.94} r={10.17} />
        <circle className="prefix__cls-1" cx={120.63} cy={115.53} r={10.16} />
        <circle className="prefix__cls-1" cx={182.1} cy={148.81} r={10.16} />
        <path
          className="prefix__cls-2"
          d="M10.08 74.64c3.32 14.63 13.1 31.52 41.37 49.07 55.22 34.29 62.8 13.38 97.57 41.54 14.85 14.53 22.91 33.42 22.91 33.42S145.64 211.89 104.2 146"
        />
        <path
          className="prefix__cls-2"
          d="M12.92 80.07s9.59 17.13 25.42 17.26c30.29.25 57.88 20 62.39 25.77 0 0-10.1-44.41-46.74-44.66s-42.68 5.68-43.89-3.81M35.2 113s10 21.77 6 43.59 2.1 25.79 2.1 25.79S6.87 152 24 118.74"
        />
        <path
          className="prefix__cls-1"
          d="M181.42 143.12l-1.69-14.16M125.9 97.31l-4.04 13.68"
        />
        <circle className="prefix__cls-1" cx={75.57} cy={164.5} r={11.61} />
        <path className="prefix__cls-1" d="M84.49 144.73l-4.21 9.17" />
        <circle className="prefix__cls-1" cx={96.31} cy={20.64} r={10.16} />
        <path
          className="prefix__cls-1"
          d="M91.05 38.87l4.04-13.68M9.12 73.18a108 108 0 00162.82 126.16M217.77 123.1a109.18 109.18 0 00.73-12.6A108 108 0 0060.21 14.9"
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
