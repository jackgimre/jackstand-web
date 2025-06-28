import React from 'react';

const Card = ({img, title, description}) => {
    return(
    <div className="group relative w-full h-[100%] border border-zinc-500 shadow-lg border-[2px] flex flex-col rounded-[32px] hover:scale-105 transition duration-100">
        <img src={img} alt="" class="w-full h-full object-cover rounded-[32px] opacity-[30%] group-hover:opacity-[85%] transition duration-100" />
        <div class="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent rounded-[32px] flex flex-col">
            <h3 class="text-xl font-semibold mb-2 self-center pt-2">{title}</h3>
            <p className='p-8 text-xl'>{description}</p>
        </div>
    </div>
    );
}

export default Card;