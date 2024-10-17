import { LocationData } from "@/data";
import { Map } from "./Map";

export function LocationSection() {
    return (
        <section className="max-w-[1440px] container mx-auto mt-40 lg:mt-60" id="Location">
            <div>
                {LocationData.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col justify-center items-center">
                            <h3 className="h3 font-secondary text-blue_primary text-center mb-6">{item.title}</h3>
                            <p className="text-gray_primary text-center max-w-[750px]">{item.description}</p>
                        </div>
                    )
                })}
                 <div className="flex justify-center mt-16">
                <Map />
        </div>
            </div>
        </section>
    )
}