import React from "react"
import { motion } from "framer-motion"
import { Typography, Button } from "@material-tailwind/react"
import { Home, RefreshCcw } from "lucide-react"
import { Link } from "react-router-dom"
import { Navigation } from "../components/navigationHome"
import { Footer } from "../components/footer"

const Page404 = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex-row items-center justify-center">
        <Navigation />
        <div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <Typography variant="h1" color="blue-gray" className="m-4 text-7xl font-bold overflow-hidden">
            404
          </Typography>
        </motion.div>
        <Typography variant="h4" color="blue-gray" className="mb-4">
          Oops! Page Not Found
        </Typography>
        <motion.div
          animate={{ scale: [1, 1, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="mb-8"
        >
          <img
            src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
            alt="Muneer"
            className="mx-auto rounded-lg shadow-lg"
            style={{ width: "450px", height: "auto" }}
          />
        </motion.div>
        <Typography color="gray" className="mb-8">
          The page you're looking for doesn't exist or has been moved.
        </Typography>
        <div className="flex justify-center space-x-4">
          <Link to="/">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button color="blue" className="flex items-center gap-2">
                <Home size={18} />
                Go Home
              </Button>
            </motion.div>
          </Link>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              color="blue-gray"
              variant="outlined"
              className="flex items-center gap-2"
              onClick={() => window.location.reload()}
            >
              <RefreshCcw size={18} />
              Refresh Page
            </Button>
          </motion.div>
        </div>
      </motion.div>
      </div>
      <Footer />
    </div>
  )
}

export default Page404

