import { Button } from '@chakra-ui/react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useToggle } from 'react-use';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/use-auth'
import { getValidationSchema, SCHEMAS, setErrorForm } from '../lib/form';
import FormInput from '../components/FormInput';
import ajax from '../lib/ajax';

const LoginPage = () => {
    const { formState: { errors }, handleSubmit, register, setError, setFocus } = useForm({
        defaultValues: {
            user_key: '',
            password: ''
        },
        resolver: yupResolver(getValidationSchema(SCHEMAS.LOGIN)),
    })
    const navigate = useNavigate()
    const auth = useAuth()
    const [isLoading, toggleLoading] = useToggle(false)

    const handleLogin = async data => {
        toggleLoading()
        try {
            const result = await ajax('/api/login', 'POST', data)
            const { user, token } = result.data

            console.log('before navigated')
            auth.login(user, token)
            console.log(user.peran)
            console.log('navigated')
            navigate(`/panel/${user.peran}/dashboard`, { replace: true })
            console.log('after navigated')
        } catch (error) {
            if (error.code === 422) setErrorForm(setError, error.data, setFocus)
            toggleLoading()
        }
    }

    return (
        <>
            <form action="#" onSubmit={handleSubmit(handleLogin)}>
                <FormInput
                    label="NIS/NIP/Kode"
                    name="user_key"
                    register={register}
                    error={errors.user_key?.message}
                />

                <FormInput
                    type="password"
                    label="Password"
                    name="password"
                    register={register}
                    error={errors.password?.message}
                />

                <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                    Login
                </Button>
            </form>
        </>
    )
}

export default LoginPage