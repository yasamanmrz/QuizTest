
interface OptionProps{
    option:string,
    index:number,
    selectAnswer:number | null,
    correctAnswer:number,
    showExplanation:boolean,
    onSelect:(index:number) => void
}


export default function Option({option, index,selectAnswer, correctAnswer, showExplanation, onSelect}:OptionProps) {
  return (
    <button disabled={showExplanation} onClick={()=>onSelect(index)} className={`w-full rounded-2xl border p-4 sm:p-5 text-left text-base sm:text-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-violet-400 ${showExplanation ? index === correctAnswer ? 'bg-green-500/30 border-green-400' : index === selectAnswer? 'bg-red-500/30 border-red-400' : 'bg-white/10 border-white/10':selectAnswer === index? 'bg-indigo-500/30 border-indigo-400 scale-[1.02]' : 'bg-white/10 border-white/10 hover:bg-white/20 hover:scale-[1.01] activ:scale-95'}`}>
        <span className='mr-3 inline-block w-6 text-center font-bold'>{String.fromCharCode(65+index)}.</span>
        {option}
    </button>
  )
}
