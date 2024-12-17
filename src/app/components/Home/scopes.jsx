// components/ScopeOfOfferings.js
export default function ScopeOfOfferings() {
    const offerings = [
      {
        id: 1,
        title: "Water management",
        description: "Ensure consistent, quality yields. Prevent crop damage from under/over-irrigation or fertilization. Minimize growing costs.",
        icon: "💧", // Replace with an image or icon if needed
      },
      {
        id: 2,
        title: "Soil monitoring",
        description: "Ensure consistent, quality yields. Prevent crop damage from under/over-irrigation or fertilization. Minimize growing costs.",
        icon: "🌱", // Replace with an image or icon if needed
      },
      {
        id: 3,
        title: "Pesticide control",
        description: "Ensure consistent, quality yields. Prevent crop damage from under/over-irrigation or fertilization. Minimize growing costs.",
        icon: "🧪", // Replace with an image or icon if needed
      },
    ];
  
    return (
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Header */}
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Scope of Offerings:
          </h2>
  
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 cursor-pointer">
            {offerings.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300"
              >
                <div className="flex justify-center items-center text-5xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
  
          {/* Footer Text */}
          <div className="mt-12">
            <p className="text-xl font-semibold text-gray-700 leading-relaxed">
              We support you with what we're good at.
              <br />
              <span className="font-bold">Leaving you to focus on what you're good at.</span>
            </p>
          </div>
        </div>
      </section>
    );
  }
  