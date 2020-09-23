import React from 'react';
import './Header.css';

import { Search as SearchIcon, ShoppingBasket } from '@material-ui/icons'

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src="https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png" alt=""/>
      
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <div className="header__optionBasket">
          <ShoppingBasket />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>

      </div>
    </div>
  )
}

export default Header
