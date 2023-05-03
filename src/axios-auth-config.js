import axios from "axios";

export const adminWithTokenAuth = async () => {
    const axiosAuth = axios.create({withCredentials: true})
    
    axiosAuth.interceptors.request.use(async config => {
        const tokenExp = localStorage.getItem('exp')
        if(tokenExp < Date.now()) {
            const response = await axios.get('http://localhost:1000/api/admin/refresh-token', {withCredentials: true})
            config.headers.Authorization = 'Bearer '  + response.data.dataToken.token
            localStorage.setItem('token', response.data.dataToken.token)
            localStorage.setItem('tokenExp', response.data.dataToken.exp)
        }
        return config
    }, (error) => Promise.reject('promise rejected'))

    const response = await axiosAuth.get('http://localhost:1000/api/admin/auth', {
        withCredentials: true,
        headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}
    })
    return response.data
}