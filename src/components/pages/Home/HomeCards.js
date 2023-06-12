import React from 'react';
import CardItem from '../../CardItem';
import VideoCardItem from '../../VideoCardItem';
import './HomeCards.css';

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
                <ul className='cards__items'>
                <CardItem 
                    src='../../images/GroupMe-Icon.jpg'
                    text='Chat With Us On GroupMe'
                    label='GroupMe'
                    path='https://groupme.com/join_group/72332856/3T5SKPNv'
                    />
                <CardItem 
                    src='../../images/Discord-Icon.jpg'
                    text='Game With Us On Discord'
                    label='Discord'
                    path='https://discord.com/invite/tZevzjckJ7'
                    />
                <CardItem 
                    src='../../images/OnlyFans-Icon.jpg'
                    text='Subscribe to Our OnlyFans ;)'
                    label='OnlyFans'
                    path='https://discord.com/invite/tZevzjckJ7'
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