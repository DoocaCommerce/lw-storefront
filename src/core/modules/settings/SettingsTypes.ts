export interface Setting<T> {
  shop_id: Number
  theme_id: Number
  version: String
  page: String
  data: T
}

export interface SettingResponse {
  setting: Setting<string>
}
