import React,{Suspense,
    // useRef,
   // useState
  } from 'react'
  import { Link } from 'react-router-dom'
  
import bg from './win.jpg'
  import { Canvas} from '@react-three/fiber'
  import {
   // OrbitControls,
    useGLTF ,
    //  useAnimations,
     OrbitControls
   } from '@react-three/drei'
  import '../index.css'
  
  

  export function Model(props) {
    const { nodes, materials } = useGLTF('/33/scene.gltf')
    return (
      <group {...props} dispose={null} scale={0.032}>
        <group position={[5.294, 18.18, -0.037]} rotation={[-Math.PI / 2, -0.01, 0]}>
          <mesh geometry={nodes.frame_fordcoupe_bottom_0.geometry} material={materials.fordcoupe_bottom} position={[-65.783, -2.241, 26.758]} />
        </group>
        <group position={[-39.523, 32.902, -0.022]} rotation={[-Math.PI / 2, -0.01, 0]}>
          <group position={[-21.11, -2.226, 11.603]}>
            <mesh geometry={nodes.hood_fordcoupe_body_0.geometry} material={materials.fordcoupe_body} />
            <mesh geometry={nodes.hood_fordcoupe_chrome_0.geometry} material={materials.fordcoupe_chrome} />
          </group>
        </group>
        <group position={[-11.642, 4.88, 29.304]} rotation={[-Math.PI / 2, -0.01, 0]}>
          <group position={[57.395, -4.735, 19.229]}>
            <mesh geometry={nodes.fender_rear_fordcoupe_body_0.geometry} material={materials.fordcoupe_body} />
            <mesh geometry={nodes.fender_rear_fordcoupe_bottom_0.geometry} material={materials.fordcoupe_bottom} />
          </group>
        </group>
        <group position={[6.146, 37.904, 23.166]} rotation={[-Math.PI / 2, 0.021, 0]}>
          <group position={[-5.078, 0, -0.184]}>
            <mesh geometry={nodes.door_left_fordcoupe_body_0.geometry} material={materials.fordcoupe_body} />
            <mesh geometry={nodes.door_left_fordcoupe_chrome_0.geometry} material={materials.fordcoupe_chrome} />
            <mesh geometry={nodes.door_left_fordcoupe_interior_0.geometry} material={materials.fordcoupe_interior} />
            <mesh geometry={nodes.door_left_fordcoupe_glass_0.geometry} material={materials.fordcoupe_glass} />
          </group>
        </group>
        <group position={[-43.271, 21.868, -0.016]} rotation={[-Math.PI / 2, -0.01, 0]}>
          <group position={[103.02, -34.056, 1.664]}>
            <mesh geometry={nodes.fender_front_fordcoupe_body_0.geometry} material={materials.fordcoupe_body} />
            <mesh geometry={nodes.fender_front_fordcoupe_bottom_0.geometry} material={materials.fordcoupe_bottom} />
          </group>
        </group>
        <group position={[-40.165, 13.555, 0.129]} rotation={[0, 0, -0.021]} scale={0.853}>
          <mesh geometry={nodes.suspension_front_fordcoupe_bottom_0.geometry} material={materials.fordcoupe_bottom} position={[21.913, -2.76, 17.891]} />
        </group>
        <group position={[-65.153, 30.289, -0.029]} rotation={[-Math.PI / 2, -0.021, 0]}>
          <mesh geometry={nodes.headlights_fordcoupe_chrome_0.geometry} material={materials.fordcoupe_chrome} position={[124.762, -34.068, -7.137]} />
        </group>
        <group position={[13.535, 38.49, 0.01]} rotation={[-Math.PI / 2, -0.01, 0]}>
          <group position={[-74.22, -2.243, 6.529]}>
            <mesh geometry={nodes.body_fordcoupe_body_0.geometry} material={materials.fordcoupe_body} />
            <mesh geometry={nodes.body_fordcoupe_bottom_0.geometry} material={materials.fordcoupe_bottom} />
            <mesh geometry={nodes.body_fordcoupe_chrome_0.geometry} material={materials.fordcoupe_chrome} />
          </group>
        </group>
        <group position={[-77.661, 14.049, 0.133]} rotation={[-1.571, -1.561, -1.571]} scale={[0.642, 0.702, 0.702]}>
          <mesh geometry={nodes.bumper_front_fordcoupe_chrome_0.geometry} material={materials.fordcoupe_chrome} position={[36.582, 0.214, 1.245]} />
        </group>
        <group position={[14.185, 11.846, -0.038]} rotation={[-Math.PI / 2, -0.01, 0]}>
          <mesh geometry={nodes.sideskirts_fordcoupe_body_0.geometry} material={materials.fordcoupe_body} position={[-74.612, -2.243, 33.178]} />
        </group>
        <group position={[80.027, 15.185, 0.002]} rotation={[-Math.PI / 2, -0.01, 0]}>
          <mesh geometry={nodes.exhaust_fordcoupe_chrome_0.geometry} material={materials.fordcoupe_chrome} position={[-140.484, -2.202, 30.477]} />
        </group>
        <group position={[84.075, 21.61, -18.027]} rotation={[-1.629, 0.518, 1.562]} scale={1.223}>
          <group position={[-160.49, 35.487, 21.455]}>
            <mesh geometry={nodes.fuelcap_fordcoupe_body_0.geometry} material={materials.fordcoupe_body} />
            <mesh geometry={nodes.fuelcap_fordcoupe_chrome_0.geometry} material={materials.fordcoupe_chrome} />
          </group>
        </group>
        <group position={[-9.429, 51.89, -0.022]} rotation={[-Math.PI / 2, -0.01, 0]}>
          <mesh geometry={nodes.glass_fordcoupe_glass_0.geometry} material={materials.fordcoupe_glass} position={[-51.388, -2.226, -7.093]} />
        </group>
        <group position={[79.808, 23.372, -0.029]} rotation={[-Math.PI / 2, -0.01, 0]}>
          <group position={[-34.23, -34.068, 1.625]}>
            <mesh geometry={nodes.stoplights_fordcoupe_chrome_0.geometry} material={materials.fordcoupe_chrome} />
            <mesh geometry={nodes.stoplights_fordcoupe_headlights_0.geometry} material={materials.fordcoupe_headlights} />
            <mesh geometry={nodes.stoplights_fordcoupe_body_0.geometry} material={materials.fordcoupe_body} />
          </group>
        </group>
        <group position={[54.305, 15.066, 0.161]} rotation={[0, 0, -0.021]} scale={0.853}>
          <mesh geometry={nodes.suspension_rear_fordcoupe_bottom_0.geometry} material={materials.fordcoupe_bottom} position={[-88.87, -1.425, 17.854]} />
        </group>
        <group position={[6.146, 37.904, -22.911]} rotation={[-Math.PI / 2, 0.021, 0]}>
          <group position={[-5.078, -46.077, -0.184]}>
            <mesh geometry={nodes.door_right_fordcoupe_body_0.geometry} material={materials.fordcoupe_body} />
            <mesh geometry={nodes.door_right_fordcoupe_chrome_0.geometry} material={materials.fordcoupe_chrome} />
            <mesh geometry={nodes.door_right_fordcoupe_interior_0.geometry} material={materials.fordcoupe_interior} />
            <mesh geometry={nodes.door_right_fordcoupe_glass_0.geometry} material={materials.fordcoupe_glass} />
          </group>
        </group>
        <group position={[-64.863, 27.572, -0.026]} rotation={[-Math.PI / 2, -0.01, 0]}>
          <group position={[4.279, -2.23, 16.687]}>
            <mesh geometry={nodes.grill_fordcoupe_body_0.geometry} material={materials.fordcoupe_body} />
            <mesh geometry={nodes.grill_fordcoupe_chrome_0.geometry} material={materials.fordcoupe_chrome} />
            <mesh geometry={nodes.grill_fordcoupe_grill_0.geometry} material={materials.fordcoupe_grill} />
          </group>
        </group>
        <group position={[6.901, 39.118, -0.038]} rotation={[-Math.PI / 2, -0.01, 0]}>
          <group position={[-67.593, -2.243, 5.837]}>
            <mesh geometry={nodes.interior_fordcoupe_interior_0.geometry} material={materials.fordcoupe_interior} />
            <mesh geometry={nodes.interior_fordcoupe_bottom_0.geometry} material={materials.fordcoupe_bottom} />
          </group>
        </group>
        <group position={[5.128, 35.35, -0.037]} rotation={[-Math.PI / 2, -0.01, 0]}>
          <mesh geometry={nodes.engine_fordcoupe_bottom_0.geometry} material={materials.fordcoupe_bottom} position={[-65.783, -2.241, 9.587]} />
        </group>
        <group position={[59.012, 13.677, 28.938]} scale={[0.444, 0.444, 0.289]}>
          <group position={[0.034, 0.152, 12.407]}>
            <mesh geometry={nodes.wheel_02_rim_0.geometry} material={materials.material} />
            <mesh geometry={nodes.wheel_02_tire_0.geometry} material={materials.tire} />
          </group>
        </group>
        <group position={[59.012, 13.677, -28.898]} rotation={[Math.PI, 0, -Math.PI]} scale={[0.444, 0.444, 0.294]}>
          <group position={[0.034, 0.152, 12.407]}>
            <mesh geometry={nodes.wheel_03_rim_0.geometry} material={materials.material} />
            <mesh geometry={nodes.wheel_03_tire_0.geometry} material={materials.tire} />
          </group>
        </group>
        <group position={[-64.655, 33.912, 16.089]} rotation={[-Math.PI / 2, -0.021, 0]} scale={1.201}>
          <group position={[124.194, -17.655, -10.512]}>
            <mesh geometry={nodes.Object001_fordcoupe_body_0.geometry} material={materials.fordcoupe_body} />
            <mesh geometry={nodes.Object001_fordcoupe_headlights_0.geometry} material={materials.fordcoupe_headlights} />
            <mesh geometry={nodes.Object001_fordcoupe_chrome_0.geometry} material={materials.fordcoupe_chrome} />
            <mesh geometry={nodes.Object001_fordcoupe_glass_0.geometry} material={materials.fordcoupe_glass} />
          </group>
        </group>
        <group position={[92.78, 16.684, 0.133]} rotation={[-1.571, -1.561, -1.571]} scale={[0.642, 0.702, 0.702]}>
          <mesh geometry={nodes.bumper_rear_fordcoupe_chrome_0.geometry} material={materials.fordcoupe_chrome} position={[36.582, 0.214, 1.245]} />
        </group>
        <group position={[92.78, 16.684, 0.133]} rotation={[-1.571, -1.561, -1.571]} scale={[0.642, 0.702, 0.702]}>
          <mesh geometry={nodes.Object002_fordcoupe_chrome_0.geometry} material={materials.fordcoupe_chrome} position={[36.582, 0.214, 1.245]} />
        </group>
        <group position={[-54.03, 13.679, 24.024]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]}>
          <group position={[0, -5.55, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.448, 0.448, 0.292]}>
            <group position={[0.034, 0.152, 12.407]}>
              <mesh geometry={nodes.wheel_01_rim_0.geometry} material={materials.material} />
              <mesh geometry={nodes.wheel_01_tire_0.geometry} material={materials.tire} />
            </group>
          </group>
          <group position={[15.571, 23.471, -0.124]} rotation={[Math.PI / 2, 0, -0.021]} scale={0.853}>
            <mesh geometry={nodes.Object003_fordcoupe_bottom_0.geometry} material={materials.fordcoupe_bottom} position={[21.913, -2.76, 17.891]} />
          </group>
        </group>
        <group position={[-57.574, 13.679, -23.691]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]}>
          <group position={[15.571, -23.294, -0.124]} rotation={[Math.PI / 2, 0, -0.021]} scale={0.853}>
            <mesh geometry={nodes.Object004_fordcoupe_bottom_0.geometry} material={materials.fordcoupe_bottom} position={[21.913, -2.76, 17.891]} />
          </group>
          <group position={[0, 5.949, 0]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[0.448, 0.448, 0.297]}>
            <group position={[0.034, 0.152, 12.407]}>
              <mesh geometry={nodes.wheel_04_rim_0.geometry} material={materials.material} />
              <mesh geometry={nodes.wheel_04_tire_0.geometry} material={materials.tire} />
            </group>
          </group>
        </group>
      </group>
    )
  }
  
  const ford = () => {
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
           </div>
                     </>
   )
  }
  
  export default ford;
  