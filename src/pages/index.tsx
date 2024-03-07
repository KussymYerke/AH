import { Inter } from 'next/font/google'
import { InvitationPage } from '@/components/Invitation';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const hasStarted = false;

  if (!hasStarted) {
    return <InvitationPage />
  }
  return (
    <main>
      STARTED
    </main>
  )
}
