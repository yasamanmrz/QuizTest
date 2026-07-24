import { IoLogoJavascript } from "react-icons/io"
import CategoryCard from "./CategoryCard"
import { SiTypescript } from "react-icons/si"
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa"
import { RiNextjsFill } from "react-icons/ri"

interface Category {
  id: number,
  title: string,
  slug: string,
  icon:React.ReactNode
}

const categories: Category[] = [
  {
    id: 1,
    title: "JavaScript",
    slug: "javascript",
    icon:<IoLogoJavascript className="text-2xl sm:text-3xl text-white/70 group-hover:text-yellow-300 transition" />
  },
  {
    id: 2,
    title: "TypeScript",
    slug: "typescript",
    icon:<SiTypescript className="text-2xl sm:text-3xl text-white/70 group-hover:text-blue-400 transition" />
  },
  {
    id: 3,
    title: "React",
    slug: "react",
    icon:<FaReact className="text-2xl sm:text-3xl text-white/70 group-hover:text-cyan-400 transition" />
  },
  {
    id: 4,
    title: "Next.js",
    slug: "next",
    icon:<RiNextjsFill className="text-2xl sm:text-3xl text-white/70  transition" />
  },
  {
    id: 5,
    title: "HTML & CSS",
    slug: "html-css",
    icon:(
      <div className="flex gap-2">
        <FaHtml5 className="text-2xl sm:text-3xl text-white/70 group-hover:text-orange-500 transition" />
        <FaCss3Alt className="text-2xl sm:text-3xl text-white/70 group-hover:text-blue-500 transition" />
      </div>
    )
  }
]

export default function Categories() {
  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      {categories.map((category) => (<CategoryCard key={category.id} title={category.title} slug={category.slug} icon={category.icon}/>))}
    </div>
  )
}
