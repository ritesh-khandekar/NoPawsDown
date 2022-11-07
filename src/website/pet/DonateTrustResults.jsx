import React from 'react'
import { motion } from "framer-motion"

const DonateTrustResults = () => {
  return <>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}  className="text-center container p-3 text-secondary">
      <div className="h3 text-center">
        Thank you so much for your donation!
      </div>
    </motion.div>
  </>
}

export default DonateTrustResults