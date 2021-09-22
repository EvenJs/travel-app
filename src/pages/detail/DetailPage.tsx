/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
import React from 'react';
import { RouteComponentProps } from 'react-router';
// import styles from './detailPage.module.css';

interface MatchParams {
  touristRouteId: string;
}

export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = (props) => {
  const { match: { params } } = props;
  return (
    <h1>
      旅游路线详情页面, ID:
      {params.touristRouteId}
    </h1>
  );
};
