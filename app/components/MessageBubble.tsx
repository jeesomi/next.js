type Props = {
    sender: string;
    text: string;
    time: string;
};

export default function MessageBubble({
    sender,
    text,
    time,
}: Props) {
    return (
        <div className="bg-zinc-200 text-black p-3 rounded-lg w-fit">
            <p className="font-semibold">
                {sender}
            </p>

            <p>{text}</p>

            <span className="text-xs text-zinc-500">
                {time}
            </span>
        </div>
    );
}