import { FC } from 'react'
import { useToggle } from '../provider/context'
import SidenavHeader from './header'
import SidenavItems from './items'
import css from './style.module.css'

const style = {
  mobilePosition: {
    left: 'left-0 ',
    right: 'right-0 lg:left-0'
  },
  container: `pb-32 lg:pb-12`,
  close: `duration-100 ease-out hidden transition-all lg:w-24`,
  open: `absolute duration-100 ease-in transition-all w-8/12 z-40 sm:w-5/12 md:w-64`,
  default: `h-screen overflow-y-auto text-white top-0 lg:absolute bg-gray-900 lg:block lg:z-40`
}

interface IProps {
  mobilePosition: 'left' | 'right'
}

const SideNavigation: FC<IProps> = ({ mobilePosition }) => {
  const { open, ref, setOpen } = useToggle()

  return (
    <aside
      ref={ref}
      className={`${style.default} ${
        style.mobilePosition[mobilePosition]
      } 
        ${open ? style.open : style.close} ${css.scrollbar}`}
      onMouseLeave={() => setOpen(false)}
      onMouseEnter={() => setOpen(true)}
    >
      <div className={style.container}>
        <SidenavHeader />
        <SidenavItems />
      </div>
    </aside>
  )
}

export default SideNavigation
