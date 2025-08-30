import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AiOutlineWhatsApp } from "react-icons/ai";

import styles from "./worlks.module.sass"

export default function Works() {
    return (
        <div className={styles.WrapperWorks}>
            <h1>Serviços Disponiveis</h1>
                <p>
                    Na Bem me quer você encontra: cabeleireira, manicure, pedicure, unhas de fibra, banho de gel e
                    alongamento de cílios – tudo em um só espaço <span>feito para realçar sua beleza.</span>
                </p>
            <div className={styles.ContainerWorks}>
                {Array.from({ length: 3 }).map((_, index) => (
                    <Card key={index} className={styles.ContainerAvantar}>
                        <img src="image2.jpg" alt="" />
                        <h1>Limpeza de pele</h1>
                        <span>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora illum quisquam, omnis iure odio soluta
                        </span>
                        <Button className={styles.StyleButton}>
                            Agenda aqui
                            <AiOutlineWhatsApp />
                        </Button>
                    </Card>
                ))}
            </div>
        </div>
    )
}
