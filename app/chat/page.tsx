"use client";
import MessageBubble from "../components/MessageBubble";
import { useState } from "react";

const members = [
    {
        name: "Team Chat",
        type: "group",
    },
    {
        name: "Amir",
        type: "user",
    },
    {
        name: "Hossein",
        type: "user",
    },
    {
        name: "Somayeh",
        type: "user",
    },
    {
        name: "Mohammad",
        type: "user",
    },
];

const chats: any = {
    Amir: [
        {
            sender: "Amir",
            text: "سلام تیم 👋",
            time: "10:00",
        },
        {
            sender: "Amir",
            text: "پروژه چطور پیش رفت؟",
            time: "10:05",
        },
        {
            sender: "Amir",
            text: "فایل جدید را بررسی کردی؟",
            time: "10:10",
        },
    ],

    Hossein: [
        {
            sender: "Hossein",
            text: "سلام 👋",
            time: "10:15",
        },
        {
            sender: "Hossein",
            text: "جلسه فردا چه ساعتی است؟",
            time: "10:20",
        },
        {
            sender: "Hossein",
            text: "من بخش خودم را آماده کردم.",
            time: "10:25",
        },
    ],

    Somayeh: [
        {
            sender: "Somayeh",
            text: "سلام 👋",
            time: "10:30",
        },
        {
            sender: "Somayeh",
            text: "دارم روی Next.js کار می‌کنم 🚀",
            time: "10:35",
        },
        {
            sender: "Somayeh",
            text: "بخش چت اولیه آماده شد.",
            time: "10:40",
        },
    ],

    Mohammad: [
        {
            sender: "Mohammad",
            text: "سلام 👋",
            time: "10:45",
        },
        {
            sender: "Mohammad",
            text: "وضعیت تسک‌ها چطوره؟",
            time: "10:50",
        },
        {
            sender: "Mohammad",
            text: "من گزارش را بررسی می‌کنم.",
            time: "10:55",
        },
    ],

    "Team Chat": [
        {
            sender: "Amir",
            text: "سلام همه 👋",
            time: "09:30",
        },
        {
            sender: "Somayeh",
            text: "جلسه را شروع کنیم 🚀",
            time: "09:32",
        },
        {
            sender: "Hossein",
            text: "من آماده‌ام.",
            time: "09:35",
        },
        {
            sender: "Mohammad",
            text: "من هم آنلاین هستم.",
            time: "09:36",
        },
    ],
};


export default function ChatPage() {

    const [selectedMember, setSelectedMember] = useState("Team Chat");
    const [allChats, setAllChats] = useState(chats);
    const [newMessage, setNewMessage] = useState("");
    const messages = allChats[selectedMember];


    const currentUser = "Somayeh";
    function sendMessage() {

        if (newMessage.trim() === "") return;

        setAllChats({
            ...allChats,
            [selectedMember]: [
                ...allChats[selectedMember],
                {
                    sender: currentUser,
                    text: newMessage,
                    time: new Date().toLocaleTimeString(),
                },
            ],
        });

        setNewMessage("");
    }
    return (
        <main className="h-screen flex">

            {/* Sidebar */}
            <aside className="w-1/4 border-r p-5 bg-zinc-900 text-white">

                <h2 className="text-xl font-bold mb-6">
                    Team Chat
                </h2>

                <div className="space-y-4">

                    {members.map((member) => (

                        <div
                            key={member.name}
                            onClick={() => setSelectedMember(member.name)}
                            className="p-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 cursor-pointer"
                        >
                            {member.type === "group" ? "👥" : "👤"} {member.name}
                        </div>

                    ))}

                </div>

            </aside>


            {/* Chat Window */}
            <section className="flex-1 flex flex-col">


                {/* Header */}
                <header className="border-b p-5">

                    <h2 className="font-bold">
                        {selectedMember}
                    </h2>

                </header>



                {/* Messages */}
                <div className="flex-1 p-6 space-y-4 overflow-y-auto">

                    {messages.map((message: any, index: number) => (

                        <MessageBubble
                            key={index}
                            sender={message.sender}
                            text={message.text}
                            time={message.time}
                        />
                    ))}

                </div>



                {/* Input */}
                <div className="border-t p-4 flex gap-3">

                    <input
                        className="flex-1 border rounded-lg px-4"
                        placeholder="Write a message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                sendMessage();
                            }
                        }}
                    />


                    <button
                        onClick={sendMessage}
                        className="bg-black text-white px-6 rounded-lg"
                    >
                        Send
                    </button>

                </div>


            </section>


        </main>
    );
}