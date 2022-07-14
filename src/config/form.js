import * as yup from "yup"

export const validationSchema = {
    login: yup.object({
        user_key: yup
            .string()
            .required('NIS/NIP/Kode harus diisi.'),
        password: yup
            .string()
            .required('Password harus diisi.')
            .min(4, 'Password minimal 4 karakter')
            .max(16, 'Password maksimal 16 karakter')
    }).required()
}