import { Script, ScriptFields } from '../ScriptsTypes'
import { ScriptsService } from '../ScriptsService'
import "isomorphic-fetch"

const PAGE_FILTER = 'all'
const LOCATION_FILTER = 'header'
const SELECTED_FIELDS: Array<ScriptFields> = ['id', 'name']
 
describe('Script Module', () => {
    it('Should Get all scripts with all fields successfully', async () => {
        const scriptResult: Array<Script> = await ScriptsService.getAllSctipts()
        expect(scriptResult.length).toBeGreaterThan(0)
    })

    it('Should Get scripts by page with all fields successfully', async () => {
        const scriptResult: Array<Script> = await ScriptsService.getSctiptsByPage(PAGE_FILTER)
        expect(scriptResult.length).toEqual(10)
        expect(scriptResult[0].page).toEqual(PAGE_FILTER)
    })

    it('Should Get scripts by location with all fields successfully', async () => {
        const scriptResult: Array<Script> = await ScriptsService.getScriptsByLocation(LOCATION_FILTER)
        expect(scriptResult.length).toEqual(10)
        expect(scriptResult[0].location).toEqual(LOCATION_FILTER)
    })

    it('Should Get all scripts with selected fields successfully', async () => {
        const scriptResult: Array<Script> = await ScriptsService.getAllSctipts([...SELECTED_FIELDS])
        scriptResult.forEach(script => {
            const scriptKeys = Object.keys(script).filter(key => key != '__typename')
            expect(scriptKeys).toEqual(SELECTED_FIELDS)
            expect(scriptKeys.length).toEqual(SELECTED_FIELDS.length)
        }) 
    })
})
