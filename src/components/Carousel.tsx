import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Link,
  Button,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Container
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import af from '../assets/af.png'
import ULogin from '../assets/ULogin.png'
import BookEnds from '../assets/BookEnds.jpeg'
import Creed from '../assets/creedthoughts.jpg'

// Settings for the slider
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

interface StatsCardProps {
  title: string;
  stat: string;
  repo: string;
}


export default function CaptionCarousel() { 
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  interface cards {
    title: string;
    text: string;
    image: string;
    repo: string;
  }

  const cards = [
    {
      title: 'Ullr',
      text:
        "Taking my love for the Strava application and applied my version of the fitness tracker app with added social media functionality.",
      image: `${ULogin}`,
      repo: "https://github.com/omgitsmiles/Ullr"
    },
    {
      title: 'BookEnds',
      text:
        "Taking a simple idea of creating a place for users to share their books and thoughts in one place through BookEnds.",
      image: `${BookEnds}`,
      repo: "https://github.com/omgitsmiles/BookEnds"
    },
    {
      title: 'Creed Thoughts',
      text:
        "From the popular show The Office, we take the character Creed Bratton and replicate his Blog for the user.",
      image: `${Creed}`,
      repo: "https://github.com/omgitsmiles/CreedThoughts"
    },{
        title: 'AfterFlea aiOS',
        text:
          "Landing page for AfterFlea, a mobile application that allows users to buy and sell items locally.",
        image: `${af}`,
        repo: "https://github.com/omgitsmiles/"
      }
  ];

  function StatsCard(props: StatsCardProps) {
    const { title, stat, repo } = props;
    return (
      <Stat
        px={{ base: 4, md: 8 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        backgroundColor={useColorModeValue('gray.50', 'gray.900')}
        rounded={'lg'}
        >
        <StatLabel fontWeight={'large'} isTruncated>
          {title}
        </StatLabel>
        <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
          {stat}
        </StatNumber>
        <br />
        <Link href={repo}>
        <Button
          bg={'teal.300'}
          rounded={'full'}
          color={'white.700'}
          _hover={{ bg: 'teal.500' }}>
          Github Repo
        </Button>
        </Link>
      </Stat>
    );
  }

  return (
    <Box
      position={'relative'}
      height={'100vh'}
      width={'full'}
      overflow={'hidden'}
      >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
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
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={card.image}
            >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <StatsCard repo={card.repo} title={card.title} stat={card.text}/>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}