import AnimatedRouter from "./AnimatedRouter"

function View() {
    return (
        <div className='flex justify-center h-screen'>
            <div className='w-10-/12 ml-16 h-full p-3'>
                <AnimatedRouter />
            </div>
        </div>
    )
}

export default View