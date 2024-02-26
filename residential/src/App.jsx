import {Canvas} from "@react-three/fiber";
import { Suspense } from "react";
import Building from "./models/Building";
import { Center } from "@react-three/drei";


function App() {
  return(
    <section className="w-full">
      <Canvas 
      className="w-full h-auto  bg-transparent cursor-grabbing"
      >
  
         <directionalLight position={[1,1,1]} intensity={2} />
          <ambientLight  intensity={0.5}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
          <Building  position={ [300, -500,-100]} scale={[0.5, 0.5, 0.5]}/>
      </Canvas>
    </section>
  )
}

export default App
