import { useCallback, useState } from "react";
import { MySubtitle } from "./ui/MySubtitle";
import { MyTitle } from "./ui/MyTitle"

export const MemoHook = () => {

    const [title, setTitle] = useState('Hola');
    const [subtitle, setSubtitle] = useState('Mundo');

    const callMyAPI = useCallback(() => {
        console.log('llamando a API', subtitle);
    }, [subtitle]);

    return (
        <div className="bg-gradient flex flex-col gap-4">

            <h1 className="text-2xl font-bold text-white">Memo App</h1>

            <MyTitle title={title} />
            <MySubtitle subtitle={subtitle} callMyAPI={callMyAPI} />



            <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => setTitle('Hello ' + new Date().getTime())}
            >
                cambiar titulo
            </button>

            <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => setSubtitle('World ')}
            >
                cambiar subtitulo
            </button>

        </div>
    )
}
