import React from 'react';

type Props = {
    statistic: string;
    title: string;
    className: string;
};

const Card = ({ statistic, title, className }: Props) => (
    <div
        className={`z-[8] flex h-[89px] w-full flex-col items-center justify-center rounded-lg bg-white shadow-md md:w-auto md:bg-transparent md:shadow-none ${className}`}>
        <p className='text-center font-inter text-2xl font-black'>{statistic}</p>
        <p className='text-center font-inter text-xs font-normal'>{title}</p>
    </div>
);

const Benefits = () => {
    return (
        <section>
            <div className='relative mb-10 grid grid-cols-2 grid-rows-2 place-items-center gap-x-5 gap-y-[10px] md:mb-14 md:grid-cols-5 md:grid-rows-1 md:gap-x-0 md:gap-y-0 md:shadow-md'>
                <Card className='md:shadow-sm' statistic='10000+' title='мероприятий' />
                <Card className='md:shadow-sm' statistic='~3 минут' title='на выбор подходящего' />
                <div className='relative hidden md:col-span-1 md:block'>
                    <div className='absolute right-1/2 top-1/2 z-10 hidden size-[150px] -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-to-t from-[#CF0E10] to-[#F85A5C] md:block xl:size-[202px]'>
                        <p className='mr-3 text-center font-inter text-[60px] font-black text-white xl:text-[80px]'>
                            1
                        </p>
                        <p className='text-center font-manrope text-base font-normal text-white'>
                            персональная
                            <br />
                            подборка
                        </p>
                    </div>
                </div>
                <Card className='md:shadow-sm' statistic='3000+' title='мест' />
                <Card className='md:shadow-sm' statistic='50+' title='стандартных подборок' />
            </div>

            <div className='h-14 w-full'></div>

            <div className='mx-auto max-w-[983px] rounded-[20px] border border-accent bg-white text-center font-manrope text-sm md:text-xl'>
                <span className='block p-[21px] md:hidden'>
                    «
                    <span className='font-bold'>
                        Мы делаем сервис который не просто подбирает наиболее подходящие мероприятий, но и экономит ваше
                        время <br />
                    </span>
                    - наш самый ценный ресурс. Человеку не нужно 1000 мероприятий, ему нужно одно, которое интересно ему
                    здесь и сейчас. Мы агрегируем и обрабатываем более 10 000 развлекательных, спортивных и бизнес
                    событий, собранных как с крупных агрегаторов, так и с локальных мест.»
                </span>
                <span className='hidden px-[45px] py-[13px] md:block'>
                    Мы создали <span className='font-manrope text-accent'>умный сервис</span> для подбора мероприятий и
                    организации вашего досуга. Он помогает легко находить именно те события, которые вам действительно
                    интересны, экономя время на бесконечный поиск. Не нужно просматривать тысячи предложений — мы
                    соберем для вас подборку, идеально подходящую именно здесь и сейчас. Наш сервис объединяет
                    информацию о более чем 10 000 событиях: от крупных площадок до локальных мест, включая развлечения,
                    спорт и бизнес.
                </span>
            </div>
        </section>
    );
};

export default Benefits;
