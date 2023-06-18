import AnimatedRouter from "./AnimatedRouter"

function View() {
    return (
        <div className='flex justify-center h-screen dark:bg-neutral-900'>
            <div className='w-10-/12 sm2:ml-16 ml-0 h-full p-3'>
                <AnimatedRouter />
            </div>
        </div>
    )
}

export default View