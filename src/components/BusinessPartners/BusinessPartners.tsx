/* eslint-disable prefer-template */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  Row, Col, Divider, Typography,
} from 'antd';
import sytles from './businessPartners.module.css';
import image1 from '../../assets/images/microsoft-80658_640.png';
import image2 from '../../assets/images/icon-720944_640.png';
import image3 from '../../assets/images/follow-826033_640.png';
import image4 from '../../assets/images/facebook-807588_640.png';

const companies = [
  { src: image1, title: 'Microsoft' },
  { src: image2, title: 'Youtube' },
  { src: image3, title: 'Ins' },
  { src: image4, title: 'Facebook' },
];

export const BusinessPartners = () => {
  return (
    <div className={sytles.content}>
      <Divider orientation="left">
        <Typography.Title level={3}>
          合作企业
        </Typography.Title>
      </Divider>
      <Row>
        {companies.map((c, index) => (
          <Col span={6} key={'businesss-partner-' + index}>
            <img
              alt="business-partner"
              src={c.src}
              style={{
                width: '80%',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};
