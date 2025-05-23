import React from 'react';
import { footerLinks1, footerLinks2 } from '@/constants';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="flex flex-col bg-[#464646]  min-h-[200px] justify-between items-center padding-x py-5 w-full">
      <div className="flex flex-col sm:flex-row gap-[100px] lg:gap-[500px]">
        <div className="flex flex-col gap-5 w-[fit-content]">
          {footerLinks1.map((link, index) => (
            <React.Fragment key={index}>
              <a
                href={link.link}
                target="_blank"
                className="text-[16px] font-work hover:animate-pulse hover:text-gray-400 font-medium"
              >
                {link.name}
              </a>
            </React.Fragment>
          ))}
        </div>

        <div className="flex flex-col gap-5 w-[fit-content] ">
          {footerLinks2.map((link, index) => (
            <React.Fragment key={index}>
              <a
                href={link.link}
                target="_blank"
                className="text-[16px]  hover:animate-pulse hover:text-gray-400 font-medium font-work"
              >
                {link.name}
              </a>
            </React.Fragment>
          ))}
        </div>

        <div>
          <Image
            src="/Pi-Network.webp"
            alt="Pi-Network"
            width={500}
            height={300}
            className=" object-cover hidden lg:flex "
          />
        </div>
      </div>

      <div className="mt-[50px] ">
        <Image
          src="/Pi-Network.webp"
          alt="Pi-Network"
          width={200}
          height={200}
          className=" object-contain lg:hidden "
        />
      </div>
    </footer>
  );
};
export default Footer;