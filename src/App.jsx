import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import MacContainer from "./components/MacContainer";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <div className="w-full h-screen">
        <Header />
        <div className="flex absolute items-center flex-col text-white top-31 left-1/2 -translate-x-1/2 ">
          <p
            className="text-7xl font-bold 
           bg-[linear-gradient(97deg,#0096FF,#BB64FF_42%,#F2416B_74%,#EB7500)] 
           bg-clip-text text-transparent "
          >
            MacBook Pro
          </p>
          <h2>Supercharged for pros.</h2>
          <p className="w-3/4 text-center">
            The most advanced MacBook Pro ever. Experience incredible
            performance and stunning display.
          </p>
        </div>
        <Canvas camera={{ fov: 10, position: [0, -18, 220] }}>
          {/* <OrbitControls /> */}
          <Environment
            files={[
              "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/studio_small_03_4k.hdr",
            ]}
          />
          <ScrollControls page={3}>
            <MacContainer />
          </ScrollControls>
        </Canvas>
      </div>
    </>
  );
};

export default App;
