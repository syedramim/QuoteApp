import { useWindowDimensions } from "react-native"

const deviceDimensions = () => {
    const { width, height } = useWindowDimensions()

    return { width, height }
}

export default deviceDimensions