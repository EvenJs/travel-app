/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import { Image, Typography } from 'antd';
import React from 'react';

interface PropType {
  id: string | number;
  size: 'large' | 'small';
  imageSrc: string;
  price: number | string;
  title: string;
}

export const ProductImage : React.FC<PropType> = ({
  id, size, imageSrc, price, title,
}) => {
  return (
    <>
      {size === 'large' ? (
        <Image src={imageSrc} height={285} width={490} />
      ) : (
        <Image src={imageSrc} height={120} width={240} />
      )}
      <div>
        <Typography.Text type="secondary">{title.slice(0, 25)}</Typography.Text>
        <Typography.Text type="danger" strong>
          {` ¥ ${price} 起`}
        </Typography.Text>
      </div>
    </>
  );
};
