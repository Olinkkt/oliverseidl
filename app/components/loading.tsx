'use client'

import { motion } from 'framer-motion'

export function ProjectSkeleton() {
  return (
    <div className="group relative h-full">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl opacity-20"></div>
      <div className="relative h-full bg-gray-900 rounded-xl border border-gray-800 p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gray-800 animate-pulse" />
            <div className="h-6 w-32 bg-gray-800 rounded animate-pulse" />
          </div>
        </div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-800 rounded animate-pulse" />
          <div className="h-4 bg-gray-800 rounded animate-pulse w-4/5" />
        </div>
      </div>
    </div>
  )
}

export function CertificateLoading() {
  return (
    <div className="relative aspect-[0.707/1] w-full rounded-lg overflow-hidden bg-gray-800/50">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent"
        animate={{
          x: ['0%', '100%', '0%'],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-16 h-16 border-4 border-purple-500 rounded-full border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </div>
  )
}