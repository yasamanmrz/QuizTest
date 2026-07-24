import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Quiz from  "./pages/Quiz"
import Result from  "./pages/Result"
import ProfileCard from "./components/ProfileCard"


export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/quiz/:category" element={<Quiz />}/>
      <Route path="/result" element={<Result />}/>
    </Routes>
    <ProfileCard />
    </>
  )
}























