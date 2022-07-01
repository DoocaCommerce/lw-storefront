import { ScriptsRepository } from './ScriptsRepository'
import { Script, ScriptFields } from './ScriptsTypes'

export class ScriptsService {
  static async getAllSctipts(fields?: Array<ScriptFields>): Promise<Array<Script>> {
    const result: Array<Script> = await ScriptsRepository.getAllScripts(fields)
    return result
  }

  static async getSctiptsByPage(page: String, fields?: Array<ScriptFields>): Promise<Array<Script>> {
    const result: Array<Script> = await ScriptsRepository.getScriptsByPage(page, fields)
    return result
  }

  static async getScriptsByLocation(location: String, fields?: Array<ScriptFields>): Promise<Array<Script>> {
    const result: Array<Script> = await ScriptsRepository.getScriptsByLocation(location, fields)
    return result
  }
}
