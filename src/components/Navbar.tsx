'use client';

import React, { useState } from 'react';
import open_menu from '@/assets/svg/open_menu.svg';
import close_menu from '@/assets/svg/close_menu.svg';
import telegram from '@/assets/svg/telegram.svg';
import Image from 'next/image';

const Navbar = () => {
    // State to track if the mobile menu is open
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle menu state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const anchors = [
        { name: 'О сервисе', link: '#' },
        { name: 'Функционал', link: '#' },
        { name: 'Как это работает', link: '#' },
        { name: 'Опрос', link: '#' }
    ];

    return (
        <nav className='grid grid-cols-2 grid-rows-1 items-center md:grid-cols-3'>
            {/* Logo */}
            <a href='/' className='font-inter text-base font-bold text-accent md:max-lg:text-center'>
                Мой Досуг
            </a>

            {/* PC version (over 768px in width) */}
            <ul className='mx-auto hidden space-x-[30px] font-manrope text-sm text-light-gray md:flex'>
                {anchors.map((x, i) => (
                    <li key={i}>
                        <a href={x.link}>{x.name}</a>
                    </li>
                ))}
            </ul>

            <div className='ml-auto hidden gap-2 md:flex'>
                <a href='#' className='flex w-[125px] items-center rounded-full bg-telegram p-0.5'>
                    <div className='flex h-7 w-7 items-center justify-center rounded-full bg-white'>
                        <Image src={telegram} alt='telegram' width={15} height={13} />
                    </div>

                    <span className='pl-2 font-manrope text-sm font-medium text-white'>TG - канал</span>
                </a>
                <button className='hidden w-44 rounded-full bg-accent text-center font-manrope text-sm text-white xl:block'>
                    Присоединиться
                </button>
            </div>

            {/* Mobile version (under 768px in width) */}
            <div className='z-50 ml-auto md:hidden'>
                <button onClick={toggleMenu}>
                    <Image src={isMenuOpen ? close_menu : open_menu} alt={isMenuOpen ? 'close' : 'open'} />
                </button>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div
                    className='absolute right-0 top-0 z-40 h-full w-full bg-black bg-opacity-50 backdrop-blur-[2px] md:hidden'
                    onClick={toggleMenu}>
                    <div className='ml-auto w-[330px] bg-white px-5 py-12 max-xs:h-full max-xs:w-full'>
                        <a href='/' className='font-inter text-base font-bold text-accent'>
                            Мой Досуг
                        </a>
                        <ul className='space-y-[30px] pt-24 font-manrope text-xl text-light-gray'>
                            {anchors.map((x, i) => (
                                <li key={i}>
                                    <a href={x.link}>{x.name}</a>
                                </li>
                            ))}
                        </ul>
                        <div className='space-y-[26px] pt-[264px]'>
                            <a href='mailto:Just@mail.ru' className='font-manrope text-xl text-light-gray'>
                                Just@mail.ru
                            </a>
                            <a href='#' className='flex w-[125px] items-center rounded-full bg-telegram p-0.5'>
                                <div className='flex h-7 w-7 items-center justify-center rounded-full bg-white'>
                                    <Image src={telegram} alt='telegram' width={15} height={13} />
                                </div>

                                <span className='pl-2 font-manrope text-sm font-medium text-white'>TG - канал</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
