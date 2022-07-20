import { UserService } from '../UserService'
import { User, UserFields } from '../UserTypes'
import 'isomorphic-fetch'

describe('User Module', () => {
  it('Should do login and return User with all fields successfully', async () => {
    const LOGIN_CREDENTIALS = { email: 'diovani.dooca@gmail.com', password: 'Teste123' }
    const loginResult: User = await UserService.auth(LOGIN_CREDENTIALS)
    expect(loginResult.active).toEqual(true)
    expect(loginResult.email).toEqual('diovani.dooca@gmail.com')
    expect(loginResult.phone).toEqual('51989029203')
  })

  it('Should do login and return User with all selected successfully', async () => {
    const LOGIN_CREDENTIALS = { email: 'diovani.dooca@gmail.com', password: 'Teste123' }
    const SELECTED_FIELDS: Array<UserFields> = ['id', 'phone']
    const loginResult: User = await UserService.auth(LOGIN_CREDENTIALS, SELECTED_FIELDS)
    expect(Object.keys(loginResult).filter(key => key != '__typename')).toEqual(SELECTED_FIELDS)
  })

  it('Should try to do login with incorrect credentials and an error should be thrown', async () => {
    const LOGIN_CREDENTIALS = { email: 'diovani.dooca@gmail.com', password: 'Teste' }
    expect(async () => await UserService.auth(LOGIN_CREDENTIALS)).rejects.toThrow()
  })

  it('Should do login and try to get User using token with all fields successfully', async () => {
    const LOGIN_CREDENTIALS = { email: 'diovani.dooca@gmail.com', password: 'Teste123' }
    const loginResult: User = await UserService.auth(LOGIN_CREDENTIALS)
    const userResult: User = await UserService.get(loginResult?.token)
    expect(userResult.active).toEqual(loginResult.active)
    expect(userResult.email).toEqual(loginResult.email)
    expect(userResult.phone).toEqual(loginResult.phone)
  })

  it('Should try to get User using invalid token and an error should be thrown', async () => {
    expect(async () => await UserService.get('invalid_token')).rejects.toThrow()
  })
})
