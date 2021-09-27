/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { Fragment } from 'react';
import { Typography, Divider } from 'antd';
import { FilterTag } from './FilterTag';

const { Text } = Typography;

interface PropsType {
  title: string;
  tags: string[];
}

export const Filter: React.FC<PropsType> = ({ title, tags }) => {
  return (
    <div>
      <Text style={{ marginRight: 40, fontSize: 15, fontWeight: 500 }}>
        {title}
        {' '}
        :
        {' '}
      </Text>
      {tags.map((t, index) => {
        if (index === tags.length - 1) {
          return <FilterTag key={`filter${index}`}>{t}</FilterTag>;
        }
        return (
          <span key={`filter${index}`}>
            <FilterTag>{t}</FilterTag>
            <Divider type="vertical" />
          </span>
        );
      })}
    </div>
  );
};
