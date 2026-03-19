import { useInView } from 'react-intersection-observer'

export default function useScrollAnimation(threshold = 0.1) {
    const { ref, inView } = useInView({
        threshold,
        triggerOnce: false, // animates only once when first seen
    })

    return { ref, inView }
}