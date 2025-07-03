import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import Services from '@/components/pages/Services'

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Services />
      </main>
      <Footer />
    </div>
  )
}