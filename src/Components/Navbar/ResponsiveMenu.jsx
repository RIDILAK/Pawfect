import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'; // Added
import { NavBarMenu } from './MockData';

function ResponsiveMenu({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="fixed top-0 left-0 w-full h-full bg-black/60 z-20"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            className="absolute top-0 left-0 w-3/4 max-w-sm h-full bg-secondary text-white flex flex-col justify-center items-center py-10"
          >
           
            <ul className="space-y-6 text-lg font-semibold">
              {NavBarMenu.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link} 
                    className="hover:text-third"
                    onClick={onClose}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ResponsiveMenu;
