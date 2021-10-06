import React from 'react';
import heartFill from '../../assets/icons/heart-fill.svg';
import heartStroke from '../../assets/icons/heart-stroke.svg';
import moment from 'moment'
import NumberFormat from 'react-number-format';

export default function ImageCard({estate, index, saveFavorites, favorites}) {
  const { address, property } = estate
  return (
    <div id='image-card-component' className='relative max-w-315px mx-auto'>
      <img id='image-favorite-icon' onClick={() => {saveFavorites(estate?.mlsId)}} src={favorites.includes(estate?.mlsId)? heartFill: heartStroke} alt={`heart_filled_icon_${index}`} className="absolute top-17px right-14px w-35px cursor-pointer"/>
      <img id='image-card-pho' className='rounded min-h-280px' alt={`Estate_Image_${index}`} src={estate?.photos[0]}/>
      <div className='text-text'>
        <p id='estate-structure-info' className='mt-4 font-semibold text-xl'>{property?.bedrooms} BR | {property?.bathsFull + property?.bathsHalf / 2} Bath | {property?.area} Sq Ft</p>
        <p id='estate-list-price' className='mt-11px text-26px font-bold'>
          $<NumberFormat thousandSeparator={true} value={estate?.listPrice} displayType='text'/> 
        </p>
        <p id='estate-address' className='mt-5px font-15px font-normal'>{address?.streetNumber} {address?.streetName}, {address?.city}, {address?.state}</p>
        <p id='estate-showing-date' className='text-sm text-text-opacity'>Listed: {moment(estate?.listDate).format('MM/DD/YY')}</p>
      </div>
    </div>
  );
}
