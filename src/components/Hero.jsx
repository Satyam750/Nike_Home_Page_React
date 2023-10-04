import flipkart from "/public/flipkart.png"
import amazon from "/public/amazon.png"
import shoe from "/public/shoe_image.png"

const Hero = () => {
    return (
        <main className='hero container'>
            <div className='hero-content'>
                <h1> YOUR FEET DESERVE THE BEST </h1>
                <p> YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR 
                SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU 
                WITH OUR SHOES.</p>

                <div className="hero-btn">
                  <button>Shop Now</button>
                  <button className='second-btn'> Category</button>
                </div>

                <div className="shopping">
                    <p>
                    Also Available On
                    </p>

                    <div className='brand-icon'>
                        <img src={flipkart} alt="flipkart-logo" />
                        <img src={amazon} alt="amazon-logo" />
                    </div>
                </div>
            
            </div>
            <div className='hero-img'>
            <img src={shoe} alt="hero-image" />
            </div>

        </main>
    )
}

export default Hero
