import {
  Typography,
  Button,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";

export default function IsoCertificate() {
  return (
    <div className="flex flex-col">
      <div className="bg-gray-100 py-16">
        <div className="mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Our ISO Certifications</h2>    
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"> 
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
              <Card key={index} className="mt-6 sm:w-96 mx-auto">
                <CardHeader color="white" className="">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="h-[80%] w-[80%] object-contain mx-auto my-auto"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {cert.name}
                  </Typography>
                  <Typography>{cert.description}</Typography>
                </CardBody>
                {/* <CardBody>
                  <img src=""
                </CardBody> */}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
