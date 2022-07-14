import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import useAuth from '../hooks/use-auth'
import { getValidationSchema, SCHEMAS, setErrorForm } from '../lib/form';
import FormInput from '../components/FormInput';
import ajax from '../lib/ajax';
import { useToggle } from 'react-use';

const LoginPage = () => {
    const { formState: { errors }, handleSubmit, register, setError, setFocus } = useForm({
        defaultValues: {
            user_key: '',
            password: ''
        },
        resolver: yupResolver(getValidationSchema(SCHEMAS.LOGIN)),
    })
    const auth = useAuth()
    const [isLoading, toggleLoading] = useToggle(false)

    const handleLogin = async data => {
        toggleLoading()
        try {
            const result = await ajax('/api/login', 'POST', data)
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

                <Button type="submit" colorScheme="purple" width="100%" isLoading={isLoading}>
                    Login
                </Button>
            </form>
        </>
    )
}

export default LoginPage