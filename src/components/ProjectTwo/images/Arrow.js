import React from "react";

const Arrow = () => (
  <svg
    width="47px"
    height="23px"
    viewBox="0 0 47 23"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Arrow</title>
    <desc>Created with Sketch.</desc>
    <defs>
      <rect id="path-1" x="0" y="6" width="32" height="2" />
      <filter
        x="-21.9%"
        y="-250.0%"
        width="143.8%"
        height="800.0%"
        filterUnits="objectBoundingBox"
        id="filter-2"
      >
        <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation="2"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feComposite
          in="shadowBlurOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
          type="matrix"
          in="shadowBlurOuter1"
        />
      </filter>
      <polyline
        id="path-3"
        points="38.0100002 0 32 6.44410444 38.0100002 13.8095532"
      />
      <filter
        x="-133.1%"
        y="-43.4%"
        width="366.2%"
        height="215.9%"
        filterUnits="objectBoundingBox"
        id="filter-4"
      >
        <feMorphology
          radius="1"
          operator="dilate"
          in="SourceAlpha"
          result="shadowSpreadOuter1"
        />
        <feOffset
          dx="0"
          dy="2"
          in="shadowSpreadOuter1"
          result="shadowOffsetOuter1"
        />
        <feMorphology
          radius="1"
          operator="erode"
          in="SourceAlpha"
          result="shadowInner"
        />
        <feOffset dx="0" dy="2" in="shadowInner" result="shadowInner" />
        <feComposite
          in="shadowOffsetOuter1"
          in2="shadowInner"
          operator="out"
          result="shadowOffsetOuter1"
        />
        <feGaussianBlur
          stdDeviation="2"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
          type="matrix"
          in="shadowBlurOuter1"
        />
      </filter>
    </defs>
    <g
      id="Page-1"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="MainPage-Copy" transform="translate(-576.000000, -2120.000000)">
        <g id="Arrow" transform="translate(580.000000, 2123.000000)">
          <g id="Rectangle-2">
            <use
              fill="black"
              fill-opacity="1"
              filter="url(#filter-2)"
              xlink:href="#path-1"
            />
            <use fill="#443D3D" fill-rule="evenodd" xlink:href="#path-1" />
            <rect
              stroke="#443D3D"
              stroke-width="1"
              x="0.5"
              y="6.5"
              width="31"
              height="1"
            />
          </g>
          <g
            id="Path-7"
            transform="translate(35.005000, 6.904777) scale(-1, 1) translate(-35.005000, -6.904777) "
          >
            <use
              fill="black"
              fill-opacity="1"
              filter="url(#filter-4)"
              xlink:href="#path-3"
            />
            <use stroke="#443D3D" stroke-width="2" xlink:href="#path-3" />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default Arrow;
