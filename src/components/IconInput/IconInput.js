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

const StyledInput = styled.input`
  padding-left: calc(${props => props.paddingLeft} + ${props => props.iconSize});
`

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return <div style={{
    width,
    fontSize: SIZES_STYLES[size].fontSize
  }}>
      <StyledInput 
        type={'text'} 
        placeholder={placeholder} 
        paddingLeft={SIZES_STYLES[size].paddingLeft} 
        iconSize={SIZES_STYLES[size].iconSize}
      />
      <Icon id={icon} size={SIZES_STYLES[size].iconSize} />
        
    </div>
};

export default IconInput;
