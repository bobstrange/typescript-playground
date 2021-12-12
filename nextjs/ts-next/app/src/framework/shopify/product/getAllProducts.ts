import { getAllProductsQuery } from '../utils/queries/getAllProductsQuery'

type FetchParams = {
  query: string
}

const fetchData = async ({ query }: FetchParams) => {
  const url = 'https://localhost:4000/graphql'

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
  const data = await res.json()
  return { data }
}

export const getAllProducts = async (): Promise<any[]> => {
  const products = await fetchData({ query: getAllProductsQuery })
  return products.data
}
