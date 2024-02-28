"use client";

import Link from 'next/link';
import type { NextPage } from 'next';
import './globals.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const AppPage: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/home');
  }, []);
  return (
    <>
      <p>Redirecting to Home...</p>
    </>
  );
};

export default AppPage;
