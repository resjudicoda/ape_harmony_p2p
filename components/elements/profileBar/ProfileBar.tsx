import {
    Box,
    Flex,
    Image,
    Text,
    Heading,
    Progress
} from '@chakra-ui/react'
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import '@rainbow-me/rainbowkit/styles.css';

interface ProfileBarProps {
  bgColor: string,
  headingColor: string
  radius: number,
  customPadding : number[] | undefined
}

export const ProfileBar = ({ bgColor, headingColor, customPadding, radius }: ProfileBarProps) => {
    const router = useRouter()

    return (
      <Box bgColor={bgColor} rounded={radius} padding={customPadding}>
        <Flex>
          <Flex flexBasis={['20%','15%']} alignItems='center'>
            <Image alt='user-pfp' boxSize={58} rounded={30} bgColor='gray' justifyContent='center' src='/css-gradient.png'></Image>
          </Flex>
            <Flex justify={['space-evenly']} flexBasis={'85%'}>
                <Flex flexDir={'column'} align={['flex-start', 'center']} flexBasis={['33.33%']}>
                  <Heading size={['sm','md']} color={headingColor}>Project</Heading>
                  <Flex  grow={'1'}>
                    <Text color={headingColor} fontSize={['12px', '16px']} textAlign={['left', 'center']}>Lazy Chicken Society</Text>
                  </Flex>
                </Flex>
                <Flex flexDir={'column'} align={['flex-start', 'center']} flexBasis={['33.33%']}>
                  <Heading size={['sm','md']} color={headingColor}>Seeking</Heading>
                  <Flex grow={'1'}>
                    <Text color={headingColor} fontSize={['12px', '16px']} textAlign={['left', 'center']}>$500 USDC</Text>
                  </Flex>
                </Flex>
                <Flex  flexDir={'column'} align={['flex-start', 'center']} flexBasis={['33.33%']}>
                  <Heading size={['sm','md']} color={headingColor}>Funders</Heading>
                  <Flex pos={'relative'}>
                    <Flex pos={'absolute'} zIndex={[3, 2]} left={['8', '1']} boxSize={50} rounded={30} justifyContent='center' alignItems='center' bgImage='/blue-gradient.webp'></Flex>
                    <Flex pos={'absolute'} zIndex={[2, 1]} left={['4', '-5']} boxSize={50} rounded={30} bgColor='green' justifyContent='center' alignItems='center'></Flex>
                    <Flex pos={'absolute'} zIndex={0} left={[null, '-10']} boxSize={50} rounded={30} bgColor='gray' justifyContent='center' alignItems='center'></Flex>
                  </Flex>
                </Flex>   
          </Flex>
        </Flex>
        <Box mt={6}>
          <Flex justifyContent={'space-between'}>
            <Heading color={headingColor} mb={2} size={'sm'}>Sold: 20</Heading>
            <Heading color={headingColor} mb={2} size={'sm'}>Bought: 20</Heading>
          </Flex>
          <Progress value={20} size='sm' colorScheme='pink' rounded={1}/>
        </Box>
      </Box>
    )

}