"use client";

import { useState } from "react";

const members = [
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
    {
        name: "Team Chat",
        type: "group",
    },
];

const chats: any = {
    Amir: [
        "سلام تیم 👋",
        "پروژه چطور پیش رفت؟",
        "فایل جدید را بررسی کردی؟",
    ],

    Hossein: [
        "سلام حسین",
        "جلسه فردا چه ساعتی است؟",
    ],

    Somayeh: [
        "سلام 👋",
        "دارم روی Next.js کار می‌کنم 🚀",
    ],

    Mohammad: [
        "سلام محمد",
        "وضعیت تسک‌ها چطوره؟",
    ],

    "Team Chat": [
        "سلام همه 👋",
        "جلسه را شروع کنیم",
    ],
};


export default function ChatPage() {

    const [selectedMember, setSelectedMember] = useState("Team Chat");

    const messages = chats[selectedMember];

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

                    {messages.map((message: string, index: number) => (

                        <div
                            key={index}
                            className="bg-zinc-200 text-black p-3 rounded-lg w-fit"
                        >
                            {message}
                        </div>

                    ))}

                </div>



                {/* Input */}
                <div className="border-t p-4 flex gap-3">

                    <input
                        className="flex-1 border rounded-lg px-4"
                        placeholder="Write a message..."
                    />


                    <button className="bg-black text-white px-6 rounded-lg">
                        Send
                    </button>

                </div>


            </section>


        </main>
    );
}