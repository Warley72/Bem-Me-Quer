import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { works } from "@/mocks/works/works"

import styles from "./projectCarousel.module.sass"

export function ProjectCarousel() {
    return (
        <Carousel className={styles.ServicingCarousel} opts={{ loop: true }}>
            <CarouselContent>
                {works.listServices.map((service) => (
                    <CarouselItem className={styles.CarouselItemStyle} key={service.id}>
                        <div className={styles.ServiceCard} style={{ backgroundImage: `url(${service.image})` }}>
                            <h1 className={styles.TitleStyle}>{service.title}</h1>
                            <ul className={styles.UlStyle}>
                                {service.text.split(/(?=[A-Z])/).map((item, idx) => (
                                    <li key={idx}>
                                        {item.trim()}
                                    </li>
                                ))}
                            </ul>
                            <Button className={styles.stylesButton}>Contate-nôs</Button>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
