import { Link } from 'react-router-dom'

export function Document() {
  return (
    <main className="flex-1 flex items-center justify-center text-rotion-400">
      Document
      <Link to="/">Access main</Link>
    </main>
  )
}
