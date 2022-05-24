import { Module } from "../types/TestMockType"

export function normalizeMockData(mock: any, module: Module) {
    const mockData = mock.data[module]
    const data = mockData && JSON.parse(mockData.data)
    return data && { ...mockData, data }
}

export function buildBaseAsserts(result: unknown, referenceObject: unknown, mock?: unknown) {
    Object.keys(result).filter(key => key !== '__typename').forEach((key) => {
        mock && expect(result[key]).toEqual(mock[key])
        expect(typeof result[key] === typeof referenceObject[key] || result[key] === null).toBeTruthy()
    })
}
