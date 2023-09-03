import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  /* Allow the select to span the full height in Safari */
  -webkit-appearance: none;
`

const PresentationalBit = styled.div`
    color: ${COLORS.gray700};
    background-color: ${COLORS.transparentGray15};
    border: solid 1px transparent;
    border-radius: 8px;
    padding: 12px 16px;
    font-size: 1rem;

    display: flex;
    align-items: center;

    ${NativeSelect}:focus + & {
      outline: 1px dotted #212121;
      outline: 5px auto -webkit-focus-ring-color;
    }

    ${NativeSelect}:hover + & {
      color: ${COLORS.black};
    }
`



const Select = ({ id, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect id={id} value={displayedValue} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <Icon id={'chevron-down'} size={24} style={{paddingLeft: '52px'}}/>
      </PresentationalBit>
    </Wrapper>
  );
};

export default Select;
