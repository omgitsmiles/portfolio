import React from 'react';
import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    IconButton,
    Box
  } from '@chakra-ui/react';
  import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
  import Slider from 'react-slick';
  import ULogin from '../assets/ULogin.png'
  import BookEnds from '../assets/BookEnds.jpeg'
  import Creed from '../assets/creedthoughts.jpg'
  import af from '../assets/af.png'

  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  export default function WithBackgroundImage() {
    const [slider, setSlider] = React.useState<Slider | null>(null);

    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '40px' });

    const cards = [
        {
          title: 'Ullr',
          text:
            "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
          image: `${ULogin}`,
        },
        {
          title: 'BookEnds',
          text:
            "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
          image: `${BookEnds}`,
        },
        {
          title: 'Creed Thoughts',
          text:
            "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
          image: `${Creed}`,
        },{
            title: 'AfterFlea aiOS',
            text:
              "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image: `${af}`,
          }
      ];

    return (
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          `${cards[0].image}`
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor
            </Text>
            <Stack direction={'row'}>
              <Button
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}>
                Show me more
              </Button>
              <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}>
                Show me more
              </Button>
              <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
        </IconButton>
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            </Box>
        ))}
      </Slider>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }