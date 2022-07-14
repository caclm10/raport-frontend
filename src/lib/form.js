import { validationSchema } from "../config/form"

// Set error for react-hook-form library
export const setErrorForm = (setter, errors, setFocus = null) => {
    let first = true

    for (const attribute in errors) {
        if (Object.hasOwnProperty.call(errors, attribute)) {
            const message = errors[attribute]

            setter(attribute, {
                type: 'manual',
                message
            })

            if (first) {
                setFocus && setFocus(attribute)
                first = false
            }
        }
    }
}

export const SCHEMAS = {
    LOGIN: 'login'
}

export const getValidationSchema = name => validationSchema[name]