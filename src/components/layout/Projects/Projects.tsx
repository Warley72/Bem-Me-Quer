import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel"



import Autoplay from "embla-carousel-autoplay"

export default function Projects() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [, setCurrent] = React.useState(0)
    const [, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <Carousel setApi={setApi} plugins={[Autoplay({ delay: 3000 })]} className="bg-[#433A23] p-2 rounded-xl">
            <CarouselContent>
                {Array.from({ length: 1 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <Card className="h-75 w-120">
                            <CardContent className="flex items-center justify-center h-full">
                                <span className="text-4xl font-semibold">{index + 1}</span>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
