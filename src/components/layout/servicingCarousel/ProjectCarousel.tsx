import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { works } from "@/mocks/works/works"

import styles from "./projectCarousel.module.sass"

export function ProjectCarousel() {
    return (
        <div className={styles.CarouselWrapper}>
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
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext />
                <CarouselPrevious />
            </Carousel>
            <div className={styles.ButtonWrapper}>
                <Button className={styles.stylesButton}>
                    <a
                        href="https://api.whatsapp.com/send?phone=5561993851504"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Contate-nôs
                    </a>
                </Button>
            </div>
        </div>
    )
}
