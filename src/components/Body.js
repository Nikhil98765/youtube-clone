import { Outlet } from 'react-router-dom';

import { Sidebar } from './Sidebar'

export const Body = () => {
  return (
    <div className="flex content-stretch">
      <Sidebar />
      <Outlet />
    </div>
  )
}
