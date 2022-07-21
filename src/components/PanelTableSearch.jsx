import debounce from "lodash.debounce"
import { useCallback, useState } from "react"
import { HiOutlineSearch } from "react-icons/hi"
import { useUpdateEffect } from 'react-use'
import FormInput from "./FormInput"

const PanelTableSearch = ({
    search = '',
    onSearch = keyword => { }
}) => {
    const [keyword, setKeyword] = useState(search)

    const handleSearch = useCallback(debounce(text => {
        onSearch(text)
    }, 500), [])

    useUpdateEffect(() => {
        handleSearch(keyword)
    }, [keyword])


    return (
        <FormInput
            type="search"
            name="search"
            maxW={300}
            value={keyword}
            leftIcon={HiOutlineSearch}
            placeholder="Cari Siswa..."
            onChange={event => setKeyword(event.target.value)}
        />
    )
}

export default PanelTableSearch