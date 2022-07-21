import { Table, TableContainer, Thead, Tbody, Tr, Th, Td, Text, Box } from '@chakra-ui/react'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { generateSearchParam } from '../lib/url'
import Pagination from './Pagination'
import PanelTableSearch from './PanelTableSearch'

const PanelTable = ({
    mb = 5,
    data = [],
    columns = [],
    isLoading = false,
    url = '',
    paginator = null,
    onClickDelete = () => { },
    onUrlChange = url => { }
}) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        meta: {
            handleDelete: onClickDelete
        }
    })

    const handleSearch = keyword => {
        if (!url) return
        const newUrl = url + '?' + generateSearchParam(keyword, url)

        onUrlChange(newUrl)
    }

    return (
        <>
            <PanelTableSearch onSearch={handleSearch} />

            <TableContainer position="relative" mb={mb}>
                <Table variant="simple">
                    <Thead>
                        {table.getHeaderGroups().map(headerGroup => (
                            <Tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <Th key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </Th>
                                ))}
                            </Tr>
                        ))}
                    </Thead>
                    <Tbody >
                        {data.length === 0 && isLoading &&
                            <Tr>
                                <Td colSpan="100%" textAlign="center">
                                    <Text color="gray.500">Loading...</Text>
                                </Td>
                            </Tr>
                        }
                        {table.getRowModel().rows.map(row => (
                            <Tr key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <Td key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </Td>
                                ))}
                            </Tr>
                        ))}
                    </Tbody>
                </Table>

                {data.length > 0 && isLoading &&
                    <Box
                        position="absolute"
                        inset={0}
                        display="flex"
                        bgColor="rgba(255,255,255,0.5)"
                    >
                        <Box m="auto">
                            <Text color="gray.500">Loading...</Text>
                        </Box>
                    </Box>
                }
            </TableContainer>

            <Pagination
                paginator={paginator}
                onPageChange={onUrlChange}
            />
        </>
    )
}

export default PanelTable