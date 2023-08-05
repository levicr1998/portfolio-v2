import { SVGProps } from 'react';

const BackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props?.width ?? 81}
    height={props?.height ?? 81}
    fill="none"
    {...props}>
      <title>Back Icon</title>
    <path
      fill={props?.fill ?? '#FFFF'}
      d="M26.287 37.563 38.22 25.596l-4.7-4.7-20 20 20 20 4.7-4.7-11.933-11.967h40.566v-6.666H26.287Z"
    />
  </svg>
);
export default BackIcon;
