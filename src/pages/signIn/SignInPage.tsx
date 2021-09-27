/* eslint-disable import/prefer-default-export */
import React from 'react';
import { UserLayout } from '../../layouts/UserLayout';
import { SignInForm } from './SignInForm';

export const SignInPage: React.FC = () => (
  <UserLayout>
    <SignInForm />
  </UserLayout>
);
