import styles from "./googleMaps.module.sass"

const destination = "389 Burger - Planaltina/DF"

export default function GoogleMaps() {
    return (
        <div className={styles.WrapperGoogleMaps}>
            <h1 className={styles.TitleStyle}>Localização</h1>
            <div className={styles.cardGoogleMaps}>
                <iframe
                    className={styles.styleIframe}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(destination)}&output=embed`}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    )
}
