"use client";
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FaInfoCircle } from "react-icons/fa";
import { RiGitRepositoryLine } from "react-icons/ri";
import { Button } from "@/components/ui/button" 

// Define the props interface
interface WorkCardProps {
    title: string;
    description: string;
    imageUrl: StaticImageData;
    demoUrl?: string;
    infoUrl?: string;
}

function WorkCard({ 
    title, 
    description, 
    imageUrl, 
    demoUrl, 
    infoUrl 
}: WorkCardProps) {
    return (
        <Card className="max-w-screen-2xl max-h-screen-2xl overflow-hidden bg-gradient-to-r  hover:shadow-heavy hover:border-foreground cursor-pointer">
            <CardHeader>
                <CardTitle className="text-4xl font-bold text-center">{title}</CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
                <div className=" border-solid border-2 relative w-full h-96 overflow-hidden rounded-md group bg-background/50 border-foreground shadow-md hover:shadow-heavy">
                    <Image 
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <CardDescription className="text-2xl text-bold">
                    {description}
                </CardDescription>
            </CardContent>

            <CardFooter className="flex justify-between gap-4">
                {demoUrl && (
                    <Button 
                        variant="outline" 
                        className="flex-1 border-solid border-2 border-foreground"
                        size='lg'
                        asChild
                    >
                        <Link href={demoUrl} target='_blank' rel='noopener noreferrer'>
                            <span className="flex items-center gap-2 text-xl">
                                <RiGitRepositoryLine size={36} />
                                Repo
                            </span>
                        </Link>
                    </Button>
                )}
                
                {infoUrl && (
                    <Button 
                        variant="outline" 
                        className="flex-1 border-solid border-2 border-foreground"
                        size = 'lg'
                        asChild
                    >
                        <Link href={infoUrl}>
                            <span className="flex items-center gap-2 text-xl">
                                <FaInfoCircle size={36} />
                                Info
                            </span>
                        </Link>
                    </Button>
                )}
            </CardFooter>
        </Card>
    )
}

export default WorkCard