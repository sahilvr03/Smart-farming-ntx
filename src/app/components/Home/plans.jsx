// components/SubscriptionPlans.js
export default function SubscriptionPlans() {
    const plans = [
      {
        id: 1,
        title: "Basic Plan",
        tagline: "POPULAR",
        description: "Irrigation Scheduling and Monitoring Technologies",
        price: "$60",
        duration: "month",
        billed: "Billed annually. Pay $99 today",
        features: [
          "Irrigation Scheduling",
          "Crop Monitoring",
          "Water Management",
          "Advanced Analytics",
          "24/7 Support",
        ],
      },
      {
        id: 2,
        title: "Standard Plan",
        tagline: "RECOMMENDED",
        description: "Advanced Monitoring with Data Insights",
        price: "$90",
        duration: "month",
        billed: "Billed annually. Pay $149 today",
        features: [
          "All Basic Features",
          "Real-Time Data",
          "Custom Reports",
          "Priority Support",
          "Integration Tools",
        ],
      },
      {
        id: 3,
        title: "Premium Plan",
        tagline: "BEST VALUE",
        description: "Complete Suite for Large-Scale Operations",
        price: "$120",
        duration: "month",
        billed: "Billed annually. Pay $199 today",
        features: [
          "All Standard Features",
          "AI Predictions",
          "Custom Dashboards",
          "Dedicated Account Manager",
          "Unlimited Users",
        ],
      },
    ];
  
    return (
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Header */}
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            Subscription Plans
          </h2>
          <p className="text-gray-500 text-lg mb-12">
            Choose the plan that best fits your needs.
          </p>
  
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="relative  bg-white shadow-xl rounded-2xl overflow-hidden border-t-4 border-green-400 hover:scale-105 transition-transform duration-300"
              >
                {/* Plan Header */}
                <div className="bg-gray-900 text-white py-4 px-6">
                  <h3 className="text-2xl font-bold">{plan.title}</h3>
                  <p className="text-sm font-semibold uppercase text-green-300">
                    {plan.tagline}
                  </p>
                </div>
  
                {/* Price Section */}
                <div className="p-6 cursor-pointer">
                  <p className="text-gray-500 text-sm mb-2">{plan.description}</p>
                  <div className="flex justify-center items-end">
                    <h4 className="text-5xl font-extrabold text-gray-800">
                      {plan.price}
                    </h4>
                    <span className="text-gray-500 text-lg ml-1">
                      /{plan.duration}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mt-2">{plan.billed}</p>
  
                  <button className="mt-6 bg-green-500 text-white font-bold py-3 px-6 rounded-full hover:bg-green-600 shadow-md transition-all duration-300">
                    BUY NOW
                  </button>
                </div>
  
                {/* Features */}
                <div className="bg-gray-50 p-6 text-left">
                  <h5 className="text-gray-800 font-semibold mb-3">FEATURES</h5>
                  <ul className="text-gray-600 text-sm space-y-2">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center space-x-2 text-gray-700"
                      >
                        <span className="inline-block w-2.5 h-2.5 bg-green-400 rounded-full"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
  
                {/* Decorative Ribbon */}
                {plan.tagline === "RECOMMENDED" && (
                  <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-semibold py-1 px-3 rounded-bl-lg">
                    Recommended
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  