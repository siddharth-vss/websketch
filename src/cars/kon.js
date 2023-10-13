import React,{Suspense,
  // useRef,
 // useState
} from 'react'
import { Link } from 'react-router-dom'

import bg from './kon.jpg'
import { Canvas} from '@react-three/fiber'
import {
 // OrbitControls,
  useGLTF ,
  //  useAnimations,
   OrbitControls
 } from '@react-three/drei'
import '../index.css'



export function Model(props) {
  const { nodes, materials } = useGLTF('/kon/scene.gltf')
  return (
    <group {...props} dispose={null} scale={0.0092}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Mat_FrontBrakePad} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.Mat_FrontDiff} />
          <mesh geometry={nodes.defaultMaterial_2.geometry} material={materials.Mat_FrontRim} />
          <mesh geometry={nodes.defaultMaterial_3.geometry} material={materials.Mat_FrontTire} />
          <mesh geometry={nodes.defaultMaterial_4.geometry} material={materials.Mat_FrontBrakeCaliper} />
          <mesh geometry={nodes.defaultMaterial_5.geometry} material={materials.Mat_BackBrakeCaliper} />
          <mesh geometry={nodes.defaultMaterial_6.geometry} material={materials.Mat_BackTire} />
          <mesh geometry={nodes.defaultMaterial_7.geometry} material={materials.Mat_BackRim} />
          <mesh geometry={nodes.defaultMaterial_8.geometry} material={materials.Mat_BackDiff} />
          <mesh geometry={nodes.defaultMaterial_9.geometry} material={materials.Mat_BackBrakePad} />
          <mesh geometry={nodes.defaultMaterial_10.geometry} material={materials.Mat_TaillightDetail} />
          <mesh geometry={nodes.defaultMaterial_11.geometry} material={materials.Mat_RearDiffuse} />
          <mesh geometry={nodes.defaultMaterial_12.geometry} material={materials.Mat_RearWings} />
          <mesh geometry={nodes.defaultMaterial_13.geometry} material={materials.Mat_Spoiler} />
          <mesh geometry={nodes.defaultMaterial_14.geometry} material={materials.Mat_HeadlightCover} />
          <mesh geometry={nodes.defaultMaterial_15.geometry} material={materials.Mat_Headlight} />
          <mesh geometry={nodes.defaultMaterial_16.geometry} material={materials.Mat_FrontBumper} />
          <mesh geometry={nodes.defaultMaterial_17.geometry} material={materials.Mat_Door} />
          <mesh geometry={nodes.defaultMaterial_18.geometry} material={materials.Mat_Roof} />
          <mesh geometry={nodes.defaultMaterial_19.geometry} material={materials.Mat_BackMiddle} />
          <mesh geometry={nodes.defaultMaterial_20.geometry} material={materials.Mat_BackBumper} />
          <mesh geometry={nodes.defaultMaterial_21.geometry} material={materials.Mat_RearLight} />
          <mesh geometry={nodes.defaultMaterial_22.geometry} material={materials.Mat_SideVent} />
          <mesh geometry={nodes.defaultMaterial_23.geometry} material={materials.Mat_FrontSideVent} />
          <mesh geometry={nodes.defaultMaterial_24.geometry} material={materials.Mat_FrontVent} />
          <mesh geometry={nodes.defaultMaterial_25.geometry} material={materials.Mat_Frontventlarge} />
          <mesh geometry={nodes.defaultMaterial_26.geometry} material={materials.Mat_Mirror} />
          <mesh geometry={nodes.defaultMaterial_27.geometry} material={materials.Mat_FrontAirVent} />
          <mesh geometry={nodes.defaultMaterial_28.geometry} material={materials.Mat_Hood} />
          <mesh geometry={nodes.defaultMaterial_29.geometry} material={materials.Mat_BackAirVent} />
          <mesh geometry={nodes.defaultMaterial_30.geometry} material={materials.Mat_BackHalf} />
          <mesh geometry={nodes.defaultMaterial_31.geometry} material={materials.Mat_FrontSplitterLarge} />
          <mesh geometry={nodes.defaultMaterial_32.geometry} material={materials.Mat_FrontSplitter} />
          <mesh geometry={nodes.defaultMaterial_33.geometry} material={materials.Mat_CarBottom} />
          <mesh geometry={nodes.defaultMaterial_34.geometry} material={materials.Mat_Windshieldwiper} />
        </group>
      </group>
    </group>
  )
}

const Kon = () => {
 return (
<>
<nav>
        <Link to="/" >WINTAGE CAR</Link>
        <Link to="/kon" >KONSAGAGERA</Link>
        <Link to="/lambo" >LAMBOURGINI AVENTADORE</Link>
        <Link to="/malibu" >MALIBU</Link>
      </nav>
       <div id="main"> 
       <div >
<img src={bg} alt="car" id='bgc'/>
        </div>
            <Canvas  >
               <Suspense fallback={null} > 
                 <ambientLight/>
                 <spotLight  intensity={0.9} angle={0.1} penumbra={1}
                             position={[10,15,10]} castShadow />
                 <Model/>
                 <OrbitControls 
                   enablePan={true}
                   enableZoom={true}
                   enableRotate={true}
                   enableDamping={true}
                   autoRotate={true}
                   autoRotateSpeed={10}
                   
                   />
               </Suspense>
             </Canvas>
         </div>
                   </>
 )
}

export default Kon;
