import { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faPalette } from '@fortawesome/free-solid-svg-icons'

import BG from '../../assets/bg.png'

function MainPage() {
  const [latest, setLatest] = useState([])

  useEffect(() => {
    const getLatest = async () => {
      axios.get('/api/novel/latest')
        .then((resp) => {
          setLatest(resp.data)
        })
    }

    getLatest()
  }, [])

  return (
    <div className='text-[#2a2e3b]'>
      <header className='w-screen h-[600px] mb-[150px] mt-[60px] bg-[#2a2e3b] flex justify-between items-center'>
        <div className='w-[60%] flex justify-center items-end'>
          <div className='font-[900] font-[Noto] text-6xl text-white mr-4'>가벼운</div>
          <div className='font-[500] font-[Noto] text-5xl text-white'>소설을 위한 서비스</div>
        </div>

        <img className='w-[40%] h-[600px] object-cover' src={BG} alt="" />
      </header>

      <div className='section w-screen flex flex-col items-center'>
        <div className='font-[600] font-[Lexend] text-4xl mb-12'>Latest</div>

        <div className='w-[80vw] flex flex-wrap justify-center items-center'>
          { latest.map((el: any, idx: number) => (
            <div key={idx} className='card m-12 rounded-xl flex items-center justify-center transition duration-300 hover:scale-105 cursor-pointer'>
              <img className='w-[150px] h-[200px] rounded-lg object-cover z-10' src={el.cover} alt="" />
              <div className='w-[250px] h-[180px] pl-12 pt-4 pr-4 -ml-6 bg-white rounded-lg border-[.5px] border-zinc-200'>
                <div className='font-[Noto] font-[700] text-xl w-[180px] mb-4 truncate'>{ el.title }</div>
                <div className='flex items-center'>
                  <FontAwesomeIcon className='w-4 h-4 mr-1 text-[#ff6e6e]' icon={faPencil} />
                  <div className='font-[Noto] font-[400] text-md'>{ el.author.split(', ')[0].split(' (')[0] }</div>
                </div>
                <div className='flex items-center mb-2'>
                  <FontAwesomeIcon className='w-4 h-4 mr-1 text-[#5a83ff]' icon={faPalette} />
                  <div className='font-[Noto] font-[400] text-md'>{ el.author.split(', ')[1].split(' (')[0] }</div>
                </div>
                <div className='font-[Lexend] font-[600] text-lg'>₩{ el.priceStandard }</div>


              </div>
            </div>
          )) }
        </div>

      </div>
    </div>
  )
}

export default MainPage