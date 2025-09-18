import type { WorksProps } from "@/interfaces/works";

export const works: WorksProps = {
    text: "Na Bem me quer você encontra: cabeleireira, manicure, pedicure, unhas de fibra, banho de gel e alongamento de cílios – tudo em um só espaço",
    highlight: "feito para realçar sua beleza.",

    listServices: [
        {
            id: 1,
            title: "Limpeza de Pele",
            text: "Remoção de impurezas Controle da oleosidade Hidratação profunda Pele mais macia e iluminada",
            image: "/works/limpezaDePele.png",
        },
        {
            id: 2,
            title: "Alongamento de cílios",
            text: "Alongamento de cílios Efeito natural e volumoso Olhar marcante e expressivo Beleza prática no dia a dia",
            image: "/works/cíliospng.png",
        },
        {
            id: 3,
            title: "Cabelos com brilho",
            text: "Escova e finalizações Coloração e mechas Tratamentos capilares Hidratação e brilho",
            image: "/works/Cabeleireira.png",
        },
        {
            id: 4,
            title: "Manicures e Pedicure",
            text: "Manicure completa Pedicure bem cuidada Unhas de fibra com durabilidade Banho de gel para mais brilho e resistência",
            image: "/works/ManicuresPedicure.png",
        }
    ],
};
