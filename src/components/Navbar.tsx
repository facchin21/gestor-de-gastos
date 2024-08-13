import { itemsNavbar, NavbarItem } from '../data/itemsNavbar'
import imageLogo from '../assets/images/logo.png'
import iconMenu from '../assets/images/menu.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';

interface NavbarProps {
    title: string;
}

export function Navbar({ title }: NavbarProps) {
    
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  
    const handleClick = () => {
      setIsMenuOpen(prevState => !prevState); 
    };
  
    return (
        <nav className="w-full bg-primary flex items-center justify-between px-12 py-3 relative z-20">
            {/* Contenedor para el logo */}
            <div className="flex items-center">
            <img
                src={imageLogo}
                alt={`Logo de la aplicación ${title}`}
                className="w-10/12"/>
            </div>
    
            {/* Botón para el menú */}
            <div className="flex items-center">
            <button onClick={handleClick} className="focus:outline-none">
                <img src={iconMenu} alt="Icono del menú" />
            </button>
            </div>
    
            {/* Menú de navegación */}
            <div
            className={`fixed top-0 right-0 h-full bg-secondary w-64 transition-transform transform ${
                isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            >
            <button
                onClick={handleClick}
                className="absolute top-4 right-4 text-primary text-3xl">
                &times;
            </button>
            <ul className="flex flex-col items-start px-4 pt-12">
                {itemsNavbar.map((item: NavbarItem) => (
                    <li key={item.id} className="w-full border-b border-primary py-2">
                        <Link
                            to={item.link}
                            className="w-full capitalize text-primary font-Inter text-lg font-extrabold">
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            </div>
      </nav>
    );
  }
 