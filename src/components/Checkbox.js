"use client";

import React, { useState } from "react";

const Checkbox = () => {
    const [isChecked, setIsChecked] = useState(false);

    // Handle checkbox state change
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        console.log(`Checkbox is now: ${event.target.checked ? "Checked" : "Unchecked"}`);
    };

    return (
        <div className="flex items-center">
            <input
                id="custom-checkbox"
                type="checkbox"
                className="hidden peer"
                checked={isChecked}
                onChange={handleCheckboxChange} // Handle change event
            />

            {/* Custom Checkbox Design */}
            <label
                htmlFor="custom-checkbox"
                className={`w-6 h-6 flex items-center justify-center border border-gray-400 rounded-md cursor-pointer transition-all ${isChecked ? "bg-kuduOrange border-kuduOrange" : ""
                    }`}
            >
                {/* Show SVG checkmark if checked */}
                {isChecked && (
                    <svg
                        className="w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M20 6L9 17L4 12" />
                    </svg>
                )}
            </label>
        </div>
    );
};

export default Checkbox;
