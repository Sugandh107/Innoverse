import React, { useState, useEffect } from 'react'

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2025-02-22T00:00:00').getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeBlocks = [
    { value: timeLeft.days, label: 'Days', color: 'text-accent-red' },
    { value: timeLeft.hours, label: 'Hours', color: 'text-accent-blue' },
    { value: timeLeft.minutes, label: 'Minutes', color: 'text-accent-orange' },
    { value: timeLeft.seconds, label: 'Seconds', color: 'text-accent-green' }
  ]

  return (
    <div className="relative z-10 flex justify-center items-center px-6 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {timeBlocks.map((block, index) => (
          <div key={index} className="text-center">
            <div className={`text-5xl md:text-6xl font-black ${block.color} mb-2`}>
              {String(block.value).padStart(2, '0')}
            </div>
            <div className="text-white/70 font-semibold text-sm md:text-base uppercase tracking-wider">
              {block.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CountdownTimer
