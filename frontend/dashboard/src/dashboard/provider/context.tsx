/* eslint-disable @typescript-eslint/no-empty-function */
import React, {
  FC,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState
} from 'react'
import { useLocation } from 'react-router-dom'

// create new context
const Context = React.createContext<{
  open: boolean
  ref: React.RefObject<HTMLElement>
  toggle: () => void
  setOpen: (v: boolean) => void
}>({
  open: false,
  ref: React.createRef(),
  toggle: () => {},
  setOpen: () => {}
})

const DashboardProvider: FC<PropsWithChildren> = ({
  children
}) => {
  const [open, setOpen] = React.useState(false)
  const ref = React.useRef<HTMLElement>(null)
  const currentLocation = useLocation()
  const [previousLocation, setPreviousLocation] =
    useState(currentLocation)

  const toggle = React.useCallback(
    () => setOpen(prev => !prev),
    []
  )

  // set the html tag style overflow to hidden
  React.useEffect(() => {
    document.documentElement.style.overflow = 'hidden'
  }, [])

  const updateToggleOnLocationChange = React.useCallback(() => {
    if (currentLocation !== previousLocation) {
      setPreviousLocation(currentLocation)
      if (open) {
        setOpen(false)
      }
    }
  }, [
    currentLocation,
    previousLocation,
    open,
    setOpen,
    setPreviousLocation
  ])

  // close side navigation when you click on a sidenav item.
  React.useEffect(() => {
    updateToggleOnLocationChange()
  }, [currentLocation, updateToggleOnLocationChange])

  const handleOutsideClick = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (event: any) => {
      if (
        !ref.current?.contains(event.target) &&
        event.target.id !== 'side-nav-toggle'
      ) {
        if (!open) return
        setOpen(false)
      }
    },
    [ref, open, setOpen]
  )

  // close side navigation on click outside
  React.useEffect(() => {
    window.addEventListener('click', handleOutsideClick)
    return () => {
      window.removeEventListener('click', handleOutsideClick)
    }
  }, [handleOutsideClick])

  return (
    <Context.Provider
      value={useMemo(
        () => ({ open, ref, toggle, setOpen }),
        [open, ref, toggle]
      )}
    >
      {children}
    </Context.Provider>
  )
}

// custom hook to consume all context values { open, ref, toggle }
export function useToggle() {
  return React.useContext(Context)
}

export default DashboardProvider
