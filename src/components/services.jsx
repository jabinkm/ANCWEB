import { Card, CardBody, Typography, IconButton } from "@material-tailwind/react";

const services = [
  {
    icon: "fas fa-shield-alt",
    title: 'Thermal Insulation',
    description: 'High-performance thermal insulation solutions for industrial and commercial applications.',
  },
  {
    icon: "fas fa-tint",
    title: 'Protective Coatings',
    description: 'Advanced coating systems to protect surfaces from corrosion, chemicals, and extreme weather conditions.',
  },
  {
    icon: "fas fa-thermometer-half",
    title: 'Heat Tracing',
    description: 'Electric heat tracing systems to maintain process temperatures and prevent freezing in pipelines.',
  },
  {
    icon: "fas fa-wrench",
    title: 'Maintenance Services',
    description: 'Comprehensive maintenance and repair services for insulation and coating systems.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="mt-6 hover:shadow-lg transition-shadow duration-300">
              <CardBody>
                <IconButton color="red" className="mb-4">
                  <i className={service.icon} />
                </IconButton>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {service.title}
                </Typography>
                <Typography>
                  {service.description}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

