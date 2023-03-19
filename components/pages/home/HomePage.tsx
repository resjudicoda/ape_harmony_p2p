import { useState } from 'react'
import NextLink from 'next/link'
import { AboutSection } from '@/components/elements/aboutSection/AboutSection'
import { RecentlyFunded } from '@/components/elements/recentlyFunded'
import { TopFunders } from '@/components/elements/topFunders'


import {
    Flex,
    Text,
    Box
} from '@chakra-ui/react'

export const HomePage = () => {
    return (
        <Box bgColor='#0F0F16' pt={140} w='100vw' h='100vh'>
            <AboutSection />
            <Flex flexDir={'column'} align={'center'}>
                <RecentlyFunded />
                <TopFunders />
            </Flex>
        </Box>
    )
}