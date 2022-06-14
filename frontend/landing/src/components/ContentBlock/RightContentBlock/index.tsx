import { Col, Row } from 'antd'
import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'
import { Button } from '../../../common/Button'
import { SvgIcon } from '../../../common/SvgIcon'
import { ContentBlockProps } from '../types'
import {
  ButtonWrapper,
  Content,
  ContentWrapper,
  RightBlockContainer
} from './styles'

const scrollTo = (id: string) => {
  const element = document.getElementById(id) as HTMLDivElement
  element.scrollIntoView({
    behavior: 'smooth'
  })
}

const RightBlock = ({
  title,
  content,
  button,
  icon,
  id
}: ContentBlockProps) => {
  const { t } = useTranslation()

  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <ButtonWrapper>
                {typeof button === 'object' &&
                  button.map((item: any) => (
                    <Button
                      key={item.title}
                      color={item.color}
                      fixedWidth
                      onClick={() => scrollTo('about')}
                    >
                      {t(item.title)}
                    </Button>
                  ))}
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  )
}

export default RightBlock
