import React, { useState } from "react";
import { Modal, Button } from "@mui/material";
import CustomerReviews from "./customer-rev";
import {useNavigate } from "react-router-dom";
import axios from "axios";
const ShipmentPage = () => {
  const [formData, setFormData] = useState({
    name:"",
    from: "",
    to: "",
    departure: new Date(),
  });
  const navigate = useNavigate();
  const [formType, setFormType] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = (type) => {
    setFormType(type);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/sender", formData); // Send form data along with the current date
    } catch (error) {
      alert("Sorry we encountered some error");
      console.log("Sorry, we encountered some error. Try again later");
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto py-16 px-6 lg:px-8 bg-gray-50">
      {/* Header Section */}
      <header className="text-center mb-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-12 rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold mb-3 leading-tight">
          QuickShip Shipment
        </h1>
        <p className="text-xl max-w-2xl mx-auto">
          Effortlessly manage your shipments with our intuitive and streamlined
          service. Get started with just a click.
        </p>
      </header>

      {/* Buttons to Open Forms */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 mb-16">
        <div
          className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          onClick={() => handleOpen("traveller")}
        >
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">
            I am a Traveller
          </h3>
          <p className="text-gray-700">
            Join our network of travelers who can deliver parcels along their
            route. Help people receive their packages faster and earn rewards!
          </p>
        </div>
        <div
          className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          onClick={() => navigate('sender')}
        >
          <h3 className="text-2xl font-semibold text-green-600 mb-4">
            I want to Send a Parcel
          </h3>
          <p className="text-gray-700">
            Quickly send your parcel with our reliable service. Choose a
            traveler heading your way and enjoy faster delivery times.
          </p>
        </div>
      </div>

      {/* Modal for Forms */}
      <Modal open={open} onClose={handleClose}>
        <div className="bg-white w-full max-w-lg mx-auto mt-16 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl mb-6 text-blue-600">
            {formType === "traveller"
              ? "Traveller Information"
              : "Parcel Information"}
          </h3>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <label className="text-sm font-semibold">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <label className="text-sm font-semibold">From</label>
            <input
              type="text"
              name="from"
              placeholder="From"
              value={formData.from}
              onChange={handleChange}
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <label className="text-sm font-semibold">To</label>
            <input
              type="text"
              name="to"
              placeholder="To"
              value={formData.to}
              onChange={handleChange}
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {formType === "traveller" && (
              <>
                <label>
                Departure:
                <input
                  type="date"
                  name="departure"
                  value={formData.departure}
                  onChange={handleChange}
                />
              </label>
              </>
            )}
            {formType === "sender" && (
              <>
                <label className="text-sm font-semibold">
                  Parcel Weight (in kg)
                </label>
                <input
                  type="text"
                  placeholder="Parcel Weight (in kg)"
                  className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <label className="text-sm font-semibold">
                  Parcel Dimensions (L x W x H)
                </label>
                <input
                  type="text"
                  placeholder="Parcel Dimensions (L x W x H)"
                  className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <label className="text-sm font-semibold">
                  Parcel Details (contents, etc.)
                </label>
                <textarea
                  placeholder="Parcel Details (contents, etc.)"
                  className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </>
            )}
            <div className="flex items-center gap-2 mt-4">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <a
                  href="/terms"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="mt-6 py-3 bg-blue-600 hover:bg-blue-700"
            >
              Submit
            </Button>
          </form>
        </div>
      </Modal>

      {/* Additional Section */}
      <div className="my-16">
        <h2 className="text-4xl text-center text-blue-600 font-bold mb-6">
          Why Choose Us?
        </h2>
        <p className="text-center text-gray-700 text-xl mx-auto max-w-2xl">
          QuickShip ensures fast, secure, and cost-effective parcel delivery by
          leveraging existing travel routes. Our platform connects senders with
          reliable travelers, reducing delivery times and enhancing convenience.
          Join us today and experience the future of parcel delivery!
        </p>
      </div>
      <CustomerReviews />
    </div>
  );
};

export default ShipmentPage;
