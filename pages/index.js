import Basic from "../sections/Basic";
import Banner from '../components/banner'
import About from '../components/about'
import Timeline from '../components/timeline'
import Skills from '../components/skills'
import Services from '../components/services'

export default function Home() {
  return (
    <Basic>
      <Banner />
      <About />
      <Timeline />
      <Skills />
      <Services />
    </Basic>
  );
}
