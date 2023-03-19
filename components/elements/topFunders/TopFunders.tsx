import {
    Box,
    Flex,
    Link,
    Button,
    Image,
    HStack,
    LinkBox,
    LinkOverlay,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Text,
    Show,
    Hide,
    Heading,
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionIcon,
    AccordionPanel
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import '@rainbow-me/rainbowkit/styles.css';
import { ProfileBar } from '../profileBar';

import {
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { TopFundersBar } from '../topFundersBar';

export const TopFunders = () => {
    const router = useRouter()

    return (
        <>        
        <Accordion allowToggle w={['98%', null, null, '90%']}>
            <AccordionItem color='white'>
                <h2>
                <AccordionButton bgColor='#212C3B' border='1px solid #4E5D73' rounded='.25rem'>
                    <Box as="span" flex='1' textAlign='left' fontSize={21} fontWeight='semibold'>
                    Top Funders
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <TopFundersBar />
                </AccordionPanel>
                <AccordionPanel pb={4}>
                <TopFundersBar />
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
        </>
    )

}
