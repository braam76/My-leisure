import Image, { StaticImageData } from 'next/image';
import React from 'react';

import chassemblies from '@/assets/img/stay_up_to_date/chassemblies.png';
import schedule from '@/assets/img/stay_up_to_date/schedule.png';
import notifications from '@/assets/img/stay_up_to_date/notifications.png';

import arrows from '@/assets/svg/stay_up_to_date_arrows.svg';

const StayUpToDate = () => {
    return (
        <div className='mx-auto'>
            <div className='pb-10'>
                <p className='pb-5 text-center font-inter text-4xl font-black text-accent lg:text-[40px]'>
                    Будь в курсе!
                </p>
                <p className='text-center font-manrope text-lg font-medium text-[#7C7C7C]'>
                    Управляй подборками и настраивай свой график оповещений <br /> когда и как тебе удобно. Мы не будем
                    тебя беспокоить.
                </p>
            </div>
            <div className='hidden w-full justify-center pb-[30px] md:flex'>
                <Image src={arrows} alt='arrows' />
            </div>
            <div className='flex flex-col md:flex-row md:items-center md:justify-center lg:gap-2 xl:gap-[105px]'>
                <div className='space-y-[27px]'>
                    <p className='text-center font-inter text-2xl font-bold md:hidden'>Подборки</p>
                    <Image
                        src={chassemblies}
                        alt='Подборки'
                        className='h-[249px] w-[335px] object-scale-down max-md:mx-auto md:max-lg:mx-auto md:max-lg:w-[90%]'
                    />
                </div>
                <div className='flex flex-col md:items-center'>
                    <p className='pb-5 pt-[60px] text-center font-inter text-2xl font-bold md:hidden'>Расписание</p>
                    <div className='space-y-[6px]'>
                        <Image
                            src={schedule}
                            alt='Рассписание'
                            className='h-[303px] w-[335px] object-scale-down max-md:mx-auto md:max-lg:mx-auto md:max-lg:w-[90%]'
                        />
                    </div>
                </div>
                <div className='flex flex-col space-y-5 md:items-center'>
                    <p className='pt-[60px] text-center font-inter text-2xl font-bold md:hidden'>Уведомления</p>
                    <Image
                        src={notifications}
                        alt='Уведомления'
                        className='h-[200px] w-[335px] object-scale-down max-md:mx-auto md:max-lg:mx-auto md:max-lg:w-[90%]'
                    />
                </div>
            </div>
        </div>
    );
};

export default StayUpToDate;
