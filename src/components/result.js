import { Box, Badge } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Result = () => {
    return ( 
        <Box
          borderRadius='6pt'
          border="1px"
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
      <SwiperSlide> <img src='https://image.but.fr/is/image/but/BESS_Fiche_Cuisine1_GV_574x542?scl=1&qlt=90' id="result"/> </SwiperSlide>
      <SwiperSlide><img src="https://www.deco.fr/sites/default/files/styles/full_1200x630/public/2021-02/Les%20de%CC%81tails%20qui%20font%20la%20cuisine%20en%202021.jpg?itok=NKVsNjgr" id="result"/></SwiperSlide>
      <SwiperSlide><img src='https://static.cotemaison.fr/medias_11964/w_600,h_600,c_fill,g_north/v1617543550/la-cuisine-imite-le-bois-a-la-perfection_6125959.jpg' id="result" /></SwiperSlide>
      <SwiperSlide><img src='https://media.ma.cuisinella/-/media/bynder/cuisinella/2022/01/03/11/16/cla_trend_darwin_pearl_noir_mannequin_2/4x3-cla_trend_darwin_pearl_noir_mannequin_2.ashx?as=1&w=1920&rev=a9fcb57784274ecc8c2ea9fac9d81429&hash=D0DBE98863E13DC47D49B80FEBA644CD' id="result" /></SwiperSlide>
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
        <img src="./assets/pictures/profile.jpg" alt='profile photo' className="profile"/>
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
        Tic-tac
      </Box>
      <Box
        mt="1em"
        flex={0.30}
        mr='1em'
      >
        Menuisiers
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
      Paris XIV
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
      Découpe de bois, sculture, peinture
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
      <div mb='150px' flex={1}> Envoyer un message </div>
    </Box>
  </Box>
</Box>

     );
}
 
export default Result;