jsx
import React from 'react';

const PartnerSection = () => {
  const partners = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3cbbfc35fc3a3994a0f879e317a4e42bd4449947eedd8976d7fdcf9e1812c4c0?placeholderIfAbsent=true&apiKey=a9c03e5a54cc4cac9f2ba6c60e9f6f3a", alt: "Partner logo 1", className: "object-contain shrink-0 self-stretch my-auto max-w-full aspect-[1.34] w-[157px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/21fdb46d227f854248e20d912e7a810feaf2873975eed6a6e70330098b33498d?placeholderIfAbsent=true&apiKey=a9c03e5a54cc4cac9f2ba6c60e9f6f3a", alt: "Partner logo 2", className: "object-contain shrink-0 self-stretch max-w-full aspect-[1.06] w-[166px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d12ec69e3c76190303b872333fffda1d51516ae145b0711bb0e5782eafe3c92a?placeholderIfAbsent=true&apiKey=a9c03e5a54cc4cac9f2ba6c60e9f6f3a", alt: "Partner logo 3", className: "object-contain shrink-0 self-stretch my-auto max-w-full aspect-square w-[122px]" }
  ];

  return (
    <section className="flex relative flex-col justify-center items-center px-16 py-60 mt-10 w-full min-h-[650px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:py-24 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe4a680969a823dc41ff8f4679c174f5d9437570e4d3ea9ae4a6bb34632de311?placeholderIfAbsent=true&apiKey=a9c03e5a54cc4cac9f2ba6c60e9f6f3a" alt="" className="object-cover absolute inset-0 size-full" />
      <div className="flex relative flex-wrap gap-5 justify-between items-center mb-0 ml-4 w-full max-w-[1094px] max-md:mb-2.5 max-md:max-w-full">
        {partners.map((partner, index) => (
          <img key={index} loading="lazy" src={partner.src} alt={partner.alt} className={partner.className} />
        ))}
      </div>
    </section>
  );
};

export default PartnerSection;