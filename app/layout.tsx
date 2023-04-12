import './globals.css';
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import Clientonly from './components/Clientonly';
import Modal from './components/modals/Modal';

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
          <Modal actionLabel="Submit" title="Hello People" isOpen />
          <Navbar />
        </Clientonly>
        {children}
      </body>
    </html>
  );
}
