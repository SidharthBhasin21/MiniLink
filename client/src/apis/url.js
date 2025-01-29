import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const baseUrl = import.meta.env.VITE_BASEURL

export const createLink = async (data) => {
    try {
        const response = await axios.post(`${baseUrl}/url/shorten`, data, {
            withCredentials: true,
        });
        if(response.data.status == "success"){
            toast.success(response.data.message)
            return response.data
        } else {
            toast.error(response.data.message)
            return response.data
        }
    } catch (error) {
        toast.error(error?.response?.data?.message)
        console.log(error)
        return;
    }
}

export const getAllLinks = async () => {
    try {
        const data = await axios.get(`${baseUrl}/url/all`, {
            withCredentials: true,
        });
        console.log(data);
        return data;

    } catch (error) {
        
    }
}
export const getDashboard = async ()=> {
    try {
        const data = await axios.get(`${baseUrl}/url/dashboard`,{
            withCredentials: true,
        })
        console.log(data)
        if(data.status === 200){
            return data.data
        } else {
            toast.error(data.data.message)
            return data
        }
    } catch (error) {

        toast.error(error?.response?.data?.message)
    }
}
export const deleteLink = async (id) => {
    try {
        const data = await axios.delete(`${baseUrl}/url/delete/${id}`, {
            withCredentials: true,
        });
        const response = data.data;
        if(response.status == "success"){
            toast.success(response.message)
            return response
        } else {
            toast.error(response.message)
            return response
        }
    } catch (error) {
        toast.error(error?.response?.data?.message)
        console.log(error)
        return;
    }
}

export const editLink = async (id, data) => { // Added this function
    try {
        const response = await axios.put(`${baseUrl}/url/edit/${id}`, data, {
            withCredentials: true,
        });
        if(response.data.status == "success"){
            toast.success(response.data.message)
            return response.data
        } else {
            toast.error(response.data.message)
            return response.data
        }
    } catch (error) {
        toast.error(error?.response?.data?.message)
        console.log(error)
        return;
    }
}

export const getAnalytics = async () => {
    try {
        const data = await axios.get(`${baseUrl}/url/analytics`, {
            withCredentials: true,
        });
        console.log(data);
        return data.data;

    } catch (error) {
        toast.error(error?.response?.data?.message)
        console.log(error)
        return;
    }
}


