import React, { useRef, useState } from "react";
import { useGLTF, meshBounds, useVideoTexture } from "@react-three/drei";

export default function Wall(props) {
  const wallRef = useRef(null);
  const [play, setPlay] = useState(false)
  const maxwell = useVideoTexture("/static/Maxwell.mp4", {
    start: play,
    loop: true,
    muted: false,
  });

  const cambiarEstado = (event) => {
    setPlay(!play)
  }

  return (
    <group ref={wallRef} {...props} dispose={null} onClick={cambiarEstado}>
      <mesh receiveShadow={true} scale={1} raycast={meshBounds} >
        <mesh scale={3} rotation-y={Math.PI / -1.2}>
          <planeGeometry />
          <meshBasicMaterial map={maxwell} toneMapped={false} />
        </mesh>
      </mesh>
    </group>
  );
}
