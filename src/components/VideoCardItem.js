import React from 'react'
import { Link } from 'react-router-dom';

function VideoCardItem(props) {
  return (
    <>
        <li className='cards__item'>
            <Link className='cards__item__link' to={props.path}>
                <figure className='cards__item__pic-wrap' 
                data-category={props.label}>
                    <video src={props.src} autoPlay loop muted className='cards__item__img'
                    /*change className later to video not image*/ />
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>
                        {props.text}
                    </h5>
                </div>
            </Link>
        </li>
    </>
  )
}

export default VideoCardItem