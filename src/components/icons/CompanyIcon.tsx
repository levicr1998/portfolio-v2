import * as React from 'react';
import { SVGProps } from 'react';
const CompanyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    viewBox="0 0 33 33"
    {...props}>
    <title>Company Icon</title>
    <path
      stroke="#2D9CDB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.013 28.268v-23a1 1 0 0 0-1-1h-12a1 1 0 0 0-1 1v23M28.013 28.268v-15a1 1 0 0 0-1-1h-9M8.013 9.268h4M10.013 19.268h4M8.013 24.268h4M22.013 22.268h2M22.013 17.268h2"
    />
  </svg>
);
export default CompanyIcon;
