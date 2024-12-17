import SubscriptionPlans from "../components/Home/plans";
import ScopeOfOfferings from "../components/Home/scopes";
import Footer from "../components/Main/footer";

const { default: Hero } = require("../components/Home/hero");

const Landingpage = () => {
    return (
        <div>
            <Hero />
            
            {/* Grower Story Section */}
            <section id="grower-story" className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
                            Grower Stories
                        </h2>
                        <p className="text-gray-500 text-lg">
                            Discover how our platform is helping farmers around the world achieve success and improve productivity.
                        </p>
                    </div>

                    {/* Story Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white  cursor-pointer rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                            <img
                                src="/images/2.jpg"
                                alt="Grower Story 1"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                    John Doe, California
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    "With the help of this platform, I reduced water usage by 30% and increased my crop yield. The insights are game-changing!"
                                </p>
                                <button className="text-green-500 font-semibold hover:underline">
                                    Read More →
                                </button>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white cursor-pointer rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                            <img
                                src="/images/19.jpg"
                                alt="Grower Story 2"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                    Sarah Khan, Pakistan
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    "Real-time data helped me monitor soil quality and irrigation schedules effortlessly. A must-have for modern farming."
                                </p>
                                <button className="text-green-500 font-semibold hover:underline">
                                    Read More →
                                </button>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white cursor-pointer rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                            <img
                                src="/images/18.jpg"
                                alt="Grower Story 3"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                    Ahmed Al-Hassan, UAE
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    "The collaboration tools allowed me to work with my team seamlessly, resulting in a more organized and productive farm."
                                </p>
                                <button className="text-green-500 font-semibold hover:underline">
                                    Read More →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ScopeOfOfferings />

            <SubscriptionPlans />
            <Footer/>
        </div>
    );
};

export default Landingpage;
