type Member = {
    name: string;
    type: string;
};


type Props = {
    members: Member[];
    selectedMember: string;
    setSelectedMember: (name: string) => void;
};


export default function Sidebar({
    members,
    selectedMember,
    setSelectedMember,
}: Props) {

    return (
        <aside className="w-1/4 border-r p-5 bg-zinc-900 text-white">

            <h2 className="text-xl font-bold mb-6">
                Team Chat
            </h2>


            <div className="space-y-4">

                {members.map((member) => (

                    <div
                        key={member.name}
                        onClick={() => setSelectedMember(member.name)}
                        className={`p-3 rounded-lg cursor-pointer 
                        ${
                            selectedMember === member.name
                            ? "bg-zinc-700"
                            : "bg-zinc-800 hover:bg-zinc-700"
                        }`}
                    >

                        {member.type === "group" ? "👥" : "👤"} {member.name}

                    </div>

                ))}

            </div>

        </aside>
    );
}