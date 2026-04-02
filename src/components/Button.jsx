import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Button = ({link,text}) => {
  return (
    <Link href={link}>
    <button
  className="relative bg-theme text-white font-medium text-[17px] px-7 py-6 pl-5 h-[2.8em] rounded-[0.9em] flex items-center overflow-hidden cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_#f14e11] group"
>
  <div
    className="absolute left-[0.3em] bg-white h-[2.2em] w-[2.2em] rounded-[0.7em] flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.6em)] shadow-[0.1em_0.1em_0.6em_0.2em_#f14e11] active:scale-95"
  >
    <ArrowRight className='text-theme'/>
  </div>
  <span className="ml-9">{text}</span>
</button>
    </Link>
  )
}

export default Button
