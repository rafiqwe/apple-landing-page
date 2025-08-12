import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import MacContainer from "./components/MacContainer";
import Header from "./components/Header";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Suspense, useRef } from "react";

const App = () => {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const peraRef = useRef(null);
  const laptopRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(titleRef.current, {
      scale: 0.5,
      duration: 1,
      opacity: 0,
      delay: 2,
    });
    tl.from(subTitleRef.current, {
      x: -300,
      duration: 1,
      opacity: 0,
    });
    tl.from(peraRef.current, {
      scale: 0.5,
      duration: 1,
      opacity: 0,
    });

    tl.from(laptopRef.current, {
      scale: 0.3,
      duration: 1.3,
      opacity: 0,
    });
  });
  return (
    <>
      <div className="w-full  h-screen ">
        <Header />
        <div className="flex absolute items-center flex-col text-white top-31 left-1/2 -translate-x-1/2 ">
          <p
            ref={titleRef}
            className="text-7xl font-bold 
           bg-[linear-gradient(97deg,#0096FF,#BB64FF_42%,#F2416B_74%,#EB7500)] 
           bg-clip-text text-transparent "
          >
            MacBook Pro
          </p>
          <h2 ref={subTitleRef}>Supercharged for pros.</h2>
          <p ref={peraRef} className="w-3/4 text-center">
            The most advanced MacBook Pro ever. Experience incredible
            performance and stunning display.
          </p>
        </div>
        <Canvas ref={laptopRef} camera={{ fov: 10, position: [0, -18, 220] }}>
          {/* <OrbitControls /> */}
          <Environment
            files={[
              "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/studio_small_03_4k.hdr",
            ]}
          />
          <ScrollControls page={3}>
            <Suspense fallback={null}>
              <MacContainer />
            </Suspense>
          </ScrollControls>
        </Canvas>
      </div>
    </>
  );
};

export default App;
