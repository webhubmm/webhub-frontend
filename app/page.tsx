import About from '@/components/home/About/About'
import Banner from '@/components/home/Banner/Banner'
import Counter from '@/components/home/Counter/Counter'
import Expertise from '@/components/home/Expertise/Expertise'
import Faq from '@/components/home/Faqs/Faq'
import GetInTouch from '@/components/home/GetInTouch/GetInTouch'
import Learn from '@/components/home/Learn/Learn'
import Project from '@/components/home/Project/Project'

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Project />
      <Counter />
      <Faq />
      <Expertise />
      <Learn />
      <GetInTouch />
    </>
  )
}
