import { Module } from "../types/TestMockType"

export function normalizeMockData(mock: any, module: Module) {
    const mockData = mock.data[module]
    const data = mockData && JSON.parse(mockData.data)
    return data && { ...mockData, data }
}
