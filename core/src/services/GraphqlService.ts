import { createClient, gql } from '@urql/core'

const client = createClient({
  url: 'http://localhost:4000/'
})

export async function query<T>(query, variables?): Promise<T> {
  try {
    const { data, error } = await client.query(query, variables).toPromise()

    if (error) throw new Error(error.message)

    return data
  } catch (error) {
    console.error(error)
  }
}

export { gql }
