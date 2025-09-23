import {
    Carousel, CarouselContent, CarouselItem,
    CarouselNext, CarouselPrevious
} from "@/components/ui/carousel"
import { works } from "@/mocks/works/works"

import styles from "./projectCarousel.module.sass"
import { Button } from "@/components/ui/button"

export function ProjectCarousel() {
    return (
        <Carousel className={styles.ServicingCarousel} opts={{ loop: true }}>
            <CarouselContent>
                {works.listServices.map((service) => (
                    <CarouselItem className={styles.CarouselItemStyle} key={service.id}>
                        <div
                            className={styles.ServiceCard}
                            style={{ backgroundImage: `url(${service.image})` }}
                        >
                            <h1 className={styles.TitleStyle}>{service.title}</h1>
                            <ul className={styles.UlStyle}>
                                {service.text.split(/(?=[A-Z])/).map((item, idx) => (
                                    <li key={idx}>{item.trim()}</li>
                                ))}
                            </ul>
                            <Button className={styles.stylesButton}>
                                <a
                                    href={`https://api.whatsapp.com/send?phone=${service.fone}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Contate-nôs
                                </a>
                            </Button>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className={styles.CarouselArrowPrev} />
            <CarouselNext className={styles.CarouselArrowNext} />
        </Carousel>
    )
}
