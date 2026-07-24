
import { Link } from "react-router-dom"

interface CategoryCardProps{
  title:string,
  slug:string,
  icon:React.ReactNode
}

export default function CategoryCard({title, slug, icon}:CategoryCardProps) {
  return (
    <Link to={`/quiz/${slug}`} className="group flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-4 sm:px-6 py-4 sm:py-5 backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:bg-white/20 hover:shadow-2xl">
      <span className="text-base sm:text-lg font-semibold text-white">{title}</span>
      {icon}
    </Link>
  )
}
