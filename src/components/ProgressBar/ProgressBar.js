/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES_STYLES = {
  'small': {
    width: '100%',
    height: '8px'
  },
  'medium': {
    width: '100%',
    height: '12px'
  },
  'large': {
    width: '100%',
    height: '24px'
  }
}

const ProgressBarBackground = styled.div`
  box-shadow: 0px 2px 4px 0px #80808059 inset;
  border-radius: 8px;
`

const ProgressBarSVGBase = styled.svg`
  height: var(--height);
  font-family: "Roboto", sans-serif;
  padding: var(--padding);
  border-radius: var(--borderRadius);
  border: 2px solid transparent;

  &:focus {
    outline-color: ${COLORS.primary};
    outline-offset: 4px;
  }
`;

const ProgressBar = ({ value, size }) => {
  return <ProgressBarBackground
          role="meter" 
          aria-valuenow={value} 
          aria-valuemin={0} 
          aria-valuemax={100} 
          aria-labelledby='Progress Bar'
        >
          <ProgressBarSVGBase width={SIZES_STYLES[size].width}
            height={SIZES_STYLES[size].height}
            class="fill"
            aria-hidden="true"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg">
            <rect x="0"
                  y="0"
                  width={value + '%'}
                  height="100%"
                  fill="red"
            >  
            </rect>
          </ProgressBarSVGBase>
        </ProgressBarBackground>;
};

export default ProgressBar;
