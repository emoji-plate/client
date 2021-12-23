import React from "react";

const PlateIllustration = () => {
    return <svg
      width="257"
      height="218"
      viewBox="0 0 257 218"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M256.5 75.5C256.5 130.728 223.228 218 168 218C112.772 218 0 146.228 0 91C0 35.7715 3.27153 0.5 58.5 0.5C113.728 0.5 256.5 20.2715 256.5 75.5Z"
        fill="#DEDBBD"
        fill-opacity="0.48"
      />
      <g filter="url(#filter0_d_1_22)">
        <circle cx="128.5" cy="83.5" r="64.5" fill="white" />
      </g>
      <circle cx="132.5" cy="79.5" r="64.5" fill="#FBFBFB" />
      <defs>
        <filter
          id="filter0_d_1_22"
          x="56"
          y="19"
          width="137"
          height="145"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-4" dy="12" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_22"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_22"
            result="shape"
          />
        </filter>
      </defs>
    </svg>;
};

export default PlateIllustration;