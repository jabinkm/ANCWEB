import {
  Typography,
  Button,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";

export default function IsoCertificate() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-8 text-center"
          >
            Our ISO Certifications
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "ISO 9001:2015",
                description: "Quality Management System",
                image: "/images/iso9001.png",
              },
              {
                name: "ISO 14001:2015",
                description: "Environmental Management System",
                image: "/images/iso14001.png",
              },
              {
                name: "ISO 45001:2018",
                description: "Occupational Health and Safety Management System",
                image: "/images/iso45001.png",
              },
            ].map((cert, index) => (
              <Card key={index} className="mt-6 w-96">
                <CardHeader color="blue-gray" className="">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="h-full w-full object-contain"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {cert.name}
                  </Typography>
                  <Typography>{cert.description}</Typography>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
