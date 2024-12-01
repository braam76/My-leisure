import React from 'react';
import telegram from '@/assets/svg/telegram.svg';
import Image from 'next/image';

const Footer = () => {
    const anchors = [
        { name: 'О сервисе', link: '#' },
        { name: 'Функционал', link: '#' },
        { name: 'Как это работает', link: '#' },
        { name: 'Опрос', link: '#' }
    ];
    return (
        <>
            <div className='flex flex-col md:hidden'>
                <a href='/' className='pb-5 text-center font-inter text-base font-bold text-accent'>
                    Мой Досуг
                </a>
                <div className='flex flex-col max-md:space-y-[9px]'>
                    <a className='text-center font-manrope text-xs font-normal text-[#4B4B4B]' href='#'>
                        Политика конфиденциальности
                    </a>
                    <a
                        className='text-center font-manrope text-xs font-normal text-[#4B4B4B]'
                        href='mailto:Just@mail.ru'>
                        Just@mail.ru
                    </a>
                </div>
            </div>
            <div className='hidden items-center justify-between md:flex'>
                <a href='/' className='text-center font-inter text-base font-bold text-accent'>
                    Мой Досуг
                </a>
                <ul className='hidden space-x-[30px] font-manrope text-sm text-light-gray md:flex'>
                    {anchors.map((x, i) => (
                        <li key={i}>
                            <a href={x.link}>{x.name}</a>
                        </li>
                    ))}
                </ul>
                <div className='flex space-x-7 md:max-xl:flex-col'>
                    <a className='text-center font-manrope text-xs font-normal text-[#4B4B4B]' href='#'>
                        Политика конфиденциальности
                    </a>
                    <a
                        className='text-center font-manrope text-xs font-normal text-[#4B4B4B]'
                        href='mailto:Just@mail.ru'>
                        Just@mail.ru
                    </a>
                </div>
                <a href='#' className='hidden w-[125px] items-center rounded-full bg-telegram p-0.5 lg:flex'>
                    <div className='flex h-7 w-7 items-center justify-center rounded-full bg-white'>
                        <Image src={telegram} alt='telegram' width={15} height={13} />
                    </div>

                    <span className='pl-2 font-manrope text-sm font-medium text-white'>TG - канал</span>
                </a>
            </div>
        </>
    );
};

export default Footer;
