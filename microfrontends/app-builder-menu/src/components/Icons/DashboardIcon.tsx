import { COLORS } from '../theme';

interface Props {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}

export function DashboardIcon(props: Props): JSX.Element {
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
        d="M10.0002 9.99998C10.0002 9.53974 10.3733 9.16665 10.8335 9.16665H15.8335C16.2937 9.16665 16.6668 9.53974 16.6668 9.99998V15.8333C16.6668 16.2936 16.2937 16.6666 15.8335 16.6666H10.8335C10.3733 16.6666 10.0002 16.2936 10.0002 15.8333V9.99998Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.3335 4.16665C3.3335 3.70641 3.70659 3.33331 4.16683 3.33331H6.66683C7.12707 3.33331 7.50016 3.70641 7.50016 4.16665V15.8333C7.50016 16.2936 7.12707 16.6666 6.66683 16.6666H4.16683C3.70659 16.6666 3.3335 16.2936 3.3335 15.8333V4.16665Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0002 4.16665C10.0002 3.70641 10.3733 3.33331 10.8335 3.33331H15.8335C16.2937 3.33331 16.6668 3.70641 16.6668 4.16665V5.83331C16.6668 6.29355 16.2937 6.66665 15.8335 6.66665H10.8335C10.3733 6.66665 10.0002 6.29355 10.0002 5.83331V4.16665Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <mask
        id="mask0_277_1709"
        maskUnits="userSpaceOnUse"
        x="0"
        y="1"
        width="20"
        height="18"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.0002 9.99998C10.0002 9.53974 10.3733 9.16665 10.8335 9.16665H15.8335C16.2937 9.16665 16.6668 9.53974 16.6668 9.99998V15.8333C16.6668 16.2936 16.2937 16.6666 15.8335 16.6666H10.8335C10.3733 16.6666 10.0002 16.2936 10.0002 15.8333V9.99998Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.0002 9.99998C10.0002 9.53974 10.3733 9.16665 10.8335 9.16665H15.8335C16.2937 9.16665 16.6668 9.53974 16.6668 9.99998V15.8333C16.6668 16.2936 16.2937 16.6666 15.8335 16.6666H10.8335C10.3733 16.6666 10.0002 16.2936 10.0002 15.8333V9.99998Z"
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.0002 4.16665C10.0002 3.70641 10.3733 3.33331 10.8335 3.33331H15.8335C16.2937 3.33331 16.6668 3.70641 16.6668 4.16665V5.83331C16.6668 6.29355 16.2937 6.66665 15.8335 6.66665H10.8335C10.3733 6.66665 10.0002 6.29355 10.0002 5.83331V4.16665Z"
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
      </mask>
      <g mask="url(#mask0_277_1709)">
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
