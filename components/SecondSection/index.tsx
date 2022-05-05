//REACT-RESPONSIVE
import { useMediaQuery } from 'react-responsive';
//IMAGES
import { brand1, brand2, brand3, brand4 } from '../../images';
//NEXTJS-IMAGE
import Image from 'next/image';


function SecondSection() {
    const screen735 = useMediaQuery({ query: "(max-width: 735px)" });
    const screen705 = useMediaQuery({ query: "(max-width: 705px)" });


    return (
        <div className="w-full -mt-2 bg-whiter flex items-center flex-col">
            <div className={`flex items-center justify-around ${screen705 && `flex-col mt-10`} ${screen735 ? `w-full ml-2` : `w-[90%]`}`}>
                <div className={`text-center flex items-center flex-col ${screen705 ? `w-[52%] mt-10` : `w-[18%] mt-24`}`}>
                    <Image src={brand1} alt=""/>

                    <p className="mt-5 text-lighter font-normal text-[0.915rem] leading-snug">
                        BuzzFeed uses Haystack to stay connected while working remotely.
                    </p>
                </div>

                <div className={`text-center flex items-center flex-col ${screen705 ? `w-[52%] mt-10` : `w-[18%] mt-24`}`}>
                    <Image src={brand2} alt=""/>

                    <p className="mt-5 text-lighter font-normal text-[0.915rem] leading-snug">
                        NerdWallet uses Haystack to make information more accessible.
                    </p>
                </div>

                <div className={`text-center flex items-center flex-col ${screen705 ? `w-[52%] mt-10` : `w-[18%] mt-24`}`}>
                    <Image src={brand3} alt=""/>

                    <p className="mt-5 text-lighter font-normal text-[0.915rem] leading-snug">
                        Novo uses Haystack to keep its team connected.
                    </p>
                </div>

                <div className={`text-center flex items-center flex-col ${screen705 ? `w-[52%] mt-10` : `w-[18%] mt-24`}`}>
                    <Image src={brand4} alt=""/>

                    <p className="mt-5 text-lighter font-normal text-[0.915rem] leading-snug">
                        Chime uses Haystack to scale communications and culture.
                    </p>
                </div>
            </div>


            <div className={`w-[90%] ${screen705?`mt-14`:`mt-16`}`}>
                <div className="w-full border-t border-dim"></div>
            </div>
        </div>
    )
}

export default SecondSection