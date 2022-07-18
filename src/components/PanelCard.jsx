import { chakra } from '@chakra-ui/react'

export const panelCardVariables = {
    maxW: {
        form: '600px'
    }
}

const PanelCard = chakra('div', {
    baseStyle: {
        p: 5,
        bgColor: 'white',
        rounded: 'xl',
    }
})

export default PanelCard