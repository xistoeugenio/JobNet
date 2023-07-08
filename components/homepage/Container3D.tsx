import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Mac from "../Mac";

const Container3D = () => {
  return (
    <div className=" flex-1 flex flex-col items-center justify-around">
      <div className=" md:w-[400px] w-[250px] md:h-[400px] h-[250px]">
        <Canvas >
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.6}>
              <Mac />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Container3D
