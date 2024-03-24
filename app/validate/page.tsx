'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { staggerContainer, slideIn } from '@/utils/motion';
import { TypingText } from '@/components/CustomTexts';
import { Compass, ArrowDown, ArrowLeft, Home, Wallet } from 'lucide-react';
import { useRouter } from 'next/navigation';

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: {
      type: 'tween',
      duration: 0.1,
    },
  },
};

const slideVariants = {
  hidden: {
    y: '-100%',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
      delay: 1,
      duration: 0.3,
      when: 'beforeChildren',
    },
  },
  exit: {
    y: '100%',
    opacity: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
      when: 'afterChildren',
    },
  },
};

const Page = () => {
  const router = useRouter();
  const [isNavLogoClicked, setIsNavLogoClicked] = useState(false);

  const handleNavLogoClicked = () => {
    setIsNavLogoClicked((prevIsNavLogoClicked) => !prevIsNavLogoClicked);
  };

  const handleWalletClick = () => {
    router.push('/wallet');
  };

  const navigate = () => {
    router.push('/');
  };
  return (
    <motion.section
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full"
    >
      {/**Nav Section */}
      <div className="w-full">
        <nav className="flex flex-row items-center justify-between bg-purple-600  px-5 py-3 w-full">
          <ArrowLeft
            width={20}
            height={20}
            color="white"
            onClick={navigate}
            className={` cursor-pointer hover:scale-110 active:scale-105 transition-all duration-200`}
          />
          {/**Nav Input Section */}

          {isNavLogoClicked && (
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              transition={{
                delay: 0.3,
                ease: 'easeInOut',
                duration: 0.5,
              }}
              className="flex flex-row items-center  justify-between gap-8 sm:gap-[300px] lg:gap-[700px] relative "
            >
              <Image
                src="/piLogo.png"
                alt="logo"
                width={25}
                height={25}
                quality={90}
                className="absolute lg:w-[30px] lg:h-[30px]"
              />
              <input
                className="flex self-center rounded-[8px] placeholder:text-black placeholder:text-[12px] lg:placeholder:text-[15px] placeholder:font-lexend placeholder:px-[50px] outline-none px-5 lg:px-[100px] lg:py-1 "
                type="text"
                disabled
                placeholder="pi-validate.com"
              />
              <p
                className=" text-white font-lexend text-[12px] cursor-pointer"
                onClick={handleNavLogoClicked}
              >
                back
              </p>
            </motion.div>
          )}

          <Image
            src="/piLogo.png"
            alt="logo"
            width={50}
            height={50}
            quality={90}
            onClick={handleNavLogoClicked}
            className={`${
              isNavLogoClicked ? 'hidden' : 'flex'
            } cursor-pointer hover:scale-110 active:scale-105 transition-all duration-200`}
          />

          <ArrowDown
            width={20}
            height={20}
            color="white"
            onClick={handleNavLogoClicked}
            className={`${
              isNavLogoClicked ? 'hidden' : 'flex'
            } cursor-pointer hover:scale-110 active:scale-105 transition-all duration-200`}
          />
        </nav>

        {/**Previously visited uls */}
        <motion.div
          variants={slideVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ amount: 0.5, once: false }}
          className="flex flex-col items-center justify-center gap-5"
        >
          {isNavLogoClicked && (
            <>
              <motion.p
                variants={slideVariants}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ amount: 0.5, once: false }}
                className="text-gray-700 font-lexend font-extrabold text-[18px] lg:text-[25px] tracking-wide leading-7"
              >
                Most visited urls
              </motion.p>
              <div className="flex flex-row gap-[80px] pt-3 px-5">
                <div className="flex flex-col items-center">
                  <motion.div
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{
                      delay: 2,
                      ease: 'easeInOut',
                      duration: 0.5,
                    }}
                    viewport={{ amount: 0.5, once: false }}
                    className="flex flex-col items-center hover:scale-110 active:scale-105 transition-all duration-200 rounded-[12px] shadow-lg px-3 py-3 border border-purple-200"
                  >
                    <Home
                      width={30}
                      height={30}
                      color="purple"
                      onClick={navigate}
                    />
                  </motion.div>
                  <motion.p
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{
                      delay: 2,
                      ease: 'easeInOut',
                      duration: 0.5,
                    }}
                    className="  text-gray-700 font-lexend text-[13px] sm:text-[15px] lg:text-[18px]"
                  >
                    Home
                  </motion.p>
                </div>

                <div className="flex flex-col items-center">
                  <motion.div
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{
                      delay: 2,
                      ease: 'easeInOut',
                      duration: 0.5,
                    }}
                    viewport={{ amount: 0.5, once: false }}
                    className="flex flex-col items-center hover:scale-110 active:scale-105 transition-all duration-200 rounded-[12px] shadow-lg px-3 py-3 border border-purple-200"
                  >
                    <Wallet
                      width={30}
                      height={30}
                      color="purple"
                      onClick={handleWalletClick}
                    />
                  </motion.div>
                  <motion.p
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{
                      delay: 2,
                      ease: 'easeInOut',
                      duration: 0.5,
                    }}
                    className=" text-gray-700  font-lexend  text-[13px] sm:text-[15px] lg:text-[18px]"
                  >
                    Wallet
                  </motion.p>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>

      {/**Main Section*/}
      <div className="flex flex-col items-center justify-center -mt-[900px] sm:-mt-[700px] ">
        <AnimatePresence>
          {!isNavLogoClicked && (
            <motion.div
              variants={slideIn('down', 'tween', 0.5, 0.75)}
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              transition={{
                delay: 0.3,
                ease: 'easeInOut',
                duration: 0.5,
              }}
            >
              <div className="flex items-center justify-center">
                <a
                  href="/"
                  className=" hover:scale-110 active:scale-105 transition-all duration-200 hover:text-white cursor-pointer"
                >
                  <Image
                    src={`/piLogo.png`}
                    alt="logo"
                    width={200}
                    height={200}
                    quality={90}
                    priority
                    className=" object-cover"
                  />
                </a>
              </div>

              <div className="flex items-center justify-center">
                <TypingText
                  title="Welcome to the Pi Browser"
                  textStyles="text-gray-700 font-lexend font-extrabold text-[18px] lg:text-[25px] tracking-wide leading-7"
                />
              </div>

              <motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                transition={{
                  delay: 3,
                  ease: 'easeInOut',
                  duration: 0.5,
                }}
                viewport={{ amount: 0.5, once: false }}
                className=" grid grid-cols-3 sm:flex flex-row padding-x  sm:gap-[100px] mt-[100px] items-center justify-center"
              >
                <a
                  href="/validate"
                  className="flex flex-col gap-3 items-center hover:scale-110 active:scale-105 transition-all"
                >
                  <Image src="/chat.png" alt="chat" width={50} height={50} />
                  <p className=" font-Azeret text-gray-600 text-[12px] lg:text-[16px] font-medium">
                    chat.pi
                  </p>
                </a>

                <a
                  href="/wallet"
                  className="flex flex-col gap-3 items-center hover:scale-110 active:scale-105 transition-all"
                >
                  <Image
                    src="/wallet.png"
                    alt="wallet"
                    width={50}
                    height={50}
                  />
                  <p className=" font-Azeret text-gray-600 text-[12px] lg:text-[16px] font-medium">
                    wallet.pi
                  </p>
                </a>

                <a
                  href="/validate"
                  className="flex flex-col gap-3 items-center hover:scale-110 active:scale-105 transition-all"
                >
                  <Image
                    src="/brainstorm.png"
                    alt="brainstorm"
                    width={50}
                    height={50}
                  />
                  <p className=" font-Azeret text-gray-600 text-[12px] lg:text-[16px] font-medium">
                    brainstorm.pi
                  </p>
                </a>
              </motion.div>

              <motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                transition={{
                  delay: 3.5,
                  ease: 'easeInOut',
                  duration: 0.5,
                }}
                viewport={{ amount: 0.5, once: false }}
                className=" grid grid-cols-3 padding-x sm:flex flex-row gap-[25px] sm:gap-[50px] mt-[50px] items-center justify-center flex-wrap "
              >
                <a
                  href="/validate"
                  className="flex flex-col gap-3 items-center  hover:scale-110 active:scale-105 transition-all"
                >
                  <Image
                    src="/axe.png"
                    alt="axe"
                    width={50}
                    height={50}
                    className="border border-gray-800 rounded-md px-2 py-2"
                  />
                  <p className=" font-Azeret text-gray-600 text-[12px] lg:text-[16px] font-medium">
                    mine.pi
                  </p>
                </a>

                <a
                  href="/validate"
                  className="flex flex-col gap-3 items-center hover:scale-110 active:scale-105 transition-all"
                >
                  <Image
                    src="/blockPi.png"
                    alt="blockchain"
                    width={50}
                    height={50}
                  />
                  <p className=" font-Azeret text-gray-600 text-[12px] lg:text-[16px] font-medium">
                    blockchain.pi
                  </p>
                </a>

                <a
                  href="/validate"
                  className="flex flex-col gap-3 items-center hover:scale-110 active:scale-105 transition-all"
                >
                  <Image
                    src="/develop.png"
                    alt="develop"
                    width={50}
                    height={50}
                  />
                  <p className=" font-Azeret text-gray-600 text-[12px] lg:text-[16px] font-medium">
                    develop.pi
                  </p>
                </a>

                <a
                  href="/validate"
                  className="flex flex-col gap-3 items-center hover:scale-110 active:scale-105 transition-all"
                >
                  <Image src="/kyc.png" alt="kyc" width={50} height={50} />
                  <p className=" font-Azeret text-gray-600 text-[12px] lg:text-[16px] font-medium">
                    kyc.pi
                  </p>
                </a>

                <a
                  href="/validate"
                  className="flex flex-col gap-3 items-center hover:scale-110 active:scale-105 transition-all"
                >
                  <Image
                    src="/fireside.png"
                    alt="fireside"
                    width={50}
                    height={50}
                  />
                  <p className=" font-Azeret text-gray-600 text-[12px] lg:text-[16px] font-medium">
                    fireside.pi
                  </p>
                </a>
              </motion.div>

              <div className="flex justify-center items-center mt-[100px] pb-[100px]">
                <button className="flex flex-row gap-5 bg-purple-600 hover:scale-110 active:scale-105 transition-all rounded-md shadow-md p-2 group w-[fit-content] items-center">
                  <Compass
                    size={25}
                    color="white"
                    className=" animate-spin transition-all"
                  />
                  <TypingText
                    title="explore the testnet ecosystem"
                    textStyles="text-white font-medium capitalize font-work text-[12px] lg:text-[18px]"
                  />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};
export default Page;
