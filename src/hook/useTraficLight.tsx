import { useEffect, useState } from 'react'


const colors = {
    red: "bg-red-500 animate-pulse",
    yellow: "bg-yellow-500 animate-pulse",
    green: "bg-green-500 animate-pulse",
    gray: "bg-gray-500",
};

type TrafficLightColor = keyof typeof colors;


export const useTraficLight = () => {


    const [light, setLight] = useState<TrafficLightColor>("red");
    const [countDown, setCountDown] = useState(5);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCountDown((prev) => {
                if (prev > 1) {
                    return prev - 1;
                }

                setLight((currentLight) => {
                    if (currentLight === "red") {
                        return "green";
                    }

                    if (currentLight === "green") {
                        return "yellow";
                    }

                    return "red";
                });

                return 5;
            });
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);



    return {
        //properties
        countDown,
        light,
        //colors,

        //computed - calculated values
        percentage: (countDown / 5) * 100,
        greenLight: light === 'green' ? colors.green : colors.gray,
        yellowLight: light === 'yellow' ? colors.yellow : colors.gray,
        redLight: light === 'red' ? colors.red : colors.gray,


    };
};
