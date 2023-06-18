'use client'
import Image from "next/image";
import {CSSProperties, FC, useEffect, useState} from "react";
import Link from "next/link";
import {getAllAnimals} from "@/services/getAnimals";
import DeerLoader from "@/components/loaders/DeerLoader";


type CardProps = {
    id: string
    image: string,
    title: string,
    description: string
}

const Card: FC<CardProps> = ({id, image, description, title}) => {

    const getCardStyle: ()=> CSSProperties = () => {
        const cardStyle = {
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            flex: '0 0 calc(33.33% - 60px)',
            height: '360px'
        }
        if (window.innerWidth >= 1024) {
            cardStyle['flex'] = '0 0 calc(33.33% - 60px)'
            cardStyle['height'] = '360px'
        } else if (window.innerWidth >= 768) {
            cardStyle['flex'] = '0 0 calc(50% - 60px)'
            cardStyle['height'] = '400px'
        } else if (window.innerWidth >= 640){
            cardStyle['flex'] = '0 0 calc(100% - 60px)'
            cardStyle['height'] = '450px'
        } else {
            cardStyle['flex'] = '0 0 100%'
            cardStyle['height'] = '460px'
        }
        return cardStyle
    }

    return (
            <div className='sm:mr-[61px] mr-0 rounded' style={getCardStyle()}>
                <Link href={`/${id}`}>
            <p className='text-amber-50 text-2xl text-center pt-56'>{title}</p>
            <p className='text-amber-50 text-base text-center pt-1.5'>{description}</p>
                </Link>
        </div>
    )
}


export const Slider = () => {

    const getSlidesToShow: () => 1 | 2 | 3 = () => {
        if (window) {
            if (window.innerWidth >= 1024) {
                return 3;
            } else if (window.innerWidth >= 768) {
                return 2;
            } else {
                return 1;
            }
        }
        return 3
    };

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [slidesToShow, setSlidesToShow] = useState<1 | 2| 3>(getSlidesToShow());
    const [cards, setCards] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const handleResize = () => {
        setSlidesToShow(getSlidesToShow());
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        getAllAnimals()
            .then(setCards)
            .finally(()=> setIsLoading(false))

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleNext = () => {
        setCurrentIndex(currentIndex === cards.length - 3 ? 0 : currentIndex + 1);
    };

    const handlePrev = () => {
        setCurrentIndex(currentIndex === 0 ? cards.length - 3 : currentIndex - 1);
    };


    return (
        <>
            {isLoading ? <DeerLoader />

                : <div className='flex items-center w-[100%] sm:flex-row flex-col sm:gap-0 gap-[20px]'>
                    <div className='cursor-pointer sm:mr-[60px] mr-0 self-start sm:self-center sm:order-none order-1 sm:mt-0 mt-[-61px]' onClick={handlePrev}>
                        <Image src="/assets/icons/arrow-left.svg" alt='<' width={26} height={40}/>
                    </div>
                    <div className='w-[100%] overflow-hidden z-0'>
                        <div className='flex transition-transform duration-500 ease-out'
                             style={{transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`}}>
                            {cards.map(({id, image, description, title}) => (
                                <Card id={id}
                                      key={title}
                                      image={image}
                                      title={title}
                                      description={description}/>
                            ))}
                        </div>
                    </div>
                    <div className='cursor-pointer self-end sm:self-center' onClick={handleNext}>
                        <Image src="/assets/icons/arrow-right.svg" alt='>' width={30} height={40}/>
                    </div>
                </div>
            }
        </>
    )
}