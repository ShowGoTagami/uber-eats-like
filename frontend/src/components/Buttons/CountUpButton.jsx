import React from 'react';

// style
import { RoundButton } from '../shared_style';

export const CountUpButton = ({
  onClick,
  isDisabled,
}) => (
  <RoundButton onClick={onClick} disabled={isDisabled}>
    ＋
  </RoundButton>
)
