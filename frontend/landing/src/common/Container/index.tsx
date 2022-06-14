import { ContainerProps } from '../types'
import { StyledContainer } from './styles'

const Container = ({ border, children }: ContainerProps) => (
  <StyledContainer border={border}>{children}</StyledContainer>
)

export default Container
