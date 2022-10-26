import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { baseUrl } from '../utils/consts';
import type { Product } from '../model/product';

async function getData(): Promise<Product[]> {
  const resp = await fetch(`${baseUrl}/products`);
  const json = (await resp.json()) as Product[];
  console.log(json);
  return json;
}

export default async function Page() {
  const products = await getData();
  return (
    <>
      <div className="text-lg sticky top-0 bg-black text-white font-bold p-2">
        <h1 className="container mx-auto">Ecommerce Shop</h1>
      </div>
      <div className="container mx-auto flex flex-wrap p-4 gap-2 justify-center">
        {products.map((p) => (
          <Link href={`/products/${encodeURIComponent(p.id)}`} key={p.id}>
            <div className="flex w-96 items-start border rounded-xl p-4 hover:shadow-lg transition cursor-pointer">
              <Image src={p.image} width={100} height={50} alt={''} />
              <div className="flex flex-col ml-4 content-start items-start">
                <h4 className="font-bold leading-tight">{p.title}</h4>
                <h5 className="font-medium my-2">{p.category}</h5>
                <p className="line-clamp-3 break-all">{p.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
