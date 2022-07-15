import { Box, Center, Text } from "@chakra-ui/react"
import { useUiStore } from "../stores/ui-store"

const FullLoading = () => {
    const isFullLoading = useUiStore(state => state.isFullLoading)
    const loadingText = useUiStore(state => state.loadingText)

    if (!isFullLoading) return <></>

    return (
        <Box
            position="fixed"
            inset={0}
            bgColor="purple.500"
            zIndex={10000000}
            display="flex"
        >
            <Box m="auto">
                <>
                    {/*?xml version="1.0" encoding="utf-8"?*/}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        style={{
                            margin: "auto",
                            background: "none",
                            display: "block",
                            shapeRendering: "auto"
                        }}
                        width="200px"
                        height="200px"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="xMidYMid"
                    >
                        <g transform="translate(50 50) scale(0.7000000000000001) translate(-50 -50)">
                            <g>
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    repeatCount="indefinite"
                                    calcMode="spline"
                                    dur="4s"
                                    values="0 50 50;90 50 50;180 50 50;270 50 50;360 50 50"
                                    keyTimes="0;0.25;0.5;0.75;1"
                                    keySplines="0 1 0 1;0 1 0 1;0 1 0 1;0 1 0 1"
                                />
                                <g>
                                    <animateTransform
                                        attributeName="transform"
                                        type="scale"
                                        dur="1s"
                                        repeatCount="indefinite"
                                        calcMode="spline"
                                        values="1;1;0.5"
                                        keyTimes="0;0.5;1"
                                        keySplines="1 0 0 1;1 0 0 1"
                                    />
                                    <g transform="translate(25 25)">
                                        <rect x={-25} y={-25} width={52} height={52} fill="#fefefe">
                                            <animate
                                                attributeName="fill"
                                                dur="4s"
                                                repeatCount="indefinite"
                                                calcMode="spline"
                                                values="#fefefe;#fefefe;#fefefe;#fefefe;#fefefe"
                                                keyTimes="0;0.25;0.5;0.75;1"
                                                keySplines="0 1 0 1;0 1 0 1;0 1 0 1;0 1 0 1"
                                            />
                                        </rect>
                                    </g>
                                    <g transform="translate(25 75)">
                                        <rect x={-25} y={-25} width={52} height={50} fill="#fefefe">
                                            <animateTransform
                                                attributeName="transform"
                                                type="scale"
                                                dur="1s"
                                                repeatCount="indefinite"
                                                calcMode="spline"
                                                values="0;1;1"
                                                keyTimes="0;0.5;1"
                                                keySplines="1 0 0 1;1 0 0 1"
                                            />
                                            <animate
                                                attributeName="fill"
                                                dur="4s"
                                                repeatCount="indefinite"
                                                calcMode="spline"
                                                values="#fefefe;#fefefe;#fefefe;#fefefe;#fefefe"
                                                keyTimes="0;0.25;0.5;0.75;1"
                                                keySplines="0 1 0 1;0 1 0 1;0 1 0 1;0 1 0 1"
                                            />
                                        </rect>
                                    </g>
                                    <g transform="translate(75 25)">
                                        <rect x={-25} y={-25} width={50} height={52} fill="#fefefe">
                                            <animateTransform
                                                attributeName="transform"
                                                type="scale"
                                                dur="1s"
                                                repeatCount="indefinite"
                                                calcMode="spline"
                                                values="0;1;1"
                                                keyTimes="0;0.5;1"
                                                keySplines="1 0 0 1;1 0 0 1"
                                            />
                                            <animate
                                                attributeName="fill"
                                                dur="4s"
                                                repeatCount="indefinite"
                                                calcMode="spline"
                                                values="#fefefe;#fefefe;#fefefe;#fefefe;#fefefe"
                                                keyTimes="0;0.25;0.5;0.75;1"
                                                keySplines="0 1 0 1;0 1 0 1;0 1 0 1;0 1 0 1"
                                            />
                                        </rect>
                                    </g>
                                    <g transform="translate(75 75)">
                                        <rect x={-25} y={-25} width={50} height={50} fill="#fefefe">
                                            <animateTransform
                                                attributeName="transform"
                                                type="scale"
                                                dur="1s"
                                                repeatCount="indefinite"
                                                calcMode="spline"
                                                values="0;1;1"
                                                keyTimes="0;0.5;1"
                                                keySplines="1 0 0 1;1 0 0 1"
                                            />
                                            <animate
                                                attributeName="fill"
                                                dur="4s"
                                                repeatCount="indefinite"
                                                calcMode="spline"
                                                values="#fefefe;#fefefe;#fefefe;#fefefe;#fefefe"
                                                keyTimes="0;0.25;0.5;0.75;1"
                                                keySplines="0 1 0 1;0 1 0 1;0 1 0 1;0 1 0 1"
                                            />
                                        </rect>
                                    </g>
                                </g>
                            </g>
                        </g>
                        {/* [ldio] generated by https://loading.io/ */}
                    </svg>
                </>

                <Center>
                    <Text color="white">{loadingText}</Text>
                </Center>
            </Box>
        </Box>
    )
}

export default FullLoading