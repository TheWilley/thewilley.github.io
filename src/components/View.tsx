import AnimatedRouter from "./AnimatedRouter"

function View() {
    return (
        <div className='flex justify-center h-screen'>
            <div className='w-3/5 h-full p-1'>
                <AnimatedRouter />
            </div>
        </div>
    )
}

export default View