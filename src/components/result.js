import { Box, Badge } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Result = () => {
    const profile =
      {
        img:'https://image.but.fr/is/image/but/BESS_Fiche_Cuisine1_GV_574x542?scl=1&qlt=90',
        profilePic:'./assets/pictures/profile.jpg',
        name: 'Tic-Tac',
        work:'Menuisier',
        where:'Paris XIII',
        service:"Découpe de bois, sculture, peinture"

      }
    
    return ( 
        <Box
          borderRadius='lg'
          border="0.063em"
          borderColor='#E2E8F0'
          h={460}
          w={332}
          overflow='hidden' 
          fontSize={14}
          fontWeight='bold'
        >

      {/* Box pour les photos */}
  <Box
    fontSize={10}
  >
    <Swiper
      pagination={{
      type: "fraction",
      }}
      modules={[Pagination]}
      className="resultSwiper"    
    >
      <SwiperSlide> <img src={profile.img} id="result"/></SwiperSlide>
      <SwiperSlide> <img src={profile.img} id="result"/></SwiperSlide>      
      <SwiperSlide> <img src={profile.img} id="result"/></SwiperSlide>      
      <SwiperSlide> <img src={profile.img} id="result"/></SwiperSlide>    
      </Swiper>
  </Box>
  {/* Box 1ère ligne */}
  <Box
    display='flex'
    overflow='hidden'
  >
      <Box
        mt='1.5em'
        ml= '1em'
        flex={0.5}
        >
        <img src={profile.profilePic} alt='profile photo' className="profile"/>
      </Box>

      <Box
        mt='1.5em'
        flex={2}
        width='2em'
        maxHeight='1.5em'
        justifyItems='left'
        overflow='hidden'
        fontSize={16}
      >
        {profile.name}
      </Box>
      <Box
        mt="1em"
        flex={0.30}
        mr='1em'
      >
        {profile.work}
      </Box>
  </Box>

  {/* Box 2eme ligne */}
  <Box
    mt="1.5em"
    ml="5%"
  >
    <div>Localisation</div>
    <Badge
    p={0}
    bg='none'
    color='#94A3B8'
    fontWeight='medium'
    >
      {profile.where}
    </Badge>
  </Box>

  {/* Box 3eme ligne */}
  <Box
    mt="1.5em"
    ml="5%"
  >
    <div>Services</div>
    <Badge
      p={0}
      bg='none'
      color='#94A3B8'
      fontWeight='medium'
    >
      {profile.service}
    </Badge>
    
  </Box>

  {/* Box boutton */}
  <Box
    mt="1.5em"
    mb="1em"
    ml="5%"
  >
    <Box as='button' borderRadius='md' bg='#319795' w='21em' h='2.5em' m='0' color='white' display='flex' justifyContent='center' alignItems='center'>
      <img src="./assets/icons/309678.svg" alt="enveloppe" className='spend' />  
      <div mb='9.375em' flex={1}> Envoyer un message </div>
    </Box>
  </Box>
</Box>

     );
}
 
export default Result;