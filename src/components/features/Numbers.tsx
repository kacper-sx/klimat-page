"use client"
import { useEffect, useRef, useState } from "react"
import CountUp from "react-countup"

const stats = [
  { value: 10, label: "lat doświadczenia" },
  { value: 15, label: "klimatyzacji na rok" },
  { value: 30, label: "rekuperacji w roku" },
  { value: "∞", label: "zadowolonych klientów", noPlus: true },
]

const AnimatedNumbers = () => {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsInView(true)
    }, { threshold: 0.7 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="flex bg-primary marcellus-regular rounded-bl-2xl rounded-tr-2xl !text-accent py-6 px-6 flex-col gap-4 lg:gap-12 items-center md:flex-row justify-center shadow-2xl w-full">
      {stats.map(({ value, label, noPlus }, index) => (
        <div key={index} ref={index === 0 ? ref : null} className="flex flex-row lg:flex-col gap-2 items-center">
          <span className="font-extrabold text-2xl lg:text-4xl">
            {typeof value === "number" && isInView ? <CountUp duration={10} start={0} end={value} /> : value} {noPlus ? "" : "+"}
          </span>
          <span className="!text-white text-base lg:text-xl">{label}</span>
        </div>
      ))}
    </div>
  )
}

export default AnimatedNumbers
