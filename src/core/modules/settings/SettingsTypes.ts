export interface Setting<T> {
    shop_id: number
    theme_id: number
    version: string
    page: string
    data: T
}

export interface SettingResponse {
    setting: Setting<string>
}
