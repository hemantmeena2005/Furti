import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Make Jhane",
      role: "Finance Manager",
      profileImage: "https://images.unsplash.com/photo-1624797432677-6f803a98acb3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D",
      social: {
        facebook: "https://www.facebook.com/make.jhane",
        linkedin: "https://www.linkedin.com/in/make-jhane",
        mail: "mailto:make.jhane@example.com",
      },
    },
    {
      name: "Jinny Owen",
      role: "Marketing Manager",
      profileImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D",
      social: {
        facebook: "https://www.facebook.com/jinny.owen",
        linkedin: "https://www.linkedin.com/in/jinny-owen",
        mail: "mailto:jinny.owen@example.com",
      },
    },
    {
      name: "Mia Lobey",
      role: "Accountant",
      profileImage: "https://images.unsplash.com/photo-1613181013804-1dcba09e6a9d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1c2luZXNzJTIwbWFufGVufDB8fDB8fHww",
      social: {
        facebook: "https://www.facebook.com/mia.lobey",
        linkedin: "https://www.linkedin.com/in/mia-lobey",
        mail: "mailto:mia.lobey@example.com",
      },
    },
  ];

  const handleIconClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-6">Meet Our Team</h2>
      <p className="mb-8">
        We write various things related to furniture, from tips and what things I need to pay attention to when choosing furniture.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center relative">
            <img
              src={member.profileImage}
              alt={member.name}
              className="w-full h-72  object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="flex justify-center space-x-4">
                <i
                  className="fab fa-facebook-f text-blue-500 hover:text-blue-700 cursor-pointer"
                  onClick={() => handleIconClick(member.social.facebook)}
                ></i>
                <i
                  className="fab fa-linkedin-in text-blue-500 hover:text-blue-700 cursor-pointer"
                  onClick={() => handleIconClick(member.social.linkedin)}
                ></i>
                <i
                  className="far fa-envelope text-blue-500 hover:text-blue-700 cursor-pointer"
                  onClick={() => handleIconClick(member.social.mail)}
                ></i>
              </div>
            </div>
            <p className="font-semibold">{member.name}</p>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
