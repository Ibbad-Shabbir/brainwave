import { loading } from "../assets"

const Generating = ({ className }) => {
  return (
    <div className={`flex items-center h-[3.5rem] px-6 bg-n-6/80 backdrop-blur border border-n-5 rounded-[1.7rem] ${className || ''} text-base`}>
      <img src={loading} alt="loading" className='w-5 h-5 mr-4' />
      AI is generating :3
    </div>
  )
}

export default Generating
