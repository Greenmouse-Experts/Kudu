export default function Badge({ bgColor, textColor, text }) {
    return (
        <>
            <div className={`py-1 px-3 flex items-center rounded-md ${bgColor} ${textColor}`}>
                <span className="text-sm capitalize w-full text-center">
                    {text}
                </span>
            </div>
        </>
    )
}