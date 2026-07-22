import { Member, Message } from "../types/chat";


export const members: Member[] = [
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

export const chats: Record<string, Message[]> = {
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