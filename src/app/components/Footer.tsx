const Footer = () => {
    return (
      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Al-Irfan Quran Academy</h3>
              <p className="text-sm">Empowering minds through Quranic education</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <ul className="text-sm">
                <li>
                  <a href="/" className="hover:text-green-200 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-green-200 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-green-200 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/courses" className="hover:text-green-200 transition-colors">
                    Courses
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
              <p className="text-sm">Karachi, Pakistan</p>
              <p className="text-sm">Email: ibaba9776@gmail.com</p>
              <p className="text-sm">Phone: +92 342 8113997</p>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            &copy; {new Date().getFullYear()} Al-Irfan Quran Academy. All rights reserved.
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  
  