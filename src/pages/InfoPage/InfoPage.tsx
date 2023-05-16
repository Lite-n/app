import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faPalette, faLanguage } from '@fortawesome/free-solid-svg-icons'

function InfoPage() {
  const { state } = useLocation()
  const [data, setData] = useState({} as any)
  const [author, setAuthor] = useState('')
  const [painter, setPainter] = useState('')
  const [translate, setTranslate] = useState('')

  const getData = async () => {
    setData(state.el)
    setAuthor(state.el.author.split(', ')[0].split(' (')[0])
    setPainter(state.el.author.split(', ')[1].split(' (')[0])
    setTranslate(state.el.author.split(', ')[2].split(' (')[0])
  }
  useEffect(() => {
    getData()
  }, [author])

  return (
    <div className='mt-[60px] pt-[100px] w-screen flex flex-col justify-center items-center'>
      <div className='flex justify-center items-center'>
        <img className='w-[250px] h-[350px] mr-12 rounded-lg' src={data.cover} alt="" />

        <div className='flex flex-col items-start'>
          <div className='font-[Noto] font-[600] mb-8 text-2xl w-[520px]'>{ data.title }</div>
          <div className='font-[Noto] font-[400] mb-2 text-xl flex justify-center items-center'>
            <FontAwesomeIcon className='w-6 h-6 mr-4 text-[#ff6e6e]' icon={faPencil} />
            { author }
          </div>
          <div className='font-[Noto] font-[400] mb-2 text-xl flex justify-center items-center'>
            <FontAwesomeIcon className='w-6 h-6 mr-4 text-[#5a83ff]' icon={faPalette} />
            { painter }
          </div>
          <div className='font-[Noto] font-[400] mb-8 text-xl flex justify-center items-center'>
            <FontAwesomeIcon className='w-6 h-6 mr-4 text-green-500' icon={faLanguage} />
            { translate }
          </div>
          <div className='font-[Noto] font-[400] text-lg w-[500px]'>{ data.description ? data.description : "줄거리가 아직 올라오지 않았어요." }</div>
        </div>
      </div>
      
    </div>
  )
}

export default InfoPage