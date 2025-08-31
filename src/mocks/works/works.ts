import type { WorksProps } from "@/interface/works";

export const works: WorksProps = {
    title: "Serviços Disponiveis",
    text: "Na Bem me quer você encontra: cabeleireira, manicure, pedicure, unhas de fibra, banho de gel e alongamento de cílios – tudo em um só espaço",
    highlight: "feito para realçar sua beleza.",

    listServices: [
        {
            id: 1,
            title: "Limpeza de Pele",
            text: "Remoção de impurezas Controle da oleosidade Hidratação profunda Sensação de frescor e bem-estar Pele mais macia e iluminada",
            image: "/works/limpezaDePele.png",
        },
        {
            id: 2,
            title: "Cabeleireira",
            text: "Cortes modernos e clássicos Escova e finalizações Coloração e mechas Tratamentos capilares Hidratação e brilho",
            image: "/works/Cabeleireira.png",
        },
        {
            id: 3,
            title: "Manicures e Pedicure",
            text: "Manicure completa Pedicure bem cuidada Unhas de fibra com durabilidade Banho de gel para mais brilho e resistência Acabamento impecável em cada detalhe",
            image: "/works/ManicuresPedicure.png",
        },
        {
            id: 4,
            title: "Alongamento de cílios",
            text: "Alongamento de cílios Efeito natural e volumoso Olhar marcante e expressivo Beleza prática no dia a dia",
            image: "/works/cíliospng.png",
        },
    ],
};
