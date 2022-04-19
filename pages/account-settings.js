import React from 'react';
import Head from 'next/head';
import { AgentAccountSettingsPage } from 'container/Agent/';

export default function accountSettingsPage({ processedData }) {
  return (
    <>
      <Head>
        <title>Account Settings | SAA.</title>
      </Head>
      <AgentAccountSettingsPage />
    </>
  );
}