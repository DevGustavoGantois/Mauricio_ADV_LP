export function Map() {
    return (
        <div className="p-12 bg-blue_primary w-full h-full justify-center flex items-center rounded-xl">
            <iframe
        className="w-full h-[500px] lg:h-[800px] "
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.524000899896!2d-38.50489502403417!3d-13.00226826042854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716058711a81285%3A0x3321dda82e1d5444!2sCentro%20M%C3%A9dico%20Empresarial%20Vitraux!5e0!3m2!1spt-BR!2sbr!4v1728779992453!5m2!1spt-BR!2sbr"
        width="200"
        height="100"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização do Centro Médico Empresarial Vitraux"
    ></iframe>
        </div>
    )
}