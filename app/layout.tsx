import './globals.css';
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import Clientonly from './components/Clientonly';
import RegisterModals from './components/modals/RegisterModals';
import TeasterProvider from './providers/TeasterProvider';
import LoginModal from './components/modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';

export const metadata = {
  title: 'Booking app',
  description: 'Online Booking app',
};

const font = Nunito({
  subsets: ['latin'],
});
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <Clientonly>
          <TeasterProvider />
          <LoginModal />
          <RegisterModals />
          <Navbar currentUser={currentUser} />
        </Clientonly>
        {children}
      </body>
    </html>
  );
}
