/* eslint-disable import/prefer-default-export */
import React from 'react';
import { UserLayout } from '../../layouts/UserLayout';
import { RegisterForm } from './RgisterForm';

export const RegisterPage : React.FC = () => (
  <UserLayout>
    <RegisterForm />
  </UserLayout>
);
