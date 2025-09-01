import Header from "./components/layout/header/Header"
import Works from "./components/layout/works/Works"
import Footer from "./components/layout/footer/Footer"
import About from "./components/layout/about/About"
import GoogleMaps from "./components/layout/googleMaps/GoogleMaps"

export default function App() {
    return (
        <div>
            <Header />
            <section id="about">
                <About />
            </section>
            <section id="works">
                <Works />
            </section>
            <section id="localizaçao">
                <GoogleMaps />
            </section>
            <Footer />
        </div>
    )
}
