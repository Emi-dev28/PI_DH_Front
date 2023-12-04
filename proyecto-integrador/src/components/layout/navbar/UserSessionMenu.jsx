import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { useAuthStore } from '@/context/authContext/hooks/useAuthStore';
import { useNavigate } from 'react-router-dom';

export const UserSessionMenu = ({ firstLetter = 'U', name = 'User' }) => {
  const { logoutSession } = useAuthStore();
  const navigate = useNavigate();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-lg border-none bg-slate-800 px-[14px] py-[4px] hover:opacity-90">
          <span className="text-xl text-white"> {firstLetter} </span>
          {/* <span className="text-white"> {name} </span> */}
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => navigate('user/edit')}
        >
          Editar
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => navigate('user/booking')}
        >
          Reservas
        </DropdownMenuItem>

        {/* <DropdownMenuSeparator /> */}

        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => navigate('user/favs')}
        >
          Favoritos
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => logoutSession()}
        >
          Cerrar sesión
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
