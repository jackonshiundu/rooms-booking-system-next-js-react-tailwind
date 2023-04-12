'use client';
import useLoginModal from '@/app/hooks/useLoginModal';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import { User } from '@prisma/client';
import { signOut } from 'next-auth/react';
import { useCallback, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';
interface userMenuProps {
  currentUser?: User | null;
}
const UserMenu = ({ currentUser }: userMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const RegisterModal = useRegisterModal();
  const LoginModal = useLoginModal();
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Africa Your Home
        </div>
        <div
          onClick={toggleOpen}
          className="p-1 md:p-4 md:py-1 md:py-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-md cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                  }}
                  label="My trips"
                />
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                  }}
                  label="My Favourites"
                />
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                  }}
                  label="My Reservation"
                />
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                  }}
                  label="My Proparties"
                />
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                  }}
                  label="Airbnb my home"
                />
                <hr />
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                    signOut();
                  }}
                  label="Logout"
                />
              </>
            ) : (
              <>
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                    LoginModal.onOpen();
                  }}
                  label="Login"
                />
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                    RegisterModal.onOpen();
                  }}
                  label="Sign up"
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
