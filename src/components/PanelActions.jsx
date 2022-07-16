import { HStack } from '@chakra-ui/react'

const PanelActions = ({ children, spacing = 3, mb = 5, justify = 'flex-end', ...rest }) => <HStack
    spacing={spacing}
    justify={justify}
    mb={mb}
    {...rest}
>{children}</HStack>

export default PanelActions