import Image, { StaticImageData } from 'next/image';
import React from 'react';

import hermitage from '@/assets/img/recommendations/hermitage.png';
import peoples_in_kreml from '@/assets/img/recommendations/peoples_in_kreml.png';

import comments from '@/assets/svg/comments.svg';
import attach_file from '@/assets/svg/attach_file.svg';
import calendar_with_clock from '@/assets/svg/calendar_with_clock.svg';
import send from '@/assets/svg/send.svg';

import app_on_iphone from '@/assets/img/app_on_iphone_14_pro_max.png';
import app_on_iphone_with_map from '@/assets/img/app_on_iphone_14_pro_max_with_map.png';

import plan_and_share_max_md from '@/assets/img/plan_and_share_card_max_md.png';
import plan_and_share_min_md from '@/assets/img/plan_and_share_card_min_md.png';

import organize_max_md from '@/assets/img/organize_max_md.png';
import organize_min_md from '@/assets/img/organize_min_md.png';

type CassesProps = {
    title: string;
    body: string;
    children: React.ReactNode;
    reverse?: boolean;
};

14198;

const Casses = ({ title, body, children, reverse }: CassesProps): React.ReactNode => (
    <div
        className={`mx-auto flex flex-col items-center justify-center space-y-5 md:max-w-[983px] md:justify-between md:gap-10 md:space-y-0 ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        <div className={`space-y-5 ${reverse ? 'md:w-[420px]' : 'md:w-3/6'}`}>
            <p className='text-center font-inter text-xl font-black md:text-start md:text-[34px]'>{title}</p>
            <p className='text-center font-manrope text-sm font-medium md:text-start md:text-xl'>{body}</p>
        </div>
        {children}
    </div>
);

type RecomendationsCardProps = {
    src: StaticImageData;
    name: string;
    description: string;
    date: string;
};

const RecomendationsCard = ({ src, name, description, date }: RecomendationsCardProps) => (
    <div className='h-[103px] rounded-[10px] bg-white pt-[14px] max-md:max-w-[289px] md:h-auto md:max-w-[385px]'>
        <div className='flex'>
            <div className='w-max px-3'>
                <Image src={src} alt='recomendations logo' />
            </div>

            <div className='space-y-2'>
                <div className='flex items-end justify-between space-x-3 pr-3'>
                    <p className='w-[137px] text-nowrap font-manrope text-xs font-bold md:text-base'>{name}</p>
                    <p className='text-nowrap font-manrope text-xs font-normal text-accent'>{date}</p>
                </div>
                <p className='w-[137px] font-manrope text-[10px] font-normal'>{description}</p>
            </div>
        </div>
        <div className='flex justify-end gap-[102px]'>
            <div className='ml-auto flex gap-4'>
                <Image src={comments} alt='comments' />
                <div className='flex items-center gap-[5px]'>
                    <Image src={attach_file} alt='attach_file' />{' '}
                    <span className='font-manrope text-xs font-light'>4</span>
                </div>
                <Image src={calendar_with_clock} alt='calendar' />
            </div>

            <div className='flex size-[30px] items-center justify-center rounded-br-[10px] rounded-tl-[10px] bg-accent'>
                <Image src={send} alt='send' className='h-auto w-[20px]' />
            </div>
        </div>
    </div>
);

const HandOnPulse = () => {
    return (
        <section className=''>
            <p className='pb-[60px] text-center font-inter text-4xl font-black text-accent lg:text-[40px]'>
                Держу руку <br className='md:hidden' /> на пульсе
            </p>

            <div className='space-y-[60px]'>
                <Casses
                    title='Персональные подборки мероприятий'
                    body='Получай персональные подборки на основе своих интересов, настроения и обстоятельств. Будь в курсе интересных мест для похода с друзьями, партнером или детьми'
                    reverse>
                    <div className='mx-auto flex w-full max-w-[335px] flex-col space-y-[14px] md:mx-0 md:w-[80%] md:max-w-[459px] md:max-lg:w-2/5'>
                        <div className='mr-auto justify-start'>
                            <RecomendationsCard
                                src={hermitage}
                                name='Поход в Эрмитаж'
                                description='Художественный музей в Санкт-Петербурге, Россия'
                                date='18 октября'
                            />
                        </div>
                        <div className='ml-auto justify-end'>
                            <RecomendationsCard
                                src={peoples_in_kreml}
                                name='Футбольный матч'
                                description='Регулярные футбольные события возле тебя'
                                date='14 октября'
                            />
                        </div>
                    </div>
                </Casses>

                <Casses
                    title='Удобно и быстро'
                    body='Просматривай мероприятия по «старинке» с использованием поиска, фильтров или карты'>
                    <div className='flex h-[362px] w-full justify-center md:w-auto md:justify-between md:space-x-5'>
                        <Image src={app_on_iphone} alt='app on iphone' className='self-start md:size-[90%]' />
                        <Image
                            src={app_on_iphone_with_map}
                            alt='app on iphone with map'
                            className='self-end md:size-[90%]'
                        />
                    </div>
                </Casses>

                <Casses
                    title='Планируй и делись'
                    body='Отправляй мероприятия друзьям, создавай группы для обсуждений или выгружай сразу в свой календарь, которым привык пользоваться.'
                    reverse>
                    <div className=''>
                        <Image src={plan_and_share_max_md} alt='plan and share' className='block w-[99%] md:hidden' />
                        <Image src={plan_and_share_min_md} alt='plan and share' className='hidden w-[99%] md:block' />
                    </div>
                </Casses>

                <Casses
                    title='Организовывай'
                    body='Добавь в группу друзей и мы подберем наилучшие мероприятия и места на основе ваших общих интересов'>
                    <div>
                        <Image src={organize_max_md} alt='organize' className='block w-[99%] md:hidden' />
                        <Image src={organize_min_md} alt='organize' className='hidden w-[99%] md:block' />
                    </div>
                </Casses>
            </div>
        </section>
    );
};

export default HandOnPulse;
