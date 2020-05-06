import React from 'react';

const Card = ({id,name,email}) => {
    return (
      <div className='bg-light-blue dib pa3 br3 ma2 grow shadow-5 bw5 tc'> 

          <img src={`https://robohash.org/${id}?200x200`} alt='robots' />
          <h3>{name}</h3>
          <p>{email}l</p>

      </div>  
    );
}

export default Card;