import { useCounter } from '@/03-examples/useCounter';
import { useMemo } from 'react';

const heavyStuff = (iterationnUMBER: number) => {
    console.time('Heavy stuff started');

    for (let i = 0; i < iterationnUMBER; i++) {
        console.log('Ahi vamos...');
    }

    console.timeEnd('Heavy stuff ended');
    return `${iterationnUMBER} iteraciones realizadas`;

}

export const MemoCounter = () => {

    const { counter, increment } = useCounter(40_000);
    const myHeavyValue = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1>Memo - useMemo</h1>
            <hr />
            <h4>
                Counter: {counter}
            </h4>
            <p>{myHeavyValue}</p>

            <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={increment}
            >
                +1

            </button>
        </div>
    )
}
