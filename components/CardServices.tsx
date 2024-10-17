import { cardsData } from "@/data/index";
import { BiCheckDouble } from "react-icons/bi";
import { motion } from "framer-motion";
import { FadeUp } from "@/data/variants";

export function CardServices() {
    return (
        <motion.div variants={FadeUp} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {cardsData.map((item, index) => {

                return (
                    <div key={index} className="flex">
                        <div className="bg-blue_primary p-8 flex flex-col justify-between h-full">
                        <div className="flex items-center mb-2 gap-4">
                            <div className="bg-white p-1 rounded-full">
                                <BiCheckDouble className="text-[30px] text-blue_primary"  />
                            </div>
                            <h3 className="h4 text-white font-secondary">{item.title}</h3>
                        </div>
                        <p className="text-white">{item.description}</p>
                        </div>
                    </div>
                )
            })}            
        </motion.div>
    )
}