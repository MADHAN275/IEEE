import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MemberModal = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-900 bg-opacity-70 border border-gray-700 rounded-2xl shadow-2xl max-w-xs md:max-w-2xl w-full relative overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute top-0 right-0 p-2 z-10">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img src={member.image} alt={member.name} className="w-full h-48 md:h-full object-cover" />
            </div>
            <div className="md:w-1/2 p-4 md:p-6 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{member.name}</h2>
              <p className="text-base md:text-lg text-blue-400 font-semibold mb-4">{member.role}</p>
              <p className="text-sm text-gray-300 leading-relaxed">{member.description}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MemberModal;