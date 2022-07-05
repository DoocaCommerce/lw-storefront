import { ScriptsRepositoryGql } from './ScriptsRepositoryGql'
import { ScriptsRepositoryJson } from './ScriptsRepositoryJson'
import { Script, ScriptFields } from './ScriptsTypes'

const Repository = dc_config.mock?.scripts ? ScriptsRepositoryJson : ScriptsRepositoryGql

export class ScriptsService {
  static async getFullList(fields?: Array<ScriptFields>): Promise<Array<Script>> {
    const result: Array<Script> = await Repository.getFullList(fields)
    return result
  }

  static async getListByPage(page: String, fields?: Array<ScriptFields>): Promise<Array<Script>> {
    const result: Array<Script> = await Repository.getListByPage(page, fields)
    return result
  }

  static async getListByLocation(location: String, fields?: Array<ScriptFields>): Promise<Array<Script>> {
    const result: Array<Script> = await Repository.getListByLocation(location, fields)
    return result
  }
}
