import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-black via-secondary-900 to-black relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-accent/20 to-orange/20 transform -skew-y-6"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Let's work <span className="text-gradient">together</span>
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Whether you have a project in mind or just want to chat about technology, I'd love to hear from you.
                Drop me a message and I'll get back to you as soon as possible.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-gradient-to-r from-accent to-orange rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  amy9270@g.rit.edu
                </span>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-gradient-to-r from-accent to-orange rounded-full group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                 Rochester, NY
                </span>
              </div>
            </div>
          </div>

          {/* Fixed Contact Form Card */}
          <Card className="overflow-hidden bg-gradient-to-br from-secondary-800 to-secondary-900 border-accent/20 shadow-2xl p-0">
            <CardHeader className="bg-gradient-to-r from-accent/20 to-orange/20 p-6 rounded-t-lg border-b border-accent/10">
              <CardTitle className="text-white text-xl m-0 p-0">Send me a message</CardTitle>
              <CardDescription className="text-gray-300 mt-2 m-0 p-0">
                Fill out the form below and I'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-300">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Abiel"
                      className="bg-secondary-700 border-accent/30 text-white placeholder:text-gray-400 focus:border-accent focus:ring-accent/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-300">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Yemane"
                      className="bg-secondary-700 border-accent/30 text-white placeholder:text-gray-400 focus:border-accent focus:ring-accent/20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="abiel@example.com"
                    className="bg-secondary-700 border-accent/30 text-white placeholder:text-gray-400 focus:border-accent focus:ring-accent/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-300">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Project inquiry"
                    className="bg-secondary-700 border-accent/30 text-white placeholder:text-gray-400 focus:border-accent focus:ring-accent/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-300">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    className="min-h-[120px] bg-secondary-700 border-accent/30 text-white placeholder:text-gray-400 focus:border-accent focus:ring-accent/20"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-accent to-orange hover:from-accent-600 hover:to-orange-600 text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
