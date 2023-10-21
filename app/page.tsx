import About from '@/components/About/About'
import Banner from '@/components/Banner/Banner'
import Counter from '@/components/Counter/Counter'
import Expertise from '@/components/Expertise/Expertise'
import Faq from '@/components/Faqs/Faq'
import Project from '@/components/Project/Project'

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Project />
      <Counter />
      <Faq />
      <Expertise />
    </>
  )
}
