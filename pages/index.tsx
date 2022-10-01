import { GetServerSideProps, GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/future/image'
import Head from 'next/head';
import { baseUrl } from '../utils/consts';
import type { Product } from '../model/product';
import Link from 'next/link';


export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      statusCode: 307,
      destination: '/products'
    }
  }
}


export default function Home({ props }) {
  return (
    <div>
      <Link href={'/products'}>
        <a >Go to Products page</a>
      </Link>
    </div>
  );
}
