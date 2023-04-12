import './globals.css';
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import Clientonly from './components/Clientonly';
import RegisterModals from './components/modals/RegisterModals';
import TeasterProvider from './providers/TeasterProvider';
import LoginModal from './components/modals/LoginModal';

export const metadata = {
  title: 'Booking app',
  description: 'Online Booking app',
};

const font = Nunito({
  subsets: ['latin'],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Clientonly>
          <TeasterProvider />
          <LoginModal />
          <RegisterModals />
          <Navbar />
        </Clientonly>
        {children}
      </body>
    </html>
  );
}
