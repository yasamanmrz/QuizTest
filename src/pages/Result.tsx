import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import CircularProgress from "../components/CircularProgress";
import ReviewModal from "../components/ReviewModal";

export default function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/background/purple.png')" }}>
        <h1 className="text-white text-3xl">No Result Found</h1>
      </div>
    );
  }

  const {
    score,
    totalQuestions,
    category,
    questions,
    userAnswers,
  } = state;

  const percentage = Math.round((score / totalQuestions) * 100);

  const [showReview, setShowReview] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-8" style={{ backgroundImage: "url('/background/purple.png')" }}>
      <div className="w-full max-w-[550px] rounded-[32px] border border-violet-300/30 bg-slate-900/25 p-6 sm:p-8 lg:p-10 text-center backdrop-blur-3xl shadow-2xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white"> 🎉 Congratulations</h1>
        <p className="mt-3 text-base sm:text-lg text-white/80">You have completed the quiz</p>
        <p className="mt-8 text-lg sm:text-xl font-semibold tracking-widest text-violet-100">{category.toUpperCase()}</p>
        <div className="mt-10">
          <CircularProgress score={score} total={totalQuestions}/>
        </div>
        <p className="mt-8 text-2xl sm:text-3xl font-bold text-fuchsia-200">{percentage}% Correct</p>
        <p className="mt-3 text-lg text-white/90">{percentage >= 90? "Outstanding! 🚀": percentage >= 70? "Great Job! 🔥": percentage >= 50? "Keep Practicing 💪": "Don't Give Up ❤️"}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button onClick={() => navigate("/")} className="flex-1 w-full rounded-2xl border border-white/30 bg-white/10 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/20 hover:scale-105"> Home</button>
          <button onClick={() => navigate(`/quiz/${category}`)} className="flex-1 w-full rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 py-4 font-semibold text-white transition hover:scale-105">Retry</button>
          <button onClick={() => setShowReview(true)} className="flex-1 w-full rounded-2xl border border-white/30 bg-white/10 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/20 hover:scale-105">Review</button>
        </div>
      </div>
      <ReviewModal isOpen={showReview} onClose={() => setShowReview(false)} questions={questions} userAnswers={userAnswers}/>
    </div>
  );
}