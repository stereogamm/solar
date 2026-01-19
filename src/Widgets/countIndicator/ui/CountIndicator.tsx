import { Indicator } from "@mantine/core"
import { useBodies } from "../../../store/store"


export const CountIndicator = () => {
    const count = useBodies()

    return(
        <>
            <Indicator 
            inline
            processing 
            color="black.15" 
            size={25}
            offset={2} 
            position="top-end"  
            withBorder
            radius="lg"
            label={count}
            autoContrast
            >
            </Indicator>
        </>
    )
}