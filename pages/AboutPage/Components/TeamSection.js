const team = [
  { name: 'John Doe', role: 'Founder & CEO', img: '/john.jpg' },
  { name: 'Jane Smith', role: 'Lead Developer', img: '/jane.jpg' },
  { name: 'Alice Brown', role: 'Content Curator', img: '/alice.jpg' },
  { name: 'Bob Johnson', role: 'Community Manager', img: '/bob.jpg' }
]

export default function TeamSection() {
  return (
    <section className="bg-gray-100 text-black py-16 px-6 text-center">
      <h2 className="text-2xl font-bold mb-8">Meet the Team</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <div key={index} className="bg-white p-4 rounded shadow text-center">
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
