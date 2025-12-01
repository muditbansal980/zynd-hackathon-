import rightarrow from "../assests/right-arrow.png"
export default function GovernmentSchemes() {
    return (
        <div className="flex flex-col justify-center items-center mt-[40px]">
            <div className="flex justify-center items-center m-[30px]">
                <h1 className="text-[32px] font-bold">Top Government Schemes</h1>

            </div>
            <div className="grid gap-[20px] max-[640px]:grid-cols-1 sm:grid-cols-2 max-[1464px]:grid-cols-3 lg:grid-cols-4 auto-rows-auto">
                <div className="border-[2px] border-black p-[20px] w-[350px] h-[350px] mx-auto">
                    <div>
                        <h1 className="text-[32px] font-bold">PMAY</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates quis modi culpa ullam inventore a totam in veritatis libero! Blanditiis facere provident sit odio ut iusto minus expedita ab labore.</p>
                    </div>
                    <div className="flex gap-[10px] m-[10px]">
                        <button>Apply Now</button>
                        <img className="w-[24px] " src={rightarrow} alt="arrow" />
                    </div>
                </div>
                <div className="border-[2px] border-black p-[20px] w-[350px] h-[350px] mx-auto">
                    <div>
                        <h1 className="text-[32px] font-bold">Ayushman Bharat</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ad ab ullam amet ipsa nobis incidunt distinctio nisi consequatur ut culpa, error labore quo adipisci voluptate explicabo ea exercitationem illo.</p>
                    </div>
                    <div className="flex gap-[10px] m-[10px]">
                        <button>Apply Now</button>
                        <img className="w-[24px] " src={rightarrow} alt="arrow" />
                    </div>
                </div>
                <div className="border-[2px] border-black p-[20px] w-[350px] h-[350px] mx-auto">
                    <div>
                        <h1 className="text-[32px] font-bold">PM Kisan</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat voluptatibus a quos odit, tempore rem hic voluptatem natus totam aliquam cumque at aliquid itaque. Facere iure tenetur nobis ea voluptate.</p>
                    </div>
                    <div className="flex gap-[10px] m-[10px]">
                        <button>Apply Now</button>
                        <img className="w-[24px] " src={rightarrow} alt="arrow" />
                    </div>
                </div>
                <div className="border-[2px] border-black p-[20px] w-[350px] h-[350px] mx-auto">
                    <div>
                        <h1 className="text-[32px] font-bold">Scholarships </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolore corporis quis obcaecati natus aliquam quia alias, deserunt possimus ad voluptatum vel cupiditate, dolorem at nulla! Cum non est quidem.</p>
                    </div>
                    <div className="flex gap-[10px] m-[10px]">
                        <button>Apply Now</button>
                        <img className="w-[24px] " src={rightarrow} alt="arrow" />
                    </div>
                </div>
            </div>
        </div>
    )
}