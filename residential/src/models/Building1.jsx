import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import buildScene from "../assets/building1.glb";

const Building1 =(props)=> {
  const { nodes, materials } = useGLTF(
    buildScene
  );
  return (
    <group {...props} dispose={null}>
      <group scale={0.025}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line001_06_-_Default_0"].geometry}
          material={materials["06_-_Default"]}
          position={[-17.941, 118.11, 7.066]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line002_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-20.566, 118.11, 7.066]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box001_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[989.882, 0, 783.572]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box002_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[819.512, 0, 783.572]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box003_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[636.149, 0, 783.572]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box004_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[421.559, 0, 783.572]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Plane001_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[109.048, 828.226, 403.839]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Shape001_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[109.048, 827.908, 404.705]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line004_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-20.566, 236.22, 7.066]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line005_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-20.566, 354.331, 2.203]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box005_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[989.882, 0, 411.976]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box006_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[819.512, 0, 411.976]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box007_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[636.149, 0, 411.976]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box008_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[421.559, 0, 411.976]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box009_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[989.882, 0, 28.493]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box010_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[819.512, 0, 28.493]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box011_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[636.149, 0, 28.493]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box012_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[421.559, 0, 28.493]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box013_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[190.648, 0, 28.493]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box014_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-164.862, 0, 28.493]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box015_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-164.862, 0, 381.384]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box016_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[388.793, 0, 381.384]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box017_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[190.648, 0, -363.968]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box018_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[190.648, 0, -751.685]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box019_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-554.226, 0, -363.968]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box020_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-543.333, 0, -751.685]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box021_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-174.382, 0, -751.685]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box022_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-174.382, 0, -365.497]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box023_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-554.226, 0, -22.907]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box024_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-946.298, 0, -363.968]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box025_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-946.298, 0, -22.907]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box026_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[190.648, 0, 379.778]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line024_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-20.566, 484.252, 2.203]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line025_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-20.566, 602.362, 2.203]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line026_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-20.566, 720.472, 2.203]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line027_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-20.566, 838.583, 2.203]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line028_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-20.566, 956.693, 2.203]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line029_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-20.566, 1074.803, 2.203]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line030_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-20.566, 1192.913, 2.203]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line031_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-20.566, 1311.024, 2.203]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line032_05_-_Default_0"].geometry}
          material={materials["05_-_Default"]}
          position={[-20.566, 1429.134, 2.203]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box037_11_-_Default_0"].geometry}
          material={materials["11_-_Default"]}
          position={[1.25, -19.685, -0.345]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line033_12_-_Car_Paint_0"].geometry}
          material={materials["12_-_Car_Paint"]}
          position={[-346.382, 1.15, 482.62]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line034_12_-_Car_Paint_0"].geometry}
          material={materials["12_-_Car_Paint"]}
          position={[-94.642, 1.181, -614.759]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line035_16_-_Matte_Plastic_0"].geometry}
          material={materials["16_-_Matte_Plastic"]}
          position={[-20.53, 1448.159, 7.139]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line036_13_-_Brushed_Metal_#2_0"].geometry}
          material={materials["13_-_Brushed_Metal_2"]}
          position={[416.957, 947.776, 476.403]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line037_13_-_Brushed_Metal_#2_0"].geometry}
          material={materials["13_-_Brushed_Metal_2"]}
          position={[416.957, 947.776, 754.139]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line038_13_-_Brushed_Metal_#2_0"].geometry}
          material={materials["13_-_Brushed_Metal_2"]}
          position={[-935.5, 947.776, -3.73]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line039_13_-_Brushed_Metal_#2_0"].geometry}
          material={materials["13_-_Brushed_Metal_2"]}
          position={[-562.4, 947.776, -412.553]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line040_13_-_Brushed_Metal_#2_0"].geometry}
          material={materials["13_-_Brushed_Metal_2"]}
          position={[195.215, 947.776, -47.773]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line041_13_-_Brushed_Metal_#2_0"].geometry}
          material={materials["13_-_Brushed_Metal_2"]}
          position={[965.798, 947.776, 20.499]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line042_13_-_Brushed_Metal_#2_0"].geometry}
          material={materials["13_-_Brushed_Metal_2"]}
          position={[982.133, 947.776, 832.277]}
          rotation={[Math.PI, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line043_13_-_Brushed_Metal_#2_0"].geometry}
          material={materials["13_-_Brushed_Metal_2"]}
          position={[-168.331, 947.776, 359.256]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line044_13_-_Brushed_Metal_#2_0"].geometry}
          material={materials["13_-_Brushed_Metal_2"]}
          position={[-168.331, 947.776, 129.406]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line045_13_-_Brushed_Metal_#2_0"].geometry}
          material={materials["13_-_Brushed_Metal_2"]}
          position={[-168.331, 947.776, 71.588]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line046_13_-_Brushed_Metal_#2_0"].geometry}
          material={materials["13_-_Brushed_Metal_2"]}
          position={[-560.189, 947.776, -744.075]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box038_14_-_Polished_Aluminum_0"].geometry}
          material={materials["14_-_Polished_Aluminum"]}
          position={[-239.205, 1428.219, -84.449]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box039_14_-_Polished_Aluminum_0"].geometry}
          material={materials["14_-_Polished_Aluminum"]}
          position={[21.886, 1428.219, 51.093]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box040_15_-_Glossy_Plastic_0"].geometry}
          material={materials["15_-_Glossy_Plastic"]}
          position={[-13.725, -47.244, 11.386]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box027_Metal_0.geometry}
          material={materials.Metal}
          position={[686.035, 235.817, 807.812]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line003_Solid_Glass_0.geometry}
          material={materials.Solid_Glass}
          position={[-0.931, 236.22, 63.87]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane024_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-186.217, 291.397, 277.418]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape024_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-186.5, 291.397, 277.418]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane023_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-186.217, 291.397, 159.539]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape023_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-186.5, 291.397, 159.539]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane022_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-256.057, 291.397, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape022_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-256.057, 291.397, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-381.45, 291.397, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape002_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-381.45, 291.397, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-506.761, 291.397, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape003_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-506.761, 291.397, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-632.262, 291.397, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape004_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-632.262, 291.397, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-757.352, 291.397, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape005_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-757.352, 291.397, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane041_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-972.077, 291.397, -79.644]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape041_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-972.36, 291.397, -79.644]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane040_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-972.077, 291.397, -192.705]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape040_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-972.36, 291.397, -192.705]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape039_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-972.36, 291.397, -305.577]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane039_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-972.077, 291.397, -305.577]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape008_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-889.468, 291.397, -390.657]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-889.468, 291.397, -390.941]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-773.604, 291.397, -390.941]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape007_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-773.604, 291.397, -390.657]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-657.721, 291.397, -390.941]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape006_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-657.721, 291.397, -390.657]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane038_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-579.596, 291.397, -494.556]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape038_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-579.879, 291.397, -494.556]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane037_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-579.596, 291.397, -603.273]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape037_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-579.879, 291.397, -603.273]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane036_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-579.596, 291.397, -712.03]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape036_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-579.879, 291.397, -712.03]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-509.02, 291.397, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape009_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-509.02, 291.397, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane010_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-378.267, 291.397, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape010_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-378.267, 291.397, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane011_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-248.055, 291.397, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape011_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-248.055, 291.397, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-117.663, 291.397, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape012_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-117.663, 291.397, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[12.687, 291.397, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape013_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[12.687, 291.397, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane035_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 291.397, -693.241]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape035_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 291.397, -693.241]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane034_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 291.397, -563.959]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape034_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 291.397, -563.959]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane033_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 291.397, -434.961]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape033_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 291.397, -434.961]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane032_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 291.397, -305.68]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape032_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 291.397, -305.68]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane031_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 291.397, -176.606]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape031_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 291.397, -176.606]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[338.914, 291.397, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape014_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[338.914, 291.397, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane015_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[493.072, 291.397, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape015_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[493.072, 291.397, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[646.992, 292.068, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape016_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[646.992, 292.068, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane017_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[800.729, 292.068, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape017_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[800.729, 292.068, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane030_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 291.397, 132.505]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape030_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 291.397, 132.505]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane029_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 291.397, 317.678]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape029_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 291.397, 317.678]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 291.397, 503.374]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape028_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 291.397, 503.374]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane027_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 291.397, 688.686]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape027_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 291.397, 688.686]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane018_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[899.491, 291.592, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape018_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[899.491, 291.592, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[757.42, 291.358, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape019_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[757.42, 291.358, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane020_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[615.148, 291.358, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape020_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[615.148, 291.358, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane021_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[473.336, 291.358, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape021_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[473.336, 291.358, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane026_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[404.634, 291.397, 672.22]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape026_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[404.35, 291.397, 672.22]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane025_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[404.634, 291.397, 559.441]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape025_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[404.35, 291.397, 559.441]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line015_Solid_Glass_0.geometry}
          material={materials.Solid_Glass}
          position={[-0.931, 354.713, 63.87]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box028_Metal_0.geometry}
          material={materials.Metal}
          position={[686.035, 354.309, 807.812]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane042_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-186.217, 409.89, 277.418]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape042_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-186.5, 409.89, 277.418]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane043_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-186.217, 409.89, 159.539]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape043_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-186.5, 409.89, 159.539]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane044_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-256.057, 409.89, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape044_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-256.057, 409.89, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane045_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-381.45, 409.89, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape045_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-381.45, 409.89, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane046_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-506.761, 409.89, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape046_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-506.761, 409.89, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane047_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-632.262, 409.89, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape047_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-632.262, 409.89, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane048_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-757.352, 409.89, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape048_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-757.352, 409.89, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane049_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-972.077, 409.89, -79.644]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape049_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-972.36, 409.89, -79.644]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane050_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-972.077, 409.89, -192.705]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape050_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-972.36, 409.89, -192.705]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape051_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-972.36, 409.89, -305.577]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane051_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-972.077, 409.89, -305.577]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape052_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-889.468, 409.89, -390.657]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane052_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-889.468, 409.89, -390.941]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane053_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-773.604, 409.89, -390.941]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape053_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-773.604, 409.89, -390.657]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane054_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-657.721, 409.89, -390.941]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape054_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-657.721, 409.89, -390.657]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane055_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-579.596, 409.89, -494.556]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape055_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-579.879, 409.89, -494.556]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane056_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-579.596, 409.89, -603.273]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape056_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-579.879, 409.89, -603.273]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane057_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-579.596, 409.89, -712.03]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape057_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-579.879, 409.89, -712.03]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane058_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-509.02, 409.89, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape058_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-509.02, 409.89, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane059_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-378.267, 409.89, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape059_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-378.267, 409.89, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane060_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-248.055, 409.89, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape060_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-248.055, 409.89, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane061_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-117.663, 409.89, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape061_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-117.663, 409.89, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane062_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[12.687, 409.89, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape062_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[12.687, 409.89, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane063_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 409.89, -693.241]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape063_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 409.89, -693.241]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane064_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 409.89, -563.959]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape064_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 409.89, -563.959]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane065_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 409.89, -434.961]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape065_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 409.89, -434.961]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane066_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 409.89, -305.68]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape066_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 409.89, -305.68]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane067_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 409.89, -176.606]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape067_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 409.89, -176.606]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane068_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[338.914, 409.89, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape068_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[338.914, 409.89, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane069_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[493.072, 409.89, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape069_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[493.072, 409.89, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane070_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[646.992, 410.56, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape070_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[646.992, 410.56, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane071_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[800.729, 410.56, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape071_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[800.729, 410.56, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane072_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 409.89, 132.505]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape072_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 409.89, 132.505]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane073_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 409.89, 317.678]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape073_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 409.89, 317.678]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane074_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 409.89, 503.374]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape074_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 409.89, 503.374]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane075_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 409.89, 688.686]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape075_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 409.89, 688.686]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane076_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[899.491, 410.084, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape076_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[899.491, 410.084, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane077_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[757.42, 409.85, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape077_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[757.42, 409.85, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane078_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[615.148, 409.85, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape078_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[615.148, 409.85, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane079_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[473.336, 409.85, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape079_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[473.336, 409.85, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane080_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[404.634, 409.89, 672.22]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape080_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[404.35, 409.89, 672.22]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane081_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[404.634, 409.89, 559.441]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape081_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[404.35, 409.89, 559.441]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line016_Solid_Glass_0.geometry}
          material={materials.Solid_Glass}
          position={[-0.931, 472.823, 63.87]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box029_Metal_0.geometry}
          material={materials.Metal}
          position={[686.035, 472.419, 807.812]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane082_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-186.217, 528, 277.418]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape082_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-186.5, 528, 277.418]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane083_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-186.217, 528, 159.539]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape083_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-186.5, 528, 159.539]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane084_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-256.057, 528, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape084_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-256.057, 528, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane085_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-381.45, 528, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape085_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-381.45, 528, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane086_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-506.761, 528, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape086_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-506.761, 528, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane087_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-632.262, 528, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape087_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-632.262, 528, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane088_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-757.352, 528, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape088_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-757.352, 528, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane089_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-972.077, 528, -79.644]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape089_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-972.36, 528, -79.644]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane090_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-972.077, 528, -192.705]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape090_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-972.36, 528, -192.705]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape091_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-972.36, 528, -305.577]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-972.077, 528, -305.577]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape092_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-889.468, 528, -390.657]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane092_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-889.468, 528, -390.941]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane093_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-773.604, 528, -390.941]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape093_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-773.604, 528, -390.657]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane094_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-657.721, 528, -390.941]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape094_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-657.721, 528, -390.657]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane095_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-579.596, 528, -494.556]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape095_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-579.879, 528, -494.556]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane096_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-579.596, 528, -603.273]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape096_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-579.879, 528, -603.273]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane097_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-579.596, 528, -712.03]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape097_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-579.879, 528, -712.03]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane098_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-509.02, 528, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape098_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-509.02, 528, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane099_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-378.267, 528, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape099_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-378.267, 528, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane100_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-248.055, 528, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape100_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-248.055, 528, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane101_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-117.663, 528, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape101_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-117.663, 528, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane102_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[12.687, 528, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape102_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[12.687, 528, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane103_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 528, -693.241]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape103_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 528, -693.241]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane104_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 528, -563.959]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape104_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 528, -563.959]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane105_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 528, -434.961]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape105_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 528, -434.961]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane106_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 528, -305.68]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape106_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 528, -305.68]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane107_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 528, -176.606]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape107_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 528, -176.606]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane108_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[338.914, 528, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape108_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[338.914, 528, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane109_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[493.072, 528, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape109_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[493.072, 528, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane110_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[646.992, 528.67, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape110_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[646.992, 528.67, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane111_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[800.729, 528.67, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape111_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[800.729, 528.67, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane112_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 528, 132.505]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape112_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 528, 132.505]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane113_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 528, 317.678]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape113_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 528, 317.678]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane114_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 528, 503.374]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape114_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 528, 503.374]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane115_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 528, 688.686]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape115_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 528, 688.686]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane116_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[899.491, 528.194, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape116_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[899.491, 528.194, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane117_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[757.42, 527.96, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape117_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[757.42, 527.96, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane118_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[615.148, 527.96, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape118_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[615.148, 527.96, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane119_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[473.336, 527.96, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape119_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[473.336, 527.96, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane120_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[404.634, 528, 672.22]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape120_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[404.35, 528, 672.22]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane121_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[404.634, 528, 559.441]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape121_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[404.35, 528, 559.441]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line017_Solid_Glass_0.geometry}
          material={materials.Solid_Glass}
          position={[-0.931, 590.933, 63.87]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box030_Metal_0.geometry}
          material={materials.Metal}
          position={[686.035, 590.53, 807.812]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane122_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-186.217, 646.11, 277.418]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape122_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-186.5, 646.11, 277.418]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane123_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-186.217, 646.11, 159.539]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape123_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-186.5, 646.11, 159.539]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane124_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-256.057, 646.11, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape124_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-256.057, 646.11, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane125_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-381.45, 646.11, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape125_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-381.45, 646.11, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane126_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-506.761, 646.11, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape126_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-506.761, 646.11, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane127_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-632.262, 646.11, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape127_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-632.262, 646.11, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane128_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-757.352, 646.11, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape128_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-757.352, 646.11, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane129_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-972.077, 646.11, -79.644]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape129_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-972.36, 646.11, -79.644]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane130_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-972.077, 646.11, -192.705]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape130_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-972.36, 646.11, -192.705]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape131_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-972.36, 646.11, -305.577]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane131_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-972.077, 646.11, -305.577]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape132_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-889.468, 646.11, -390.657]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane132_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-889.468, 646.11, -390.941]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane133_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-773.604, 646.11, -390.941]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape133_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-773.604, 646.11, -390.657]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane134_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-657.721, 646.11, -390.941]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape134_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-657.721, 646.11, -390.657]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane135_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-579.596, 646.11, -494.556]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape135_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-579.879, 646.11, -494.556]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane136_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-579.596, 646.11, -603.273]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape136_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-579.879, 646.11, -603.273]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane137_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-579.596, 646.11, -712.03]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape137_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-579.879, 646.11, -712.03]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane138_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-509.02, 646.11, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape138_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-509.02, 646.11, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane139_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-378.267, 646.11, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape139_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-378.267, 646.11, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane140_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-248.055, 646.11, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape140_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-248.055, 646.11, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane141_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-117.663, 646.11, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape141_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-117.663, 646.11, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane142_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[12.687, 646.11, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape142_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[12.687, 646.11, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane143_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 646.11, -693.241]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape143_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 646.11, -693.241]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane144_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 646.11, -563.959]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape144_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 646.11, -563.959]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane145_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 646.11, -434.961]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape145_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 646.11, -434.961]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane146_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 646.11, -305.68]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape146_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 646.11, -305.68]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane147_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 646.11, -176.606]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape147_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 646.11, -176.606]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane148_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[338.914, 646.11, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape148_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[338.914, 646.11, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane149_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[493.072, 646.11, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape149_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[493.072, 646.11, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane150_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[646.992, 646.781, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape150_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[646.992, 646.781, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane151_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[800.729, 646.781, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape151_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[800.729, 646.781, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane152_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 646.11, 132.505]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape152_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 646.11, 132.505]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane153_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 646.11, 317.678]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape153_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 646.11, 317.678]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane154_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 646.11, 503.374]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape154_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 646.11, 503.374]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane155_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 646.11, 688.686]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape155_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 646.11, 688.686]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane156_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[899.491, 646.305, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape156_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[899.491, 646.305, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane157_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[757.42, 646.07, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape157_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[757.42, 646.07, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane158_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[615.148, 646.07, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape158_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[615.148, 646.07, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane159_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[473.336, 646.07, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape159_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[473.336, 646.07, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane160_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[404.634, 646.11, 672.22]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape160_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[404.35, 646.11, 672.22]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane161_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[404.634, 646.11, 559.441]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape161_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[404.35, 646.11, 559.441]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line018_Solid_Glass_0.geometry}
          material={materials.Solid_Glass}
          position={[-0.931, 709.043, 63.87]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box031_Metal_0.geometry}
          material={materials.Metal}
          position={[686.035, 708.64, 807.812]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane162_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-186.217, 764.22, 277.418]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape162_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-186.5, 764.22, 277.418]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane163_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-186.217, 764.22, 159.539]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape163_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-186.5, 764.22, 159.539]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane164_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-256.057, 764.22, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape164_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-256.057, 764.22, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane165_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-381.45, 764.22, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape165_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-381.45, 764.22, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane166_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-506.761, 764.22, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape166_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-506.761, 764.22, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane167_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-632.262, 764.22, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape167_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-632.262, 764.22, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane168_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-757.352, 764.22, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape168_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-757.352, 764.22, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane169_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-972.077, 764.22, -79.644]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape169_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-972.36, 764.22, -79.644]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane170_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-972.077, 764.22, -192.705]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape170_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-972.36, 764.22, -192.705]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape171_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-972.36, 764.22, -305.577]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane171_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-972.077, 764.22, -305.577]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape172_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-889.468, 764.22, -390.657]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane172_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-889.468, 764.22, -390.941]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane173_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-773.604, 764.22, -390.941]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape173_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-773.604, 764.22, -390.657]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane174_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-657.721, 764.22, -390.941]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape174_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-657.721, 764.22, -390.657]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane175_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-579.596, 764.22, -494.556]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape175_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-579.879, 764.22, -494.556]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane176_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-579.596, 764.22, -603.273]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape176_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-579.879, 764.22, -603.273]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane177_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-579.596, 764.22, -712.03]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape177_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-579.879, 764.22, -712.03]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane178_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-509.02, 764.22, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape178_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-509.02, 764.22, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane179_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-378.267, 764.22, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape179_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-378.267, 764.22, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane180_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-248.055, 764.22, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape180_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-248.055, 764.22, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane181_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-117.663, 764.22, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape181_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-117.663, 764.22, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane182_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[12.687, 764.22, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape182_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[12.687, 764.22, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane183_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 764.22, -693.241]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape183_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 764.22, -693.241]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane184_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 764.22, -563.959]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape184_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 764.22, -563.959]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane185_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 764.22, -434.961]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape185_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 764.22, -434.961]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane186_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 764.22, -305.68]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape186_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 764.22, -305.68]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane187_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 764.22, -176.606]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape187_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 764.22, -176.606]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane188_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[338.914, 764.22, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape188_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[338.914, 764.22, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane189_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[493.072, 764.22, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape189_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[493.072, 764.22, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane190_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[646.992, 764.891, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape190_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[646.992, 764.891, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane191_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[800.729, 764.891, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape191_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[800.729, 764.891, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane192_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 764.22, 132.505]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape192_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 764.22, 132.505]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane193_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 764.22, 317.678]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape193_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 764.22, 317.678]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane194_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 764.22, 503.374]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape194_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 764.22, 503.374]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane195_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 764.22, 688.686]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape195_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 764.22, 688.686]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane196_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[899.491, 764.415, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape196_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[899.491, 764.415, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane197_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[757.42, 764.181, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape197_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[757.42, 764.181, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane198_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[615.148, 764.181, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape198_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[615.148, 764.181, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane199_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[473.336, 764.181, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape199_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[473.336, 764.181, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane200_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[404.634, 764.22, 672.22]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape200_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[404.35, 764.22, 672.22]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane201_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[404.634, 764.22, 559.441]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape201_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[404.35, 764.22, 559.441]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line019_Solid_Glass_0.geometry}
          material={materials.Solid_Glass}
          position={[-0.931, 827.154, 63.87]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box032_Metal_0.geometry}
          material={materials.Metal}
          position={[686.035, 826.75, 807.812]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane202_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-186.217, 882.331, 277.418]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape202_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-186.5, 882.331, 277.418]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane203_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-186.217, 882.331, 159.539]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape203_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-186.5, 882.331, 159.539]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane204_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-256.057, 882.331, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape204_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-256.057, 882.331, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane205_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-381.45, 882.331, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape205_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-381.45, 882.331, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane206_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-506.761, 882.331, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape206_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-506.761, 882.331, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane207_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-632.262, 882.331, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape207_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-632.262, 882.331, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane208_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-757.352, 882.331, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape208_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-757.352, 882.331, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane209_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-972.077, 882.331, -79.644]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape209_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-972.36, 882.331, -79.644]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane210_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-972.077, 882.331, -192.705]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape210_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-972.36, 882.331, -192.705]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape211_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-972.36, 882.331, -305.577]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane211_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-972.077, 882.331, -305.577]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape212_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-889.468, 882.331, -390.657]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane212_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-889.468, 882.331, -390.941]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane213_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-773.604, 882.331, -390.941]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape213_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-773.604, 882.331, -390.657]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane214_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-657.721, 882.331, -390.941]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape214_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-657.721, 882.331, -390.657]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane215_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-579.596, 882.331, -494.556]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape215_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-579.879, 882.331, -494.556]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane216_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-579.596, 882.331, -603.273]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape216_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-579.879, 882.331, -603.273]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane217_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-579.596, 882.331, -712.03]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape217_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-579.879, 882.331, -712.03]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane218_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-509.02, 882.331, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape218_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-509.02, 882.331, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane219_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-378.267, 882.331, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape219_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-378.267, 882.331, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane220_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-248.055, 882.331, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape220_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-248.055, 882.331, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane221_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-117.663, 882.331, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape221_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-117.663, 882.331, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane222_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[12.687, 882.331, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape222_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[12.687, 882.331, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane223_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 882.331, -693.241]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape223_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 882.331, -693.241]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane224_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 882.331, -563.959]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape224_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 882.331, -563.959]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane225_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 882.331, -434.961]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape225_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 882.331, -434.961]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane226_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 882.331, -305.68]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape226_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 882.331, -305.68]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane227_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 882.331, -176.606]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape227_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 882.331, -176.606]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane228_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[338.914, 882.331, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape228_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[338.914, 882.331, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane229_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[493.072, 882.331, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape229_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[493.072, 882.331, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane230_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[646.992, 883.001, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape230_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[646.992, 883.001, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane231_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[800.729, 883.001, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape231_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[800.729, 883.001, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane232_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 882.331, 132.505]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape232_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 882.331, 132.505]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane233_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 882.331, 317.678]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape233_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 882.331, 317.678]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane234_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 882.331, 503.374]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape234_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 882.331, 503.374]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane235_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 882.331, 688.686]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape235_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 882.331, 688.686]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane236_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[899.491, 882.525, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape236_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[899.491, 882.525, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane237_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[757.42, 882.291, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape237_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[757.42, 882.291, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane238_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[615.148, 882.291, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape238_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[615.148, 882.291, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane239_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[473.336, 882.291, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape239_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[473.336, 882.291, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane240_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[404.634, 882.331, 672.22]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape240_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[404.35, 882.331, 672.22]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane241_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[404.634, 882.331, 559.441]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape241_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[404.35, 882.331, 559.441]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line020_Solid_Glass_0.geometry}
          material={materials.Solid_Glass}
          position={[-0.931, 945.264, 63.87]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box033_Metal_0.geometry}
          material={materials.Metal}
          position={[686.035, 944.86, 807.812]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane242_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-186.217, 1000.441, 277.418]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape242_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-186.5, 1000.441, 277.418]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane243_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-186.217, 1000.441, 159.539]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape243_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-186.5, 1000.441, 159.539]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane244_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-256.057, 1000.441, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape244_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-256.057, 1000.441, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane245_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-381.45, 1000.441, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape245_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-381.45, 1000.441, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane246_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-506.761, 1000.441, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape246_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-506.761, 1000.441, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane247_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-632.262, 1000.441, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape247_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-632.262, 1000.441, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane248_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-757.352, 1000.441, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape248_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-757.352, 1000.441, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane249_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-972.077, 1000.441, -79.644]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape249_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-972.36, 1000.441, -79.644]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane250_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-972.077, 1000.441, -192.705]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape250_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-972.36, 1000.441, -192.705]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape251_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-972.36, 1000.441, -305.577]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane251_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-972.077, 1000.441, -305.577]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape252_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-889.468, 1000.441, -390.657]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane252_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-889.468, 1000.441, -390.941]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane253_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-773.604, 1000.441, -390.941]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape253_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-773.604, 1000.441, -390.657]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane254_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-657.721, 1000.441, -390.941]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape254_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-657.721, 1000.441, -390.657]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane255_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-579.596, 1000.441, -494.556]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape255_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-579.879, 1000.441, -494.556]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane256_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-579.596, 1000.441, -603.273]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape256_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-579.879, 1000.441, -603.273]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane257_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-579.596, 1000.441, -712.03]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape257_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-579.879, 1000.441, -712.03]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane258_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-509.02, 1000.441, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape258_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-509.02, 1000.441, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane259_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-378.267, 1000.441, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape259_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-378.267, 1000.441, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane260_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-248.055, 1000.441, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape260_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-248.055, 1000.441, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane261_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-117.663, 1000.441, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape261_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-117.663, 1000.441, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane262_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[12.687, 1000.441, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape262_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[12.687, 1000.441, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane263_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 1000.441, -693.241]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape263_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 1000.441, -693.241]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane264_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 1000.441, -563.959]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape264_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 1000.441, -563.959]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane265_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 1000.441, -434.961]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape265_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 1000.441, -434.961]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane266_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 1000.441, -305.68]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape266_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 1000.441, -305.68]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane267_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 1000.441, -176.606]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape267_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 1000.441, -176.606]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane268_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[338.914, 1000.441, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape268_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[338.914, 1000.441, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane269_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[493.072, 1000.441, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape269_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[493.072, 1000.441, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane270_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[646.992, 1001.111, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape270_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[646.992, 1001.111, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane271_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[800.729, 1001.111, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape271_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[800.729, 1001.111, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane272_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 1000.441, 132.505]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape272_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 1000.441, 132.505]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane273_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 1000.441, 317.678]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape273_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 1000.441, 317.678]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane274_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 1000.441, 503.374]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape274_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 1000.441, 503.374]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane275_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 1000.441, 688.686]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape275_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 1000.441, 688.686]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane276_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[899.491, 1000.635, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape276_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[899.491, 1000.635, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane277_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[757.42, 1000.401, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape277_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[757.42, 1000.401, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane278_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[615.148, 1000.401, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape278_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[615.148, 1000.401, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane279_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[473.336, 1000.401, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape279_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[473.336, 1000.401, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane280_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[404.634, 1000.441, 672.22]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape280_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[404.35, 1000.441, 672.22]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane281_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[404.634, 1000.441, 559.441]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape281_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[404.35, 1000.441, 559.441]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line021_Solid_Glass_0.geometry}
          material={materials.Solid_Glass}
          position={[-0.931, 1063.374, 63.87]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box034_Metal_0.geometry}
          material={materials.Metal}
          position={[686.035, 1062.971, 807.812]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane282_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-186.217, 1118.551, 277.418]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape282_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-186.5, 1118.551, 277.418]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane283_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-186.217, 1118.551, 159.539]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape283_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-186.5, 1118.551, 159.539]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane284_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-256.057, 1118.551, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape284_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-256.057, 1118.551, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane285_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-381.45, 1118.551, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape285_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-381.45, 1118.551, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane286_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-506.761, 1118.551, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape286_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-506.761, 1118.551, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane287_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-632.262, 1118.551, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape287_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-632.262, 1118.551, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane288_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-757.352, 1118.551, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape288_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-757.352, 1118.551, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane289_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-972.077, 1118.551, -79.644]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape289_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-972.36, 1118.551, -79.644]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane290_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-972.077, 1118.551, -192.705]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape290_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-972.36, 1118.551, -192.705]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape291_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-972.36, 1118.551, -305.577]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane291_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-972.077, 1118.551, -305.577]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape292_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-889.468, 1118.551, -390.657]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane292_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-889.468, 1118.551, -390.941]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane293_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-773.604, 1118.551, -390.941]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape293_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-773.604, 1118.551, -390.657]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane294_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-657.721, 1118.551, -390.941]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape294_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-657.721, 1118.551, -390.657]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane295_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-579.596, 1118.551, -494.556]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape295_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-579.879, 1118.551, -494.556]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane296_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-579.596, 1118.551, -603.273]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape296_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-579.879, 1118.551, -603.273]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane297_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-579.596, 1118.551, -712.03]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape297_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-579.879, 1118.551, -712.03]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane298_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-509.02, 1118.551, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape298_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-509.02, 1118.551, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane299_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-378.267, 1118.551, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape299_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-378.267, 1118.551, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane300_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-248.055, 1118.551, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape300_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-248.055, 1118.551, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane301_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-117.663, 1118.551, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape301_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-117.663, 1118.551, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane302_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[12.687, 1118.551, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape302_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[12.687, 1118.551, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane303_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 1118.551, -693.241]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape303_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 1118.551, -693.241]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane304_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 1118.551, -563.959]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape304_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 1118.551, -563.959]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane305_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 1118.551, -434.961]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape305_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 1118.551, -434.961]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane306_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 1118.551, -305.68]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape306_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 1118.551, -305.68]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane307_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 1118.551, -176.606]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape307_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 1118.551, -176.606]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane308_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[338.914, 1118.551, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape308_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[338.914, 1118.551, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane309_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[493.072, 1118.551, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape309_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[493.072, 1118.551, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane310_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[646.992, 1119.222, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape310_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[646.992, 1119.222, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane311_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[800.729, 1119.222, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape311_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[800.729, 1119.222, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane312_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 1118.551, 132.505]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape312_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 1118.551, 132.505]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane313_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 1118.551, 317.678]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape313_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 1118.551, 317.678]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane314_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 1118.551, 503.374]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape314_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 1118.551, 503.374]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane315_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 1118.551, 688.686]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape315_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 1118.551, 688.686]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane316_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[899.491, 1118.745, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape316_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[899.491, 1118.745, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane317_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[757.42, 1118.511, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape317_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[757.42, 1118.511, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane318_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[615.148, 1118.511, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape318_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[615.148, 1118.511, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane319_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[473.336, 1118.511, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape319_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[473.336, 1118.511, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane320_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[404.634, 1118.551, 672.22]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape320_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[404.35, 1118.551, 672.22]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane321_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[404.634, 1118.551, 559.441]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape321_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[404.35, 1118.551, 559.441]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line022_Solid_Glass_0.geometry}
          material={materials.Solid_Glass}
          position={[-0.931, 1181.484, 63.87]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box035_Metal_0.geometry}
          material={materials.Metal}
          position={[686.035, 1181.081, 807.812]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane322_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-186.217, 1236.661, 277.418]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape322_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-186.5, 1236.661, 277.418]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane323_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-186.217, 1236.661, 159.539]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape323_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-186.5, 1236.661, 159.539]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane324_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-256.057, 1236.661, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape324_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-256.057, 1236.661, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane325_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-381.45, 1236.661, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape325_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-381.45, 1236.661, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane326_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-506.761, 1236.661, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape326_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-506.761, 1236.661, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane327_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-632.262, 1236.661, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape327_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-632.262, 1236.661, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane328_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-757.352, 1236.661, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape328_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-757.352, 1236.661, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane329_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-972.077, 1236.661, -79.644]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape329_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-972.36, 1236.661, -79.644]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane330_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-972.077, 1236.661, -192.705]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape330_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-972.36, 1236.661, -192.705]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape331_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-972.36, 1236.661, -305.577]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane331_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-972.077, 1236.661, -305.577]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape332_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-889.468, 1236.661, -390.657]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane332_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-889.468, 1236.661, -390.941]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane333_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-773.604, 1236.661, -390.941]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape333_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-773.604, 1236.661, -390.657]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane334_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-657.721, 1236.661, -390.941]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape334_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-657.721, 1236.661, -390.657]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane335_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-579.596, 1236.661, -494.556]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape335_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-579.879, 1236.661, -494.556]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane336_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-579.596, 1236.661, -603.273]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape336_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-579.879, 1236.661, -603.273]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane337_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-579.596, 1236.661, -712.03]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape337_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-579.879, 1236.661, -712.03]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane338_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-509.02, 1236.661, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape338_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-509.02, 1236.661, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane339_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-378.267, 1236.661, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape339_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-378.267, 1236.661, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane340_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-248.055, 1236.661, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape340_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-248.055, 1236.661, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane341_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-117.663, 1236.661, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape341_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-117.663, 1236.661, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane342_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[12.687, 1236.661, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape342_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[12.687, 1236.661, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane343_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 1236.661, -693.241]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape343_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 1236.661, -693.241]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane344_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 1236.661, -563.959]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape344_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 1236.661, -563.959]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane345_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 1236.661, -434.961]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape345_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 1236.661, -434.961]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane346_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 1236.661, -305.68]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape346_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 1236.661, -305.68]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane347_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 1236.661, -176.606]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape347_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 1236.661, -176.606]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane348_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[338.914, 1236.661, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape348_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[338.914, 1236.661, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane349_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[493.072, 1236.661, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape349_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[493.072, 1236.661, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane350_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[646.992, 1237.332, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape350_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[646.992, 1237.332, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane351_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[800.729, 1237.332, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape351_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[800.729, 1237.332, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane352_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 1236.661, 132.505]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape352_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 1236.661, 132.505]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane353_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 1236.661, 317.678]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape353_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 1236.661, 317.678]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane354_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 1236.661, 503.374]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape354_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 1236.661, 503.374]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane355_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 1236.661, 688.686]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape355_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 1236.661, 688.686]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane356_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[899.491, 1236.856, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape356_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[899.491, 1236.856, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane357_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[757.42, 1236.622, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape357_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[757.42, 1236.622, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane358_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[615.148, 1236.622, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape358_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[615.148, 1236.622, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane359_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[473.336, 1236.622, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape359_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[473.336, 1236.622, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane360_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[404.634, 1236.661, 672.22]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape360_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[404.35, 1236.661, 672.22]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane361_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[404.634, 1236.661, 559.441]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape361_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[404.35, 1236.661, 559.441]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line023_Solid_Glass_0.geometry}
          material={materials.Solid_Glass}
          position={[-0.931, 1299.595, 63.87]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box036_Metal_0.geometry}
          material={materials.Metal}
          position={[686.035, 1299.191, 807.812]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane362_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-186.217, 1354.771, 277.418]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape362_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-186.5, 1354.771, 277.418]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane363_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-186.217, 1354.771, 159.539]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape363_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-186.5, 1354.771, 159.539]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane364_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-256.057, 1354.771, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape364_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-256.057, 1354.771, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane365_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-381.45, 1354.771, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape365_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-381.45, 1354.771, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane366_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-506.761, 1354.771, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape366_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-506.761, 1354.771, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane367_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-632.262, 1354.771, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape367_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-632.262, 1354.771, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane368_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-757.352, 1354.771, 11.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape368_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-757.352, 1354.771, 11.819]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane369_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-972.077, 1354.771, -79.644]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape369_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-972.36, 1354.771, -79.644]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane370_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-972.077, 1354.771, -192.705]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape370_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-972.36, 1354.771, -192.705]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape371_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-972.36, 1354.771, -305.577]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane371_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-972.077, 1354.771, -305.577]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape372_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-889.468, 1354.771, -390.657]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane372_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-889.468, 1354.771, -390.941]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane373_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-773.604, 1354.771, -390.941]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape373_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-773.604, 1354.771, -390.657]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane374_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-657.721, 1354.771, -390.941]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape374_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-657.721, 1354.771, -390.657]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane375_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-579.596, 1354.771, -494.556]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape375_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-579.879, 1354.771, -494.556]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane376_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-579.596, 1354.771, -603.273]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape376_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-579.879, 1354.771, -603.273]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane377_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-579.596, 1354.771, -712.03]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape377_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-579.879, 1354.771, -712.03]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane378_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-509.02, 1354.771, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape378_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-509.02, 1354.771, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane379_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-378.267, 1354.771, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape379_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-378.267, 1354.771, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane380_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-248.055, 1354.771, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape380_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-248.055, 1354.771, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane381_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[-117.663, 1354.771, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape381_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-117.663, 1354.771, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane382_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[12.687, 1354.771, -784.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape382_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[12.687, 1354.771, -784.358]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane383_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 1354.771, -693.241]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape383_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 1354.771, -693.241]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane384_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 1354.771, -563.959]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape384_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 1354.771, -563.959]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane385_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 1354.771, -434.961]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape385_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 1354.771, -434.961]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane386_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 1354.771, -305.68]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape386_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 1354.771, -305.68]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane387_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[216.063, 1354.771, -176.606]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape387_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[215.78, 1354.771, -176.606]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane388_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[338.914, 1354.771, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape388_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[338.914, 1354.771, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane389_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[493.072, 1354.771, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape389_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[493.072, 1354.771, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane390_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[646.992, 1355.442, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape390_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[646.992, 1355.442, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane391_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[800.729, 1355.442, 3.04]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape391_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[800.729, 1355.442, 3.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane392_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 1354.771, 132.505]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape392_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 1354.771, 132.505]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane393_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 1354.771, 317.678]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape393_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 1354.771, 317.678]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane394_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 1354.771, 503.374]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape394_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 1354.771, 503.374]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane395_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[1002.911, 1354.771, 688.686]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape395_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1002.628, 1354.771, 688.686]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane396_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[899.491, 1354.966, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape396_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[899.491, 1354.966, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane397_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[757.42, 1354.732, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape397_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[757.42, 1354.732, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane398_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[615.148, 1354.732, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape398_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[615.148, 1354.732, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane399_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[473.336, 1354.732, 798.404]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape399_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[473.336, 1354.732, 798.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane400_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[404.634, 1354.771, 672.22]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape400_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[404.35, 1354.771, 672.22]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane401_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[404.634, 1354.771, 559.441]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape401_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[404.35, 1354.771, 559.441]}
          rotation={[0, -Math.PI / 2, 0]}
        />
      </group>
    </group>
  );
}

export default Building1
