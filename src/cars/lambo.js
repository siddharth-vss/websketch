import React,{Suspense,
  // useRef,
 // useState
} from 'react'
import bg from './lambo.jpg'
import { Link  } from 'react-router-dom'
import { Canvas} from '@react-three/fiber'
import {
 // OrbitControls,
  useGLTF ,
  //  useAnimations,
   OrbitControls,
 } from '@react-three/drei'
import '../index.css'



export function Model(props) {
  const { nodes, materials } = useGLTF('/lambo/scene.gltf')
  return (
    <group {...props} dispose={null} scale={0.92}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
          <mesh geometry={nodes.Body_CRB_0.geometry} material={materials.material} />
          <mesh geometry={nodes.Body_CRB_0_1.geometry} material={materials.material} />
          <mesh geometry={nodes.Body_CARROSSERIE_0.geometry} material={materials.CARROSSERIE} />
          <mesh geometry={nodes.Body_Chrome_0.geometry} material={materials.Chrome} />
          <mesh geometry={nodes.Body_GLASS_0.geometry} material={materials.GLASS} />
          <mesh geometry={nodes.Body_MetalDark_0.geometry} material={materials.MetalDark} />
          <mesh geometry={nodes.Body_PRFD_LBACK_0.geometry} material={materials.PRFD_LBACK} />
          <mesh geometry={nodes.Body_GlassLights_0.geometry} material={materials.GlassLights} />
          <mesh geometry={nodes.Body_Material044_0.geometry} material={materials['Material.044']} />
          <mesh geometry={nodes.Body_BLEU_DETAILS_0.geometry} material={materials.BLEU_DETAILS} />
          <mesh geometry={nodes.Body_intTexButtonsGlossy_0.geometry} material={materials.intTexButtonsGlossy} />
          <mesh geometry={nodes.Body_MetalExhaustTextured_0.geometry} material={materials.MetalExhaustTextured} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
          <mesh geometry={nodes.DoorFrLeft_GLASS_0.geometry} material={materials.GLASS} />
          <mesh geometry={nodes.DoorFrLeft_CARBONE_0.geometry} material={materials.CARBONE} />
          <mesh geometry={nodes.DoorFrLeft_CARROSSERIE_0.geometry} material={materials.CARROSSERIE} />
          <mesh geometry={nodes.DoorFrLeft_BLEU_DETAILS_0.geometry} material={materials.BLEU_DETAILS} />
          <mesh geometry={nodes.DoorFrLeft_CRB_0.geometry} material={materials.material} />
          <mesh geometry={nodes.DoorFrLeft_MetalDark_0.geometry} material={materials.MetalDark} />
        </group>
        <group position={[-0.001, 109.829, -61.619]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
          <mesh geometry={nodes.EngineHood_MetalDark_0.geometry} material={materials.MetalDark} />
          <mesh geometry={nodes.EngineHood_PRFD_LBACK_0.geometry} material={materials.PRFD_LBACK} />
          <mesh geometry={nodes.EngineHood_CARBONE_0.geometry} material={materials.CARBONE} />
          <mesh geometry={nodes.EngineHood_CRB_0.geometry} material={materials.material} />
          <mesh geometry={nodes.EngineHood_BLEU_DETAILS_0.geometry} material={materials.BLEU_DETAILS} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
          <mesh geometry={nodes.Headlights_LightEmissiveWhite_0.geometry} material={materials.LightEmissiveWhite} />
          <mesh geometry={nodes.Headlights_CRB_0.geometry} material={materials.material} />
          <mesh geometry={nodes.Headlights_Chrome_0.geometry} material={materials.Chrome} />
          <mesh geometry={nodes.Headlights_GlassLights_0.geometry} material={materials.GlassLights} />
          <mesh geometry={nodes.Headlights_MetalExhaustTextured_0.geometry} material={materials.MetalExhaustTextured} />
          <mesh geometry={nodes.Headlights_HdLightsLens_0.geometry} material={materials.HdLightsLens} />
        </group>
        <group position={[0.2, 9.83, -1.2]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
          <mesh geometry={nodes.Taillights_Chrome_0.geometry} material={materials.Chrome} />
          <mesh geometry={nodes.Taillights_Aluminum_0.geometry} material={materials.Aluminum} />
          <mesh geometry={nodes.Taillights_CARBONE_0.geometry} material={materials.CARBONE} />
          <mesh geometry={nodes.Taillights_MetalDark_0.geometry} material={materials.MetalDark} />
          <mesh geometry={nodes.Taillights_GlassRedLights_0.geometry} material={materials.GlassRedLights} />
          <mesh geometry={nodes.Taillights_GlassLights_0.geometry} material={materials.GlassLights} />
          <mesh geometry={nodes.Taillights_GLS_MR_0.geometry} material={materials.GLS_MR} />
          <mesh geometry={nodes.Taillights_GlassOrangeLights_0.geometry} material={materials.GlassOrangeLights} />
          <mesh geometry={nodes.Taillights_GlassWhite_0.geometry} material={materials.GlassWhite} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
          <mesh geometry={nodes.Body002_CARROSSERIE_0.geometry} material={materials.CARROSSERIE} />
          <mesh geometry={nodes.Body002_CRB_0.geometry} material={materials.material} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={[105.997, 100, 100]}>
          <mesh geometry={nodes.Front_Driver_Side_Door001_CARROSSERIE_0.geometry} material={materials.CARROSSERIE} />
          <mesh geometry={nodes.Front_Driver_Side_Door001_Material004_0.geometry} material={materials['Material.004']} />
          <mesh geometry={nodes.Front_Driver_Side_Door001_CRB_0.geometry} material={materials.material} />
        </group>
        <group position={[0, 47.677, -2.131]} scale={100}>
          <mesh geometry={nodes.Bodyshell001_CRB_0.geometry} material={materials.material} />
          <mesh geometry={nodes.Bodyshell001_BLEU_DETAILS_0.geometry} material={materials.BLEU_DETAILS} />
        </group>
        <group rotation={[Math.PI, 0, -Math.PI]} scale={100}>
          <mesh geometry={nodes.Coloured001_CRB_0.geometry} material={materials.material} />
          <mesh geometry={nodes.Coloured001_BLEU_DETAILS_0.geometry} material={materials.BLEU_DETAILS} />
          <mesh geometry={nodes.Coloured001_Black_Texture002_0.geometry} material={materials['Black_Texture.002']} />
        </group>
        <group position={[0, 215.765, 0]} scale={100}>
          <group position={[-0.001, -1.499, 1.626]} scale={0.951}>
            <mesh geometry={nodes.Coloured004_CRB_0.geometry} material={materials.material} />
            <mesh geometry={nodes.Coloured004_BLEU_DETAILS_0.geometry} material={materials.BLEU_DETAILS} />
          </group>
        </group>
        <group position={[0, 144.813, 0]} scale={100}>
          <mesh geometry={nodes.Bodyshell002_BLEU_DETAILS_0.geometry} material={materials.BLEU_DETAILS} />
          <mesh geometry={nodes.Bodyshell002_CRB_0.geometry} material={materials.material} />
        </group>
        <group position={[0, 47.677, 0]} scale={100}>
          <mesh geometry={nodes.Bodyshell003_Grille_2_Texture_0.geometry} material={materials.Grille_2_Texture} />
          <mesh geometry={nodes.Bodyshell003_Textured_2_Texture_0.geometry} material={materials.Textured_2_Texture} />
        </group>
        <group position={[0, 1.189, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={918.591}>
          <mesh geometry={nodes.Circle002_Material065_0.geometry} material={materials['Material.065']} />
          <mesh geometry={nodes.Circle002_CRBN_JANTE_0.geometry} material={materials.CRBN_JANTE} />
          <mesh geometry={nodes.Circle002_Material012_0.geometry} material={materials['Material.012']} />
          <mesh geometry={nodes.Circle002_Material014_0.geometry} material={materials['Material.014']} />
          <mesh geometry={nodes.Circle002_pneu005_0.geometry} material={materials['pneu.005']} />
          <mesh geometry={nodes.Circle002_pneu005_0_1.geometry} material={materials['pneu.005']} />
          <mesh geometry={nodes.Circle002_pneu005_0_2.geometry} material={materials['pneu.005']} />
          <mesh geometry={nodes.Circle002_pneu005_0_3.geometry} material={materials['pneu.005']} />
          <mesh geometry={nodes.Circle002_visse002_0.geometry} material={materials['visse.002']} />
          <mesh geometry={nodes.Circle002_plaquette_de_frein002_0.geometry} material={materials['plaquette_de_frein.002']} />
          <mesh geometry={nodes.Circle002_Material013_0.geometry} material={materials['Material.013']} />
          <mesh geometry={nodes.Circle002_PZEO_0.geometry} material={materials.PZEO} />
          <mesh geometry={nodes.Circle002_CRB_0.geometry} material={materials.material} />
          <mesh geometry={nodes.Circle002_Rim_Texture_0.geometry} material={materials.Rim_Texture} />
          <mesh geometry={nodes.Circle002_BLEU_DETAILS_0.geometry} material={materials.BLEU_DETAILS} />
          <mesh geometry={nodes.Circle002_BLACK_0.geometry} material={materials.BLACK} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={[105.997, 100, 100]}>
          <mesh geometry={nodes.Front_Driver_Side_Door002_BLEU_DETAILS_0.geometry} material={materials.BLEU_DETAILS} />
          <mesh geometry={nodes.Front_Driver_Side_Door002_CRB_0.geometry} material={materials.material} />
          <mesh geometry={nodes.Front_Driver_Side_Door002_Material069_0.geometry} material={materials['Material.069']} />
        </group>
        <mesh geometry={nodes.Undercarriage_PRFD_LBACK_0.geometry} material={materials.PRFD_LBACK} position={[-0.006, 10.316, -0.65]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <mesh geometry={nodes.Body001_CARBONE_0.geometry} material={materials.CARBONE} rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <mesh geometry={nodes.Trunk001_CARROSSERIE_0.geometry} material={materials.CARROSSERIE} position={[-0.001, 75.545, 132.385]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <mesh geometry={nodes.Body003_Material068_0.geometry} material={materials['Material.068']} rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <mesh geometry={nodes.Plane_Material005_0.geometry} material={materials['Material.005']} position={[-0.134, 112.024, -159.408]} rotation={[-Math.PI / 2, 0, 0]} scale={[103.555, 100, 100]} />
        <mesh geometry={nodes.Bodyshell004_Black_Texture001_0.geometry} material={materials['Black_Texture.001']} position={[0, 47.677, 0]} scale={100} />
        <mesh geometry={nodes.EngineHood001_GLASS_0.geometry} material={materials.GLASS} position={[-0.001, 109.829, -61.619]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <mesh geometry={nodes.Body004_Material006_0.geometry} material={materials['Material.006']} rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
        <mesh geometry={nodes.Circle001_BLEU_DETAILS_0.geometry} material={materials.BLEU_DETAILS} position={[0, 56.658, 256.138]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={918.591} />
        <mesh geometry={nodes.Taillights001_Material006_0.geometry} material={materials['Material.006']} position={[0.2, 9.83, -1.2]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
      </group>
    </group>
  )
}

const Lambo = () => {
 return (<>
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

export default Lambo;
