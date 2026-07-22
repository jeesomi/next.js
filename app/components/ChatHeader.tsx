type Props = {
    selectedMember: string;
};

export default function ChatHeader({
    selectedMember,
}: Props) {
    return (
        <header className="border-b p-5">

            <h2 className="font-bold text-xl">
                {selectedMember}
            </h2>

        </header>
    );
}