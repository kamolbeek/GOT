import './App.css'
import Hero from './components/Hero'
import Credit from './components/Credit'
import World from './components/World'
import Section1 from './components/Section1'
import Characters from './components/Characters'
import History from './components/History'
import LanguageSwitcher from './components/LanguageSwitcher'

function App() {
  return (
    <>
      <LanguageSwitcher />
      <Hero />
      <World />
      <Section1 />
      <Characters />
      <History />
      <Credit />
    </>
  )
}

export default App
