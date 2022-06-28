import { client } from '../services/GraphqlService'
import { OptionsGetScripts, Script, ScriptsResponse } from './ScriptsTypes'

const SCRIPTS_DEFAULT_FIELDS = [
  'id',
  'position',
  'name',
  'location',
  'page',
  'load_method',
  'content',
  'category',
  'active',
  'description',
  'url'
]

export class ScriptsRepository {
  static async getScripts(optionsGetScripts: OptionsGetScripts): Promise<Array<Script>> {
    const { fields, filter } = optionsGetScripts

    const queryFields: String = (fields || SCRIPTS_DEFAULT_FIELDS).join()

    const scriptsQuery = `
        query Scripts($filter: filterScript) {
            scripts(filter: $filter) {
                ${queryFields}
            }
        }
      `

    const { scripts }: ScriptsResponse = await client.query(scriptsQuery, filter && { filter: { ...filter } })

    return scripts
  }
}
