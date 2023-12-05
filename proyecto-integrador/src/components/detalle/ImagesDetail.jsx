import React from 'react'

export const ImagesDetail = ({images, setIsOpen}) => {
    return (
        <div className="flex flex-col rounded-md border-none bg-white object-contain">
            <img
                src={images ? images[0].image : '/img/drone2.webp'}
                alt="product-img"
                className="w-[450px] h-full max-h-[450px] rounded-lg border-0"
            />

            <div className="flex gap-2 mx-2">
                <img
                    src={
                        images ? images[1].image : '/img/drone2.webp'
                    }
                    alt="product-img"
                    className="w-6 h-6 rounded-lg border-0"
                />
                <img
                    src={
                        images ? images[2].image : '/img/drone2.webp'
                    }
                    alt="product-img"
                    className="w-6 h-6 rounded-lg border-0"
                />
                <img
                    src={
                        images ? images[3].image : '/img/drone2.webp'
                    }
                    alt="product-img"
                    className="w-6 h-6 rounded-lg border-0"
                />
                <img
                    src={
                        images ? images[4].image : '/img/drone2.webp'
                    }
                    alt="product-img"
                    className="w-6 h-6 rounded-lg border-0"
                />

                <span
                    className=" text-blue-600 hover:cursor-pointer"
                    onClick={() => setIsOpen(true)}
                >
                    Ver galería...
                </span>
            </div>

        </div>
    )
}
