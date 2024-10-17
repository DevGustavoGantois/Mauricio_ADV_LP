import { TestimonialsData } from "@/data";
import { TestimonialsSlide } from "./TestimonialsSlide";


const TestimonialsTitle = [
    {
        title: 'Depoimentos dos meus clientes',
        description: 'Ao confiar em meus serviços, meus clientes experimentam não apenas uma atuação jurídica eficiente, mas também a tranquilidade de verem seus direitos assegurados e suas questões resolvidas de forma justa.'
    },
]

export function Testimonials() {
    return (
        <section className="p-12 bg-blue_primary mt-60" id="Testimonials">
            <div>
                {TestimonialsTitle.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col justify-center items-center text-center mb-40">
                            <h3 className="h3 lg:text-[60px] text-white font-secondary text-center mt-20">{item.title}</h3>
                            <p className="text-white text-center max-w-[760px] mt-6">{item.description}</p>
                        </div>
                    )
                })}
            </div>
            <div className="lg:mt-30 mb-40">
                <TestimonialsSlide />
            </div>
        </section>
    )
}