import Basic from "../sections/Basic";
import Banner from '../components/banner'
import About from '../components/about'
import Timeline from '../components/timeline'
import Skills from '../components/skills'


export default function Home() {
  return (
    <Basic>
      <Banner />
      <About />
      <Timeline />
      <Skills />
    </Basic>
  );
}
