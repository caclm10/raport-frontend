import axios from "axios"
import toast from "react-hot-toast"

const instance = axios.create()
instance.defaults.baseURL = 'http://localhost:8000'

instance.interceptors.request.use(config => {
    config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token') || ''

    return config
})

const parseResp = resp => {
    const { message, ...data } = resp.data

    return {
        message: message || resp.statusText,
        code: resp.status,
        data,
        ok: resp.status < 400,
    }
}

// This function needed for laravel error validation response
const parseValidationError = errors => {
    for (const key in errors) {
        if (Object.hasOwnProperty.call(errors, key)) {
            const value = errors[key];

            errors[key] = value[0]
        }
    }

    return errors
}

const ajax = async (url, method, data = {}, params = {}) => {
    try {
        const resp = await axios({ method, url, data, params })

        return parseResp(resp)
    } catch (error) {
        const errResp = error.response
        const errReq = error.request

        let errRes = {
            message: '',
            code: null,
            data: null,
            ok: false
        }

        if (errResp) {
            errRes = parseResp(errResp)

            if (errRes.code === 422) errRes.data = parseValidationError(errRes.data.errors)
        }
        else if (errReq) errRes.message = 'Request time out'
        else errRes.message = 'Request error'

        if (errRes.code !== 422) {
            toast.error(errRes.message, {
                duration: 2000,
                position: 'top-right',
            })
        }

        return errRes
    }
}

export default ajax