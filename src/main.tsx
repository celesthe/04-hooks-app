import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { TrafficLightWithEffect } from './02-useEffect/TraficLigthWithEffect'
// import { TrafficLight } from './01-useState/TraficLigth'

import './index.css'
// import { TrafficLightWithHook } from './02-useEffect/TraficLigthWithHook'




// import { PokemonPage } from './03-examples/PokemonPage'
import { FocusScreen } from './04-useRef/FocusScreen'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    <FocusScreen />
  </StrictMode>,
)
