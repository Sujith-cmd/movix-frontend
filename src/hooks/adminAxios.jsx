


import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { adminAPI } from '../utils/UserRequest';

const adminAxiosIntercepter = () => {
    const { token} = useSelector((state) => state.home);
    const navigate = useNavigate();
    useEffect(() => {
      // Request interceptor
      const reqInterceptor = (config) => {
        // Modify request configuration, e.g., set headers
        config.headers['Authorization'] = token
        return config;
      };
  
      // Response interceptor
      const resInterceptor = (response) => response;
  
      // Error interceptor
      const errInterceptor = (error) => {
        if (error.response && error.response.status === 401) {
          navigate('/adminSignIn');
        }
        return Promise.reject(error);
      };
  
      const reqInterceptorId = adminAPI.interceptors.request.use(reqInterceptor);
      const resInterceptorId = adminAPI.interceptors.response.use(resInterceptor, errInterceptor);
  
      // Clean up interceptors on component unmount
      return () => {
        adminAPI.interceptors.request.eject(reqInterceptorId);
        adminAPI.interceptors.response.eject(resInterceptorId);
      };
    }, []);
  
    return adminAPI
  };
  
  export default adminAPI;

export { adminAxiosIntercepter}