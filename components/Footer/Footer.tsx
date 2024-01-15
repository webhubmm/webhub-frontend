import Image from 'next/image'
import React from 'react'
import { BiLogoFacebook, BiLogoLinkedin, BiLogoYoutube, BiMailSend } from 'react-icons/bi'

const Footer = () => {
  return (
    <footer
    className="container mx-auto px-4">

        <div className="py-10 text-center md:text-left">
            <div className="grid-2 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="mx-auto md:mx-0">
                    <div className="flex gap-3 justify-start items-center mb-5">
                        <Image
                            src="/images/logo.png" 
                            width={40} 
                            height={70} 
                            alt="Webhub"
                            style={{
                                objectFit: 'cover', 
                            }}
                            priority />
                        <h6
                        className=" flex items-center euro-extd justify-center font-semibold uppercase text-white md:justify-start">
                            Webhub <br /> Service
                        </h6>
                    </div>
                    <div className="flex justify-start">
                        <a href="https://www.facebook.com/profile.php?id=100091761421970" className="mr-6 text-neutral-600 dark:text-neutral-200">
                            <BiLogoFacebook style={{ color: "#fff", fontSize: "20px" }} />
                        </a>
                        <a href="mailto:admin@webhubmm.com" className="mr-6 text-neutral-600 dark:text-neutral-200">
                            <BiMailSend style={{ color: "#fff", fontSize: "20px" }} />
                        </a>
                        <a href="https://www.youtube.com/@webhubmyanmar1213" className="mr-6 text-neutral-600 dark:text-neutral-200">
                            <BiLogoYoutube style={{ color: "#fff", fontSize: "20px" }} />
                        </a>
                        <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
                            <BiLogoLinkedin style={{ color: "#fff", fontSize: "20px" }} />
                        </a>
                    </div>
                </div>

                <div style={{ zIndex: 100 }}>
                    <h6 className="mb-4 text-gray-200 flex justify-center font-semibold uppercase md:justify-start">
                        Privacy 
                    </h6>
                    <a href='/privacy-policy' className="mb-4 text-gray-400 flex items-center justify-center md:justify-start">
                        Privacy & Policy
                    </a>
                    <a href='/terms' className="mb-4 text-gray-400 flex items-center justify-center md:justify-start">
                            Term & Conditions
                    </a>
                </div>

                <div style={{ zIndex: 100 }}>
                    <h6 className="mb-4 text-gray-200 flex justify-center font-semibold uppercase md:justify-start">
                        Useful Links 
                    </h6>
                    <a href='https://webhubmm.gitbook.io/webhubmm/' target='_blank' className="mb-4 text-gray-400 flex items-center justify-center md:justify-start">
                        Services
                    </a>
                    <a href='https://webhubmm.gitbook.io/webhubmm/our-services/web-app-service' target='_blank' className="mb-4 text-gray-400 flex items-center justify-center md:justify-start">
                        Web App Service
                    </a>
                    <a href='https://webhubmm.gitbook.io/webhubmm/our-services/mobile-app-service' target='_blank' className="mb-4 text-gray-400 flex items-center justify-center md:justify-start">
                        Mobile App Service
                    </a>
                    <a href='https://webhubmm.gitbook.io/webhubmm/our-services/ui-ux-service' target='_blank' className="mb-4 text-gray-400 flex items-center justify-center md:justify-start">
                        UI/UX Service
                    </a>
                    <a href='https://webhubmm.gitbook.io/webhubmm/our-services/cms-service' target='_blank' className="mb-4 text-gray-400 flex items-center justify-center md:justify-start">
                        Mobile App Service
                    </a>
                </div>

                <div style={{ zIndex: 100 }}>
                    <h6 className="mb-4 text-gray-200 flex justify-center font-semibold uppercase md:justify-start">
                        Contact Us
                    </h6>
                    <p className="mb-4 text-gray-400 flex items-center justify-center md:justify-start">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="mr-3 h-5 w-5">
                        <path
                        d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                        <path
                        d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </svg>
                            South Oakalapa , Mi-GaThi (20) St , <br /> Near 14/15 Lann Sone
                    </p>
                    <p className="mb-4 text-gray-400 flex items-center justify-center md:justify-start">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="mr-3 h-5 w-5">
                        <path
                        d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path
                        d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                        <a href="mailto:admin@webhubmm.com">admin@webhubmm.com</a>
                    </p>
                    <p className="mb-4 text-gray-400 flex items-center justify-center md:justify-start">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="mr-3 h-5 w-5">
                        <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                        clipRule="evenodd" />
                    </svg>
                    <a href="tel:+959793148428">+ 959-793-148-428</a>
                    </p>
                </div>
            </div>
        </div>

        <div className="p-6 text-center text-gray-500">
            <span>© 2023 Copyright </span>
            <a
            className="font-semibold text-neutral-600 dark:text-neutral-400"
            href="/"
            >Webhub Myanmar</a>
        </div>
    </footer>
  )
}

export default Footer