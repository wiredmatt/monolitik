import { FC, PropsWithChildren } from 'react'

const Title: FC<PropsWithChildren> = ({ children }) => (
  <h1 className="text-3xl to-blue-600">{children}</h1>
)

export default Title
