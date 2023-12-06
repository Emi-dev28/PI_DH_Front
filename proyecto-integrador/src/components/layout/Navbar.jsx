import logo from '/img/logo/logo-letters.svg';
import icon from '/img/logo/logo-favicon.svg';
import { Link } from 'react-router-dom';
import PrimaryButton from '../custom-ui/PrimaryButton';
import ShareButton from '../custom-ui/WebShare';
import { useWindowSize } from '@uidotdev/usehooks';
import { useAuthStore } from '@/context/authContext/hooks/useAuthStore';
import { UserSessionMenu } from './navbar/UserSessionMenu';


import Search from '../home/Search-3';

export const Navbar = () => {
  const { role, name } = useAuthStore();
  const size = useWindowSize();

  const firstLetter = name.substring(0, 1).toUpperCase();

  return (
    <nav
      className="sticky
      top-0 z-10 flex w-full items-center justify-between bg-navbar px-10 py-4 shadow-lg"
    >
      <div className="flex items-center">
        <Link to="/" reloadDocument>
          <img
            src={size.width > 600 ? logo : icon}
            alt="Logo"
            className="h mr-2 h-10 w-auto object-contain"
          />
        </Link>
      </div>

      {role === 'USER' || role === 'ADMIN' ? (
        <UserSessionMenu name={name} firstLetter={firstLetter} />
      ) : (
        <div className="hidden items-center gap-5 md:flex">
          {' '}
          {/* Oculta en dispositivos pequeños */}
          <Link to={'/auth/register'}>
            <PrimaryButton>Crear cuenta</PrimaryButton>
          </Link>
          <Link to={'/auth/login'}>
            <PrimaryButton>Iniciar sesión</PrimaryButton>
          </Link>
        </div>
      )}

     
    </nav>
  );
};
