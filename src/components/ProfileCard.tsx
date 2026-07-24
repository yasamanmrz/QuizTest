import { FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa"



export default function ProfileCard() {
  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 group">
        <img src="/background/yasi.jpg" alt="Yasaman" className="sm:h-[72px] sm:w-[72px] w-14 h-14 rounded-full object-cover border-2 border-violet-400 cursor-pointer transition duration-300 group-hover:scale-110 shadow-xl" />
        <div className="absolute bottom-0 right-16 sm:right-20 w-64 sm:w-72 rounded-3xl bg-black/20 backdrop-blur-xl border border-white/20 p-4 sm:p-6 opacity-0 scale-95 pointer-events-none transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto">
         <h2 className="text-xl sm:text-2xl font-bold text-white">Yasaman Mirzaei</h2>
         <p className="mt-1 text-sm text-white/70">Front-End Developer</p>
         <div className="mt-5 space-y-3">
            <a href="https://github.com/yasamanmrz" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white hover:text-violet-300 transition"><FaGithub size={20}/>GitHub</a>
            <a href="https://www.linkedin.com/in/yasaman-mirzaei-b9499537b" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white hover:text-blue-300 transition"><FaLinkedin size={20}/>Linkedin</a>
            <a href="https://www.instagram.com/yasaman_dev?igsh=MWZkMGNmazlidTV3cQ==" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white hover:text-pink-300 transition"><FaInstagram size={20}/>Instagram</a>
         </div>
        </div>
    </div>
  )
}
