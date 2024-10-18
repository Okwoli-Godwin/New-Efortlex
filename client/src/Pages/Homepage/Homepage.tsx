import Hero from "./Hero"
import Connect from "./Connect"
import Why from "./Why"
import Featured from "./Featured"
import Testimonial from "./Testimonial"
import Question from "./Question"
import Join from "./Join"

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Connect />
      <Why />
      <Featured />
      <Question />
      <Testimonial />
      <Join />
    </div>
  )
}

export default Homepage