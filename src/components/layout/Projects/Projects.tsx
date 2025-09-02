import * as React from "react"
import { projectsImages } from "@/mocks/projects/projects"
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
        <Carousel setApi={setApi} plugins={[Autoplay({ delay: 2500 })]} opts={{ loop: true }}
            className="bg-[#433A23] p-2 rounded-xl w-full max-w-[580px] max-h-[315px]">
            <CarouselContent>
                {projectsImages.map((images) => (
                    <CarouselItem key={images.id}>
                        <div className="w-full h-[300px] flex items-center justify-center">
                            <img
                                src={images.image}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
