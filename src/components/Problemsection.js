export default function Problems() {
    return (
        <div className="flex flex-col justify-center items-center mt-[40px]">
            <div className="flex justify-center items-center m-[30px]">
                <h1 className="text-[32px] font-bold">Key Challenges</h1>
            </div>
            <div className="grid gap-[20px] max-[640px]:grid-cols-1 sm:grid-cols-2 max-[1464px]:grid-cols-3 lg:grid-cols-4 auto-rows-auto">
                <div className="border-[2px] border-black p-[20px] w-full max-w-[350px] h-[350px] mx-auto">
                    <div><h1 className="text-[32px] font-bold">Complex Policies</h1></div>
                    <div className="text-[28px] flex justify-center items-center">
                        <p>📄⚠️</p>
                    </div>
                    <div><p className="text-[20px]">Government policies are too long and difficult to interpret</p></div>
                </div>
                <div className="border-[2px] border-black p-[20px] w-full max-w-[350px] h-[350px] mx-auto">
                    <div><h1 className="text-[32px] font-bold">Eligibility Confusion</h1></div>
                    <div className="text-[28px]  flex justify-center items-center">❓🧩</div>
                    <div><p className="text-[20px]">People don’t know if they qualify for benefits.</p></div>
                </div>
                <div className="border-[2px] border-black p-[20px] w-full max-w-[350px] h-[350px] mx-auto">
                    <div><h1 className="text-[32px] font-bold">Bureaucratic Hassle</h1></div>
                    <div className="text-[28px] flex justify-center items-center"> 🏢⏳</div>
                    <div><p className="text-[20px]">Applications require too many steps and documents.</p></div>
                </div>
                <div className="border-[2px] border-black p-[20px] w-full max-w-[350px] h-[350px] mx-auto">
                    <div><h1 className="text-[32px] font-bold">Missed Benefits</h1></div>
                    <div className="text-[28px] flex justify-center items-center"> 🚫💰</div>
                    <div><p className="text-[20px]">Citizens lose benefits they deserve because the system is opaque.</p></div>
                </div>
            </div>
        </div>
    )
}