import { FC } from 'react'
import { Button } from '../components'
import Title from '../components/Title'

interface IProps {
  title: string
}

const Hero: FC<IProps> = ({ title }) => (
  <div>
    <Title>{title}</Title>
    <Button>Press me!</Button>
    <Button>Press me x2!</Button>
  </div>
)

export { Hero }
