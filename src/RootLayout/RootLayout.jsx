import { Outlet } from 'react-router'
import Navbar from '../Pages/SharedPages/Navbar/Navbar'

const RootLayout = () => {
  return (
    <div>
        <div className='h-16'>
        <Navbar/>
        </div>
        <Outlet/>
        
      
    </div>
  )
}

export default RootLayout
