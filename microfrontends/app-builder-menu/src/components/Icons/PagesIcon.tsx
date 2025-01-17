import { COLORS } from '../theme';

interface Props {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}

export function PagesIcon(props: Props): JSX.Element {
  const { width = 20, height = 20, fill = "none", stroke = COLORS.inactive, strokeWidth = 1.5 } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.33325 5.41663V4.58329C8.33325 3.66282 9.07944 2.91663 9.99992 2.91663H15.4166C16.3371 2.91663 17.0833 3.66282 17.0833 4.58329V9.99996C17.0833 10.9204 16.3371 11.6666 15.4166 11.6666H14.5833M4.99992 16.6666H10.8333C11.7537 16.6666 12.4999 15.9204 12.4999 15V9.16663C12.4999 8.24615 11.7537 7.49996 10.8333 7.49996H4.99992C4.07944 7.49996 3.33325 8.24615 3.33325 9.16663V15C3.33325 15.9204 4.07944 16.6666 4.99992 16.6666Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <mask
        id="mask0_277_1596"
        maskUnits="userSpaceOnUse"
        x="1"
        y="0"
        width="18"
        height="20"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.33325 5.41663V4.58329C8.33325 3.66282 9.07944 2.91663 9.99992 2.91663H15.4166C16.3371 2.91663 17.0833 3.66282 17.0833 4.58329V9.99996C17.0833 10.9204 16.3371 11.6666 15.4166 11.6666H14.5833M4.99992 16.6666H10.8333C11.7537 16.6666 12.4999 15.9204 12.4999 15V9.16663C12.4999 8.24615 11.7537 7.49996 10.8333 7.49996H4.99992C4.07944 7.49996 3.33325 8.24615 3.33325 9.16663V15C3.33325 15.9204 4.07944 16.6666 4.99992 16.6666Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_277_1596)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H20V20H0V0Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}
