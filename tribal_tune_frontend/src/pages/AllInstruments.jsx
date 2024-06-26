import React, { useState, useEffect } from "react";
import { InstrumentSection } from "../components/InstrumentSection"; // Import the new component
import service from "../appwrite/service.js";

export const AllInstrument = () => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentBlownIndex, setCurrentBlownIndex] = useState(0);
  const [currentPrecussionIndex, setCurrentPrecussionIndex] = useState(0);
  const [currentSolidIndex, setCurrentSolidIndex] = useState(0);
  const [currentOtherIndex, setCurrentOtherIndex] = useState(0);

  const [loading, setLoading] = useState(true);

  const getItems = (category) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
      const fetchItems = async () => {
        setLoading(true);
        const response = await service.getPostsByCategory(category);
        if (response) {
          setItems(response.documents); // Assuming the response contains a 'documents' array
          console.log(response.documents[0].$id);
        }
        setLoading(false);
      };

      fetchItems();
    }, [category]);

    return items;
  };

  const stringInstruments = getItems("String");
  const blownInstruments = getItems("Blowen");
  const precussionInstruments = getItems("Percussion");
  const solidInstruments = getItems("Solid");
  const otherInstruments = getItems("Others");

  if (loading) {
    return <div>Loading...</div>;
  }

  const handlePrevString = () => {
    setCurrentStringIndex((prevIndex) =>
      prevIndex === 0 ? stringInstruments.length - 1 : prevIndex - 1
    );
  };

  const handleNextString = () => {
    setCurrentStringIndex((prevIndex) =>
      prevIndex === stringInstruments.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevBlown = () => {
    setCurrentBlownIndex((prevIndex) =>
      prevIndex === 0 ? blownInstruments.length - 1 : prevIndex - 1
    );
  };

  const handleNextBlown = () => {
    setCurrentBlownIndex((prevIndex) =>
      prevIndex === blownInstruments.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleNextPrecussion = () => {
    setCurrentPrecussionIndex((prevIndex) =>
      prevIndex === precussionInstruments.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevPrecussion = () => {
    setCurrentPrecussionIndex((prevIndex) =>
      prevIndex === 0 ? precussionInstruments.length - 1 : prevIndex - 1
    );
  };

  const handleNextSolid = () => {
    setCurrentSolidIndex((prevIndex) =>
      prevIndex === solidInstruments.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevSolid = () => {
    setCurrentSolidIndex((prevIndex) =>
      prevIndex === 0 ? solidInstruments.length - 1 : prevIndex - 1
    );
  };

  const handleNextOther = () => {
    setCurrentOtherIndex((prevIndex) =>
      prevIndex === otherInstruments.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevOther = () => {
    setCurrentOtherIndex((prevIndex) =>
      prevIndex === 0 ? otherInstruments.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-gradient-to-t from-gray-100 to-white">
      <section>
        {/* Main image section */}
        <div className="relative py-20 bg-white sm:py-24 lg:py-28">
          {" "}
          {/* Increase the padding */}
          <div className="absolute inset-0">
            <img
              className="object-cover object-right w-full h-full lg:object-center"
              src="./src/assets/banner.png"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>
          <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-lg mx-auto text-center xl:max-w-2xl">
              <h1 className="text-xl font-semibold text-white sm:text-4xl xl:text-3xl font-serif mt-12 mb-12">
                Discover the rich heritage and timeless beauty of traditional
                instruments.
              </h1>
              <p className="max-w-lg mx-auto mt-6 text-base font-normal leading-7 text-gray-300"></p>

              <form
                action="#"
                className="max-w-xl mx-auto mt-10 flex justify-between"
              >
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>

                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search an Instrument..."
                    className="rounded-md block w-full py-3 pl-10 pr-4 text-base font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white border border-white focus:ring-white focus:border-white focus:ring-offset-2"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="
                inline-flex
                items-center
                justify-center
                px-6
                py-4
                text-sm
                font-bold
                tracking-widest
                text-white
                uppercase
                transition-all
                duration-200
                bg-amber-950
                border border-transparent
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white
                hover:bg-amber-900
                rounded-md
            "
                  >
                    Search
                  </button>
                </div>
              </form>

              <div className="grid max-w-md grid-cols-2 mx-auto mt-8 md:mt-16 lg:mt-24 xl:mt-32 gap-x-6 grid-col-2"></div>
            </div>
          </div>
        </div>

        {/* String Instruments Section */}
        <InstrumentSection
          category="String"
          currentIndex={currentStringIndex}
          handlePrev={handlePrevString}
          handleNext={handleNextString}
          sectionTitle="String Instruments"
        />

        {/* Blown Instruments Section */}
        <InstrumentSection
          category="Blowen"
          currentIndex={currentBlownIndex}
          handlePrev={handlePrevBlown}
          handleNext={handleNextBlown}
          sectionTitle="Blown Instruments"
        />

        {/* Precussion Instrument Section */}
        <InstrumentSection
          category="Percussion"
          currentIndex={currentPrecussionIndex}
          handlePrev={handlePrevPrecussion}
          handleNext={handleNextPrecussion}
          sectionTitle="Percussion Instruments"
        />

        {/* Solid Instrument Section */}
        <InstrumentSection
          category="Solid"
          currentIndex={currentSolidIndex}
          handlePrev={handlePrevSolid}
          handleNext={handleNextSolid}
          sectionTitle="Solid Instruments"
        />

        {/* Other Instrument Section */}
        <InstrumentSection
          category="Others"
          currentIndex={currentOtherIndex}
          handlePrev={handlePrevOther}
          handleNext={handleNextOther}
          sectionTitle="Other Instruments"
        />
      </section>
    </div>
  );
};
