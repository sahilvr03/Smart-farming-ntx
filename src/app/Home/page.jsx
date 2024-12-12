const { default: Hero } = require("../components/Home/home");

const Landingpage = () => {
    return (
        <div>
            <Hero />
            
            {/* Scope of Offerings */}
            <section id="scope-of-offerings" style={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
                <h2>Scope of Offerings</h2>
                <p>We provide comprehensive solutions for modern farming, including precision agriculture, crop monitoring, and advanced analytics to maximize your yields.</p>
            </section>

            {/* Farming Web */}
            <section id="farming-web" style={{ padding: "2rem", backgroundColor: "#e8f5e9" }}>
                <h2>Farming Web</h2>
                <p>Explore our cutting-edge farming web platform designed to simplify your agricultural operations with real-time data, field insights, and collaboration tools.</p>
            </section>

            {/* Subscription Plans */}
            <section id="subscription-plans" style={{ padding: "2rem", backgroundColor: "#e3f2fd" }}>
                <h2>Subscription Plans</h2>
                <p>Choose a plan that fits your needs! Our subscription plans offer access to premium tools and services, tailored to support farmers at every scale.</p>
            </section>
        </div>
    );
};

export default Landingpage;
