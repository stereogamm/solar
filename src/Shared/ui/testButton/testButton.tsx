
type buttonProps = {
    color?: string,
    onClick?: () => void,
    children: string,
}

export const TestButton = ({ color, onClick, children} : buttonProps) => {
    return(
        <>
            <button onClick={onClick} style={{backgroundColor: color}} type='button'>{children}</button>
        </>
    )
}