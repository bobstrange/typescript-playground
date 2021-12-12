import type { InferGetStaticPropsType } from 'next'
import { getAllProducts } from '../framework/shopify/product/getAllProducts'

type Props = InferGetStaticPropsType<typeof getStaticProps>
export const getStaticProps = async () => {
  const products = await getAllProducts()
  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  }
}

export default function Home({ products }: Props) {
  return <div>{JSON.stringify(products, null, 2)}</div>
}
