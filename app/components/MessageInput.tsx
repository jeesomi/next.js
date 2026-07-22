type Props = {
    newMessage: string;
    setNewMessage: (value: string) => void;
    sendMessage: () => void;
};


export default function MessageInput({
    newMessage,
    setNewMessage,
    sendMessage,
}: Props) {

    return (
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
    );
}