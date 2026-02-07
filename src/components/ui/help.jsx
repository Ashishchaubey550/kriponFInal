function Help({ image, title, description, className, imageHeight }) {
    return (
        <div className={`flex flex-col gap-6 ${className}`}>
            <div className={`w-full overflow-hidden rounded-[20px] ${imageHeight}`}>
                <img className='h-full w-full object-cover' src={image} alt={title} />
            </div>
            <div className='flex flex-col gap-2 px-2'>
                <h1 className='text-[#FFFFFF] font-medium text-[36px] leading-[41px]'>{title}</h1>
                <p className='text-[#FFFFFF] font-light text-[19px] leading-[28px] tracking-[0.47px] opacity-80'>{description}</p>
            </div>
        </div>
    )
}

export default Help;