import { FormControl, FormLabel, FormErrorMessage, Input, InputGroup, InputLeftElement, Icon } from "@chakra-ui/react";
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
    maxW = 'full',
    leftIcon = null,
    ...rest
}, ref) => {
    return (
        <FormControl
            mb={5}
            maxW={maxW}
            isInvalid={!!error}
        >
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <InputGroup>
                {leftIcon &&
                    <InputLeftElement
                        pointerEvents='none'
                        children={<Icon as={leftIcon} color='gray.500' />}
                    />
                }
                <Input
                    type={type}
                    ref={ref}
                    {...register(name)}
                    autoFocus={autoFocus}
                    disabled={disabled}
                    readOnly={readOnly}
                    {...rest}
                />
            </InputGroup>
            {error && <FormErrorMessage>{error}</FormErrorMessage>}
        </FormControl>
    )
})

export default FormInput