import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import useAuth from '../hooks/use-auth'

const LoginPage = () => {
    const auth = useAuth()

    console.log(auth)

    return (
        <>
            <form action="#">
                <FormControl mb={5}>
                    <FormLabel htmlFor='id'>NIS/NIP/Kode</FormLabel>
                    <Input id='id' name="id" type='text' />
                </FormControl>

                <FormControl mb={5}>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <Input id='password' name="password" type='password' />
                </FormControl>


                <Button colorScheme="purple" width="100%">
                    Login
                </Button>
            </form>
        </>
    )
}

export default LoginPage