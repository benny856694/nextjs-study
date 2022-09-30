import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/future/image'
import Head from 'next/head';
import { baseUrl } from '../utils/consts';
import type { Product } from '../model/product';
import Link from 'next/link';





export default function Home({ props }) {
  return (
    <div>
      <Link href={'/products'}>
        <a >Go to Products page</a>
      </Link>
    </div>
  );
}
