import { Box } from '@chakra-ui/react';
import React from 'react';

const Colab = () => {
    const src='./assets/pictures/profile.jpg'

    return (
        <Box
            ml="1em"
            mt="1.5em"
        >
        <h2 style={{fontSize:1 + "em", marginTop:1.25 + "em", marginBottom:0.5 + 'em' ,fontWeight:'bold'}} >Collaborateur</h2>
        <div className='Collabs'>
            <img src={src} className='Collab'/>
            <img src={src} className='Collab'/>
            <img src={src} className='Collab'/>
            <img src={src} className='Collab'/>
            <img src={src} className='Collab'/>
            <img src={src} className='Collab'/>
            <img src={src} className='Collab'/>
            <img src={src} className='Collab'/>
            <img src={src} className='Collab'/>
            <img src={src} className='Collab'/>
            <img src={src} className='Collab'/>
            <img src={src} className='Collab'/>
        </div> 
        </Box>
    )           
}
 
export default Colab;