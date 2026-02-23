import React from 'react';

// @ts-ignore
export default function Spinner({ strokeColor }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.66602 11.6667C1.66602 11.6667 1.76712 12.3744 4.69605 15.3033C7.62498 18.2322 12.3737 18.2322 15.3026 15.3033C16.3404 14.2656 17.0104 12.9994 17.3128 11.6667M1.66602 11.6667V16.6667M1.66602 11.6667H6.66602M18.3327 8.33333C18.3327 8.33333 18.2316 7.62563 15.3026 4.6967C12.3737 1.76777 7.62498 1.76777 4.69605 4.6967C3.65832 5.73443 2.98826 7.0006 2.68587 8.33333M18.3327 8.33333V3.33333M18.3327 8.33333H13.3327"
        stroke={strokeColor}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
