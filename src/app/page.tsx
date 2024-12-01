import Benefits from '@/components/Benefits';
import Footer from '@/components/Footer';
import HandOnPulse from '@/components/HandOnPulse';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import Navbar from '@/components/Navbar';
import SighAndGet from '@/components/SighAndGet';
import StayUpToDate from '@/components/StayUpToDate';
import Survey from '@/components/Survey';
import React from 'react';

const Home = () => {
    return (
        <>
            <header className='px-5 pb-[30px] lg:px-0'>
                <Navbar />
            </header>
            <main>
                <HeroSection />
                <div className='px-5 pt-[60px] lg:px-0'>
                    <Benefits />
                </div>
                <div className='w-full px-5 pt-10 lg:px-0 xl:pt-[150px]'>
                    <HandOnPulse />
                </div>
                <div className='mx-auto max-w-[387px] pb-[150px] pt-20 lg:hidden'>
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
                <div className='px-5 pt-10 lg:px-0'>
                    <StayUpToDate />
                </div>
                <div className='w-full px-5 pt-10 lg:px-0 xl:pt-[150px]'>
                    <HowItWorks />
                </div>
                <div className='px-5 pt-20 lg:px-0 xl:pt-[150px]'>
                    <SighAndGet />
                </div>
                <div className='px-5 pt-20 lg:px-0'>
                    <Survey />
                </div>
                <footer className='px-5 pt-10 lg:px-0'>
                    <Footer />
                </footer>
            </main>
        </>
    );
};

export default Home;
