//@ts-nocheck
//@ts-ignore
import HALO from 'vanta/dist/vanta.halo.min'
import { useRef, useEffect, useState } from 'react'
import * as THREE from "three";

(window).THREE = THREE;

export const Background = () => {
  const vantaRef = useRef<HTMLDivElement>(null)
  const [vanta, setVanta] = useState<any>(null)

  useEffect(() => {
    if (!vanta && vantaRef.current) {
      setVanta(
        VANTA.HALO({
          el: vantaRef.current,
          THREE,
  mouseControls: true,
  touchControls: true,
  gyroControls: true,
  minHeight: 100.00,
  minWidth: 100.00,
  baseColor: 0x6e6e72,
  backgroundColor: 0x0,
  amplitudeFactor: 0,
  xOffset: 0.2,
  yOffset: 0.2,
  size: 5
        })
      )
    }

    return () => {
      if (vanta) vanta.destroy()
    }
  }, [vanta])

  return <div ref={vantaRef} style={{ width: "100%", height: "100vh" }}/>
}