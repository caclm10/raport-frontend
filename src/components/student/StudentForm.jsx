import { Box, Text } from "@chakra-ui/react"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import isEmpty from 'lodash.isempty'
import { useDataStore } from "../../stores/data-store"
import FormInput from "../FormInput"

const StudentForm = ({
    type,
    data = {},
    formId = '',
    isLoading = false
}) => {
    if (!type) return <></>

    const { formState: { errors }, handleSubmit, register, reset, setError, setFocus, setValue } = useForm({
        defaultValues: {
            nis: '',
            nisn: '',
            nama: ''
        }
    })

    const addStudent = useDataStore(state => state.addStudent)
    const updateStudent = useDataStore(state => state.updateStudent)
    const fetchStudents = useDataStore(state => state.fetchStudents)

    const handleSave = async formData => {
        if (type === 'create') await addStudent(formData, setError, setFocus, reset)
        else if (type === 'edit') await updateStudent(formData, data.id, setError, setFocus)

        await fetchStudents()
    }

    useEffect(() => {
        if (!isEmpty(data)) {
            for (const attr in data) {
                if (Object.hasOwnProperty.call(data, attr)) {
                    const value = data[attr];
                    setValue(attr, value)
                }
            }
        }
    }, [data])

    return (
        <Box as="form" action="#" id={formId} onSubmit={handleSubmit(handleSave)} position="relative">

            {/* {isLoading &&
                <Box
                    position="absolute"
                    inset={0}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bgColor="#ffffff87"
                    zIndex={100}
                >
                    <Text>Loading...</Text>
                </Box>
            } */}

            <FormInput
                name="nis"
                label="NIS"
                register={register}
                error={errors.nis?.message}
                autoFocus
            />
            <FormInput
                name="nisn"
                label="NISN"
                register={register}
                error={errors.nisn?.message}
            />
            <FormInput
                name="nama"
                label="Nama"
                register={register}
                error={errors.nama?.message}
            />

        </Box>
    )
}

export default StudentForm