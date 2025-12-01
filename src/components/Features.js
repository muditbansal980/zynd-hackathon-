export default function features() {
    return (
        <div className="flex flex-col justify-center items-center mt-[40px]">
            <div className="flex justify-center items-center m-[30px]">
                <h1 className="text-[32px] font-bold">Features</h1>
            </div>
            {/* <div className="grid min-[1600px]:grid-cols-4 min-[1200px]:grid-cols-3 grid-rows-1 min-[800px]:grid-cols-2 grid-rows-2 min-[0px]:grid-cols-1 grid-rows-4 gap-[20px]"> */}
            <div className="grid gap-[20px] grid-cols-1 sm:grid-cols-2 max-[1464px]:grid-cols-3 lg:grid-cols-4 auto-rows-auto">    
                <div className="border-[2px] border-black p-[20px] w-full max-w-[350px] h-[350px] mx-auto">
                    <div><h1 className="text-[32px] font-bold">📑 Policy Summaries</h1></div>
                    <div><p className="text-[20px]">Government policies are too long and difficult to interpret</p></div>
                </div>
                <div className="border-[2px] border-black p-[20px] w-full max-w-[350px] h-[350px] mx-auto">
                    <div><h1 className="text-[32px] font-bold">📝 One‑Click Eligibility Checker</h1></div>
                    
                    <div><p className="text-[20px]">People don’t know if they qualify for benefits.</p></div>
                </div>
                <div className="border-[2px] border-black p-[20px] w-full max-w-[350px] h-[350px] mx-auto">
                    <div><h1 className="text-[32px] font-bold">💡 Smart Benefit Suggestions</h1></div>
                    
                    <div><p className="text-[20px]">Applications require too many steps and documents.</p></div>
                </div>
                <div className="border-[2px] border-black p-[20px] w-full max-w-[350px] h-[350px] mx-auto">
                    <div><h1 className="text-[32px] font-bold">📂 Application Helper</h1></div>
                    
                    <div><p className="text-[20px]">Citizens lose benefits they deserve because the system is opaque.</p></div>
                </div>
                <div className="border-[2px] border-black p-[20px] w-full max-w-[350px] h-[350px] mx-auto">
                    <div><h1 className="text-[32px] font-bold">🔁 Recheck & Updates</h1></div>
                    
                    <div><p className="text-[20px]">Citizens lose benefits they deserve because the system is opaque.</p></div>
                </div>
            </div>
        </div>
    )
}