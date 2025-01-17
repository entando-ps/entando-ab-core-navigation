import { useContext } from 'react';
import styled from 'styled-components';
import { RightArrowIcon } from '../Icons/RightArrowIcon';
import { MenuUIContext } from '../MenuUIContext';
import { SecondaryMenu } from '../SecondaryMenu/SecondaryMenu';
import { COLORS } from '../theme';

interface ListGroupItemProps {
  fixBottom?: boolean;
  isActive?: boolean;
}

const StyledListGroupItem = styled.li<ListGroupItemProps>`
  position: relative;
  display: block;
  margin-bottom: -1px;
  color: ${({ isActive }) => (isActive ? COLORS.blue : '')};
  ${({ fixBottom }) =>
    fixBottom
      ? `
  @media (min-height: 636px) {
    position: fixed;
    bottom: 64px;
    left: 0;
  }
  `
      : ''}

  &:first-child {
    border-top: 0px;
  }
`;

interface StyledLinkProps {
  isActive: boolean;
  isDisabled?: boolean;
}

const StyledLink = styled.a<StyledLinkProps>`
  width: 215px;
  color: ${({ isActive }) => (isActive ? COLORS.blue : COLORS.textTertiary )};
  cursor: pointer;
  display: block;
  opacity: ${({ isDisabled }) => (isDisabled ? '0.5' : '1')};
  pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'auto')};
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  font-weight: ${({ isActive }) => (isActive ? '600' : '400')};
  height: 40px;
  line-height: 26px;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  display: flex;
  ${({ isActive }) => isActive && `
  &:before {
    background: #e5eeff;
    content: " ";
    border-radius: 8px;
    width: 28px;
    height: 28px;
    z-index: 0;
    left: -4px;
    position: absolute;
    top: 6px;
  }`
}

  &:hover {
    font-weight: 600;

    span > svg > path {
      stroke: ${COLORS.blue};
    }
    span > svg > g > path {
      stroke: ${COLORS.blue};
    }
  }
`;

const StyledIcon = styled.span`
  display: inline-flex;
  align-items: center;
  color: ${COLORS.inactive};
  float: left;
  font-size: 16px;
  line-height: 26px;
  margin-right: 10px;
  text-align: center;
  width: 24px;
  z-index: 1;
`;

export const StyledLabel = styled.span`
  display: flex;
  line-height: 25px;
  flex: 1;
  max-width: none;
  padding-right: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
`;

interface Props {
  id: string;
  fixBottom?: boolean;
  label: string;
  renderIcon: ({ fill, stroke }: { fill?: string, stroke?: string }) => React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  dataId: string;
  errorTooltipLabel?: string;
  hasError?: boolean;
}

export function ListGroupItem(props: Props): JSX.Element {
  const {
    label,
    renderIcon,
    fixBottom,
    children,
    id,
    onClick,
    href,
    dataId,
    className = '',
    errorTooltipLabel = '',
    hasError
  } = props;

  const {
    activeListGroupItemId,
    setActiveListGroupItemId,
    setSecondaryMenuOpen,
    secondaryMenuOpen,
    setActiveTertiaryMenuItemId,
    setActiveSecondaryMenuItemId,
    setTertiaryMenuOpen
  } = useContext(MenuUIContext);

  const isActive = activeListGroupItemId === id;
  const hasChildren = !!children;
  const isDisabled = hasError;

  const onClickHandler = () => {
    if (isDisabled) {
      return;
    }
    setActiveListGroupItemId(id);
    if (hasChildren) {
      setSecondaryMenuOpen(true);
      setActiveTertiaryMenuItemId('');
      setActiveSecondaryMenuItemId('');
    } else {
      setSecondaryMenuOpen(false);
      setTertiaryMenuOpen(false);
      setActiveSecondaryMenuItemId('');
      setActiveTertiaryMenuItemId('');
      onClick && onClick();
    }
  };

  return (
    <StyledListGroupItem
      isActive={isActive}
      fixBottom={fixBottom}
      onClick={onClickHandler}
      className={`${className}`}
      data-id={dataId}
      {...(hasError && {
        'aria-label': errorTooltipLabel,
        'data-balloon-pos': 'down',
        'data-balloon-length': 'medium'
      })}
    >
      <StyledLink isActive={isActive} href={href} isDisabled={isDisabled}>
        <StyledIcon>
          {renderIcon({ stroke: isActive ? COLORS.blue : COLORS.inactive })}
        </StyledIcon>
        <StyledLabel>{label}</StyledLabel>
        {hasChildren && (
          <StyledIcon>
            <RightArrowIcon />
          </StyledIcon>
        )}
      </StyledLink>
      {hasChildren && isActive && secondaryMenuOpen && (
        <SecondaryMenu isOpen title={label}>
          {children}
        </SecondaryMenu>
      )}
    </StyledListGroupItem>
  );
}
