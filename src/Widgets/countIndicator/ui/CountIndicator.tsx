import { Indicator } from "@mantine/core"


export const CountIndicator = () => {

    const label = 1
    return(
        <>
            <Indicator 
            inline
            processing 
            color="black.12" 
            size={25}
            offset={2} 
            position="top-end"  
            withBorder
            radius="lg"
            label={label}
            autoContrast
            >
            </Indicator>
        </>
    )
}