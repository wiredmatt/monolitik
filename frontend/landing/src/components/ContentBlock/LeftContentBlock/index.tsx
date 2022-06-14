import { Col, Row } from 'antd'
import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'
import { SvgIcon } from '../../../common/SvgIcon'
import { ContentBlockProps } from '../types'
import {
  Content,
  ContentWrapper,
  LeftContentSection,
  MinPara,
  MinTitle,
  ServiceWrapper
} from './styles'

const LeftContentBlock = ({
  icon,
  title,
  content,
  section,
  id
}: ContentBlockProps) => {
  const { t } = useTranslation()

  return (
    <LeftContentSection>
      <Fade direction="left">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === 'object' &&
                    section.map((item: any) => (
                      <Col key={item.title} span={11}>
                        <SvgIcon
                          src={item.icon}
                          width="60px"
                          height="60px"
                        />
                        <MinTitle>{t(item.title)}</MinTitle>
                        <MinPara>{t(item.content)}</MinPara>
                      </Col>
                    ))}
                </Row>
              </ServiceWrapper>
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </LeftContentSection>
  )
}

export default LeftContentBlock
