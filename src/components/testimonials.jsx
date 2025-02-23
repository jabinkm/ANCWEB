

import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";

const testimonials = [
  {
    name: 'Nabeel A. Al Mansour',
    company: 'Saudi Aramco',
    quote: 'ANC provided exceptional insulation services for our refinery project. Their attention to detail and commitment to quality were outstanding.',
    image: '/images/test1.webp',
  },
  {
    name: 'Zahra Najeh',
    company: 'SABIC',
    quote: 'We\'ve worked with ANC on multiple projects, and they consistently deliver top-notch results. Their expertise in industrial coatings is unmatched.',
    image: '/images/test2.png',
  },
  {
    name: 'Ali Alhufaiyan',
    company: 'Saudi Electricity Company',
    quote: 'ANC\'s heat tracing solutions have significantly improved our pipeline efficiency. Their team is professional, knowledgeable, and reliable.',
    image: '/images/test3.png',
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-red-600">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="mt-6 hover:shadow-lg transition-shadow duration-300 bg-black text-white">
              <CardBody>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar
                    size="lg"
                    variant="circular"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div>
                    <Typography variant="h6" className="text-red-600">{testimonial.name}</Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                      {testimonial.company}
                    </Typography>
                  </div>
                </div>
                <Typography color="white" className="font-normal mb-3">
                  "{testimonial.quote}"
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}