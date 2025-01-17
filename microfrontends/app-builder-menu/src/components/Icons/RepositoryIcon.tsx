import { COLORS } from '../theme';

interface Props {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}

export function RepositoryIcon(props: Props): JSX.Element {
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
        d="M16.6666 7.77782V5.00004C16.6666 4.07957 15.9204 3.33337 14.9999 3.33337H12.2221M16.6666 7.77782H12.2221M16.6666 7.77782V12.2223M3.33325 7.77782V5.00004C3.33325 4.07957 4.07944 3.33337 4.99992 3.33337H7.7777M3.33325 7.77782H7.7777M3.33325 7.77782V12.2223M12.2221 7.77782H7.7777M12.2221 7.77782V3.33337M12.2221 7.77782V12.2223M7.7777 7.77782V3.33337M7.7777 7.77782V12.2223M16.6666 12.2223V15C16.6666 15.9205 15.9204 16.6667 14.9999 16.6667H12.2221M16.6666 12.2223H12.2221M3.33325 12.2223V15C3.33325 15.9205 4.07944 16.6667 4.99992 16.6667H7.7777M3.33325 12.2223H7.7777M12.2221 12.2223H7.7777M12.2221 12.2223V16.6667M7.7777 12.2223V16.6667M7.7777 3.33337H12.2221M7.7777 16.6667H12.2221"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <mask
        id="mask0_277_1688"
        maskUnits="userSpaceOnUse"
        x="0"
        y="1"
        width="20"
        height="18"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.6666 7.77782V5.00004C16.6666 4.07957 15.9204 3.33337 14.9999 3.33337H12.2221M16.6666 7.77782H12.2221M16.6666 7.77782V12.2223M3.33325 7.77782V5.00004C3.33325 4.07957 4.07944 3.33337 4.99992 3.33337H7.7777M3.33325 7.77782H7.7777M3.33325 7.77782V12.2223M12.2221 7.77782H7.7777M12.2221 7.77782V3.33337M12.2221 7.77782V12.2223M7.7777 7.77782V3.33337M7.7777 7.77782V12.2223M16.6666 12.2223V15C16.6666 15.9205 15.9204 16.6667 14.9999 16.6667H12.2221M16.6666 12.2223H12.2221M3.33325 12.2223V15C3.33325 15.9205 4.07944 16.6667 4.99992 16.6667H7.7777M3.33325 12.2223H7.7777M12.2221 12.2223H7.7777M12.2221 12.2223V16.6667M7.7777 12.2223V16.6667M7.7777 3.33337H12.2221M7.7777 16.6667H12.2221"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_277_1688)">
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
