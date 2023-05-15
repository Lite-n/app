
function Navigation() {
  return (
    <nav className='fixed flex justify-around items-center w-screen h-[60px] -mt-[60px] bg-white/90 border-b border-b-neutral-100 backdrop-blur-lg z-50'>
      <div className='font-bold text-xl text-[#2a2e3b]'>Lite</div>
      <button className='w-[65px] h-[30px] pt-1 outline-none rounded-full bg-[#2a2e3b] text-white font-[Noto] font-[600]'>로그인</button>
    </nav>
  )
}

export default Navigation