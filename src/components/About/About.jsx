import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          A Frontend web developer all the way from Nepal.
                      </h2>
                      <p className="mt-6 text-gray-600">
                      Hi, I'm Bipan, a passionate frontend developer specializing in building responsive, user-friendly web applications. I have a solid foundation in HTML, CSS, JavaScript, and I enjoy working with modern tools like Tailwind CSS and React.js to create dynamic and engaging user interfaces. I also have experience with basic Bootstrap, Node.js, and Express.js, which allows me to understand and contribute to the backend side of development. Additionally, I have a good grasp of C/C++ and Python, enhancing my problem-solving skills and logical thinking.

                      </p>
                      <p className="mt-4 text-gray-600">
                      I'm always eager to learn new technologies and take on challenges that push the boundaries of what's possible in the web development world.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}
