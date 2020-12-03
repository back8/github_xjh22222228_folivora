import axios from 'axios'
import NProgress from 'nprogress'

const instance = axios.create()
instance.defaults.baseURL = '/api'

instance.interceptors.request.use(config => {
  NProgress.start()

  return config
}, error => {
  NProgress.done()
  return Promise.reject(error)
})

instance.interceptors.response.use(response => {
  NProgress.done()
  
  return response
}, error => {
  NProgress.done()
  return Promise.reject(error)
})

export const get = instance.get
export const post = instance.post
export const patch = instance.patch
export const del = instance.delete

export default instance
