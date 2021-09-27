/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Header, Footer } from '../../components';
import styles from './mainLayout.module.css';

export const MainLayout: React.FC = ({ children }) => (
  <>
    <Header />
    {/* 页面内容 */}
    <div className={styles['page-content']}>{children}</div>
    <Footer />
  </>
);
