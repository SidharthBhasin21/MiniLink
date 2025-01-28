import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const baseUrl = import.meta.env.VITE_BASEURL
// console.log(baseUrl);
export const userLoginApi = async (userData) => {
    
    try {
        const response = await axios.post(`${baseUrl}/auth/login`, userData, {
            withCredentials: true,
        });
        console.log(response);
        if(response.status === 200) {
            const {token,user} = response.data;
            console.log(user)
            localStorage.setItem('token', token);
            toast.success( `Welcome! ${response.data.user.name}`);    
            return {token, user};
        } else {
            toast.error('somthing went wrong'); 
        }
        
    } catch (error) {
        if(error.response.status === 404 || error.response.status === 401){
            toast.error(error.response.data.message);
        }  else  {
            console.log(error);
            toast.error('somthing went wrong');
        }
        return null;
    }
};

export const userSignupApi = async (userData) => {
    try {
        const response = await axios.post(`${baseUrl}/auth/register`, userData);
        console.log(userData)
        const { status, message } = response.data;
        if (status === 'success') {
            toast.success(message);
            return true;
        } else {
            toast.error(message);
            return false
        }
    } catch (error) {
        toast.error(error.message);
    }
}
export const userUpdate = async (userData) => {
    try {
        const response = await axios.post(`${baseUrl}/auth/update`, userData, {
            withCredentials: true,
        });

        const { status, message } = response.data;
        if (status === 'success') {
            toast.success(message);
            return true;
        } else {
            toast.error(message);
            return false;
        }
    } catch (error) {
        console.log(error);
        if (error?.response?.data?.message) {
            toast.error(error.response.data.message);
        } else {
            toast.error('Server error');
        }

    }
}
