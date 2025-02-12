import { Outlet } from 'react-router'
import Navbar from '../Pages/SharedPages/Navbar/Navbar'
import Footer from '../Pages/SharedPages/Footer/Footer'

const RootLayout = () => {
  return (
    <div>
      <div className='h-16'>
        <Navbar/>
      </div>
      <div className='min-h-[calc(100vh-116px)]'> {/*navbar ebong footer er height total height 116px*/}
        <Outlet/>
      </div>
        <Footer/>
    </div>
  )
}

export default RootLayout
