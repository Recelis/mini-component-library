import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES_STYLES = {
  'small': {
    fontSize: 'calc(14rem / 16)',
    iconSize: '16px',
    paddingLeft: 'calc(8rem / 16)',
    borderThickness: 1,
  },
  'large': {
    fontSize: 'calc(18rem / 16)',
    iconSize: '24px',
    paddingLeft: 'calc(12rem / 16)',
    borderThickness: 2,
  }
}

const InputWrapper = styled.label`
  width: ${props => props.width}px;
  position: relative;
  height: ${props => props.iconSize};
  color: ${COLORS.gray700};

  &:hover {
    font-weight: 700;
    color: ${COLORS.black}
  }
`

const StyledInput = styled.input`
  padding-left: calc(${props => props.paddingLeft} + ${props => props.iconSize});
  width: ${props => props.width};
  height: ${props => props.iconSize};
  border: 0;
  border-bottom: solid 1px grey;
  position: relative;
  background-color: transparent;
  outline-offset: 2px;
  color: inherit;
  font-weight: inherit;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto 0;
  height: ${props => props.iconSize};
`

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  ...delegated
}) => {
  return <InputWrapper
    width={width}
    iconSize={SIZES_STYLES[size].iconSize}
  > 
    <VisuallyHidden>{label}</VisuallyHidden>
    <IconWrapper 
      iconSize={SIZES_STYLES[size].iconSize}
      width={width}
    >
      <Icon id={icon} size={SIZES_STYLES[size].iconSize} />
    </IconWrapper>
    <StyledInput
      {...delegated}
      type={'text'} 
      placeholder={placeholder}
      // Better to use style here with CSS Variables
      /*
      style={{
          '--width': width + 'px',
          '--height': styles.height / 16 + 'rem',
          '--border-thickness': styles.borderThickness + 'px',
          '--font-size': styles.fontSize / 16 + 'rem',
        }}
      */
      paddingLeft={SIZES_STYLES[size].paddingLeft} 
      iconSize={SIZES_STYLES[size].iconSize}
      borderThickness={SIZES_STYLES[size].borderThickness}
    />
    
  </InputWrapper>
};

export default IconInput;
