import { client } from '../../services/GraphqlService'
import { LoginRespose, OptionsDoLogin, User } from './UserTypes'

const USER_ADDRESS_DEFAULT_FIELDS = [
    'id',
    'receiver',
    'zip_code',
    'street',
    'city',
    'state',
    'number',
    'detail'
]

const USER_GROUP_DEFAULT_FIELDS = [
    'id',
    'name'
]

const USER_IMAGE_DEFAULT_FIELDS = [
    'src',
    'alt'
]

const USER_COMPLEX_FIELDS = {
    group: `group {${USER_GROUP_DEFAULT_FIELDS.join()}}`, 
    address: `address {${USER_ADDRESS_DEFAULT_FIELDS.join()}}`, 
    image: `image {${USER_IMAGE_DEFAULT_FIELDS.join()}}`
}

const USER_DEFAULT_FIELDS = [
    'id',
    'email',
    'first_name',
    'last_name',
    'gender',
    'newsletter',
    'marketplace',
    'customer_group_id',
    'external_id',
    'entity',
    'company',
    'ie',
    'birthday',
    'phone',
    'token',
    'reset_token',
    'note',
    'facebook_id',
    'google_id',
    'active',
    'created_at',
    'updated_at',
    'doc',
    USER_COMPLEX_FIELDS.address,
    USER_COMPLEX_FIELDS.group,
    USER_COMPLEX_FIELDS.image
]

export class UserRepository {
    private static replaceComplexUserFields(fields: Array<String>): Array<String> {
        Object.keys(USER_COMPLEX_FIELDS).forEach(key => {
            const indexOfField = fields.indexOf(key)
            const isFieldSelected = indexOfField != -1 
            isFieldSelected && (fields[indexOfField] = USER_COMPLEX_FIELDS[key])
        })

        return fields
    }

    static async doLogin(optionsDoLogin: OptionsDoLogin): Promise<User> {
        const { fields, credentials } = optionsDoLogin
        const queryFields = (fields ? this.replaceComplexUserFields(fields) : USER_DEFAULT_FIELDS).join()

        const loginQuery = `
            query Login($credentials: Credentials) {
                login(credentials: $credentials) {
                    ${queryFields}
                }
            }
        `

        const { login }:LoginRespose = await client.query(loginQuery, credentials && {credentials: {...credentials}})
        return login
    }
}
