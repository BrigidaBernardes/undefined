"use client";
import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, MeshTransmissionMaterial, Text } from "@react-three/drei";
import { useMotionValue, useSpring } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useControls, LevaPanel, LevaInputs } from "leva";

function AnimatedMesh() {
  const mesh = useRef(null);

  const options = {
    damping: 20,
  };

  const mouse = {
    x: useSpring(useMotionValue(0), options),
    y: useSpring(useMotionValue(0), options),
  };

  const manageMouseMove = () => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = event;
    const targetX = -0.5 + clientX / innerWidth;
    const targetY = -0.5 + clientY / innerHeight;
    mouse.x.set(targetX);
    mouse.y.set(targetY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    return () => window.removeEventListener("mousemove", manageMouseMove);
  }, []);

  useFrame(() => {
    mesh.current.rotation.x += 0.004;
    mesh.current.rotation.y += 0.004;
  });

  const { viewport } = useThree();
  const materialProps = useControls({
    thickness: { value: 0.25, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0.15, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 0.9, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.32, min: 0, max: 1 },
    backside: { value: true },
    LevaInputs: {value: false},
  });

  return (
    <group scale={viewport.width/ 10}>
      <Text fontSize={0.9} font="fonts/ClimateCrisis.ttf">
        Inovação
      </Text>
      <motion.mesh ref={mesh} rotation-x={mouse.y} rotation-y={mouse.x}>
        <torusGeometry />
        <MeshTransmissionMaterial {...materialProps} />
      </motion.mesh>
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas>
      <directionalLight position={[0, 3, 2]} intensity={2} />
      <Environment preset="city" />
      <AnimatedMesh />
    </Canvas>
  );
}
