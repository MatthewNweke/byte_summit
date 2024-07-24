import React from "react";
import Image from "next/image";
const SwiperCard = () => {
  return (
    <div className="w-[30%] max-xl:w-[50%] min-h-[40vh] max-lg:w-[60%] max-sm:w-[100%] max-md:w-[80%] border-[1px] rounded-xl border-[#C3C9E2] p-5 relative -translate-x-1/2 left-1/2">
      <div className="flex items-center gap-3 mb-5">
        <div className="relative w-16 h-16">
          <Image
            src="/client_img.svg"
            alt="software"
            layout="fill"
            objectFit="contain"
            loading="lazy"
          />
        </div>

        <div>
          <p className="font-semibold">Sarah J. Itinery&lsquo;s CEO </p>
          <p>Singapore</p>
        </div>
      </div>

      <p>
        "I had no prior knowledge of blockchain, but your Starter Plan made it
        so easy to get started! The courses were well-structured, and the live
        Q&A sessions helped clarify my doubts. I now feel confident discussing
        blockchain concepts. Thanks, Blockchain Mastery!"
      </p>
    </div>
  );
};

export default SwiperCard;
