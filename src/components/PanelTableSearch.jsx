import { Box } from "@chakra-ui/react"
import debounce from "lodash.debounce"
import { useCallback, useEffect, useState } from "react"
import { HiOutlineSearch } from "react-icons/hi"
import FormInput from "./FormInput"

const PanelTableSearch = ({
    onSearch = keyword => { }
}) => {
    const [search, setSearch] = useState('')

    const handleSearch = useCallback(debounce(search => {
        onSearch(search)
    }, 500), [])

    useEffect(() => {
        handleSearch(search)
    }, [search])

    return (
        <FormInput
            type="search"
            name="search"
            maxW={300}
            value={search}
            leftIcon={HiOutlineSearch}
            placeholder="Cari Siswa..."
            onChange={event => setSearch(event.target.value)}
        />
    )
}

export default PanelTableSearch