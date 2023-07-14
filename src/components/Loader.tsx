import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Grid } from 'react-loader-spinner'

// Props for loader
type LoaderProps = {
    children: React.ReactNode; // The children of the component
    effect: (callback: () => void) => void // The callback method, used to set loading to false
};

function Loader(props: LoaderProps) {
    // Store loading states
    const [loading, setLoading] = useState(true)

    // Use effect at start of load
    useEffect(() => {
        // Once callback is called from child, set loading to false (if not set, load will continue indefinitely)
        props.effect(() => setLoading(false))
    }, [])

    return (
        <>
            {loading
                ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <div className='text-center text-8xl rounded p-3 h-[60vh] flex items-center justify-center'>
                            <Grid
                                height="80"
                                width="80"
                                color="#3b82f6"
                                ariaLabel="grid-loading"
                                radius="12.5"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </div>
                    </motion.div>
                )
                : (
                    <>{props.children}</>
                )
            }
        </>
    )
}

export default Loader