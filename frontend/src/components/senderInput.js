import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import axios from "axios";

const SenderInput = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: ""
  });
  const [travellers, setTravellers] = useState([]); // State for storing fetched travellers
  const [error, setError] = useState(""); // State for error handling

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString(); // Get current date in ISO format
    const formDataWithDate = { ...formData, date: currentDate }; // Include date in the data
    console.log(formDataWithDate);
    try {
      const response = await axios.post("http://localhost:8000/api/sender", formDataWithDate); // Send form data along with the current date
      setTravellers(response.data); // Update state with fetched travellers
    } catch (error) {
      console.error("Error fetching travellers:", error);
      setError("Error fetching travellers. Please try again."); // Set error message
    }
  };

  return (
    <div className="container mx-auto py-16 px-6 lg:px-8">
      <h1 className="text-3xl mb-6 text-center">Sender Information</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <input
            type="text"
            name="from"
            placeholder="From"
            value={formData.from}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="to"
            placeholder="To"
            value={formData.to}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <Button type="submit" variant="contained" color="primary">
          Search Travelers
        </Button>
      </form>

      {error && <p className="text-red-500">{error}</p>} {/* Display error message */}

      {/* Displaying fetched travellers */}
      <div className="mt-8 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Available Travelers</h2>

      {travellers.length > 0 ? (
        <ul className="space-y-4">
          {travellers.map((traveller) => (
            <li key={traveller._id} className="border-b pb-4">
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium text-gray-700">
                  {traveller.user_name}
                </div>
                <div className="text-sm text-gray-500">
                  From: <span className="font-semibold">{traveller.from}</span> to{' '}
                  <span className="font-semibold">{traveller.to}</span>
                </div>
              </div>

              <div className="mt-2 text-sm text-gray-500">
                Travel Date: <span className="font-semibold">{new Date(traveller.traveldate).toLocaleString()}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center text-gray-500">
          No travellers found for the specified route.
        </div>
      )}
    </div>
    </div>
  );
};

export default SenderInput;
