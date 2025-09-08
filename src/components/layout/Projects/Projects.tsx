import * as React from "react"
import { projectsImages } from "@/mocks/projects/projects"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"
import styles from "./projects.module.sass"

export default function Projects() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) return

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    return (
        <Carousel
            setApi={setApi}
            plugins={[Autoplay({ delay: 2500 })]}
            opts={{ loop: true }}
            className={styles.WrapperCarousel}>
            <CarouselContent>
                {projectsImages.map((images) => (
                    <CarouselItem key={images.id}>
                        <div className={styles.WrapperCarouselItem}>
                            <img
                                src={images.image}
                                className={styles.StyleImage}
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className={styles.DotButton}>
                {Array.from({ length: count }).map((_, i) => (
                    <img
                        key={i}
                        className={styles.styleiamge}
                        src={
                            i === current
                                ? "./about/florhover.png"
                                : "./about/flor.png"
                        }
                    />
                ))}
            </div>
        </Carousel>
    )
}
