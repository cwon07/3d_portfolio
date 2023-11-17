import {useState, Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import LittlestTokyo from '../models/littlest_tokyo'

const Home = () => {
    const [isRotating, setIsRotating] = useState(false);

    const adjustTokyoForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43];
        let rotation = [0,1, 4.7, 0];

        if(window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
            screenPosition = [0, -6.5, -43];
        } else {
            screenScale = [0.075, 0.075, 0.075];
            screenPosition = [0, -6.5, -43];
        }
        return [screenScale, screenPosition, rotation]
    }

    const [tokyoScale, tokyoPosition, tokyoRotation] = adjustTokyoForScreenSize();

  return (
   <section className='w-full h-screen relative'>
    {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        POPUP
    </div> */}
    <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far:1000 }}
    >
        <Suspense fallback={<Loader />}>
            <directionalLight position={[1,1,3]} intensity={2}/>
            <ambientLight intensity={0.5}/>
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
            <LittlestTokyo 
            position={tokyoPosition}
            scale={tokyoScale}
            rotation={tokyoRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            />
        </Suspense>
    </Canvas>
   </section>
  )
}

export default Home
