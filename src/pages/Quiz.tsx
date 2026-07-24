import { useParams } from "react-router-dom";
import { javascriptQuestions } from "../data/javascript";
import { typescriptQuestions } from "../data/typescript";
import { reactQuestions } from "../data/react";
import { nextQuestions } from "../data/next";
import { htmlCssQuestions } from "../data/htmlCss";
import { useEffect, useState } from "react";
import QuestionsCard from "../components/QuestionsCard";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"



export default function Quiz() {

    const { category } = useParams()

    const quizData = {
        javascript: javascriptQuestions,
        typescript: typescriptQuestions,
        react: reactQuestions,
        next: nextQuestions,
        "html-css": htmlCssQuestions
    }

    const questions = category && category in quizData ? quizData[category as keyof typeof quizData] : []

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selectAnswer, setSelectAnswer] = useState<number | null>(null)
    const [score, setScore] = useState(0)
    const [isFinished] = useState(false)
    const [showExplanation, setShowExplanation] = useState(false)


    if (questions.length === 0) {
        return <div>no question found</div>
    }

    const question = questions[currentQuestion]

    const navigate = useNavigate()

    const [timeLeft, settimeLeft]=useState(20)
    useEffect(()=>{
        if(showExplanation) return
        if(timeLeft === 0){
            handleNext()
            return
        }
        const timer = setTimeout(() => {
            settimeLeft((prev)=>prev-1)
        }, 1000);
        return ()=>clearTimeout(timer)
    },[timeLeft, showExplanation])

    const[userAnswers, setUserAnswer]=useState<number[]>([])

    const handleSelect = (index: number) => {
        setSelectAnswer(index)
        setShowExplanation(true)
        setUserAnswer((prev)=>{
            const answers = [...prev]
            answers[currentQuestion]=index
            return answers
        })
    }


    const handleNext = () => {
        const newScore = selectAnswer === question.correctAnswer ? score + 1 : score


        if (currentQuestion === questions.length - 1) {
            navigate("/result", {
                state: {
                    score: newScore,
                    totalQuestions: questions.length,
                    category,
                    questions,
                    userAnswers
                }
            })
            return
        }
        setScore(newScore)
        setShowExplanation(false)
        setCurrentQuestion((prev) => prev + 1)
        setSelectAnswer(null)
        settimeLeft(20)

    }

    if (isFinished) {
        return (
            <div>
                <div>
                    <h1>quiz finished</h1>
                    <p>your score</p>
                    <h2>{score} / {questions.length}</h2>
                </div>
            </div>
        )
    }

    const backgrounds = {
        javascript: "/background/Cont.png",
        typescript: "/background/Cloudlaptop.png",
        react: "/background/Green.png",
        next: "/background/mainphoto.png",
        "html-css": "/background/Whiteandbluelaptop.png",
    }

    const background = backgrounds[category as keyof typeof backgrounds]

    return (
        <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${background})` }}>
            <div className="min-h-screen bg-black/30 backdrop-blur-[2px] flex items-center justify-center py-8">
                <AnimatePresence mode="wait">
                    <motion.div className="w-full flex justify-center" key={currentQuestion} initial={{ opacity: 0, x: 0, scale: 0.95, }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{opacity:0, scale:0.95}} transition={{ duration: 0.3, ease: 'easeInOut' }}>
                        <QuestionsCard question={question} currentQuestion={currentQuestion} totalQuestion={questions.length} selectAnswer={selectAnswer} onSelect={handleSelect} onNext={handleNext} showExplanation={showExplanation} timeLeft={timeLeft} />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}
