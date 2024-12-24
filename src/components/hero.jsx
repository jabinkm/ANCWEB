import { Button, IconButton } from "@material-tailwind/react";

export function Hero() {
  return (
    <div className="relative h-[500px] md:h-[600px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat h-[500px] md:h-[600px]"
        style={{
          backgroundImage: "url('images/hero-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-white px-4 py-36">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 leading-tight">
          INSULATION & COATING <br /> SOLUTIONS
        </h1>
        <p className="text-xl md:text-2xl text-center mb-12 max-w-3xl">
          Providing top-quality insulation and coating services for industrial and commercial projects across Saudi Arabia.
        </p>
        <Button className="bg-red-600 text-white px-8 py-3 text-lg rounded-full hover:bg-red-700 transition duration-300">
          Explore Our Services
        </Button>

        {/* Social Media Links */}
        <div className="absolute top-4 right-4 flex space-x-4">
          <IconButton color="white" variant="outlined" size="sm" className="hover:text-blue-700 hover:border-red-500 hover:bg-white">
            <i className="fab fa-facebook-f" />
          </IconButton>
          <IconButton color="white" variant="outlined" size="sm" className="hover:text-white hover:border-red-500 hover:bg-blue-600">
            <i className="fab fa-linkedin-in" />
          </IconButton>
          <IconButton color="white" variant="outlined" size="sm" className="hover:text-white hover:border-red-500 hover:bg-black">
          <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
              </svg>
          </IconButton>
        </div>
      </div>
    </div>
  )
}

