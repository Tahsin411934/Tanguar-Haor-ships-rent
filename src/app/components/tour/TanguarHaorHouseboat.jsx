'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const TanguarHaorHouseboat = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Tanguar Haor Stories title */}
      <h2 className="text-lg md:text-3xl pb-4 pt-[50px] font-semibold text-[#00026E] mb-2 text-center">
        Tanguar Haor Stories
      </h2>
      
      {/* Full-width image at the top */}
      <div className="w-full lg:h-96 h-44 relative rounded-lg overflow-hidden mb-8">
        <Image
          src="/haor.jpg"
          alt="Luxury houseboat in Tanguar Haor"
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </div>

      {/* Main title */}
      <h1 className="text-xl md:text-[28px] font-bold text-gray-900 mb-6 text-center">
        Discover the Best Houseboats in Tanguar Haor – A Luxurious Floating Experience in Nature
      </h1>

      {/* Content */}
      <div className="prose prose-lg px-4 mx-auto text-gray-700">
        <p className="mb-4">
          If you&apos;re dreaming of a serene getaway surrounded by crystal-clear water, breathtaking landscapes, and unique biodiversity, Tanguar Haor in Bangladesh should be at the top of your travel list. Nestled in the Sunamganj district, this vast wetland called Tanguar Haor is a UNESCO-recognized ecological hotspot. What makes Tanguar Haor even more special? The rising popularity of luxury houseboats in Tanguar Haor that let you live on water in style. Whether you&apos;re looking for a romantic escape, a family retreat, or an adventurous journey with friends, a Tanguar Haor houseboat is an unforgettable experience.
        </p>
        <p className="mb-4">
          One of the best ways to truly experience the beauty and serenity of Tanguar Haor is by staying on a houseboat. Floating gently on the water, surrounded by lush greenery and the sounds of nature, a houseboat stay promises a unique blend of adventure, comfort, and luxury. This article dives deep into everything you need to know about Tanguar Haor houseboats, including the top boats available, pricing, tour packages, and tips to make your visit unforgettable.
        </p>

        {showFullContent && (
          <>
            {/* About Tanguar Haor section */}
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">About Tanguar Haor</h2>
            <p className="mb-4">
              Before exploring the houseboats themselves, it&apos;s essential to understand what makes Tanguar Haor so special. Located in the Sunamganj district of Bangladesh&apos;s Sylhet division, this expansive wetland covers over 9,727 hectares. During the rainy season, the area transforms into a vast waterbody dotted with small islands and floating vegetation, creating a unique habitat for numerous fish species, migratory birds, and other wildlife.
            </p>
            <p className="mb-4">
              The haor ecosystem supports the livelihoods of thousands of local fishermen and farmers, making it both an environmental and cultural treasure. Visitors come here not only to enjoy the natural beauty but also to witness the harmonious way of life in this rural setting.
            </p>

            {/* Why Choose a Houseboat section */}
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose a Houseboat Stay in Tanguar Haor?</h2>
            <p className="mb-4">
              The idea of staying on a floating house might sound adventurous or even rustic, but the houseboats in Tanguar Haor offer a remarkable level of comfort and luxury that can suit all kinds of travelers. Unlike a standard hotel room, a houseboat allows you to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Wake up to breathtaking views of water and wildlife right outside your window</li>
              <li>Enjoy privacy and seclusion in the middle of the haor&apos;s calm waters</li>
              <li>Experience the vibrant local culture while staying connected to nature</li>
              <li>Access hidden and less-explored parts of the wetland</li>
              <li>Savor freshly cooked local meals onboard, often prepared by skilled chefs</li>
            </ul>
            <p className="mb-4">
              Whether you&apos;re seeking a romantic escape, a family adventure, or a peaceful retreat, houseboat accommodation is an experience like no other.
            </p>

            {/* Best Houseboats section */}
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">Best Houseboats in Tanguar Haor</h2>
            <p className="mb-4">
              When it comes to choosing the best houseboat in Tanguar Haor, options are plentiful. Among the top-rated ones:
            </p>
            <div className="mb-4">
              <p className="font-semibold">Bojra Houseboat</p>
              <p className="mb-2">A traditional yet elegant boat offering modern amenities with a vintage design. Perfect for group tours.</p>
              
              <p className="font-semibold">Falcon Houseboat</p>
              <p className="mb-2">Known for its sleek design, spacious rooms, and rooftop lounging area with a stunning view of the haor.</p>
              
              <p className="font-semibold">Sultan Houseboat</p>
              <p className="mb-2">A premium houseboat combining luxury, safety, and comfort. Ideal for those who want an elite experience.</p>
            </div>
            <p className="mb-4">
              These houseboats come equipped with air-conditioned rooms, onboard dining, clean washrooms, and even Wi-Fi in some cases.
            </p>

            {/* Pricing section */}
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">Houseboat Pricing & Boat Rent</h2>
            <p className="mb-4">
              Prices for houseboats in Tanguar Haor vary widely depending on the boat&apos;s size, facilities, and season. Below is an approximate pricing guide to help you plan your trip:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-4 py-2 text-left">Boat Type</th>
                    <th className="border px-4 py-2 text-left">Price Range (per day/night)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">Standard Boats</td>
                    <td className="border px-4 py-2">৳8,000 – ৳15,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-4 py-2">Premium Houseboats</td>
                    <td className="border px-4 py-2">৳20,000 – ৳40,000</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Luxury Houseboats</td>
                    <td className="border px-4 py-2">৳40,000 – ৳70,000+ (group packages)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-4">
              For those looking for a shorter or more budget-friendly option, smaller local boats—known as noukas or dinghies—can be rented for half-day or full-day trips at much lower rates. These smaller boats are ideal for exploring the haor&apos;s narrow waterways or for fishing excursions.
            </p>

            {/* Tour Packages section */}
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">Tanguar Haor Tour Packages</h2>
            <p className="mb-4">
              Many travelers prefer booking a comprehensive tour package that includes all major aspects of their trip to Tanguar Haor. These packages typically cover:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Round-trip transportation from major cities such as Dhaka or Sylhet</li>
              <li>Houseboat accommodation ranging from standard to luxury options</li>
              <li>Meals featuring local Bangladeshi cuisine</li>
              <li>Guided haor explorations, including birdwatching and fishing trips</li>
              <li>Nighttime activities such as campfires and cultural programs</li>
            </ul>
            <p className="mb-4">
              Custom packages are also available, tailored to your group size, travel dates, and budget.
            </p>

            {/* Final Words section */}
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">Final Words</h2>
            <p className="mb-4">
              A trip to Tanguar Haor isn&apos;t complete without experiencing a houseboat stay. From the majestic Bojra houseboat to the deluxe Sultan houseboat, every vessel offers a unique slice of heaven on water. Whether you&apos;re looking for a budget boat or the best houseboat of Tanguar Haor, the options are diverse and unforgettable.
            </p>
            <p className="mb-8">
              Start planning your adventure now and sail into nature with style and comfort.
            </p>
          </>
        )}

        {/* Read More/Less button */}
        <div className="text-center mt-6">
          <button
            onClick={toggleContent}
            style={{
                                  background:
                                    "linear-gradient(90deg, #313881, #0678B4)",
                                }}
            className="px-6 py-2  text-white rounded-md hover:bg-[#1E2D75] transition-colors duration-300"
          >
            {showFullContent ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TanguarHaorHouseboat;