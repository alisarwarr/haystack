//REACT-RESPONSIVE
import { useMediaQuery } from 'react-responsive';
//IMAGES
import { brandA, brandB, brandC } from '../../images';
//NEXTJS-IMAGE
import Image from 'next/image';


function FourthSection() {
    const screen1055= useMediaQuery({ query: "(max-width: 1055px)" });
    const screen705 = useMediaQuery({ query: "(max-width: 705px)" });
    const screen480 = useMediaQuery({ query: "(max-width: 480px)" });


    return (
        <div className="w-full -mt-2 bg-whiter flex items-center flex-col">
            <div className="w-[90%] mt-14">
                <div className="w-full border-t border-dim"></div>
            </div>


            <div className={`w-[90%] flex items-center justify-around ${screen705 && `flex-col`}`}>
                <div className={`text-center flex items-center flex-col ${!screen480 ? (screen1055 ? `w-[43%] mt-16` : `w-[18%] mt-24`) : `w-[65%] mt-14`}`}>
                    <Image src={brandA} alt=""/>

                    <p className={`mt-5 text-lighter font-normal leading-snug cursor-pointer hover:underline ${screen705 ? `text-md w-[130%]` : `text-sm w-[75%]`}`}>
                        {"The Intranet Grail: Making A Big Company Feel Smaller"}
                    </p>
                </div>

                <div className={`${!screen480 ? (screen1055 ? `w-[43%] mt-16` : `w-[18%] mt-24`) : `w-[65%] mt-14`} text-center flex items-center flex-col`}>
                    <Image src={brandB} alt=""/>

                    <p className={`mt-5 text-lighter font-normal leading-snug cursor-pointer hover:underline ${screen705 ? `text-md w-[130%]` : `text-sm w-[75%]`}`}>
                        {"Haystack wants to be the modern enterprise intranet for remote work"}
                    </p>
                </div>

                <div className={`${!screen480 ? (screen1055 ? `w-[43%] mt-16` : `w-[18%] mt-24`) : `w-[65%] mt-14`} text-center flex items-center flex-col`}>
                    <Image src={brandC} alt=""/>

                    <p className={`mt-5 text-lighter font-normal leading-snug cursor-pointer hover:underline ${screen705 ? `text-md w-[130%]` : `text-sm w-[75%]`}`}>
                        {"99 Percent of Fortune 500 Employees Who Use This Product..."}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FourthSection;