import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='text-center'>
        <h2 className='text-3xl font-bold'>We Hit a Brick Wall.</h2>
        <p className='text-lg'>The page you were looking for was not found.</p>
        <p>Go back to the <Link href='/tickets'>Tickets</Link>.</p>
    </main>
  )
}
