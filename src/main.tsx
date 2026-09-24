import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
// import { TrafficLightWithEffect } from './02-useEffect/TraficLigthWithEffect'
// import { TrafficLight } from './01-useState/TraficLigth'

import './index.css'
// import { TrafficLightWithHook } from './02-useEffect/TraficLigthWithHook'
import { Toaster } from 'sonner'



// import { PokemonPage } from './03-examples/PokemonPage'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { TasksApp } from './05-useReducer/TaskApp'
// import { ScrambleWords } from './05-useReducer/ScrambleWords'
// import { MemoHook } from './06-memos/MemoHook'
// import { MemoCounter } from './06-memos/MemoCounter'
// import { InstagromApp } from './07-useOptimistic/InstagromApp'
// import { ClientInformation } from './08-use-suspense/ClientInformation'
// import { getUserAction } from './api/get-user.action'
import { ProfessionalApp } from './09-useContext/ProfessionalApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    {/* {<InstagromApp />} */}
    {<ProfessionalApp />}
    {/* <Suspense fallback={<h1 className="text-white text-4xl">Loading...</h1>}>
      <ClientInformation getUser={getUserAction(1001)} />
    </Suspense> */}

  </StrictMode >,
)
