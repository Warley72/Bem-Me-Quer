import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel"


import styles from "./projects.module.sass"
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
        <div className={styles.WrapperProjects}>
            <Carousel setApi={setApi} plugins={[Autoplay({ delay: 3000 })]}>
                <CarouselContent>
                    {Array.from({ length: 10 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <Card className="w-full h-60">
                                <CardContent className="flex items-center justify-center h-full">
                                    <span className="text-4xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
