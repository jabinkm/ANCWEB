import { Button, Input, Textarea } from "@material-tailwind/react";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Get in Touch</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <form className="space-y-4">
              <Input type="text" label="Name" size="lg" />
              <Input type="email" label="Email" size="lg" />
              <Textarea label="Message" size="lg" />
              <Button type="submit" className="w-full bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300">
                Send Message
              </Button>
            </form>
          </div>
          <div className="md:w-1/2">
            <div className="space-y-6">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-red-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">King Saud Street Intersection 1 - 2, Al Khobar - 31952, P.O Box: 1044, Saudi Arabia</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-phone text-red-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600"><a href="tel:+966 13 893 3315">+966 13 893 3315</a></p>
                  <p className="text-gray-600"><a href="tel:+966 50 131 0073">+966 50 131 0073</a></p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-envelope text-red-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600 hover:text-sky-400"><a href="mailto:info@ancarabia.com">info@ancarabia.com</a></p>
                  <p className="text-gray-600"><a href="mailto:sales@ancarabia.com">sales@ancarabia.com</a></p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7149.827966662883!2d50.19128913166594!3d26.36164398453393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDIxJzQyLjEiTiA1MMKwMTEnNDEuNCJF!5e0!3m2!1sen!2ssa!4v1735634917663!5m2!1sen!2ssa"
                // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.7261415076!2d50.19808881503!3d26.29080898341711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e674f71ad58d%3A0x5af3c1f3c3c8f0f0!2sKing%20Saud%20St%2C%20Al%20Khobar%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1623456789012!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

