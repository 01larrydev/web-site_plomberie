import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import Home from '@/components/pages/Home'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  )
}