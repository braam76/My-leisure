import Image from 'next/image';
import React from 'react';

import red_mailbox from '@/assets/img/red_mailbox.png';
import red_phone from '@/assets/img/phone_on_red_circle.png';
import comment_about_service from '@/assets/img/comment_about_service.png';

const SighAndGet = () => {
    return (
        <div>
            <p className='pb-5 text-center font-inter text-4xl font-black text-accent lg:text-[40px]'>
                Подпишись и получи
            </p>
            <div className='mx-auto max-w-[387px] pb-[60px] pt-10'>
                <div className='relative'>
                    <input
                        type='search'
                        id='emailField'
                        className='block w-full rounded-full bg-gray-50 py-3 ps-4 font-manrope text-sm text-gray-900'
                        placeholder='Ваш Email'
                        required
                    />
                    <button
                        type='submit'
                        className='absolute right-0 top-0 h-full rounded-full bg-accent px-4 py-2 font-manrope text-sm font-medium text-white'>
                        Присоедениться
                    </button>
                </div>
            </div>
            <div className='mx-auto grid grid-cols-1 grid-rows-3 gap-10 md:grid-cols-2 md:grid-rows-[auto_auto]'>
                <div className='relative mx-auto flex w-[335px] flex-col justify-between rounded-[20px] bg-white pt-[30px] xl:h-auto xl:w-full xl:flex-row xl:items-end'>
                    <div className='px-4 xl:place-self-start'>
                        <div className='space-y-3'>
                            <p className='font-inter text-2xl font-black'>Сделай первый шаг</p>
                            <p className='font-manrope text-sm font-normal'>
                                Оставь свою почту и будь в курсе запуска!
                            </p>
                        </div>
                        <div className='space-y-2 pt-5'>
                            <div className='w-fit'>
                                <p className='rounded-full bg-[#ECF4F4] px-[10px] py-1 font-manrope text-xs font-bold'>
                                    <span className='text-accent'>#</span> Информацию о ходе запуска
                                </p>
                            </div>
                            <div className='w-fit'>
                                <p className='rounded-full bg-[#ECF4F4] px-[10px] py-1 font-manrope text-xs font-bold'>
                                    <span className='text-accent'>#</span> Доступ к телеграмм каналу с подборками
                                </p>
                            </div>
                        </div>
                    </div>
                    <Image
                        src={red_mailbox}
                        alt='red mailbox'
                        className='rounded-[20px] xl:absolute xl:bottom-0 xl:right-0 xl:w-3/5 xl:object-scale-down'
                    />
                </div>
                <div className='relative mx-auto flex h-[464px] w-[335px] flex-col justify-between rounded-[20px] bg-white pt-[30px] xl:h-auto xl:w-full xl:flex-row xl:items-end'>
                    <div className='px-4 xl:place-self-start xl:pb-[30px]'>
                        <div className='space-y-3'>
                            <p className='font-inter text-2xl font-black'>Закрытое тестирование</p>
                            <p className='font-manrope text-sm font-normal'>
                                Для ранних пользователей мы организуем <br className='hidden xl:block' />
                                закрытое тестирование и предложим <br className='hidden xl:block' />
                                различные плюшки :)
                            </p>
                        </div>
                        <div className='space-y-2 pt-5'>
                            <div className='w-fit'>
                                <p className='rounded-full bg-[#ECF4F4] px-[10px] py-1 font-manrope text-xs font-bold'>
                                    <span className='text-accent'>#</span> Ранний доступ к приложению
                                </p>
                            </div>
                        </div>
                    </div>
                    <Image
                        src={red_phone}
                        alt='phone on red circle'
                        className='rounded-[20px] xl:absolute xl:bottom-0 xl:right-0 xl:object-scale-down'
                    />
                </div>
                <div className='mx-auto flex h-fit w-[335px] flex-col items-start justify-between rounded-[20px] bg-white pt-[30px] md:col-span-2 md:w-full md:flex-row md:items-start'>
                    <div className='relative px-4 pb-[30px]'>
                        <div className='space-y-3'>
                            <p className='font-inter text-2xl font-black'>Вместе создадим сервис мечты</p>
                            <p className='font-manrope text-sm font-normal'>
                                Вы сможете первыми попробовать сервис и оставить свои пожелания по его работе. Каждое
                                пожелание будет прочитано нашей командой.
                            </p>
                        </div>
                        <div className='space-y-2 pt-5'>
                            <div className='w-fit'>
                                <p className='rounded-full bg-[#ECF4F4] px-[10px] py-1 font-manrope text-xs font-bold'>
                                    <span className='text-accent'>#</span> Возможность высказать пожелания напрямую
                                </p>
                            </div>
                            <div className='w-fit'>
                                <p className='rounded-full bg-[#ECF4F4] px-[10px] py-1 font-manrope text-xs font-bold'>
                                    <span className='text-accent'>#</span> И еще несколько плюшек :)
                                </p>
                            </div>
                        </div>
                    </div>
                    <Image
                        src={comment_about_service}
                        alt='comment about service'
                        className='place-self-end rounded-[20px] md:max-w-[400px] xl:object-scale-down'
                    />
                </div>
            </div>
        </div>
    );
};

export default SighAndGet;
