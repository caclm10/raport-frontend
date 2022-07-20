import { FormControl, FormLabel, FormErrorMessage, Input } from "@chakra-ui/react";
import { forwardRef } from "react";

const FormInput = forwardRef(({
    type = 'text',
    name = '',
    label = '',
    error = '',
    register = () => { },
    autoFocus = false,
    disabled = false,
    readOnly = false,
    ...rest
}, ref) => {
    return (
        <FormControl mb={5} isInvalid={!!error}>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <Input
                type={type}
                ref={ref}
                {...register(name)}
                autoFocus={autoFocus}
                disabled={disabled}
                readOnly={readOnly}
                {...rest}
            />
            {error && <FormErrorMessage>{error}</FormErrorMessage>}
        </FormControl>
    )
})

export default FormInput