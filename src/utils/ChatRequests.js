import axios from 'axios';
const API= axios.create({baseURL: 'https://movix.jith.shop/api'})
export const userChats=(id)=> API.get(`/chat/${id}`)
export const findChats=(id)=> API.get(`/chat/${id}`)