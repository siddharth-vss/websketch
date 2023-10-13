import React,{Suspense,
  // useRef,
 // useState
} from 'react'
import { Link } from 'react-router-dom'

import bg from './malibu.jpg'
import { Canvas} from '@react-three/fiber'
import {
 // OrbitControls,
  useGLTF ,
  //  useAnimations,
   OrbitControls
 } from '@react-three/drei'
import '../index.css'



export function Model(props) {
  const { nodes, materials } = useGLTF('/65/scene.gltf')
  return (
    <group {...props} dispose={null} scale={0.92}>
      <group position={[0, -0.05, 0]}>
        <group position={[0, 0.05, 0]}>
          <mesh geometry={nodes.Object_78.geometry} material={materials.Black_PlasticMetal} />
          <mesh geometry={nodes.Object_80.geometry} material={materials.Bolt_Chrome} />
          <mesh geometry={nodes.Object_81.geometry} material={materials.Bolt_Chrome_Darker} />
          <mesh geometry={nodes.Object_83.geometry} material={materials.Tires} />
          <mesh geometry={nodes.Object_84.geometry} material={materials.Tires_Yellow} />
          <mesh geometry={nodes.Object_86.geometry} material={materials.Chrome} />
          <mesh geometry={nodes.Object_88.geometry} material={materials.Black_PlasticMetal} />
          <mesh geometry={nodes.Object_90.geometry} material={materials.Bolt_Chrome} />
          <mesh geometry={nodes.Object_91.geometry} material={materials.Bolt_Chrome_Darker} />
          <mesh geometry={nodes.Object_93.geometry} material={materials.Tires} />
          <mesh geometry={nodes.Object_94.geometry} material={materials.Tires_Yellow} />
          <mesh geometry={nodes.Object_96.geometry} material={materials.Chrome} />
        </group>
        <mesh geometry={nodes.Object_5.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Black_PlasticMetal} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.White_PlasticMetal} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Red_PlasticMetal} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.Car_Paint} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.Glass_Red_Distorted} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.Bolt_Chrome} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.Car_Paint} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.Black_PlasticMetal} />
        <mesh geometry={nodes.Object_28.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.Mirrors} />
        <mesh geometry={nodes.Object_31.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.Undercarriage} />
        <mesh geometry={nodes.Object_35.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_36.geometry} material={materials.Undercarriage} />
        <mesh geometry={nodes.Object_38.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_39.geometry} material={materials.Reflector} />
        <mesh geometry={nodes.Object_41.geometry} material={materials.Headlights} />
        <mesh geometry={nodes.Object_43.geometry} material={materials.Chrome_Darker} />
        <mesh geometry={nodes.Object_45.geometry} material={materials.Undercarriage} />
        <mesh geometry={nodes.Object_46.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_48.geometry} material={materials.Glass_Orange_Distorted} />
        <mesh geometry={nodes.Object_49.geometry} material={materials.Black_PlasticMetal} />
        <mesh geometry={nodes.Object_51.geometry} material={materials.Car_Paint} />
        <mesh geometry={nodes.Object_52.geometry} material={materials.Undercarriage} />
        <mesh geometry={nodes.Object_54.geometry} material={materials.Car_Paint} />
        <mesh geometry={nodes.Object_56.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_58.geometry} material={materials.Car_Paint} />
        <mesh geometry={nodes.Object_59.geometry} material={materials.Undercarriage} />
        <mesh geometry={nodes.Object_61.geometry} material={materials.Undercarriage} />
        <mesh geometry={nodes.Object_63.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_65.geometry} material={materials.Chrome_Darker} />
        <mesh geometry={nodes.Object_67.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_69.geometry} material={materials.Headlights_Glass_Distorted_Rear} />
        <mesh geometry={nodes.Object_71.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_73.geometry} material={materials.Car_Paint} />
        <mesh geometry={nodes.Object_75.geometry} material={materials.Undercarriage} />
        <mesh geometry={nodes.Object_99.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_101.geometry} material={materials.Window_Glass_Clear} />
        <mesh geometry={nodes.Object_103.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_105.geometry} material={materials.Window_Glass_Clear} />
        <mesh geometry={nodes.Object_107.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_109.geometry} material={materials.Window_Glass_Clear} />
        <mesh geometry={nodes.Object_111.geometry} material={materials.Chrome} scale={[1, 1.032, 1]} />
      </group>
    </group>
  )
}

const Malibu = () => {
 return (
  <>
  <nav>
        <Link to="/" >WINTAGE CAR</Link>
        <Link to="/kon" >KONSAGAGERA</Link>
        <Link to="/lambo" >LAMBOURGINI AVENTADORE</Link>
        <Link to="/malibu" >MALIBU</Link>
      </nav>
<div id="main" >
<div >
<img src={bg} alt="car" id='bgc'/>
        </div>
             <Canvas   >
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
            </div>                 </>
         
 )
}

export default Malibu;
