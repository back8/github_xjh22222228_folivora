import { get } from '@/utils/http'

export function getUser() {
  return get('/user')
}
