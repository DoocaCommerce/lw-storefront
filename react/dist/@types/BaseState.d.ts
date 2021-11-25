export interface BaseState<DataType = object> {
    data: DataType;
    loading: boolean;
    error?: string | null;
}
