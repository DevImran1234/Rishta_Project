import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SubscriptionForm = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    { name: "Essential", price: "$19.99 / month" },
    { name: "Standard", price: "$29.99 / month" },
    { name: "Premium", price: "$49.99 / month" },
  ];

  const handlePlanSelect = (plan) => setSelectedPlan(plan);

  const handleSubscribe = () => {
    navigate("/users-side"); 
  };


  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-white shadow-md rounded-lg p-3 max-w-sm w-full">
        <h2 className="text-lg font-semibold text-gray-900 mt-2">
          Tiered subscription pricing
        </h2>
        <p className="text-gray-600 mt-1 text-xs">
          Choose the perfect plan to fit your needs and budget with our three
          monthly subscription options.
        </p>

        <h3 className="text-sm font-semibold text-gray-800 mt-4">Tiers</h3>
        <div className="mt-3 space-y-1">
          {plans.map((plan, index) => (
            <div
              key={index}
              onClick={() => handlePlanSelect(plan)}
              className={`flex justify-between items-center px-3 py-2 border rounded-lg cursor-pointer ${
                selectedPlan === plan
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300"
              }`}
            >
              <span className="text-xs text-gray-800">{plan.name}</span>
              <span className="text-xs text-gray-700">{plan.price}</span>
            </div>
          ))}
        </div>

        <form className="mt-4 space-y-2">
          <div>
            <label htmlFor="name" className="block text-xs font-medium text-gray-700">
              Name*
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 text-xs"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-medium text-gray-700">
              Email address*
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              className="mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 text-xs"
            />
          </div>
          <div>
            <label htmlFor="card" className="block text-xs font-medium text-gray-700">
              Card*
            </label>
            <input
              type="text"
              id="card"
              placeholder="Card"
              className="mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 text-xs"
            />
          </div>
        </form>

        <div className="mt-3 flex justify-between items-center text-gray-800 text-xs">
          <span>Total due:</span>
          <span className="font-semibold">
            {selectedPlan ? selectedPlan.price : "$0"}
          </span>
        </div>

        <button
          onClick={handleSubscribe} 
          className="mt-4 w-full bg-black text-white py-2 rounded-lg font-semibold text-xs hover:bg-gray-800 transition"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscriptionForm;
