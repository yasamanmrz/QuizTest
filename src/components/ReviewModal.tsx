import type { QuizQuestion } from "../types/quiz";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: QuizQuestion[];
  userAnswers: number[];
}

export default function ReviewModal({isOpen, onClose, questions, userAnswers,}: ReviewModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 bg-white/10 p-5 sm:p-8 backdrop-blur-3xl shadow-2xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="text-xl sm:text-3xl font-bold text-white">Review Answers</h2>
          <button onClick={onClose}className="rounded-full bg-white/10 px-3 sm:px-4 py-2 text-white transition hover:bg-white/20"> ✕</button>
        </div>
        <div className="sm:space-y-6 space-y-4">{questions.map((question, index) => {
            const isCorrect =userAnswers[index] === question.correctAnswer;
            return (
              <div key={index} className="rounded-2xl border border-white/20 bg-white/5 p-4 sm:p-6">
                <h3 className="text-base sm:text-xl font-bold text-white">{index + 1}. {question.question}</h3>
                <p className="mt-4 text-base leading-7 text-red-300">
                  <span className="font-semibold">Your Answer:</span>{" "}{question.options[userAnswers[index]] ?? "No Answer"}
                </p>
                <p className="mt-4 text-base leading-7 text-green-300">
                  <span className="font-semibold">Correct Answer:</span>{" "}{question.options[question.correctAnswer]}
                </p>
                <p className="mt-4 text-base leading-7 text-white/80">{question.explanation}</p>
                <div className="mt-3">
                  <span className={`rounded-full px-4 py-2 text-xs sm:text-sm font-bold ${ isCorrect? "bg-green-500/20 text-green-300": "bg-red-500/20 text-red-300"}`}>{isCorrect ? "✔ Correct" : "✖ Wrong"}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}