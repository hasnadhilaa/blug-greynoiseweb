import TeamCard from "../components/TeamCard";
import { mentors, members } from "../data/TeamsData";



export default function OurTeam() {
return (
<div className="relative min-h-screen px-6 lg:px-20 pt-32 pb-20">

<h1 className="text-4xl lg:text-5xl font-bold text-center mb-14">
Meet Our <span className="text-[#ff9418]">Team</span>
</h1>


{/* MENTORS */}
<section className="mb-20">
<h2 className="text-3xl font-semibold mb-8 text-center">Mentors</h2>


<div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
{mentors.map((m) => (
<TeamCard
key={m.id}
name={m.name}
role={m.role}
image={m.image}
description={m.description}
/>
))}
</div>
</section>


{/* MEMBERS */}
<section>
<h2 className="text-3xl font-semibold mb-8 text-center">Members</h2>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
{members.map((m) => (
<TeamCard
key={m.id}
name={m.name}
role={m.role}
image={m.image}
description={m.description}
/>
))}
</div>
</section>
</div>
);
}