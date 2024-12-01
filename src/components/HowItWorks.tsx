import React from 'react';

import how_ai_works_min from '@/assets/img/how_ai_works_min.png';
import how_ai_works_max from '@/assets/img/how_ai_works_max.png';
import Image from 'next/image';

const HowItWorks = () => {
    return (
        <div className=''>
            <p className='pb-5 text-center font-inter text-4xl font-black text-accent lg:text-[40px]'>
                Как это работает
            </p>
            <div className='flex flex-col md:flex-row-reverse md:items-center md:gap-[123px]'>
                <p className='block pb-[69px] font-manrope text-lg font-medium text-[#7C7C7C] md:hidden'>
                    <span className='font-bold'>
                        Каждое мероприятие и каждый пользователь анализируется с помощью AI и подбирается идеальный
                        мэтч.
                    </span>
                    <br />
                    <br />
                    Да да, это как тиндер, но только с мероприятиями. Мы предлагаем пользователю пройти опрос, отметить
                    понравившиеся мероприятия и оценить уже посещенные, чем больше информации мы получим о твоих
                    предпочтениях, тем точнее будет персональная подборка
                </p>
                <div className='hidden pb-[69px] font-manrope text-lg font-medium text-[#7C7C7C] md:block'>
                    <span className='font-bold'>
                        Каждое мероприятие и каждый пользователь анализируется с помощью{' '}
                        <span className='text-accent'>AI</span> и подбирается идеальный мэтч.
                    </span>
                    <br />
                    <br />
                    Да да, это как тиндер, только с мероприятиями.
                    <ul className='list-disc pl-8'>
                        <li>Пройди опрос</li>
                        <li>Отметь события, которые тебе нравятся или на которых ты уже побывал</li>
                        <li>Мы предложим тебе лучшее мероприятие или место для посещения</li>
                    </ul>
                </div>
                <Image
                    src={how_ai_works_min}
                    alt='how ai works'
                    width={335}
                    height={487}
                    className='mx-auto block object-scale-down lg:hidden'
                />
                <Image
                    src={how_ai_works_max}
                    alt='how ai works'
                    width={509}
                    height={376}
                    className='mx-auto hidden object-scale-down lg:block'
                />
            </div>
        </div>
    );
};

export default HowItWorks;
