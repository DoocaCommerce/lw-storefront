import { ScriptsRepositoryGql } from './ScriptsRepositoryGql'
import { ScriptsRepositoryJson } from './ScriptsRepositoryJson'
import { Script, ScriptFields } from './ScriptsTypes'

const Repository = dc_config.mock?.scripts ? ScriptsRepositoryJson : ScriptsRepositoryGql

export class ScriptsService {
  static async getAllSctipts(fields?: Array<ScriptFields>): Promise<Array<Script>> {
    const result: Array<Script> = await Repository.getAllScripts(fields)
    return result
  }

  static async getScriptsByPage(page: String, fields?: Array<ScriptFields>): Promise<Array<Script>> {
    const result: Array<Script> = await Repository.getScriptsByPage(page, fields)
    return result
  }

  static async getScriptsByLocation(location: String, fields?: Array<ScriptFields>): Promise<Array<Script>> {
    const result: Array<Script> = await Repository.getScriptsByLocation(location, fields)
    return result
  }
}
