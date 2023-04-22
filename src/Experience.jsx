import { OrbitControls, Sky } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Banana from './models/Banana'
import Lemon from './models/Lemon'
import ParedVideo from './models/ParedVideo'
import ParedImage from './models/ParedImage'
import { Hamburger } from './models/Hamburguer'

export default function Experience() {
    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />
        <Sky />
        <ParedVideo position-x = {2} scale = {1}/>
        <ParedImage position-x = {-2} scale = {1}/>
        {/* <Lemon position-x = {1} position-y = {-2} scale={0.1}/> */}
        {/* <Banana position-x = {-1} scale={0.1}/> */}
        {/* <Hamburger position-x = {0} scale={0.08}/> */}
    </>
}