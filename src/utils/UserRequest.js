import axios from 'axios';
const API= axios.create({baseURL: 'https://movix.jith.shop/api'})
export const getUser=(id)=> API.get(`/users/${id}`)
export const getTheatre=(id)=> API.get(`/vendors/getDetails/${id}`)
export const chatCheck=(fId,sId)=> API.get(`/chat/find/${fId}/${sId}`)
export const createChat=(data)=> API.post(`/chat/`,data)
export const changestatus=(chatId)=> API.post(`/message/changeMsgStatus/${chatId}`)
export const update=(membero,membert)=> API.post(`/chat/change/change/${membero}/${membert}`)


export const userAPI= axios.create({baseURL: 'https://movix.jith.shop/api/users'})
export const vendorAPI= axios.create({baseURL: 'https://movix.jith.shop/api/vendors'})
export const adminAPI= axios.create({baseURL: 'https://movix.jith.shop/api/admin'})
export const chatAPI= axios.create({baseURL: 'https://movix.jith.shop/api/chat'})
export const messageAPI= axios.create({baseURL: 'https://movix.jith.shop/api/message'})
export const reviewAPI= axios.create({baseURL: 'https://movix.jith.shop/api/review'})
