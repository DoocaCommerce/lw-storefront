export interface Setting {
    shop_id: number
    theme_id: number
    version: string
    page: string
    data: string
}

export interface SettingResponse {
    setting: Setting
}