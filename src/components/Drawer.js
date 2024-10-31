"use client";

const Drawer = ({ isOpen, onClose, position = "left", children }) => {
    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 backdrop-blur-lg bg-opacity-50 z-40"
                    onClick={onClose}
                />
            )}

            {/* Drawer */}
            <div
                className={`fixed top-0 ${position === "left" ? "left-0" : "right-0"} z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : position === "left" ? "-translate-x-full" : "translate-x-full"
                    }`}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                >
                    &#x2715;
                </button>

                {/* Drawer Content */}
                <div className="p-4">{children}</div>
            </div>
        </>
    );
};

export default Drawer;