import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import BookingForm from '@/components/pages/BookingForm'

export default function BookingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <BookingForm />
      </main>
      <Footer />
    </div>
  )
}