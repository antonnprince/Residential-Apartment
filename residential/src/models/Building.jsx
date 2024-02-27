import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import buildingScene from "../assets/building2.glb";
import { a } from "@react-spring/three";
import { useFrame, useThree } from "@react-three/fiber";

const Building = (props) => {
  const buildref = useRef();
  const { nodes, materials } = useGLTF(buildingScene);
  const [isRotating, setIsRotating] = useState(false);

  const { gl } = useThree();

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  useEffect(() => {
    const handlePointerDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
      setIsRotating(true);
      lastX.current = event.touches ? event.touches[0].clientX : event.clientX;
    };

    const handlePointerUp = (event) => {
      event.preventDefault();
      event.stopPropagation();
      setIsRotating(false);
    };

    const handlePointerMove = (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (isRotating) {
        const clientX = event.touches
          ? event.touches[0].clientX
          : event.clientX;

        const delta = (clientX - lastX.current) / window.innerWidth;

        buildref.current.rotation.y += delta * 0.1 * Math.PI;

        lastX.current = clientX;

        rotationSpeed.current = delta * 0.1 * Math.PI;
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        if (!isRotating) setIsRotating(true);

        buildref.current.rotation.y -= 0.01 * Math.PI;
        rotationSpeed.current = -0.007;
      } else if (event.key === "ArrowRight") {
        if (!isRotating) setIsRotating(true);

        buildref.current.rotation.y += 0.01 * Math.PI;
        rotationSpeed.current = 0.007;
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        setIsRotating(false);
      }
    };

    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gl, isRotating]);

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      buildref.current.rotation.y += rotationSpeed.current;
    
    
    
    }
  });

  return (
    <a.group {...props} dispose={null} ref={buildref} rotation={[-Math.PI/2,0,0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Sumele_Dress2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Sumele_Dress}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Sumele_Shoe}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Sumele_Dress3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Sumele_Hair}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.Sumele_Jewelry}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.Sumele_Skin}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.auto_12}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.auto_23}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.auto_25}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.auto_10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.auto_11}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.auto_13}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials.auto_14}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.auto_16}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.auto_15}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.auto_17}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials.auto_18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials.auto_19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={materials.auto_19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials.auto_20}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_23.geometry}
          material={materials.auto_20}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials.auto_20}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_25.geometry}
          material={materials.auto_20}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={materials.auto_20}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_27.geometry}
          material={materials.auto_20}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_28.geometry}
          material={materials.auto_20}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_29.geometry}
          material={materials.auto_20}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_30.geometry}
          material={materials.auto_21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_31.geometry}
          material={materials.auto_22}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_32.geometry}
          material={materials.auto_24}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_33.geometry}
          material={materials.auto_26}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_34.geometry}
          material={materials.auto_8}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_35.geometry}
          material={materials.auto_9}
        />
      
    </a.group>
  );
};

export default Building;


