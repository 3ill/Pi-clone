'use client';

import Image from 'next/image';
import { TypingText } from '@/components/CustomTexts';
import { Compass } from 'lucide-react';

const Page = () => {
  return (
    <section className=" min-h-screen">
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
            className="lg:w-[500px] lg:h-[500px] object-cover"
          />
        </a>
      </div>

      <div className="flex items-center justify-center">
        <TypingText
          title="Welcome to the Pi Browser"
          textStyles="text-gray-700 font-work font-bold text-[18px] lg:text-[25px] tracking-wide leading-7"
        />
      </div>

      <div className="flex flex-row gap-[50px] sm:gap-[100px] mt-[100px] items-center justify-center">
        <a
          href="/validate"
          className="flex flex-col gap-3 items-center hover:scale-110 active:scale-105 transition-all"
        >
          <Image src="/chat.png" alt="chat" width={50} height={50} />
          <p className=" font-Azeret text-gray-600 text-[12px] lg:text-[16px] font-bold">
            chat.pi
          </p>
        </a>

        <a
          href="/wallet"
          className="flex flex-col gap-3 items-center hover:scale-110 active:scale-105 transition-all"
        >
          <Image src="/wallet.png" alt="wallet" width={50} height={50} />
          <p className=" font-Azeret text-gray-600 text-[12px] lg:text-[16px] font-bold">
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
          <p className=" font-Azeret text-gray-600 text-[12px] lg:text-[16px] font-bold">
            brainstorm.pi
          </p>
        </a>
      </div>

      <div className="flex flex-row gap-[25px] sm:gap-[50px] mt-[50px] items-center justify-center flex-wrap ">
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
          <p className=" font-Azeret text-gray-600 text-[12px] lg:text-[16px] font-bold">
            mine.pi
          </p>
        </a>

        <a
          href="/validate"
          className="flex flex-col gap-3 items-center hover:scale-110 active:scale-105 transition-all"
        >
          <Image src="/blockPi.png" alt="blockchain" width={50} height={50} />
          <p className=" font-Azeret text-gray-600 text-[12px] lg:text-[16px] font-bold">
            blockchain.pi
          </p>
        </a>

        <a
          href="/validate"
          className="flex flex-col gap-3 items-center hover:scale-110 active:scale-105 transition-all"
        >
          <Image src="/develop.png" alt="develop" width={50} height={50} />
          <p className=" font-Azeret text-gray-600 text-[12px] lg:text-[16px] font-bold">
            develop.pi
          </p>
        </a>

        <a
          href="/validate"
          className="flex flex-col gap-3 items-center hover:scale-110 active:scale-105 transition-all"
        >
          <Image src="/kyc.png" alt="kyc" width={50} height={50} />
          <p className=" font-Azeret text-gray-600 text-[12px] lg:text-[16px] font-bold">
            kyc.pi
          </p>
        </a>

        <a
          href="/validate"
          className="flex flex-col gap-3 items-center hover:scale-110 active:scale-105 transition-all"
        >
          <Image src="/fireside.png" alt="fireside" width={50} height={50} />
          <p className=" font-Azeret text-gray-600 text-[12px] lg:text-[16px] font-bold">
            fireside.pi
          </p>
        </a>
      </div>

      <div className="flex justify-center items-center mt-[100px] pb-[100px]">
        <button className="flex flex-row gap-5 bg-purple-600 hover:scale-110 active:scale-105 transition-all rounded-md shadow-md p-2 group">
          <Compass
            size={25}
            color="white"
            className=" animate-spin transition-all"
          />
          <TypingText
            title="explore the testnet ecosystem"
            textStyles="text-white font-semibold capitalize font-Azeret text-[16px] lg:text-[18px]"
          />
        </button>
      </div>
    </section>
  );
};
export default Page;
