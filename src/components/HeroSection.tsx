import React from 'react';
import Image from 'next/image';
import phoneOnMap from '@/assets/img/phone-on-map.png';
import phoneOnMapWithEllipse from '@/assets/img/phone-on-map-with-ellipse.png';

const HeroSection = () => {
    return (
        <section className=''>
            <div className='grid grid-cols-1 grid-rows-[auto_auto] gap-[45px] xl:grid-cols-[minmax(33%,473px)_auto] xl:grid-rows-1 xl:place-items-center'>
                <div className='absolute inset-0 -z-[999] h-[590px] w-auto rounded-e-full bg-gradient-to-r from-[#C2D3F180] blur-3xl md:h-[672px]'></div>
                <div className='px-5 lg:px-0'>
                    <div className='space-y-5'>
                        <h2 className='text-center font-inter text-5xl font-black text-dark-gray lg:whitespace-nowrap lg:text-7xl xl:text-start xl:text-[86px]'>
                            Мой Досуг
                        </h2>
                        <h1 className='whitespace-nowrap text-center font-manrope text-sm xl:w-3/4 xl:text-start xl:text-xl'>
                            Al-сервис персонализированных подборок
                            <br />
                            мероприятий на основе ваших интересов
                        </h1>
                    </div>

                    <form className='z-0 w-full pt-10'>
                        <label htmlFor='emailField' className='sr-only mb-2 text-sm font-medium text-gray-900'></label>
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
                    </form>

                    <p className='pt-3 text-center text-[9px] text-[#7C7C7C] md:text-xs'>
                        Нажимая на кнопку вы соглашаетесь с{' '}
                        <a href='#' className='text-accent'>
                            политикой обработки персональных данных
                        </a>
                    </p>
                </div>

                <div className='relative flex flex-col items-center justify-center xl:ml-auto'>
                    <Image src={phoneOnMapWithEllipse} alt='phone on map' layout='cover' className='hidden xs:block' />
                    <Image
                        src={phoneOnMap}
                        alt='phone on map'
                        layout='cover'
                        className='ml-auto block w-full xs:hidden'
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;