import { Box, Button } from "@chakra-ui/react"
import { HiOutlinePlus } from 'react-icons/hi'
import { Link } from "react-router-dom"

const AddButton = ({
    text = 'Instance',
    colorScheme = "purple",
    size = 'sm',
    variant = 'solid',
    onClick = () => { },
    to = '',
    ...rest
}) => {
    return (
        <Button
            {...(to ?
                {
                    as: Link,
                    to
                }
                : {})
            }
            leftIcon={<HiOutlinePlus />}
            colorScheme={colorScheme}
            size={size}
            variant={variant}
            onClick={onClick}
            {...rest}
        >
            {text}
        </Button>
    )
}

export default AddButton