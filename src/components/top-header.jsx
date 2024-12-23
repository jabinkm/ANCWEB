import { IconButton } from "@material-tailwind/react";

export function TopHeader() {
  return (
    <div className="w-full bg-black text-white py-2 px-4 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
          <IconButton variant="text" color="white" size="sm">
            <i className="fas fa-map-marker-alt" />
          </IconButton>
          <span className="text-sm">King Saud Street Intersection 1 - 2, Al Khobar - 31952</span>
        </div>
        <div className="flex items-center space-x-2">
          <IconButton variant="text" color="white" size="sm">
            <i className="fas fa-clock" />
          </IconButton>
          <span className="text-sm">Time: Sunday-Thursday 08am-6pm</span>
        </div>
      </div>
    </div>
  )
}

