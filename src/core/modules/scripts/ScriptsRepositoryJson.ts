import { ScriptFields } from './ScriptsTypes'

export class ScriptsRepositoryJson {
  static async getAllScripts(fields?: Array<ScriptFields>) {
    const result = dc_config.mock?.scripts
    return result || {}
  }

  static async getScriptsByPage(page: String, fields?: Array<ScriptFields>) {
    const scripts = dc_config.mock?.scripts
    const result = scripts && scripts.filter(script => script.page == page)
    return result || {}
  }

  static async getScriptsByLocation(location: String, fields?: Array<ScriptFields>) {
    const scripts = dc_config.mock?.scripts
    const result = scripts && scripts.filter(script => script.location == location)
    return result || {}
  }
}
