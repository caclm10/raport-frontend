import { Box, Button, HStack, IconButton } from "@chakra-ui/react"
import { Fragment } from "react"
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi"

const Pagination = ({
    justify = 'flex-end',
    paginator = null,
    fetcher = (url = '') => { }
}) => {
    if (!paginator || paginator.links.length === 1) return <></>

    return (
        <HStack justify={justify}>

            {paginator.links.map((link, index, links) => (
                <Fragment key={link.label}>
                    {index !== 0 && index < links.length - 1 &&
                        <Button
                            key={link.label}
                            size="sm"
                            colorScheme={link.active ? 'purple' : 'gray'}
                            as={link.active ? 'span' : 'button'}
                            onClick={link.active ? null : () => fetcher(link.url)}

                        >
                            {link.label}
                        </Button>
                    }
                    {index === 0 &&
                        <IconButton
                            icon={<HiOutlineChevronLeft />}
                            size="sm"
                            as={link.url ? 'button' : 'span'}
                            onClick={link.url ? () => fetcher(link.url) : null}
                        />
                    }

                    {index === links.length - 1 &&
                        <IconButton
                            icon={<HiOutlineChevronRight />}
                            size="sm"
                            as={link.url ? 'button' : 'span'}
                            onClick={link.url ? () => fetcher(link.url) : null}
                        />
                    }
                </Fragment>
            )
            )}
            {/* <Button
                size="sm"
                variant="ghost"
                disabled
                _disabled={{
                    cursor: 'default'
                }}
            >
                ...
            </Button> */}


        </HStack>
    )
}

export default Pagination