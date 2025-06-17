import Image from 'next/image'
export function About() {
    return (
      <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-gradient">About Me</span>
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {/* column 1 start*/}
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                {/* Profile Image */}
                <div className="mb-8 flex justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gradient-to-r from-accent to-orange p-1 bg-gradient-to-r from-accent to-orange">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white">
                        <Image
                          src="/rit.png"
                          width={160}
                          height={160}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    {/* Animated gradient ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-orange to-accent opacity-75 animate-spin-slow blur-sm -z-10"></div>
                  </div>
                </div>
                <p className="text-xl">
                  I&apos;m a recent graduate from the Rochester Institute of Technology with a B.S. in Software Engineering. <br></br>GO TIGERS!</p>
              </div>
              {/* column 1 end*/}
              {/* column 3 start*/}                
              <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
                {/* Profile Image */}
                <div className="mb-8 flex justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gradient-to-r from-accent to-orange p-1 bg-gradient-to-r from-accent to-orange">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white">
                        <Image
                          src="/wabtec.jpeg"
                          width={160}
                          height={160}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    {/* Animated gradient ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-orange to-accent opacity-75 animate-spin-slow blur-sm -z-10"></div>
                  </div>
                </div>
                <p>
                  Software Engineer at Wabtec Corporation - 1 Year. Developing and maintaining Full Stack Applications, eliminating security vulnerabilities, and improving user experience.
                </p>
              </div>
              {/* column 3 end*/}

              {/* column 2 start*/}
              <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
                {/* Profile Image */}
                <div className="mb-8 flex justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gradient-to-r from-accent to-orange p-1 bg-gradient-to-r from-accent to-orange">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white">
                        <Image
                          src="/bjj.png"
                          width={160}
                          height={160}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    {/* Animated gradient ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-orange to-accent opacity-75 animate-spin-slow blur-sm -z-10"></div>
                  </div>
                </div>
                <p>
                  When I&apos;m not coding I like to go workout, hit the mats with my BJJ team, scraping the markets for Stocks to trade, and I love explore new food spots with my two brothers. 
                </p>
              </div>
              {/* column 2 end*/}

              {/* column 3 start*/}                
              <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
                {/* Profile Image */}
                <div className="mb-8 flex justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gradient-to-r from-accent to-orange p-1 bg-gradient-to-r from-accent to-orange">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white">
                        <Image
                          src="/books.png"
                          width={160}
                          height={160}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    {/* Animated gradient ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-orange to-accent opacity-75 animate-spin-slow blur-sm -z-10"></div>
                  </div>
                </div>
                <p>
                  I&apos;m a life long learner who is always excited to take on new challenges by gameifying life. I enjoy collaborating with like-minded individuals to create
                  something amazing, gain new perspectives, and push the boundaries of what&apos;s possible.
                </p>
              </div>
              {/* column 3 end*/}
            </div>

            {/* Decorative gradient line */}
            <div className="mt-12 mx-auto w-24 h-1 bg-gradient-to-r from-accent to-orange rounded-full"></div>
          </div>
        </div>
      </section>
    )
  }
  