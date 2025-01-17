import { COLORS } from '../theme';

interface Props {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}

export function UsersIcon(props: Props): JSX.Element {
  const { width = 18, height = 18, fill = "none", stroke = COLORS.inactive, strokeWidth = 1.5 } = props;
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 15.8333V15C2.5 13.159 3.99238 11.6666 5.83333 11.6666H9.16667C11.0076 11.6666 12.5 13.159 12.5 15V15.8333M12.5 9.16663C13.8807 9.16663 15 8.04734 15 6.66663C15 5.28591 13.8807 4.16663 12.5 4.16663M17.5 15.8333V15C17.5 13.159 16.0076 11.6666 14.1667 11.6666H13.75M10 6.66663C10 8.04734 8.88071 9.16663 7.5 9.16663C6.11929 9.16663 5 8.04734 5 6.66663C5 5.28591 6.11929 4.16663 7.5 4.16663C8.88071 4.16663 10 5.28591 10 6.66663Z"
        stroke={stroke}
        strokeWidth={1.5}
      />
      <mask
        id="mask0_277_1655"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="18"
        height="18"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.5 15.8333V15C2.5 13.159 3.99238 11.6666 5.83333 11.6666H9.16667C11.0076 11.6666 12.5 13.159 12.5 15V15.8333M12.5 9.16663C13.8807 9.16663 15 8.04734 15 6.66663C15 5.28591 13.8807 4.16663 12.5 4.16663M17.5 15.8333V15C17.5 13.159 16.0076 11.6666 14.1667 11.6666H13.75M10 6.66663C10 8.04734 8.88071 9.16663 7.5 9.16663C6.11929 9.16663 5 8.04734 5 6.66663C5 5.28591 6.11929 4.16663 7.5 4.16663C8.88071 4.16663 10 5.28591 10 6.66663Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_277_1655)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H18V18H0V0Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}
