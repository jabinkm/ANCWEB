
import { Button } from "@material-tailwind/react";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 my-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="images/aboutHero.png"
              alt="About ANC"
              width={600}
              height={400}
              className="rounded-lg shadow-xl  transition  duration-300"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">About ANC</h2>
            <p className="text-lg text-gray-600 mb-6">
              Ahmed Yoosuf Al Nujaidhi Contracting Est. (ANC) is a leading contracting company based in Al Khobar, Saudi Arabia. With over two decades of experience, we specialize in providing top-quality insulation and coating solutions for industrial and commercial projects.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our team of skilled professionals is committed to delivering excellence in every project we undertake. We pride ourselves on our attention to detail, use of cutting-edge technology, and adherence to international quality standards.
            </p>
            <Button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

