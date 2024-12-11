"use client";

export default function Button({className, children}) {
return <>
        <button
            type="submit"
            className={className}
        >
            {children}
        </button>

    </>
};
