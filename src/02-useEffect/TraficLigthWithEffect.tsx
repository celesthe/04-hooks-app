import { useEffect, useState } from "react";

export const TrafficLightWithEffect = () => {
    const colors = {
        red: "bg-red-500 animate-pulse",
        yellow: "bg-yellow-500 animate-pulse",
        green: "bg-green-500 animate-pulse",
    };

    type TrafficLightColor = keyof typeof colors;

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

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-8">

                <h1 className="text-white text-2xl">
                    Semaforo useEffect
                </h1>

                <h2 className="text-white text-xl">
                    CountDown {countDown}
                </h2>

                <div className="w-64 bg-gray-700 rounded-full h-2">
                    <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                        style={{
                            width: `${(countDown / 5) * 100}%`,
                        }}
                    />
                </div>

                <div
                    className={`w-32 h-32 ${light === "red"
                            ? colors[light]
                            : "bg-gray-500"
                        } rounded-full`}
                />

                <div
                    className={`w-32 h-32 ${light === "yellow"
                            ? colors[light]
                            : "bg-gray-500"
                        } rounded-full`}
                />

                <div
                    className={`w-32 h-32 ${light === "green"
                            ? colors[light]
                            : "bg-gray-500"
                        } rounded-full`}
                />

            </div>
        </div>
    );
};