import HttpRequest from './HttpRequest'
export default {
  get(params = {}) {
    return HttpRequest('https://jsonplaceholder.typicode.com/posts/1/comments').get(params)
  }
}
