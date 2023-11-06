import dictionary from '@/dictionary/home'

export default function Home() {
  return (
    <div>
      <header className='prose'>
        <h1>{dictionary['page-heading']}</h1>
      </header>
      <nav className="flex justify-between">
        <a className="link">Home</a>
        <a className="link">Schedule</a>
        <a className="link">Travel</a>
        <a className="link">Registry</a>
        <a className="link">Gallery</a>
        <a className="link">Things To Do</a>
        <a className="link">FAQs</a>
      </nav>
      <main className='prose'>
        <div>
          <h2>{dictionary['brandon']}</h2>
          <h2>{dictionary['and']}</h2>
          <h2>{dictionary['elaine']}</h2>
        </div>

        <div>
          <h3>{dictionary['wedding-date']}</h3>
          <h4>{dictionary['wedding-city']}</h4>
        </div>

        <div>
          <h3>{dictionary['how-we-met-heading']}</h3>
          <p>{dictionary['how-we-met-description']}</p>
        </div>
        <div>
          <h3>{dictionary['the-proposal-heading']}</h3>
          <p>{dictionary['the-proposal-date']}</p>
          {dictionary['the-proposal-description'].map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </main>
      <footer className="prose">
        <h2>Bundi Technologies</h2>
      </footer>
    </div>
  )
}
