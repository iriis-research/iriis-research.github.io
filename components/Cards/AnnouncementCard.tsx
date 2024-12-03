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

function NewsCard({ 
    category, 
    title, 
    date,
    info,
    newsUrl
}: NewsCardProps) {
    return (
        <Card className=" max-w-screen-2xl overflow-hidden bg-gradient-to-r p-6 hover:shadow-heavy hover:border-foreground cursor-pointer">
            <CardHeader className="p-0">
                <p className="text-md font-bold">{category}</p>
            </CardHeader>
            <CardContent className="p-0 space-y-6">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold mt-4">{title}</h2>
                    <p className="text-sm text-gray-600">{date}</p>
                </div>
                
                    <div className=" rounded-lg">
                        <p className="text-xl font-medium pb-4">
                            {info}
                            </p>
                        <Button 
                        variant="outline" 
                        className="flex-1 border-solid border-2 border-foreground"
                        size='lg'
                        asChild
                            >
                        <Link href={newsUrl}>
                            <span className="flex items-center gap-2 text-xl">
                                More
                                <IoIosMore  size={36} />
                                
                            </span>
                        </Link>
                    </Button>
                    </div>
            </CardContent>
        </Card>
    )
}

export default NewsCard