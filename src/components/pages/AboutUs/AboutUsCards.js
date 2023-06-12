import React from 'react';
import CardItem from '../../CardItem';
import VideoCardItem from '../../VideoCardItem';
import './AboutUsCards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>WHERE TO PLAY</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>

                <ul className='cards__items'>
                <CardItem 
                    src='../../images/shuttlecockwallpaper.jpg'
                    text='Badminton Gyms in San Diego'
                    label='Info'
                    path='/san-diego-gyms'
                    />
                </ul>

                    <h1>Follow Us On Social Media</h1>
                    <ul className='cards__items'>
                <CardItem 
                    src='../../images/Instagram-Icon.jpg'
                    text='Follow Us On Instagram!'
                    label='Instagram'
                    path='https://www.instagram.com/sdsu.badminton/'
                    />
                <CardItem 
                    src='../../images/Anouncements-icon.jpg'
                    text='Never Miss An Event With Our Anouncements'
                    label='Anouncements'
                    path='https://groupme.com/join_group/86676048/hrbsjc32'
                    />
                </ul>
                
                {/* <ul className='cards__items'>
                <VideoCardItem
                    src='../videos/video-2.mp4'
                    text='Explore the hidden waterfall deep inside the Amazon jungle'
                    label='Adventure'
                    path='/services'
                    />
                <CardItem 
                    src='../../images/img-2.jpg'
                    text='Travel through the Islands of Bali in a Private Cruise'
                    label='Luxury'
                    path='/services'
                    />
                <CardItem 
                    src='../../images/img-9.jpg'
                    text='Explore the hidden waterfall deep inside the Amazon jungle'
                    label='Adventure'
                    path='/services'
                    />
                </ul> */}

            </div>
        </div>
    </div>
  )
}

export default Cards;