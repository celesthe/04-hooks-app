export interface User {
    id: number;
    name: string
    role: string;
    location: string;
}

export const getUserAction = async (id: number) => {
    await new Promise((res) => setTimeout(res, 2000));

    return {
        id: id,
        name: "Celesthe Sazo",
        role: "Instructor de software",
        location: "otawa, canada"
    }
}