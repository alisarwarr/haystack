//REACT-ICONS
import { RiArrowRightSLine } from 'react-icons/ri';
//REACT-RESPONSIVE
import { useMediaQuery } from 'react-responsive';
//IMAGES
import { logoNtxt } from '../../images';
//NEXTJS-IMAGE
import Image from 'next/image';


function FifthSection() {
    const screen1245= useMediaQuery({ query: "(max-width: 1245px)" });
    const screen1090= useMediaQuery({ query: "(max-width: 1090px)" });
    const screen1065= useMediaQuery({ query: "(max-width: 1065px)" });
    const screen1000= useMediaQuery({ query: "(max-width: 1000px)" });
    const screen910 = useMediaQuery({ query: "(max-width: 910px)" });
    const screen760 = useMediaQuery({ query: "(max-width: 760px)" });
    const screen690 = useMediaQuery({ query: "(max-width: 690px)" });
    const screen625 = useMediaQuery({ query: "(max-width: 625px)" });
    const screen320 = useMediaQuery({ query: "(max-width: 320px)" });
    const screen535 = useMediaQuery({ query: "(max-width: 535px)" });
    const screen420 = useMediaQuery({ query: "(max-width: 420px)" });
    const screen380 = useMediaQuery({ query: "(max-width: 380px)" });
    const screen350 = useMediaQuery({ query: "(max-width: 350px)" });;


    return (
        <div className="w-full mt-16 bg-bgcolor text-whiter flex items-center justify-center flex-col">
            <div className={`mt-24 flex items-center ${screen1065 ? `w-[90%]` : `w-[85%]`} ${screen910 ? `flex-col ml-2.5` : `flex-row`}`}>
                <p className={`mt-8 text-white text-center font-bold tracking-wide flex-1 ${!screen350 ? (!screen420 ? (!screen535 ? (screen1065 ? `text-[2.85rem]` : `text-[3.25rem]`) : `text-[2.25rem]`) : `text-[1.875rem]`) : `text-[1.475rem]`}`}>
                    Ready to get started?
                </p>

                <div className={`flex items-center ${screen910 ? `mt-3.5` : `mt-8`} ${screen420 ? `flex-col` : `flex-row`}`}>
                    <button className={`${screen420 && `w-[14rem]`} tracking-normal font-medium text-[0.935rem] text-whiter hover bg-orange hover:bg-potato ${screen535 ? `pt-1.5 pb-1.5 pl-5 pr-3.5` : `pt-2.5 pb-2.5 pl-6 pr-4`} rounded-[4.5px] flex items-center`}> <div className="flex-1">Request A Demo</div> <RiArrowRightSLine size="20" /> </button>
                    <button className={`${screen420 && `w-[14rem]`} ${!screen420 ? (!screen535 ? (screen1065 ? `ml-3.5` : `ml-5`) : `ml-2.5`) : `mt-2 !ml-0`} tracking-normal font-medium text-[0.935rem] text-whiter hover:!border-whiter ${screen535 ? `pt-1.5 pb-1.5 pl-5 pr-3.5` : `pt-2.5 pb-2.5 pl-6 pr-4`} rounded-[4.5px] flex items-center`} style={{ border: "1px solid rgba(255,255,255,.2)" }}> <div className="flex-1"> Learn More </div> <RiArrowRightSLine size="20" /> </button>
                </div>
            </div>


            <div className="w-full mt-20">
                <div className="w-full border-t border-dim"></div>
            </div>


            <div className={`w-[85%] flex items-center ${screen625 ? `flex-col mt-16` : `flex-row mt-24`}`}>
                <div className={`flex-1 ${screen625 && `mb-14`}`} style={{ margin: screen320 ? "0 auto" : "" }}>
                    <div className="w-[10rem]">
                        <Image src={logoNtxt} alt=""/>
                    </div>

                    <div className={`mt-7 leading-snug ${!screen320 ? (!screen380 ? (screen625 ? `w-full ml-2` : `w-[11rem]`) : `w-[150%]`) : `w-[130%]`}`}>
                        <a href="#" className={`text-whiter hover:underline ${!screen320 ? (screen380 ? `text-[0.875rem]` : `text-[1rem]`) : `text-xs -ml-1 -mt-40`}`}>
                            Haystack makes big companies feel smaller.
                        </a>
                    </div>
                </div>


                {
                    !screen320 && (
                        <table className={`border-collapse -mt-4 ${!screen690 ? (!screen760 ? (!screen910 ? (screen1245 ? `w-[50%]` : `w-[45%]`) : `w-[60%]`) : `w-[67.65%]`) : `w-[72.65%]`} ${!screen380 ? (screen625 && `-ml-7`) : `-ml-2`}`}>
                            <tbody>
                                <tr>
                                    <td className={`pb-5 font-semibold ${screen1000 ? `text-md` : `text-lg`} ${screen380 ? `pl-4` : ` pl-10`}`}> Product   </td>
                                    <td className={`pb-5 font-semibold ${screen1000 ? `text-md` : `text-lg`} ${screen380 ? `pl-4` : ` pl-10`}`}> Company   </td>
                                    <td className={`pb-5 font-semibold ${screen1000 ? `text-md` : `text-lg`} ${screen380 ? `pl-4` : ` pl-10`}`}> Resources </td>
                                </tr>

                                <tr>
                                    <td className={`pb-3 ${screen1000 && `text-sm`} ${screen380 ? `pl-4` : ` pl-10`}`}> <a href="https://www.haystackteam.com/core/communication">Communication</a> </td>
                                    <td className={`pb-3 ${screen1000 && `text-sm`} ${screen380 ? `pl-4` : ` pl-10`}`}> <a href="https://jobs.lever.co/Haystack">Career</a> </td>
                                    <td className={`pb-3 ${screen1000 && `text-sm`} ${screen380 ? `pl-4` : ` pl-10`}`}> <a href="https://support.haystackteam.com/en">Help & Support</a> </td>
                                </tr>

                                <tr>
                                    <td className={`pb-3 ${screen1000 && `text-sm`} ${screen380 ? `pl-4` : ` pl-10`}`}> <a href="https://www.haystackteam.com/core/directory">Directory</a> </td>
                                    <td className={`pb-3 ${screen1000 && `text-sm`} ${screen380 ? `pl-4` : ` pl-10`}`}> <a href="https://jobs.lever.co/Haystack">Press</a> </td>
                                    <td className={`pb-3 ${screen1000 && `text-sm`} ${screen380 ? `pl-4` : ` pl-10`}`}> <a href="https://www.haystackteam.com/what-is-intranet">What is an Intranet?</a> </td>
                                </tr>

                                <tr>
                                    <td className={`pb-3 ${screen1000 && `text-sm`} ${screen380 ? `pl-4` : ` pl-10`}`}> <a href="https://www.haystackteam.com/core/knowledge"> Knowledge </a> </td>
                                </tr>

                                <tr>
                                    <td className={`pb-3 ${screen1000 && `text-sm`} ${screen380 ? `pl-4` : ` pl-10`}`}> <a href="https://www.haystackteam.com/more/mobile-app"> Mobile App </a> </td>
                                </tr>
                            </tbody>
                        </table>
                    )
                }


                {
                    screen320 && (
                        <table>
                            <tr>
                                <p className="font-semibold pt-16"> Product </p>
                                <a href="https://www.haystackteam.com/core/communication" className="text-sm mt-2"> Communication </a>
                                <a href="https://www.haystackteam.com/core/directory" className="text-sm"> Directory </a>
                                <a href="https://www.haystackteam.com/core/knowledge" className="text-sm"> Knowledge </a>
                                <a href="https://www.haystackteam.com/more/mobile-app" className="text-sm"> Mobile App </a>
                            </tr>

                            <div className="w-[92%] mt-4">
                                <div className="w-[180%] -ml-10 border-t border-gray-400"></div>
                            </div>

                            <tr>
                                <p className="font-semibold pt-4"> Company </p>
                                <a href="https://jobs.lever.co/Haystack" className="text-sm mt-2"> Career </a>
                                <a href="https://jobs.lever.co/Haystack" className="text-sm"> Press </a>
                            </tr>

                            <div className="w-[92%] mt-4">
                                <div className="w-[180%] -ml-10 border-t border-gray-400"></div>
                            </div>

                            <tr>
                                <p className="font-semibold pt-4"> Resources </p>
                                <a href="https://support.haystackteam.com/en" className="text-sm mt-2"> Help & Support </a>
                                <a href="https://www.haystackteam.com/what-is-intranet" className="text-sm"> What is an Intranet? </a>
                            </tr>
                        </table>
                    )
                }
            </div>


            <div className={`w-[85%] flex items-center ${screen1090 ? `flex-col mt-12 mb-5` : `flex-row mt-24 mb-16`}`}>
                <div className={`flex-1 text-center text-[hsla(0,0%,100%,.7)] ${screen1090 && `mb-4 text-sm`}`}>
                    © Copyright 2022 Haystack Team, Inc. All rights reserved.
                </div>

                <div className={`flex items-center justify-between ${screen1090 ? `flex-col` : `flex-row w-[40%]`}`}>
                    <a href="https://www.haystackteam.com/legal/terms" className="text-white hover:underline"> Terms of Service </a>
                    <a href="https://www.haystackteam.com/legal/privacy" className="text-white hover:underline"> Privacy Policy </a>
                    <a href="https://www.haystackteam.com/legal/cookies" className="text-white hover:underline"> Cookies </a>
                    <a href="https://www.haystackteam.com/legal/gdpr" className="text-white hover:underline"> GDPR </a>
                </div>
            </div>
        </div>
    )
}

export default FifthSection;