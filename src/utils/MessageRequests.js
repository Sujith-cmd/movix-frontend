import axios from 'axios';
import { messageAxiosIntercepter } from '../hooks/messageAxios';
const API= axios.create({baseURL: 'https://movix.jith.shop/api'})
// const msgApi=messageAxiosIntercepter()


export const getMessages=(id)=> API.get(`/message/${id}`)
export const addMessage=(data)=> API.post(`/message/`,data)
// export const addMessage=(data)=> API.post(`/message/`,data)