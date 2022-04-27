import React from 'react';
import Head from 'next/head';
import ResetPassword from 'container/Auth/ResetPassword';

export default function forgetPasswordPage() {
  return (
    <>
      <Head>
      <title>Reset Password International Student Housing | Study Abroad Apartments</title>
      </Head>
      <ResetPassword />
    </>
  );
}
