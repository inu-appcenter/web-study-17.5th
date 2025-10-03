import { useState } from 'react'
import './App.css'
import Header from './components/Header.tsx'
import List from './components/List.tsx'
import Editor from './components/Editor.tsx'
import Footer from './components/Footer.tsx'

function App() {
  return (
    <div className="p-4 mx-auto max-w-2xl border border-gray-300 rounded-xl my-12">
      <header className="mb-4">
        <Header />
      </header>

      <main>
        <Editor />
        <List />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
