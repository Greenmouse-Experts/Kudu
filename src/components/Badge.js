export default function Badge({ bgColor, textColor, text }) {
    return (
        <>
            <div className={`py-1 px-3 flex items-center rounded-md ${bgColor} ${textColor}`}>
                <span className="text-sm">
                    {text}
                </span>
            </div>
        </>
    )
}