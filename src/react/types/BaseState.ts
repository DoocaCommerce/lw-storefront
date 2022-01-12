export interface BaseState<DataType = object> {
  data: any
  loading: boolean
  error?: string | null
}
