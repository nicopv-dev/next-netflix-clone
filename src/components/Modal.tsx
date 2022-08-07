import { AnimatePresence, motion } from 'framer-motion'
import { XIcon as XIconSolid } from '@heroicons/react/solid'

interface IModalProps {
  isOpen: boolean
  onClose: () => void
  children: JSX.Element
  title: string
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
}: IModalProps) {
  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 z-40 flex h-full w-full items-center justify-center bg-netflixBg bg-opacity-70"
          variants={backdrop}
          animate="visible"
          initial="hidden"
        >
          <div className="w-full max-w-4xl bg-netflixBg shadow-xl">
            {/* header */}
            <div className="flex justify-between px-6 pt-6">
              <h2 className="text-xl font-semibold text-white">{title}</h2>
              <button type="button" onClick={onClose}>
                <XIconSolid className="h-7 w-7 text-white" />
              </button>
            </div>
            {/* content */}
            <div className="h-80 w-full p-6">{children}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
