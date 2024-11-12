import React, { useState } from 'react';
import './App.css';

const MainComponent = () => {
  return (
    <div className="flex flex-col min-h-screen h-screen">
      <Header />
      <div className="flex-grow flex justify-center items-start bg-gray-700 p-8">
        <div className="flex flex-col md:flex-row justify-between max-w-6xl w-full gap-8">
          <div className="flex flex-col space-y-4 w-full md:w-2/3">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-800 p-2 rounded-full">Creator</div>
              <div className="text-white">[Creator Name]</div>
            </div>
            <EventDetails />
            <LocationAndDescription />
          </div>
          <div className="flex flex-col space-y-4 w-full md:w-1/3">
            <ServicesSelection />
            <ImageUpload />
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="bg-black flex items-center justify-between p-4 h-24 w-full">
      <div className="flex items-center">
        <div className="flex items-center justify-center bg-white w-40 h-12">
          <span className="text-black font-medium text-lg">LOGO</span>
        </div>
      </div>
      <button className="bg-gray-800 text-white py-2 px-6 rounded-lg">
        Back
      </button>
    </div>
  );
};

const EventDetails = () => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <Section title="Event Name" />
      <div className="flex space-x-2">
        <Section title="Date" />
        <Section title="Time" />
        <Section title="Capacity" />
      </div>
      <Section title="Event Category" placeholderValue="Seminar" />
    </div>
  );
};

const Section = ({ title, placeholderValue }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold mb-1">
        {title.toUpperCase()}
      </label>
      <div className="relative">
        <input 
          type="text" 
          className="w-full p-2 text-black bg-gray-300 rounded-md mb-1"
          placeholder={placeholderValue || title}
        />
        <img 
          src="https://placeholder.pics/svg/311x1" 
          alt="underline" 
          className="absolute bottom-0 left-0 w-full"
        />
      </div>
    </div>
  );
};

const LocationAndDescription = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-md">
      <div className="text-white font-medium text-xl text-center mb-4">
        LOCATION
      </div>
      <div className="flex space-x-2">
        <input 
          type="text" 
          placeholder="Enter Location" 
          className="w-full mb-4 p-2 text-black bg-gray-300 rounded-md" 
        />
      </div>
      <div className="text-white font-bold mb-2">DESCRIPTION</div>
      <textarea 
        placeholder="Enter Event Description" 
        className="w-full p-2 text-black bg-gray-300 rounded-md"
        rows="3"
      />
    </div>
  );
};

const ServicesSelection = () => {
  return (
    <div className="bg-black p-4 rounded-md text-white">
      <h3 className="font-medium mb-2">Services Required?</h3>
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-white rounded-full border border-white mr-2"></div>
          <span>Yes</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-white rounded-full border border-white mr-2"></div>
          <span>No</span>
        </div>
      </div>
    </div>
  );
};

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="w-96 h-96 bg-gray-300 rounded-md flex justify-center items-center">
      {image ? (
        <img src={image} alt="Uploaded" className="w-full h-full object-cover" />
      ) : (
        <label
          htmlFor="file-upload"
          className="flex flex-col items-center justify-center cursor-pointer"
        >
          <span className="font-medium">UPLOAD IMAGE</span>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>
      )}
    </div>
  );
};

export default MainComponent;
