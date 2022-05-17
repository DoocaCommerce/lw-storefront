import { Module } from "../types/TestMockType"

export function normalizeMockData(mock: any, module: Module) {
    const mockData = mock.data[module]
    const data = mockData && JSON.parse(mockData.data)
    return data && { ...mockData, data }
}

export function buildBaseAsserts(result: unknown, mock: unknown, referenceObject: unknown) {
    Object.keys(result).forEach((key) => {
        expect(result[key]).toEqual(mock[key])
        expect(typeof result[key]).toEqual(typeof referenceObject[key])
    })
}
