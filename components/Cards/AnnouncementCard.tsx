"use client";
import React from 'react'
import Link from 'next/link'
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import { IoIosMore } from "react-icons/io";
import { Button } from "@/components/ui/button" 

interface NewsCardProps {
    category: string;
    title: string;
    date: string;
    info: string;
    newsUrl: string;
}

function AnnouncementCard({ 
    category, 
    title, 
    date,
    info,
    newsUrl
}: NewsCardProps) {
    return (
        <Card className="
            w-full 
            max-w-full 
            overflow-hidden 
            bg-gradient-to-r 
            p-4 sm:p-6 
            hover:shadow-lg
            transition-all 
            duration-300 
            ease-in-out 
            border 
            hover:border-primary/50
        ">
            <CardHeader className="p-0 mb-2 sm:mb-4">
                <p className="
                    text-sm sm:text-base 
                    font-semibold 
                    text-primary/80
                ">
                    {category}
                </p>
            </CardHeader>
            <CardContent className="p-0 space-y-4 sm:space-y-6">
                <div className="space-y-2 sm:space-y-3">
                    <h2 className="
                        text-2xl sm:text-3xl md:text-4xl 
                        font-bold 
                        tracking-tight 
                        line-clamp-2
                    ">
                        {title}
                    </h2>
                    <p className="
                        text-xs sm:text-sm 
                        text-foreground/60
                    ">
                        {date}
                    </p>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                    <p className="
                        text-base sm:text-lg md:text-xl 
                        font-medium 
                        text-foreground/90 
                        line-clamp-3
                    ">
                        {info}
                    </p>
                    <Button 
                        variant="outline" 
                        className="
                            w-full 
                            flex 
                            items-center 
                            justify-center 
                            gap-2 
                            text-sm sm:text-base
                            hover:border-foreground 
                        "
                        asChild
                    >
                        <Link 
                            href={newsUrl}
                            className="flex items-center gap-2"
                        >
                            More
                            <IoIosMore className="w-5 h-5 sm:w-6 sm:h-6" />
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default AnnouncementCard