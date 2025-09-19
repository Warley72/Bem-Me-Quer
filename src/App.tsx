import Header from "./components/layout/header/header"
import Works from "./components/layout/works/works"
import Footer from "./components/layout/footer/footer"
import About from "./components/layout/about/about"
import GoogleMaps from "./components/layout/googleMaps/googleMaps"

import { motion, AnimatePresence } from "framer-motion";

export default function App() {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key="app"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
            >
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
            </motion.div>
        </AnimatePresence>
    );
}
