import axios from 'axios'

const install = (store) => {
  obj.store = store
}

const obj = {
  store: null,
  count: 0,
  loader: true
}

const xhr = axios.create({
  // baseURL: process.env.VUE_APP_API_URL,
  timeout: 30000,
})

xhr.interceptors.response.use(response => {
  checkLoading()

  return response
}, (error) => {
  console.log(error);

  checkLoading()

  // if (error.response.status === 404) {
  //   store.dispatch('notFound', true)
  // }

  // if (error.response.status === 401) {
  //   store.dispatch('logout')
  // }

  return Promise.reject(error.response)
})

xhr.interceptors.request.use(config => {
  // const token = StorageService.BEARER_TOKEN
  // config.headers.Authorization = `Bearer ${token}`
  obj.count++

  if (obj.loader) {
    obj.store.commit('theme/SET_LOADING', true)
  }

  window.headers = {
    Authorization: config.headers.Authorization
  }

  return config
})

const checkLoading = () => {
  obj.loader = true
  obj.count--

  if (obj.count <= 0) {
    obj.count = 0

    setTimeout(() => {
      if (obj.count == 0) {
        obj.store.commit('theme/SET_LOADING', false)
      }
    }, 200)
  }
}

function request(uri) {
  return {
    async get(params) {
      const res = await xhr.get(uri, { params: params })
      console.log(res);
      return res.data
    },

    async delete(data) {
      const res = await xhr.delete(uri, { data: data })
      return res.data
    },

    noLoader(loading) {
      obj.loader = loading
    }
  }
}

export default request
export { install }
