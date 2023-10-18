import About from '@/components/About/About'
import Banner from '@/components/Banner/Banner'
import Counter from '@/components/Counter/Counter'
import Project from '@/components/Project/Project'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Project />
      <Counter />
    </>
  )
}
