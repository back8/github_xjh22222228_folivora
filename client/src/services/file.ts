import { get, post } from '@/utils/http'

export function getDir() {
  return get('/dir')
}

export function createDir(dirName: string) {
  return post('/dir')
}
