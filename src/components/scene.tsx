"use client";
import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, OrbitControls, Text } from "@react-three/drei";
import { useMotionValue, useSpring } from "framer-motion";
import { motion } from "framer-motion-3d";

function AnimatedMesh() {
  const mesh = useRef(null);

  const options = {
    damping: 20,
  };


  const mouse = {
    x: useSpring(useMotionValue(0), options),
    y: useSpring(useMotionValue(0), options),
  };

  const manageMouseMove = (event: MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = event;
    const targetX = -0.5 + (clientX / innerWidth);
    const targetY = -0.5 + (clientY / innerHeight);
    mouse.x.set(targetX);
    mouse.y.set(targetY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    return () => window.removeEventListener("mousemove", manageMouseMove);
  }, []);

  useFrame(() => {
    mesh.current.rotation.x += 0.001;
    mesh.current.rotation.y += 0.001;
  });

  const {viewport} = useThree();

  return (
    <group scale={viewport.width / 8.5}>
      <Text fontSize={1.2} fontWeight={700}>
        hello world
      </Text>
      <motion.mesh ref={mesh} rotation-x={mouse.y} rotation-y={mouse.x}>
        <torusGeometry />
        <meshStandardMaterial color={"hotpink"} />
      </motion.mesh>
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas>
      <OrbitControls />
      <directionalLight position={[0, 3, 2]} intensity={2.5} />
      <Environment preset="sunset" />
      <AnimatedMesh />
    </Canvas>
  );
}
