import About from '@/components/about/About'
import Accordion from '@/components/about/Accordian'
import AboutBuildHive from '@/components/about/Buildhive'
import LocationSection from '@/components/about/Location'
import React from 'react'

const page = () => {
  return (
    <>
    <title>About Build Hive | Trusted Construction & Architecture Company</title>
<meta
  name="description"
  content="Learn about Build Hive, a leading construction and architecture company dedicated to delivering innovative designs, quality structures, and reliable building solutions."
/>
      <About/>
      <AboutBuildHive/>
      <LocationSection/>
      <Accordion/>
    </>
  )
}

export default page
