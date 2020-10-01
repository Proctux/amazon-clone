import React from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a?mode=scale&q=90&h=1080&w=1920" alt="" />

        <div className="home__row">
          <Product 
            title="The lean startup"
            price={29.99}
            image="https://img.wook.pt/images/lean-startup-eric-ries/MXwxNDc4MDc5NnwxMDI2MzA0OHwxMzgzNTIzMjAwMDAw/250x"
            rating={5} />
          <Product />
        </div>

        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>

        <div className="home__row">
          <Product />
        </div>
      
      </div>
    </div>
  );
}

export default Home;