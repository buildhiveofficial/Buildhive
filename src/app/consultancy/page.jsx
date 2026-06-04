import Consultancy from '@/components/consultancy/Consultancy'
import Contact from '@/components/consultancy/Contact'
import { GMServices } from '@/components/consultancy/Gmservices'
import Process from '@/components/consultancy/Process'
import Services from '@/components/consultancy/Services'
import React from 'react'

const page = () => {
  return (
    <div>
      <Consultancy/>
      <GMServices/>
      <Services/>
      <Process/>
      <Contact/>
    </div>
  )
}

export default page
