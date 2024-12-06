import logo from '../assets/krishna.svg'
const Header = () => {
  return (
    <>
    <header className='flex justify-between items-center'>
      <img src={logo} alt="" className='w-20' />
      <ul className='flex items-center gap-2'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Our Speciality</a></li>
        <li><a href="#">Best Dishes</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <button className='bg-emerald-600	 px-8 rounded-2xl items-center flex py-4'>Order Now</button>
    
    </header>
    </>
  )
}

export default Header