import axios from 'axios';
import { toast } from 'react-toastify';
import { AdminHook } from 'types/admin-hook';
import { Hook } from 'types/hook';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const getToken = () => {
    if (typeof window !== 'undefined') {
        return window.localStorage.getItem('jwtToken');
    }

    return null;
}

export const registerUser = async (data) => {
    try {
        const response = await axios.post(`${backendUrl}api/auth/register`, data, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        });
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message || error.message || error)
        return false;
    }
}

export const loginUser = async (data) => {
    try {
        const response = await axios.post(`${backendUrl}api/auth/login`, data, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        });
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message || error.message || error);
        return false;
    }
}

export const updateUser = async (data) => {
    try {
        const response = await axios.post(`${backendUrl}api/auth/update-user`, data, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        });
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message || error.message || error);
        return false;
    }
}

export const loginWithJWT = async () => {
    try {
        const response = await axios.get(`${backendUrl}api/auth/login-with-jwt`, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        });
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message || error.message || error);
        return false;
    }
}

export const getHooks = async (jwtToken: string) => {
    const response = await axios.get(`${backendUrl}api/hooks`, {
        headers: {
            Authorization: `Bearer ${jwtToken}`
        }
    });
    return response.data;
}

export const insertHook = async (hook, isUsingAdminHook) => {
    try {
        const response = await axios.post(`${backendUrl}api/hooks/create`, { ...hook, isUsingAdminHook }, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        });
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message || error.message || error);
        return false;
    }
}

export const updateHook = async (hook, isUsingAdminHook) => {
    try {
        const response = await axios.put(`${backendUrl}api/hooks/update/${hook._id}`, { ...hook, isUsingAdminHook }, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        });
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message || error.message || error);
        return false;
    }
}

export const deleteHook = async (id) => {
    try {
        const response = await axios.delete(`${backendUrl}api/hooks/${id}`, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        });
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message || error.message || error);
        return false;
    }
}

export const getHistories = async ({
    perPage = 10,
    searchTerm,
    currentPage = 1
}: {
    perPage: number,
    searchTerm: string;
    currentPage: number
}) => {
    try {
        const response = await axios.get(`${backendUrl}api/histories?perPage=${perPage}&currentPage=${currentPage}&searchTerm=${searchTerm}`, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        })
        return response.data
    } catch (error) {
        toast.error(error.response.data.message || error.message || error);
        return [];
    }
}

export const getUsers = async () => {
    try {
        const response = await axios.get(`${backendUrl}api/users`, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        })
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message || error.message || error);
        return [];
    }
}

export const updateSubscribe = async (id: string) => {
    const response = await axios.put(`${backendUrl}api/users/update-subscribe/${id}`, {}, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
    return response.data;
}

export const deleteUser = async (id: string) => {
    const response = await axios.delete(`${backendUrl}api/users/delete/${id}`, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    })
    return response.data;
}

export const getAdminHooks = async () => {
    const response = await axios.get(`${backendUrl}api/admin/hooks`, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
    return response.data;
}

export const insertAdminHook = async (hook: AdminHook) => {
    try {
        const response = await axios.post(`${backendUrl}api/admin/hooks/create`, hook, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        });
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message || error.message || error);
        return false;
    }
}

export const updateAdminHook = async (hook: AdminHook) => {
    try {
        const response = await axios.put(`${backendUrl}api/admin/hooks/update/${hook._id}`, hook, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        });
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message || error.message || error);
        return false;
    }
}

export const deleteAdminHook = async (id: string) => {
    try {
        const response = await axios.delete(`${backendUrl}api/admin/hooks/${id}`, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        });
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message || error.message || error);
        return false;
    }
}