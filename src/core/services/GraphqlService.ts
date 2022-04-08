import { Client, createClient, defaultExchanges, gql } from '@urql/core'

class GraphqlService {
  client: Client

  constructor(token: string) {
    this.client = createClient({
      url: 'https://dc-api-storefront.herokuapp.com/',
      requestPolicy: 'cache-first',
      exchanges: defaultExchanges,
      fetchOptions: {
        headers: {
          token: token
        }
      }
    })
  }

  public async query<T>(query: string, variables?: any): Promise<T> {
    try {
      const { data, error }: any = await this.client.query(query, variables).toPromise()

      if (error) throw new Error(error)

      return data
    } catch (error) {
      console.error(error)
    }
  }
}
//@ts-ignore
const client = new GraphqlService(DC_CONFIG.token)

export { client, gql }
