import React from "react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-gray-50 py-16 text-center">
      <h3 className="text-3xl font-bold text-gray-800 mb-8">How It Works</h3>
      <div className="flex justify-center gap-8 flex-wrap px-4">
        {[
          { title: 'Post a Request', description: 'Describe the service you need and your location.' },
          { title: 'Get Matched', description: 'We connect you with trusted workers in your area.' },
          { title: 'Work Done & Payment', description: 'The worker completes the job, and you pay securely.' },
        ].map((step, index) => (
          <div key={index} className="p-6  rounded-lg shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer bg-white w-72 transform hover:scale-105">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">{step.title}</h4>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
