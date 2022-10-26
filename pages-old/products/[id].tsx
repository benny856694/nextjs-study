import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import { baseUrl } from "../../utils/consts"
import type { Product } from '../../model/product'
import Image from 'next/image'


export const getStaticPaths: GetStaticPaths = async () => {
    const resp = await fetch(`${baseUrl}/products`)
    const products = await resp.json() as Product[]
    const paths = products.map(p => ({
        params: {
            id: p.id.toString()
        }
    }))

    return {
        paths,
        fallback: false
    }
}


export const getStaticProps: GetStaticProps<{ product: Product }> = async ({ params }) => {
    const resp = await fetch(`${baseUrl}/products/${params?.id}`)
    const product = await resp.json() as Product
    return {
        props: {
            product
        }
    }
}



export default function ProductPage({ product }: InferGetStaticPropsType<typeof getStaticProps>) {
    return <div className='flex flex-col items-center md:flex-row md:items-start md:justify-center container mx-auto p-4 max-w-4xl' key={product.id}>
        <Image src={product.image} width={300} height={50} alt={''} />
        <div className='flex flex-col md:ml-10 mt-8 md:mt-0 content-start items-start'>
            <h4 className='font-bold leading-tight'>{product.title}</h4>
            <h5 className='font-medium my-2'>{product.category}</h5>
            <p className='mt-8'>{product.description}</p>
        </div>

    </div>

}

