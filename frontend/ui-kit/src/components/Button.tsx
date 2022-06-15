import { FC, PropsWithChildren } from 'react'

const Button: FC<PropsWithChildren> = ({ children }) => (
  <button className="bg-red-500 text-white">{children}</button>
)

export { Button }
