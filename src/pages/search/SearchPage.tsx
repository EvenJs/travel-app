/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import { Spin } from 'antd';
import { useDispatch } from 'react-redux';
import {
  Footer, Header, FilterArea, ProductList,
} from '../../components';
import { searchProduct } from '../../redux/productSearch/slice';
import { useSelector } from '../../redux/hooks';
import styles from './searchPage.module.css';

interface MatchParams {
  keywords: string
}

export const SearchPage: React.FC = () => {
  const { keywords } = useParams<MatchParams>();

  const loading = useSelector((state) => state.productSearch.loading);
  const error = useSelector((state) => state.productSearch.error);
  const pagination = useSelector((state) => state.productSearch.pagination);
  const productList = useSelector((state) => state.productSearch.data);

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(searchProduct({ nextPage: 1, pageSize: 10, keywords }));
  }, [location]);

  const onPageChange = (nextPage, pageSize) => {
    dispatch(searchProduct({ nextPage, pageSize, keywords }));
  };

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
        {/* 分类过滤器 */}
        <div className={styles['product-list-container']}>
          <FilterArea />
        </div>
        {/* 产品列表 */}
        <div className={styles['product-list-container']}>
          <ProductList
            data={productList}
            paging={pagination}
            onPageChange={onPageChange}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};
