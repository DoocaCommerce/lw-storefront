import { client } from '../../services/GraphqlService'
import { OptionsGetScripts, Script, ScriptFields, ScriptsResponse } from './ScriptsTypes'

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
  private static async getScripts(optionsGetScripts: OptionsGetScripts): Promise<Array<Script>> {
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

  static async getAllScripts(fields?: Array<ScriptFields>): Promise<Array<Script>> {
    return this.getScripts({fields: fields || null})
  }

  static async getScriptsByPage(page: String, fields?: Array<ScriptFields>): Promise<Array<Script>> {
    return this.getScripts({filter: {page: page}, fields: fields || null})
  }

  static async getScriptsByLocation(location: String, fields?: Array<ScriptFields>): Promise<Array<Script>> {
    return this.getScripts({filter: {location: location}, fields: fields || null})
  }
}
