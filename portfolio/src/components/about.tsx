export function About() {
    return (
      <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-gradient">About Me</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-xl">
                I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that make
                a difference. I specialize in modern web technologies and have a keen eye for design and user experience.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
                enjoying the great outdoors. I believe in continuous learning and staying up-to-date with the latest
                industry trends.
              </p>
              <p>
                I'm always excited to take on new challenges and collaborate with like-minded individuals to create
                something amazing that pushes the boundaries of what's possible.
              </p>
            </div>
  
            {/* Decorative gradient line */}
            <div className="mt-12 mx-auto w-24 h-1 bg-gradient-to-r from-accent to-orange rounded-full"></div>
          </div>
        </div>
      </section>
    )
  }
  