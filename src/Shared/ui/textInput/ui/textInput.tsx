import { TextInput, type TextInputProps } from "@mantine/core"

export const CustomTextInput = ({ variant, size, radius="lg", label, description, placeholder, ...other} : TextInputProps) => {
    return(
     <TextInput
    variant={variant}
    size={size}
    radius={radius}
    label={label}
    description={description}
    placeholder={placeholder}
    {...other} />
    )
} 


