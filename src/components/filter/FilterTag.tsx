/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/require-default-props */
/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { Tag } from 'antd';

const { CheckableTag } = Tag;

interface PropsType {
  onSelect?: () => void;
}

export const FilterTag: React.FC<PropsType> = (props) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (checked) => {
    setChecked(checked);
  };

  return <CheckableTag {...props} checked={checked} onChange={handleChange} />;
};
