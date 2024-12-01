import React from 'react';

const Survey = () => {
    return (
        <div>
            <div className='space-y-3 pb-5'>
                <p className='text-center font-inter text-xl font-bold'>
                    Помоги нам создать сервис, который{' '}
                    <span className='text-accent'>ты с удовольствием порекомендуешь</span> своим друзьям!
                </p>
                <p className='text-center font-manrope text-sm font-medium text-[#7c7c7c]'>
                    Пройди опрос и поделись с ним, каждая заполненная анкета важна для нашей команды!
                </p>
            </div>

            <div className='h-[430px] w-full rounded-[20px] bg-[#D9D9D9]'></div>
        </div>
    );
};

export default Survey;
