import Hero from '../Hero Section/Hero'
import wave from "../../../assets/wave.svg"


const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center relative min-h-[calc(100vh-116px)]'>
      <Hero/>
      <img className='absolute bottom-0 w-full' src={wave} alt="" />
    </div>
  )
}

export default Home
