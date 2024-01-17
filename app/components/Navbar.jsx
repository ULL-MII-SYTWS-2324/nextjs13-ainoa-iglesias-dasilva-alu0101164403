import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <h1>Dojo Helpdesk</h1>
      <div style={{display: 'flex', gap: '20px'}}>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
        <Link href="/tickets/otro">Otro</Link>
      </div>
    </nav>
  )
}