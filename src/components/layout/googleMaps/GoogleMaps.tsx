import { useEffect, useState } from "react"
import {
    GoogleMap,
    LoadScript,
    DirectionsRenderer,
} from "@react-google-maps/api"

import styles from "./googleMaps.module.sass"

const containerStyle = {
    width: "600px",
    height: "350px",
    borderRadius: "12px",
}

const destination = { lat: -15.6142, lng: -47.6503 }

export default function GoogleMaps() {
    const [directions, setDirections] = useState<google.maps.DirectionsResult>()

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const origin = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                }

                const directionsService = new google.maps.DirectionsService()
                directionsService.route(
                    {
                        origin,
                        destination,
                        travelMode: google.maps.TravelMode.DRIVING,
                    },
                    (result, status) => {
                        if (status === "OK" && result) {
                            setDirections(result)
                        }
                    }
                )
            })
        }
    }, [])

    return (
        <div className={styles.WrapperGoogleMaps}>
            <h1 className={styles.TitleStyle}>Localização</h1>
            <div >
                <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY}>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={destination}
                        zoom={13}
                    >
                        {directions && <DirectionsRenderer directions={directions} />}
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    )
}


//className={styles.cardGoogleMaps}

