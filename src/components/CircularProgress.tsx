interface CircularProgressProps {
    score: number,
    total: number
}



export default function CircularProgress({ score, total }: CircularProgressProps) {

    const percentage = (score / total) * 100
    const radius = 80
    const stroke = 12
    const normalizedRadius = radius - stroke / 2
    const circumference = normalizedRadius * 2 * Math.PI
    const strokDashOffset = circumference - (percentage / 100) * circumference


    return (
        <div className="relative flex justify-center items-center">
            <svg viewBox="0 0 180 180" className="h-36 w-36 sm:h-44 sm:w-44 -rotate-90">
                <circle stroke="rgba(255,255,255,0.15)" fill="transparent" strokeWidth={stroke} r={normalizedRadius} cx={90} cy={90} />
                <circle stroke="#E879F9" fill="transparent" strokeWidth={stroke} strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={strokDashOffset} r={normalizedRadius} cx={90} cy={90} style={{ transition: "stroke-dashoffset 1s ease" }} />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-3xl sm:text-5xl font-bold text-white">{score}</h2>
                <p className="text-sm sm:text-base text-violet-100">/{total}</p>
              </div>
            </div>
        </div>
    )
}
