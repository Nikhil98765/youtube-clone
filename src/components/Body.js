import { Sidebar } from './Sidebar'
import { Outlet } from 'react-router-dom';

export const Body = () => {
  return (
    <div className="grid grid-cols-12">
      <Sidebar />
      <Outlet />
    </div>
  )
}
