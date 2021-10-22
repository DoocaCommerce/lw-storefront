export default {
  get(params = {}) {
    console.log(params)
    return [{ name: 'Yonex' }, { name: 'Babolat' }]
  }
}
