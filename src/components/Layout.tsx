import {
  Outlet
} from "react-router-dom";
import Sidebar from './Sidebar'

function Layout() {
  return (
    <div className="bg-[rgb(var(--color-primary-purple))] h-screen min-h-[500px] py-3 px-3">
      <div className="grid grid-cols-[min(20%,250px)_1fr] h-full bg-primary-background bg-opacity-40 backdrop-blur-xl rounded-[25px] max-w-[1750px] mx-auto pl-5 py-4 pr-4">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
