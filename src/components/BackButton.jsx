import { Button } from "@chakra-ui/react"
import { HiOutlineArrowLeft } from "react-icons/hi"
import { Link } from "react-router-dom"

const BackButton = ({
    to = '',
    size = 'sm'
}) => {
    return (
        <Button
            leftIcon={<HiOutlineArrowLeft />}
            size={size}
            as={Link}
            to={to}
        >
            Back
        </Button>
    )
}

export default BackButton