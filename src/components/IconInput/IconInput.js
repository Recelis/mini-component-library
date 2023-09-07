import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES_STYLES = {
  'small': {
    fontSize: 'calc(14rem / 16)',
    iconSize: '16px',
    paddingLeft: 'calc(8rem / 16)'
  },
  'large': {
    fontSize: 'calc(18rem / 16)',
    iconSize: '24px',
    paddingLeft: 'calc(12rem / 16)'
  }
}

const InputWrapper = styled.div`
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
  width: 100%;
  height: ${props => props.iconSize};
  border: 0;
  border-bottom: solid 1px grey;
  z-index: 1;
  position: relative;
  background-color: transparent;
  outline-offset: 2px;
  color: inherit;
  font-weight: inherit;
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return <InputWrapper
    width={width}
    iconSize={SIZES_STYLES[size].iconSize}
  >
      <StyledInput 
        type={'text'} 
        placeholder={placeholder} 
        paddingLeft={SIZES_STYLES[size].paddingLeft} 
        iconSize={SIZES_STYLES[size].iconSize}
      />
      <IconWrapper>
        <Icon id={icon} size={SIZES_STYLES[size].iconSize} />
      </IconWrapper>
    </InputWrapper>
};

export default IconInput;
