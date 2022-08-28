import * as React from 'react';
import type { NextPage } from "next";

import Layout from '../components/layout/Layout';
import Seo from '@/components/Head';

const Home: NextPage = () => {
  return (
    <Layout>
      <Seo title="Main" />
      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <h1 className='mt-4'>
              HappyIC Telegram Crawler Web Interface
            </h1>
            <p className='mt-2 text-sm text-gray-800'>
              This page is for controlling our telegram Crawler
            </p>
            

          </div>
        </section>

      </main>
    </Layout>
  );
};

export default Home;