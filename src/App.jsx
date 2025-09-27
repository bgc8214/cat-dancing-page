import './App.css'
import './styles/global.css'
import DancingCat from './components/DancingCat'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🐱 고양이 댄싱 페이지 🐱</h1>
        <p>귀여운 고양이의 춤을 감상해보세요!</p>
      </header>
      <main className="app-main">
        <DancingCat />
      </main>
    </div>
  )
}

export default App
