import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <div className="relative h-12 w-12 mr-2">
                <Image
                  src="/logo.png?height=48&width=48"
                  alt="RCCG Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-medium font-serif">Upper Room Parish</span>
            </div>
            <p className="text-amber-100 mb-6">
              A community of faith, hope, and love serving God and our neighbors since 1998.
            </p>
            <div className="flex space-x-4">
              <a target = '_blank' href="https://facebook.com/rccg.upperroomparish.9" className="text-amber-100 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a target = '_blank' href="#" className="text-amber-100 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              </a>
              <a target = '_blank' href="https://www.instagram.com/rccgtheupperroom?igsh=MWxuaDVoemtvMTNqag== " className="text-amber-100 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a target = '_blank' href="#" className="text-amber-100 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a target = '_blank' className="text-amber-100 hover:text-white" href="http://tiktok.com/@rccgupr_yaya">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
              </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-amber-100 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-amber-100 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/sermons" className="text-amber-100 hover:text-white">
                  Sermons
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-amber-100 hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-amber-100 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Ministries</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-amber-100 hover:text-white">
                  Children's Ministry
                </Link>
              </li>
              <li>
                <Link href="#" className="text-amber-100 hover:text-white">
                  Teen's Ministry
                </Link>
              </li>
              <li>
                <Link href="#" className="text-amber-100 hover:text-white">
                  Youth Ministry
                </Link>
              </li>
              <li>
                <Link href="#" className="text-amber-100 hover:text-white">
                  Treasured Sisters
                </Link>
              </li>
              <li>
                <Link href="#" className="text-amber-100 hover:text-white">
                  Excellent Men
                </Link>
              </li>
              <li>
                <Link href="#" className="text-amber-100 hover:text-white">
                  Worship Ministry
                </Link>
              </li>
              <li>
                <Link href="#" className="text-amber-100 hover:text-white">
                  Outreach & Missions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <address className="not-italic text-amber-100 space-y-2">
              <p>2 Tunji Olusanya</p>
              <p>Oja Bustop, Yakoyo</p>
              <p>Ojodu, Lagos</p>
              <p>Nigeria</p>
              <p className="mt-4">+2348088789556</p>
              <p>info@rccgupperroom.com.ng</p>
            </address>
          </div>
        </div>
        <div className="border-t border-amber-800 mt-12 pt-8 text-center text-amber-100">
          <p>&copy; {new Date().getFullYear()} RCCG Upper Room Parish. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
