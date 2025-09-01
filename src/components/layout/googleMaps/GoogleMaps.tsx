import styles from "./googleMaps.module.sass"

export default function GoogleMaps () {
    return (
        <div className={styles.WrapperGoogleMaps}>
            <h1 className={styles.TitleStyle}>localização</h1>
            <div className={styles.cardGoogleMaps}>
            </div>
        </div>
    )
}
