import {Canvas} from "@react-three/fiber";
import { Suspense } from "react";
import Building from "./models/Building";
import { Center } from "@react-three/drei";
import Building1 from "./models/Building1";


function App() {
  return(
    <section className="w-full h-screen relative bg-slate-500">
    
      <Canvas 
        className="w-full h-screen bg-transparent cursor-grab"
      >
         <directionalLight position={[1,1,1]} intensity={1} camera={{near:0.01, far: 1000}}/>
          <ambientLight  intensity={0.25}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
          <Building position={[0, -10,-10]} scale={[0.01, 0.01, 0.01]}/>
      </Canvas>
   
    </section>
  )
}

export default App
