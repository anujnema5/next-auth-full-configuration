'use client'
import React from 'react'

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from '@/components/ui/card'

import { Header } from '@/components/auth/header'
import Social from '@/components/auth/Social'
import BackButton from './BackButton'

type CardWrapperProps = {
    children: React.ReactNode,
    headerLabel: string,
    backButtonLabel: string,
    backButtonHref: string,
    showSocial?: boolean
}

const CardWrapper = ({
    children,
    backButtonHref,
    backButtonLabel,
    headerLabel,
    showSocial
}: CardWrapperProps) => {

    return (
        <Card className='w-[400px] shadow-md'>

            <CardHeader>
                <Header label={headerLabel}></Header>
            </CardHeader>


            <CardContent>
                {children}
            </CardContent>

            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}

            <CardFooter>
                <BackButton href={backButtonHref} label={backButtonLabel}/>
            </CardFooter>
        </Card>
    )
}

export default CardWrapper