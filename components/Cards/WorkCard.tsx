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
import { Button } from "@/components/ui/button" 

// Define the props interface
interface WorkCardProps {
    title: string;
    description: string;
    imageUrl: StaticImageData;
    infoUrl?: string;
}

function WorkCard({ 
    title, 
    description, 
    imageUrl,  
    infoUrl 
}: WorkCardProps) {
    return (
        <Card className="
            w-full 
            max-w-full 
            overflow-hidden 
            bg-gradient-to-r 
            hover:shadow-heavy
            transition-all 
            duration-500 
            ease-in-out 
            hover:border-foreground
        ">
            <CardHeader className="pb-0">
                <CardTitle className="
                    text-2xl sm:text-3xl md:text-4xl 
                    font-bold 
                    text-center 
                    tracking-tight 
                    line-clamp-2
                ">
                    {title}
                </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4 p-4 sm:p-6">
                <div className="
                    relative 
                    w-full 
                    h-48 sm:h-64 md:h-80 
                    overflow-hidden 
                    rounded-md 
                    group 
                    border 
                    border-foreground/10 
                    shadow-sm 
                    hover:shadow-md 
                    transition-all 
                    duration-300
                ">
                    <Image 
                        src={imageUrl}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="
                            object-cover 
                            transform 
                            group-hover:scale-105 
                            transition-transform 
                            duration-300 
                            ease-in-out
                        "
                        placeholder="blur"
                    />
                </div>
                <CardDescription className="
                    text-base sm:text-lg md:text-xl 
                    text-foreground 
                    line-clamp-4
                ">
                    {description}
                </CardDescription>
            </CardContent>

            <CardFooter className="
                flex 
                flex-col sm:flex-row 
                gap-3 sm:gap-4 
                p-4 sm:p-6 
                pt-0
            ">
                
                {infoUrl && (
                    <Button 
                        variant="outline" 
                        className="
                            w-full 
                            flex 
                            items-center 
                            justify-center 
                            border-solid
                            border-2
                            hover:border-foreground
                            gap-2 
                            text-sm sm:text-base
                        "
                        asChild
                    >
                        <Link 
                            href={infoUrl}
                            className="flex items-center gap-2"
                        >
                            <FaInfoCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                            Info
                        </Link>
                    </Button>
                )}
            </CardFooter>
        </Card>
    )
}

export default WorkCard