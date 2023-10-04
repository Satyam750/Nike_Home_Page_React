import brand from "/public/brand_logo.png"

const Nav = () => {
  return (
    <div>
       <nav className='container'>
      <div className='logo'>
        <img src={brand} alt="logo" />
      </div>
        <ul>
          <li href="#">Home</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>logo</button>
      </nav>
    </div>
  )
}

export default Nav
