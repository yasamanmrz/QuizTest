import type { QuizQuestion } from "../types/quiz";
import Option from "./Option";


interface QuestionCardProps {
    question: QuizQuestion,
    currentQuestion: number,
    totalQuestion: number,
    selectAnswer: number | null,
    onSelect: (index: number) => void,
    onNext: () => void,
    showExplanation: boolean,
    timeLeft: number
}


export default function QuestionsCard({ question, currentQuestion, totalQuestion, selectAnswer, onSelect, onNext, showExplanation, timeLeft }: QuestionCardProps) {
    return (
        <div className="w-full lg:w-1/3 flex items-center justify-center px-2">
            <div className="glass w-full max-w-[460px] rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0-8px-32px-rgba(0,0,0,0,0.4)] p-8">
              <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-white/70 text-sm font-medium">Question{currentQuestion + 1} / {totalQuestion}</p>
                <span className="rounded-full bg-red-500/20 px-4 py-2 text-red-300 font-bold text-sm sm:text-base">
                        ⏱ {timeLeft}s
                    </span>
              </div>
                <h2 className="mt-4 text-lg font-bold text-white leading-relaxed">{question.question}</h2>
                <div className="mt-4 flex flex-col gap-1">
                    {
                        question.options.map(
                            (option, index) => <Option key={index} option={option} index={index} selectAnswer={selectAnswer} correctAnswer={question.correctAnswer} showExplanation={showExplanation} onSelect={onSelect} />
                        )
                    }
                    {
                        showExplanation && (
                            <div className="mt-2 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl">
                                <h3 className="text-base sm:text-lg font-semibold text-white">Explanation : </h3>
                                <p className="mt-2 text-white/80 leading-4">{question.explanation}</p>
                            </div>
                        )
                    }
                </div>
                <div>
                    <button onClick={onNext} disabled={selectAnswer === null} className="mt-3 w-full rounded-2xl border border-white/30 bg-gradient-to-r from-white/15 to white/5 px-8 py-3 text-sm sm:text-base text-white backdrop-blur-xl shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40">Next</button>
                </div>
            </div>
        </div>
    )
}
