import React from 'react'
import "./header.css";
const Header =()=> {
  return (
    <div className='max-width header'>
        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
             alt='Zomato-logo'
             className='header-logo'/>
        <div className='header-right'>
             <div className='header-location-search-container'>
                 <div className='location-wrapper'>
                    <div className='location-icon-name'>
                        <i className="fi fi-br-marker absolute-center location-icon" ></i>
                        <div>Banglore</div>
                    </div>
                    <i className="fi fi-br-caret-down absolute-center"></i>
                 </div>
                 <div className='location-search-separator'></div>
                 <div className='header-searchbar'>
                     <i className="fi fi-br-search absolute-center search-icon"></i>
                     <input 
                        placeholder='Search for restaurant, cuisine or a dish' 
                        className='search-input'></input>
                 </div>
                 <div className='profile-wrapper'>
                       <img src="https://b.zmtcdn.com/data/user_profile_pictures/eba/0997314371649c2d514be8213f5adeba.jpg?fit=around%7C100%3A100&amp;crop=100%3A100%3B%2A%2C%2A" 
                        alt="" /></div>
            </div>
        </div>
    </div>
  )
 
  
};

export default Header