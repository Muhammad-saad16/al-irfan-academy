import Image from "next/image"

export default function About() {
  return (
    <div className="min-h-screen">
      {/* About Hero Section */}
      <section className="bg-green-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">About Al-Irfan Quran Academy</h1>
          <p className="text-xl mb-8 animate-fade-in-up">Dedicated to spreading the light of Quranic knowledge</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <Image src="/placeholder.svg" alt="Our Story" width={500} height={300} className="rounded-lg shadow-md" />
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Al-Irfan Quran Academy was founded in 2010 with a vision to make Quranic education accessible to
                everyone. Our journey began with a small group of dedicated teachers and has now grown into a thriving
                community of learners from all around the world.
              </p>
              <p className="text-gray-600">
                We believe in the power of knowledge and the transformative impact of understanding the Quran. Our
                mission is to nurture a deep connection with the Quran through comprehensive education and spiritual
                guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sheikh Abdullah", role: "Founder & Lead Instructor", image: "/placeholder.svg" },
              { name: "Ustadha Aisha", role: "Tajweed Specialist", image: "/placeholder.svg" },
              { name: "Dr. Muhammad", role: "Tafsir Expert", image: "/placeholder.svg" },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Personalized Learning</h3>
              <p className="text-gray-600">
                We understand that every student has unique needs and learning styles. Our instructors work closely with
                each student to create a personalized learning plan that ensures steady progress and deep understanding.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Interactive Sessions</h3>
              <p className="text-gray-600">
                Our classes are designed to be engaging and interactive. We use modern teaching methods and technology
                to make learning the Quran an enjoyable and enriching experience for all our students.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

