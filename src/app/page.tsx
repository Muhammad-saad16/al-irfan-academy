import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">
            Welcome to Al-Irfan Quran Academy
          </h1>
          <p className="text-xl mb-8 animate-fade-in-up">
            Embark on a journey of Quranic knowledge and spiritual growth
          </p>
          <Link
            href="/courses"
            className="bg-white text-green-500 py-2 px-6 rounded-full text-lg font-semibold hover:bg-green-100 transition-colors animate-pulse"
          >
            Explore Our Courses
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide comprehensive Quranic education and foster a deep understanding of Islamic teachings.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8">
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become a leading institution in Quranic studies, nurturing individuals to become beacons of Islamic
                knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Tajweed Basics", "Quran Memorization", "Tafsir Studies"].map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{course}</h3>
                <p className="text-gray-600 mb-4">
                  Learn the essentials of {course.toLowerCase()} with our expert instructors.
                </p>
                <Link href="/courses" className="text-green-500 font-semibold hover:text-green-600 transition-colors">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Ahmed",
                quote:
                  "Al-Irfan has transformed my understanding of the Quran. The teachers are knowledgeable and supportive.",
              },
              {
                name: "Fatima",
                quote:
                  "I've improved my Tajweed significantly thanks to the structured courses at Al-Irfan Quran Academy.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-green-50 rounded-lg p-6">
                <p className="text-gray-600 mb-4">&quot;{testimonial.quote}&quot;</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-green-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Al-Irfan?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Expert Teachers", description: "Learn from qualified and experienced Quran teachers" },
              { title: "Flexible Schedule", description: "Choose from various time slots that suit your availability" },
              {
                title: "Comprehensive Curriculum",
                description: "Well-structured courses covering all aspects of Quranic studies",
              },
            ].map((reason, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Quranic Journey?</h2>
          <p className="text-xl mb-8">
            Join Al-Irfan Quran Academy today and transform your relationship with the Quran.
          </p>
          <Link
            href="/contact"
            className="bg-green-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors"
          >
            Contact Us Now
          </Link>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Latest from Our Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "The Importance of Tajweed in Quran Recitation",
                excerpt: "Discover why proper pronunciation is crucial in Quranic recitation...",
              },
              {
                title: "Tips for Effective Quran Memorization",
                excerpt: "Learn proven techniques to help you memorize the Quran more efficiently...",
              },
              {
                title: "Understanding the Context: A Key to Quranic Interpretation",
                excerpt: "Explore the significance of historical and textual context in understanding the Quran...",
              },
            ].map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href="#" className="text-green-500 font-semibold hover:text-green-600 transition-colors">
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

