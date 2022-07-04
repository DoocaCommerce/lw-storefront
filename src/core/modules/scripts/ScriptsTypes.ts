import { nullable } from '../../types/NullableTypes'

export interface Script {
  id?: nullable<String>
  position?: nullable<Number>
  name?: nullable<String>
  location?: nullable<String>
  page?: nullable<String>
  load_method?: nullable<String>
  content?: nullable<String>
  category?: nullable<String>
  active?: nullable<Boolean>
  description?: nullable<String>
  url?: nullable<String>
}

export interface ScriptsResponse {
  scripts: Array<Script>
}

export interface ScriptFilter {
  page?: nullable<String>
  location?: nullable<String>
}

export interface OptionsGetScripts {
  fields: nullable<Array<ScriptFields>>
  filter?: ScriptFilter
}

export type ScriptFields =
  | 'id'
  | 'position'
  | 'name'
  | 'location'
  | 'page'
  | 'load_method'
  | 'content'
  | 'category'
  | 'active'
  | 'description'
  | 'url'
