import { Button, Navbar, TextInput } from 'flowbite-react';
import React from 'react';
import { useLocation } from 'react-router-dom';
import {FaMoon} from 'react-icons/fa';
import { HashLink as RouterLink } from 'react-router-hash-link';
import logoImage from '../assets/logo.png';

export default function Header() {
  
    const path = useLocation().pathname + useLocation().hash;

  return (
    <Navbar className='border-b-2 bg-slate-800'>
        <RouterLink smooth to="/" className='self-center'>
            <img
                src={logoImage}
                alt="Full Scope Dev"
                style={{width: '250px', height: '50px'}}
            />
        </RouterLink>

        <div className='flex gap-2 md:order-2'>
            <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
                <FaMoon/>
            </Button>
            <Navbar.Toggle/>
        </div>
        <Navbar.Collapse>
            <Navbar.Link active={path === "/"} as={'div'} className='bg-transparent border-b-0'>
                <RouterLink smooth to="/" >
                    <span className={path === "/" ? 'text-orange-400' : 'text-white'}>Home</span>
                </RouterLink>
            </Navbar.Link>
            <Navbar.Link active={path === "/#aboutus"} as={'div'} className='bg-transparent border-b-0'>
                <RouterLink smooth to="/#aboutus">
                    <span className={path === "/#aboutus" ? 'text-orange-400' : 'text-white'}>About Us</span>
                </RouterLink>
            </Navbar.Link>
            <Navbar.Link active={path === "/#services"} as={'div'} className='bg-transparent border-b-0'>
                <RouterLink smooth to="/#services">
                    <span className={path === "/#services" ? 'text-orange-400' : 'text-white'}>Services</span>
                </RouterLink>
            </Navbar.Link>
            <Navbar.Link active={path === "/#projects"} as={'div'} className='bg-transparent border-b-0'>
                <RouterLink smooth to="/#projects">
                <span className={path === "/#projects" ? 'text-orange-400' : 'text-white'}>Projects</span>
                </RouterLink>
            </Navbar.Link>
            <Navbar.Link active={path === "/#contactus"} as={'div'} className='bg-transparent border-b-0'>
                <RouterLink smooth to="/#contactus">
                <span className={path === "/#contactus" ? 'text-orange-400' : 'text-white'}>Contact Us</span>
                </RouterLink>
            </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  )
}
