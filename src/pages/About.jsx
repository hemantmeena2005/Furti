// src/pages/About.js
import React from "react";

const About = () => {
  const teamMembers = Array(4).fill({
    name: "Make Jhane",
    position: "Finance Manager",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww"
  });

  const reviews = [
    {
      text: "For the material and the chair as we expected it's good. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
      reviewer: "Dagruel Manulo",
      location: "Sydney, Australia",
      image: "https://images.unsplash.com/photo-1619539465730-fea9ebf950f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      text: "For the material and the chair as we expected it's good. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
      reviewer: "Zambi Owel",
      location: "Sydney, Australia",
      image: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww",
    },
    {
      text: "For the material and the chair as we expected it's good. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
      reviewer: "Mario",
      location: "Sydney, Australia",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww",
    },
  ];

  const brands = [
    { logo: "https://images.unsplash.com/photo-1555274175-75f4056dfd05?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnJhbmQlMjBsb2dvc3xlbnwwfHwwfHx8MA%3D%3D" },
    { logo: "data:image/png;base64,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" },
    { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUK_wXTXbHG5OKL3ieLtEzNWN7ZUzDrSHGjQ&s" },
    { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNpEVNMbDqnr95KORXsb4j1yV4jlHBW2fnTw&s" },
    { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm8Vsj-wf6w-dr9-iQuiQ7sElamMhvA7rRYg&s" },
  ];

  return (
    <div className="container mx-auto p-4">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Provide the best quality ingredients for home products</h1>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet consectetur adipiscing elit dictumst posuere, lectus dis vehicula augue elementum quam risus. Placerat dictum lobortis lacinia volutpat morbi cum justo commodo est aliquam, facilisi consequat ligula vivamus faucibus.
        </p>
        <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="border rounded-lg p-4 text-center">
              <img src={member.image} alt={member.name} className="w-24 h-24 mx-auto mb-4 rounded-full" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Ratings</h2>
        <div className="flex items-center mb-4">
          <img src="stars image" alt="5.0 rating" className="w-24 h-6" />
          <span className="text-xl font-bold ml-2">5.0</span>
        </div>
        <p className="text-gray-700">Trusted by many people from all over the world</p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Various brands have used our products</h2>
        <div className="flex items-center justify-around mb-4">
          {brands.map((brand, index) => (
            <img key={index} src={brand.logo} alt={`Brand logo ${index + 1}`} className="h-12" />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
        <p className="text-gray-700 mb-4">
          We write various things related to furniture, from tips and what things I need to pay attention to when choosing furniture.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="border rounded-lg p-4 text-center">
              <img src={member.image} alt={member.name} className="w-24 h-24 mx-auto mb-4 rounded-full" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">How happy are they with our service</h2>
        <div className="space-y-8">
          {reviews.map((review, index) => (
            <div key={index} className="border p-4 rounded-lg">
              <p className="text-gray-700 italic mb-4">&quot;{review.text}&quot;</p>
              <div className="flex items-center">
                <img src={review.image} alt={review.reviewer} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-semibold">{review.reviewer}</p>
                  <p className="text-gray-600">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
