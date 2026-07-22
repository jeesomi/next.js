"use client";
import { useState } from "react";
import MessageBubble from "../components/MessageBubble";
import ChatHeader from "../components/ChatHeader";
import MessageInput from "../components/MessageInput";
import Sidebar from "../components/Sidebar";
import MessageList from "../components/MessageList";
import { members, chats } from "../data/chatData";
import { Message } from "../types/chat";



export default function ChatPage() {

    const [selectedMember, setSelectedMember] = useState("Team Chat");
    const [allChats, setAllChats] = useState<Record<string, Message[]>>(chats);
    const [newMessage, setNewMessage] = useState("");
    const messages: Message[] = allChats[selectedMember];


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
            <Sidebar
                members={members}
                selectedMember={selectedMember}
                setSelectedMember={setSelectedMember}
            />

            {/* Chat Window */}
            <section className="flex-1 flex flex-col">


                {/* Header */}
                <ChatHeader selectedMember={selectedMember} />



                {/* Messages */}
                <MessageList messages={messages} />



                {/* Input */}
                <MessageInput
                    newMessage={newMessage}
                    setNewMessage={setNewMessage}
                    sendMessage={sendMessage}
                />


            </section>


        </main>
    );
}