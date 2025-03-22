import { Outlet } from 'react-router-dom';

import { Sidebar } from './Sidebar'

export const Body = () => {
  return (
    <div className="grid grid-cols-12">
      <Sidebar />
      <Outlet />
    </div>
  )
}
