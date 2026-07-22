import MessageBubble from "./MessageBubble";


type Message = {
    sender: string;
    text: string;
    time: string;
};


type Props = {
    messages: Message[];
};


export default function MessageList({ messages }: Props) {

    return (
        <div className="flex-1 p-6 space-y-4 overflow-y-auto">

            {messages.map((message, index) => (

                <MessageBubble
                    key={index}
                    sender={message.sender}
                    text={message.text}
                    time={message.time}
                />

            ))}

        </div>
    );
}