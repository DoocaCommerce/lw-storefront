import { UserService } from '../UserService'
import { User, UserFields } from '../UserTypes'
import "isomorphic-fetch"

describe('User Module', () => {
    it('Should do login and return User with all fields successfully', async () => {
        const LOGIN_CREDENTIALS = {email: 'diovani.dooca@gmail.com', password: 'Teste123'}
        const loginResult: User = await UserService.doLogin(LOGIN_CREDENTIALS)
        expect(loginResult.active).toEqual(true)
        expect(loginResult.email).toEqual('diovani.dooca@gmail.com')
        expect(loginResult.phone).toEqual('51989029203')
    })

    it('Should do login and return User with all selected successfully', async () => {
        const LOGIN_CREDENTIALS = {email: 'diovani.dooca@gmail.com', password: 'Teste123'}
        const SELECTED_FIELDS:Array<UserFields> = ['id', 'phone']
        const loginResult: User = await UserService.doLogin(LOGIN_CREDENTIALS, SELECTED_FIELDS)
        expect(Object.keys(loginResult).filter(key => key != '__typename')).toEqual(SELECTED_FIELDS)
    })
})