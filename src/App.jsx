import AdvancedGuide from './components/AdvancedGuide'
import BasicGuide from './components/BasicGuide'
import LandingPage from './components/LandingPage'
import LinkTest from './components/linkTest'
import TableOfContents from './components/TableOfContents'
import './App.scss'

function App() {
    return (
        <>
            <LandingPage /> 
            <TableOfContents />
            <BasicGuide />
            <AdvancedGuide />
            <LinkTest />
        </>
    )
}

export default App
