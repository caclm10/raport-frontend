import { Button } from "@chakra-ui/react"
import { HiOutlineSave } from 'react-icons/hi'

const SaveButton = ({
    text = 'Simpan',
    colorScheme = "purple",
    size = 'sm',
    variant = 'solid',
    onClick = () => { },
    type = 'submit',
    form = '',
    ...rest
}) => {
    return (
        <Button
            leftIcon={<HiOutlineSave />}
            colorScheme={colorScheme}
            size={size}
            variant={variant}
            onClick={onClick}
            type={type}
            form={form}
            {...rest}
        >
            {text}
        </Button>
    )
}

export default SaveButton