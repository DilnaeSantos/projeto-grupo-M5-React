import React from 'react';
import TextoImagemContainer from './TextoImagemContainer.css';

const TextoImagemContainer = ({ text, imageUrl }) => {
  return (
    <div className='texto-imagem-container'>
      <div className='text'>
        {text}
      </div>
      <div className='imagem'>
        <img src={imageUrl} alt='Imagem' />
      </div>
    </div>
  );
}

export default TextoImagemContainer;
