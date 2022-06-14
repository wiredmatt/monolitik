import { useTranslation } from 'react-i18next'
import { Container, Content, TextWrapper } from './styles'

interface Props {
  title: string
  content: string
}

const Block = ({ title, content }: Props) => {
  const { t } = useTranslation()
  return (
    <Container>
      <h6>{t(title)}</h6>
      <TextWrapper>
        <Content>{t(content)}</Content>
      </TextWrapper>
    </Container>
  )
}

export default Block
