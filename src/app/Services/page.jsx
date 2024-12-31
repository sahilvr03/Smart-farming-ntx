import Image from 'next/image'; // For optimized image rendering in Next.js


const services = [
  {
    id: 1,
    title: "Irrigation as a Service",
    description: `1. You purchase and operate your irrigation system.
                  2. You can also receive full management services.
                  3. Maintenance services available to ensure the best operation.`,
    image: "/images/19.jpg", // Replace with actual image paths
  },
  {
    id: 2,
    title: "Operation and Maintenance",
    description: `1. You purchase and operate your irrigation system.
                  2. Full maintenance and operational support.
                  3. Ongoing technical assistance.`,
    image: "/images/18.jpg", // Replace with actual image paths
  },
  {
    id: 3,
    title: "Annual Service Program",
    description: `1. Annual inspections to ensure efficiency.
                  2. Ongoing support throughout the year.
                  3. Timely maintenance to avoid system failures.`,
    image: "/images/2.jpg", // Replace with actual image paths
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-96 lg:h-[100vh]"
      >
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/videos/new1.mp4" // Replace with your video file path
                autoPlay
                loop
                muted
            ></video>
                 {/* Content */}
                 <div className="relative flex flex-col items-center  justify-center h-full text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Services</h1>
                <p className="text-xl mb-6">We provide Operating System for Precision Irrigation</p>
              
            </div>
      </div>

      {/* Services Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Services</h2>
          <p className="text-lg text-gray-600 mb-12">
            Services is the new way to adopt precision irrigation with expert support to get great results and minimize risks.
            Now you can choose a fully-managed irrigation solution with exactly the level of support you need.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative bg-white shadow-xl rounded-2xl overflow-hidden border-t-4 hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mt-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
      <div className="bg-gray-50">
      {/* Top Support Section */}
      <div className="text-center py-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          We support you with what we're good at.<br />
          <span className="text-green-600">Leaving you to focus on what you're good at.</span>
        </h2>
      </div>

      {/* Precision Irrigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
        {/* Card 1 */}
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative w-full md:w-1/2 h-64 mx-2">
            <Image 
              src="/images/8.jpg" 
              alt="Precision Irrigation" 
              layout="fill" 
              objectFit="contain" 
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Precision irrigation solutions
            </h3>
            <p className="text-gray-600">
              Today, the best way to deliver bigger, better, more profitable yields is also the most sustainable agriculture.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative w-full md:w-1/2 h-64 mx-2">
            <Image 
              src="/images/9.jpg" 
              alt="Precision Irrigation" 
              layout="fill" 
              objectFit="contain" 
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Precision irrigation solutions
            </h3>
            <p className="text-gray-600">
              Today, the best way to deliver bigger, better, more profitable yields is also the most sustainable agriculture.
            </p>
          </div>
        </div>
      </div>

      {/* Final Banner Section */}
      <div className="relative bg-cover bg-center mt-12 rounded-lg overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-300 ease-in-out" style={{ backgroundImage: "url('/images/19.jpg')" }}>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent flex items-center justify-center">
    {/* Text Content */}
    <h3 className="text-2xl md:text-4xl font-extrabold text-white text-center px-6 leading-snug tracking-wide drop-shadow-lg">
      Producer Managed Irrigation Services <br />
      <span className="text-green-400">Reduce Risks and Increase Profitability</span>
    </h3>
  </div>
  {/* Ensuring Proper Height */}
  <div className="h-72 md:h-[30rem]"></div>
</div>

    </div>
      </section>
    
    </div>
  );
}
