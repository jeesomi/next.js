export type Message = {
    sender: string;
    text: string;
    time: string;
};


export type Member = {
    name: string;
    type: "user" | "group";
};