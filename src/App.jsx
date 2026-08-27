import './App.css'
import Hero from './components/Hero'
import Credit from './components/Credit'
import Section1 from './components/Section1'
import Characters from './components/Characters'
import LanguageSwitcher from './components/LanguageSwitcher'

function App() {
  return (
    <>
      <LanguageSwitcher />
      <Hero />
      <Credit />
      <Section1 />
      <Characters />
    </>
  )
}

export default App
