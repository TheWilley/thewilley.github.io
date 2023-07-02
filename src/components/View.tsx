import AnimatedRouter from "./AnimatedRouter"

function View() {
    return (
        <div className='flex dark:bg-neutral-950'>
            <div className='flex justify-center w-full ml-0 h-full p-3 pr-3 text-black dark:text-white'>
                <AnimatedRouter />
            </div>
        </div>
    )
}

export default View