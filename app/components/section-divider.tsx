'use client'

import { motion } from 'framer-motion'

export function SectionDivider() {
  return (
    <motion.div
      className="bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px my-24"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    />
  )
} 