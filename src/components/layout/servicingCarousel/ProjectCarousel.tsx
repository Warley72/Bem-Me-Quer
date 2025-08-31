import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { works } from "@/mocks/works/works"
import { Card, CardContent } from "@/components/ui/card"

export function ProjectCarousel() {
    return (
        <Carousel opts={{ loop: true }} className="w-full max-w-5xl">
            <CarouselContent>
                {works.listServices.map((service) => (
                    <CarouselItem key={service.id} className="md:basis-1/2 lg:basis-1/3">
                        <Card className="relative h-[460px] rounded-xl overflow-hidden border-0">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }}/>
                            <CardContent className="relative z-2 flex flex-col h-full p-6 text-white">
                                <h1 className="text-xl font-bold mb-3">{service.title}</h1>
                                <ul className="space-y-1 text-sm leading-relaxed">
                                    {service.text.split(/(?=[A-Z])/).map((item, idx) => (
                                        <li key={idx} className="list-disc list-inside">
                                            {item.trim()}
                                        </li>
                                    ))}
                                </ul>
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
