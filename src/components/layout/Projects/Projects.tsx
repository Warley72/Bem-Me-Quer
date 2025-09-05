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
        </Carousel>
    )
}

/*
    <div className={styles.DotButton}>
        <img className={styles.styleiamge} src="./about/flor.png" alt="" />
        <img className={styles.styleiamge} src="./about/flor.png" alt="" />
        <img className={styles.styleiamge} src="./about/flor.png" alt="" />
        <img className={styles.styleiamge} src="./about/flor.png" alt="" />
    </div>
*/
