/* eslint-disable react/no-danger */
/* eslint-disable jsx-quotes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-indent */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { RouteComponentProps, useParams } from 'react-router';
import {
  Spin, Row, Col, DatePicker, Divider, Typography, Anchor, Menu,
  // Space,
} from 'antd';
import styles from './detailPage.module.css';
import {
  Header, Footer, ProductIntro, ProductComments,
} from '../../components';
import commentMockData from './mockup';
import { productDetailSlice } from '../../redux/productDetail/slice';
import { useSelector } from '../../redux/hooks';

const { RangePicker } = DatePicker;

interface MatchParams {
  touristRouteId: string;
}

export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = () => {
  const { touristRouteId } = useParams<MatchParams>();
  // const [loading, setLoading] = useState<boolean>(true);
  // const [product, setProduct] = useState<any>(null);
  // const [error, setError] = useState<string | null>(null);

  const loading = useSelector((state) => state.productDetai.loading);
  const error = useSelector((state) => state.productDetai.error);
  const product = useSelector((state) => state.productDetai.data);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      dispatch(productDetailSlice.actions.fetchStart());
      try {
        const { data } = await axios.get(
          `http://123.56.149.216:8089/api/touristRoutes/${touristRouteId}`,
        );
        // setProduct(data);
        // setLoading(false);
        dispatch(productDetailSlice.actions.fetchSuccess(data));
      } catch (error) {
        // setError(error.message);
        // setLoading(false);
        dispatch(productDetailSlice.actions.fetchFail(error.message));
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <Spin
        size="large"
        style={{
          marginTop: 200,
          marginBottom: 200,
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '100%',
        }}
      />
    );
  }

  if (error) {
    return (
<div>
网站出错：
  {error}
</div>
    );
  }

  return (
    <>
      <Header />
      <div className={styles['page-content']}>
        {/* 产品简介 与 日期选择 */}
        <div className={styles['product-intro-container']}>
          <Row>
            <Col span={13}>
              <ProductIntro
                title={product.title}
                shortDescription={product.description}
                price={product.originalPrice}
                coupons={product.coupons}
                points={product.points}
                discount={product.price}
                rating={product.rating}
                pictures={product.touristRoutePictures.map((p) => p.url)}
              />
            </Col>
            <Col span={11}><RangePicker open style={{ marginTop: 20 }} /></Col>
          </Row>
        </div>
        {/* 锚点菜单 */}
        <Anchor className={styles['product-detail-anchor']}>
          <Menu mode='horizontal'>
            <Menu.Item key='1'>
              <Anchor.Link href='#feature' title='产品特色'></Anchor.Link>
            </Menu.Item>
            <Menu.Item key='3'>
              <Anchor.Link href='#fees' title='费用'></Anchor.Link>
            </Menu.Item>
            <Menu.Item key='4'>
              <Anchor.Link href='#note' title='预定须知'></Anchor.Link>
            </Menu.Item>
            <Menu.Item key='5'>
              <Anchor.Link href='#comments' title='用户评价'></Anchor.Link>
            </Menu.Item>
          </Menu>
        </Anchor>
        {/* 产品特色 */}
        <div id='feature' className={styles['product-detail-container']}>
          <Divider orientation="center">
            <Typography.Title level={3}>产品特色</Typography.Title>
          </Divider>
          <div
            dangerouslySetInnerHTML={{ __html: product.features }}
            style={{ margin: 50 }}
          />
        </div>
        {/* 费用 */}
        <div id='fees' className={styles['product-detail-container']}>
          <Divider orientation="center">
            <Typography.Title level={3}>费用</Typography.Title>
          </Divider>
          <div
            dangerouslySetInnerHTML={{ __html: product.fees }}
            style={{ margin: 50 }}
          />
        </div>
        {/* 订购须知 */}
        <div id='note' className={styles['product-detail-container']}>
          <Divider orientation="center">
            <Typography.Title level={3}>预订须知</Typography.Title>
          </Divider>
          <div
            dangerouslySetInnerHTML={{ __html: product.notes }}
            style={{ margin: 50 }}
          />
        </div>
        {/* 商品评价 */}
        <div id='comments' className={styles['product-detail-container']}>
          <Divider orientation="center">
            <Typography.Title level={3}>用户评价</Typography.Title>
          </Divider>
          <div style={{ margin: 40 }}>
            <ProductComments data={commentMockData} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
