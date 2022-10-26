import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import Image from 'next/image';
import { Product } from '../../../model/product';
import { baseUrl } from '../../../utils/consts';

async function getData(productId: number): Promise<Product> {
  const resp = await fetch(`${baseUrl}/products/${productId}`);
  const product = (await resp.json()) as Product;
  return product;
}

export default async function Page({ params }) {
  const product = await getData(params.id);
  return (
    <div
      className="flex flex-col items-center md:flex-row md:items-start md:justify-center container mx-auto p-4 max-w-4xl"
      key={product.id}
    >
      <Image
        src="https://via.placeholder.com/150"
        width={300}
        height={50}
        alt={product.title}
      />
      <div className="flex flex-col md:ml-10 mt-8 md:mt-0 content-start items-start">
        <h4 className="font-bold leading-tight">{product.title}</h4>
        <h5 className="font-medium my-2">{product.category}</h5>
        <p className="mt-8">{product.description}</p>
      </div>
    </div>
  );
}
