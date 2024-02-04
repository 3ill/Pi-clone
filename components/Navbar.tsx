'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { navVariants, staggerContainer } from '@/utils/motion';
import { navLinks, socialLinks } from '@/constants';
import { ChevronDown, Search, Menu } from 'lucide-react';

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState('bg-transparent');
  const navbarHeight = 80;

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      const navbarColor =
        offset > navbarHeight ? 'bg-purple-800' : 'bg-transparent';
      setNavbarColor(navbarColor);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navbarHeight]);
  return (
    <motion.section
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`sticky top-0 z-50 shadow ${navbarColor} transition-all duration-400 `}
    >
      <motion.nav
        variants={navVariants}
        whileInView="show"
        className="padding-x py-4 flex flex-row  items-center  "
      >
        <a
          href="/"
          className=" hover:scale-105 active:scale-100 transition-all duration-200 hover:text-white cursor-pointer"
        >
          <Image
            src="/Pi-Network.webp"
            alt="Pi-Network"
            width={300}
            height={300}
            className=" w-[100px] md:w-[100px] lg:w-[300px]"
          />
        </a>
        <div className="hidden sm:hidden md:hidden lg:flex flex-row gap-3 text-gray-200 font-lexend ml-[500px]">
          {navLinks.map((link) => (
            <React.Fragment key={link.name}>
              <div className="flex flex-row gap-2 items-center group hover:scale-105 active:scale-100 transition-all duration-200 hover:text-white">
                <a href={link.link} className="relative overflow-hidden ">
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                </a>
                <ChevronDown className="w-4 h-4" />
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="hidden lg:flex flex-row gap-5 text-gray-200 font-lexend  ml-[100px] perspective">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.link}
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center group hover:scale-105 flip-effect flip-on-hover active:scale-100 transition-all duration-200 hover:text-white w-5 h-5"
            >
              {link.icon}
            </a>
          ))}

          <div className="ml-5 flip-effect group hover:scale-105 flip-on-hover transition-all active:scale-100">
            <Search className="w-5 h-5" />
          </div>
        </div>

        {/**Mobile nav */}
        <div className="flex flex-row ml-[150px] md:ml-[500px] items-center  lg:hidden  gap-7 ">
          <Search color="white" className="w-7 h-7" />
          <Menu color="white" className="w-7 h-7" />
        </div>
      </motion.nav>
    </motion.section>
  );
};
export default Navbar;
