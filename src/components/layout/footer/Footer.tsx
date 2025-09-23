import styles from "./footer.module.sass"

export default function Footer () {
    return (
        <div className={styles.wrapperFooter}>
            <img className={styles.StyleLogoFooter} src="header/logoBemMeQuer.png" alt="logo" />
            <span className={styles.styleText}>
                ©2025 Clínica de Estetica. Todos os direitos reservados.Todas as marcas registradas
                aqui mencionadas são propriedade de seus respectivos proprietários.
            </span>
        </div>
    )
}
