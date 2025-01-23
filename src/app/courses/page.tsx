import Link from "next/link"

export default function Courses() {
  const courses = [
    { title: "Tajweed Basics", description: "Learn the fundamental rules of Quranic recitation", duration: "8 weeks" },
    { title: "Quran Memorization", description: "Structured program for memorizing the Quran", duration: "Ongoing" },
    { title: "Tafsir Studies", description: "In-depth exploration of Quranic interpretation", duration: "12 weeks" },
    {
      title: "Arabic for Quran",
      description: "Learn Arabic language specifically for understanding the Quran",
      duration: "16 weeks",
    },
    {
      title: "Islamic Studies",
      description: "Comprehensive course on Islamic principles and practices",
      duration: "24 weeks",
    },
    {
      title: "Hadith Sciences",
      description: "Study the sayings and actions of Prophet Muhammad (PBUH)",
      duration: "12 weeks",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Courses Hero Section */}
      <section className="bg-green-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">Our Courses</h1>
          <p className="text-xl mb-8 animate-fade-in-up">Explore our comprehensive Quranic education programs</p>
        </div>
      </section>

      {/* Course Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <p className="text-sm text-gray-500 mb-4">Duration: {course.duration}</p>
                <Link href="#" className="text-green-500 font-semibold hover:text-green-600 transition-colors">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Quranic Journey?</h2>
          <p className="text-xl mb-8">
            Enroll in one of our courses today and transform your understanding of the Quran.
          </p>
          <Link
            href="/contact"
            className="bg-green-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors"
          >
            Enroll Now
          </Link>
        </div>
      </section>
    </div>
  )
}

