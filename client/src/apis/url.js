import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const baseUrl = import.meta.env.VITE_BASEURL

export const getAllLinks = async () => {
    try {
        const data = await axios.get(`${baseUrl}/url/all`, {
            withCredentials: true,
        });
        console.log(data);
        return data.data;

    } catch (error) {
        
    }
}

