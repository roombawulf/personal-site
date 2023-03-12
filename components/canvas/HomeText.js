import { Text } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useEffect } from "react"

function HomeText(){
    const {size} = useThree()

    useEffect(() => {
        
        console.log(size)
    })

    return (
            <Text 
                font='/fonts/cairo-v22-latin-regular.woff'
                fontSize={2 * size.width/size.height}
                color='black'
                >
                    H A R I S
            </Text>
    )
}
export default HomeText