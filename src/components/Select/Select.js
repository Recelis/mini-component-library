import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const SelectWrapper = styled.select`
  appearance: none;
  text-indent: 1px;
  text-overflow: '';
  background: #80808026;
  border: solid 1px transparent;
  border-radius: 8px;
  padding: 12px 16px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
`

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper value={value} onChange={onChange}>
      {children}
    </SelectWrapper>
  );
};

export default Select;
