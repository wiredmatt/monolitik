import { Label } from '../TextArea/styles'
import { InputProps } from '../types'
import { Container, StyledInput } from './styles'

const Input = ({ name, placeholder, onChange }: InputProps) => (
  <Container>
    <Label htmlFor={name}>{name}</Label>
    <StyledInput
      placeholder={placeholder}
      name={name}
      id={name}
      onChange={onChange}
    />
  </Container>
)

export default Input
