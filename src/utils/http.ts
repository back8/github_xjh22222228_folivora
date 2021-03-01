import axios from 'axios'
import NProgress from 'nprogress'
import { ElNotification } from 'element-plus'

const instance = axios.create()
instance.defaults.baseURL = '/api'

interface RespData {
  status: number
  message?: string
  data?: any
}

instance.interceptors.request.use(config => {
  NProgress.start()

  return config
}, error => {
  NProgress.done()
  return Promise.reject(error)
})

instance.interceptors.response.use(resp => {
  NProgress.done()

  const status: number = resp.status

  const data: RespData = resp.data

  if (status !== 200) {
    ElNotification({
      type: 'error',
      title: '',
      message: ''
    })
  }
  
  return resp
}, error => {
  NProgress.done()
  return Promise.reject(error)
})

export const get = instance.get
export const post = instance.post
export const patch = instance.patch
export const del = instance.delete

export default instance
