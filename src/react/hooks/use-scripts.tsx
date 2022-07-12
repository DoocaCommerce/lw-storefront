import { useEffect, useState } from 'react'
import { ScriptFields } from '../../core/modules/scripts/ScriptsTypes'
import { services } from '../../core'

interface ScriptsHookParam {
  page?: string
  location?: string
}

export function useScripts({ page, location }: ScriptsHookParam, fields?: Array<ScriptFields>): any {
  const [scripts, setScripts] = useState<any>()

  async function getScriptsByFilter({ page, location }: ScriptsHookParam, fields?: Array<ScriptFields>) {
    const service = page ? services.scripts.getListByPage : services.scripts.getListByLocation
    const param = page ?? location

    const scripts = await service(param, fields)
    setScripts(scripts)
  }

  async function getAllScripts(fields?: Array<ScriptFields>) {
    const scripts = await services.scripts.getList(fields)
    setScripts(scripts)
  }

  useEffect(() => {
    page || location ? getScriptsByFilter({ page, location }, fields) : getAllScripts(fields)
  }, [])

  return scripts
}
