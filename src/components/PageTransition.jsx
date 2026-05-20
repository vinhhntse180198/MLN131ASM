import { useLocation, Outlet } from 'react-router-dom'

export default function PageTransition() {
  const { pathname, hash } = useLocation()
  const key = hash ? `${pathname}${hash}` : pathname

  return (
    <div key={key} className="c4-page-transition">
      <Outlet />
    </div>
  )
}
