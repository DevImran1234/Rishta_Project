import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OtpScreen = () => {
    const navigate = useNavigate()
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');

  const handleChange = (element, index) => {
    const value = element.value;
    if (/^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && element.nextSibling) {
        element.nextSibling.focus();
      }
    }
  };

  const handleBackspace = (element, index) => {
    if (otp[index] === "" && element.previousSibling) {
      element.previousSibling.focus();
    }
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleSubmit = async () => {
    const otpCode = otp.join(""); 

    if (otpCode.length !== 6) {
      setError("Please enter a 6-digit OTP.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:8000/api/users/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp: otpCode }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      alert(data.message); 
    } catch (err) {
      setError(err.message || "Failed to verify OTP");
    } finally {
      setLoading(false);
      navigate('/login')
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-8 w-11/12 max-w-md">
        <h1 className="text-2xl font-semibold text-center text-[#2F82A0] mb-4">
          Enter OTP
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Please enter the 6-digit code sent to your email.
        </p>
        {error && (
          <p className="text-red-500 text-center mb-4">{error}</p>
        )}
        <div className="flex justify-center gap-2 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) =>
                e.key === "Backspace" && handleBackspace(e.target, index)
              }
              className="w-10 h-12 text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2F82A0]"
            />
          ))}
        </div>
        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`w-full bg-[#de2c7e] text-white font-medium py-2 rounded-md hover:bg-[#be2d71] transition-all ${
            loading && "opacity-50 cursor-not-allowed"
          }`}
        >
          {loading ? "Verifying..." : "Submit OTP"}
        </button>
        <p className="text-center text-gray-500 mt-4">
          Didn’t receive the code?{" "}
          <span className="text-[#2F82A0] cursor-pointer hover:underline">
            Resend
          </span>
        </p>
      </div>
    </div>
  );
};

export default OtpScreen;
