export const FadeUp = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.9,
        rotate: -5,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: {
            duration: 1, 
            ease: "easeInOut",
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    exit: {
        opacity: 0,
        y: 20,
        scale: 0.9,
        rotate: 5,
        transition: {
            duration: 0.5, 
            ease: "easeInOut",
        },
    },
};