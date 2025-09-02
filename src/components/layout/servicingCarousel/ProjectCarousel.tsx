import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { works } from "@/mocks/works/works"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import styles from "./projectCarousel.module.sass"

export function ProjectCarousel() {
    return (
        <Carousel opts={{ loop: true }} className={styles.ServicingCarousel}>
            <CarouselContent>
                {works.listServices.map((service) => (
                    <CarouselItem key={service.id} className={styles.CarouselItemStyle}>
                        <Card className={styles.Cardstyle}>
                            <div className={styles.backgroundStyle} style={{ backgroundImage: `url(${service.image})` }} />
                            <CardContent className={styles.CardContentStyle}>
                                <div className={styles.TextWrapper}>
                                    <h1 className={styles.TitleStyle}>{service.title}</h1>
                                    <ul className={styles.UlStyle}>
                                        {service.text.split(/(?=[A-Z])/).map((item, idx) => (
                                            <li key={idx}>
                                                {item.trim()}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Button className={styles.stylesButton}>Contate-nôs</Button>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
