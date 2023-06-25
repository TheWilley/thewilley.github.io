/*/
    Home file

    The first page a user lands on
/*/

import { motion } from 'framer-motion'
import '../css/index.css'
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog, faHammer } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <motion.div className='text-black p-2 dark:text-white' initial={{ transform: 'scale(0.8)', opacity: 0 }} animate={{ transform: 'scale(1)', opacity: 1 }} exit={{ transform: 'scale(0.8)', opacity: 0 }}>
            <div>
                <h1 className='mt-2 font-mono text-3xl'> TheWilley </h1>
                <i> William Larsson </i>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio felis, ullamcorper sed gravida nec, tincidunt vel ligula. Fusce sagittis enim non metus gravida cursus. Cras quam mi, viverra sit amet scelerisque at, facilisis eget lorem. Donec quis ultrices elit. Donec nec eros ut justo tincidunt accumsan. Vivamus pulvinar maximus massa, ut condimentum justo mollis in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris ut consectetur velit. Suspendisse vestibulum nec velit a volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

                Donec a rutrum sapien, id semper lacus. Nunc at sapien diam. Aliquam quis tortor lacus. Etiam gravida, enim et vestibulum molestie, justo nunc vehicula magna, vulputate malesuada ex lorem vel erat. Quisque cursus commodo consectetur. Vivamus eu viverra augue, ac pharetra metus. Phasellus risus ex, porta fermentum augue vitae, pretium efficitur justo. Curabitur convallis tellus vel justo imperdiet, sed placerat metus fringilla. Sed mattis convallis semper. Sed non mi rhoncus, malesuada lacus quis, interdum ipsum. Maecenas eleifend mauris eget augue tincidunt malesuada. Maecenas et dui vel justo semper dignissim. In hac habitasse platea dictumst.

                Morbi iaculis augue quis feugiat accumsan. Sed arcu eros, blandit eu sollicitudin id, vulputate sit amet massa. Suspendisse facilisis commodo nunc efficitur imperdiet. Donec aliquet, elit et mollis dictum, lacus dolor consequat purus, ut scelerisque est erat a sapien. Aliquam varius magna laoreet fringilla sodales. Sed accumsan massa eu quam laoreet consequat. Integer vehicula sem nulla, vel malesuada mi volutpat sed. Morbi et iaculis augue. Aenean commodo urna ac ante tempus auctor. Vestibulum ut massa id tellus iaculis maximus id nec urna. Donec sed fringilla purus, eget congue ipsum. Nunc tempor ligula nec volutpat scelerisque. In feugiat libero sed lobortis semper. Donec facilisis egestas dolor ut vehicula.

                In at dolor vitae erat vestibulum placerat. Morbi nec suscipit ante. Morbi varius aliquam ex et lacinia. Praesent ornare, dui ut sagittis vestibulum, lectus orci fringilla erat, eget cursus mi nisl in felis. Aliquam erat volutpat. Vivamus molestie egestas dapibus. Ut ac ante enim.

                Donec eu nisl quis urna euismod malesuada ut id arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque id auctor quam. Curabitur vel velit turpis. Nullam facilisis mattis libero sed dapibus. Aenean pellentesque tellus turpis, id vulputate sem iaculis non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas ultrices elit purus, a fringilla magna fermentum non. Quisque scelerisque iaculis massa.
            </p>

            <div className='grid place-items-center grid-cols-2'>
                <div className='w-full mt-5 h-32'>
                    <Link to="/blog">
                        <div className='border rounded flex items-center justify-center h-full'>
                            <FontAwesomeIcon icon={faBlog} className='ml-2 ' />
                        </div>
                    </Link>
                </div>
                <div className='w-full mt-5  h-32'>
                    <Link to="/projects">
                        <div className='border rounded w-98 flex items-center justify-center h-full'>
                            <FontAwesomeIcon icon={faHammer} className='ml-2' />
                        </div>
                    </Link>
                </div>
            </div>

        </motion.div>
    )
}

export default Home