import Header from '../Header'
import './index.css'

const Home = () => {
  console.log('Home')
  return (
    <div>
      <Header />
      <div className="home-bg-container">
        <div className="text-container">
          <h1>Clothes That Get You Noticed</h1>
          <p>Fashion is part of the daily air</p>
          <button className="shop-btn" type="button">
            Shop Now
          </button>
        </div>
        <img
          className="banner-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
        />
      </div>
    </div>
  )
}

export default Home
