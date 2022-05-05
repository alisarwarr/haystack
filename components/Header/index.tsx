import { useState } from 'react';
//REACT-ICONS
import { RiArrowRightSLine } from 'react-icons/ri';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
//REACT-RESPONSIVE
import { useMediaQuery } from 'react-responsive';
//IMAGES
import { logoNtext } from '../../images';
import { message, person, file, calendar, shield, mobile, box, book, blog, tool, persons, unknown } from '../../images/utils';
//NEXTJS-IMAGE
import Image from 'next/image';
//COMPONENT
import Modal from '../../utils/Modal';


function Header() {
    const screen1346= useMediaQuery({ query: "(max-width: 1346px)" });
    const screen890 = useMediaQuery({ query: "(max-width: 890px)" });
    const screen770 = useMediaQuery({ query: "(max-width: 770px)" });


    const [ open, setOpen ] = useState<boolean>(false);
    const onOpenModal  = () => setOpen(true);
    const onCloseModal = () => setOpen(false);


    const [ hoverProduct, setHoverProduct ] = useState<boolean>(false);
    const [ hoverResources, setHoverResources ] = useState<boolean>(false);


    return (
        <div className="w-full -mt-4 pb-6 flex items-center flex-col sticky top-0 z-[9999]">

            <div className="w-full h-[90px] bg-bgcolor flex items-center justify-between sticky top-0">
                <div className="ml-16 flex items-center">
                    <div>
                        <Image src={logoNtext} alt=""/>
                    </div>

                    {
                        !screen770 && (
                            <div className="ml-12 flex items-center">
                                <button onMouseOver={() => { setHoverProduct(true); setHoverResources(false); }} onClick={() => setHoverProduct(prev => !prev)} className="mr-3.5 flex items-center justify-between font-medium tracking-wide text-[0.965rem] text-[hsla(0,0%,100%,.7)] hover:text-whiter">
                                    <span className="mr-1.5">Product</span> {hoverProduct ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                                </button>

                                <button onMouseOver={() => { setHoverResources(true); setHoverProduct(false); }} onClick={() => setHoverResources(prev => !prev)} className="mr-3.5 flex items-center justify-between font-medium tracking-wide text-[0.965rem] text-[hsla(0,0%,100%,.7)] hover:text-whiter">
                                    <span className="mr-1.5">Resources</span> {hoverResources ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                                </button>
                            </div>
                        )
                    }
                </div>


                {
                    !screen770 && (
                        <div className={`pr-7 flex ${screen890 ? `flex-col` : `flex-row items-center`}`}>
                            <a href="https://www.haystackteam.com/demo-request" className={`mr-3.5 font-medium tracking-wide text-[0.965rem] text-[hsla(0,0%,100%,.7)] hover:text-whiter ${screen890 && `mb-2 ml-6`}`}> Contact Sales </a>
                            <a href="https://www.haystackteam.com/demo-request" className="ml-3.5 font-medium tracking-normal text-[0.965rem] text-whiter bg-orange hover:bg-potato pt-2 pb-2 pl-6 pr-3 rounded-[4.5px] flex items-center"> <div>Request Demo</div> <RiArrowRightSLine size="20" /> </a>
                        </div>
                    )
                }


                {
                    screen770 && (
                        <>
                            {
                                open ? (
                                    <button type="button" onClick={onCloseModal} data-modal-toggle="defaultModal" className="focus:outline-none text-whiter focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                                        <AiOutlineClose />
                                    </button>
                                ) : (
                                    <button type="button" onClick={onOpenModal} data-modal-toggle="defaultModal" className="focus:outline-none text-whiter focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                                        <AiOutlineMenu />
                                    </button>
                                )
                            }

                            <Modal
                                open={open}
                                setOpen={setOpen}
                            />
                        </>
                    )
                }
            </div>


            <div className="w-full h-0 -mt-5 flex items-center justify-between sticky top-0" onMouseLeave={() => { setHoverResources(false); setHoverProduct(false); }}>
                <div className="ml-[17.4rem] mt-64 flex items-center">

                    {hoverProduct && (
                        <div className="bg-whiter rounded-md p-4 w-[26rem] flex justify-center">

                            <div className="flex flex-col items-start">
                                <p className="text-lightest text-sm pb-5"> Core Features </p>

                                <a href="https://www.haystackteam.com/core/communication" className="text-darkest text-lg flex items-center hover:text-orange"> <Image src={message} alt="" /> <span className="ml-4">Communication</span> </a>
                                <a href="https://www.haystackteam.com/core/directory" className="text-darkest text-lg flex items-center hover:text-orange mt-4"> <Image src={person} alt="" /> <span className="ml-4">Directory</span> </a>
                                <a href="https://www.haystackteam.com/core/knowledge" className="text-darkest text-lg flex items-center hover:text-orange mt-4"> <Image src={file} alt="" /> <span className="ml-4">Knowledge</span> </a>
                                <a href="https://www.haystackteam.com/core/events" className="text-darkest text-lg flex items-center hover:text-orange mt-4"> <Image src={calendar} alt="" /> <span className="ml-4">Events</span> </a>
                            </div>

                            <div className="flex flex-col items-start mt-0.5 ml-10">
                                <p className="text-lightest text-sm pb-5"> More </p>

                                <a href="https://www.haystackteam.com/more/security" className="text-darkest text-lg flex items-center hover:text-orange"> <Image src={shield} alt="" /> <span className="ml-4">Security</span> </a>
                                <a href="https://www.haystackteam.com/more/mobile-app" className="text-darkest text-lg flex items-center hover:text-orange ml-0.5 mt-4"> <Image src={mobile} alt="" /> <span className="ml-4">Mobile App</span> </a>
                            </div>

                        </div>
                    )}


                    {hoverResources && (
                        <div className="bg-whiter rounded-md p-4 w-[39rem] flex justify-center ml-24 -mt-[4.85rem]">

                            <div className="flex flex-col items-start">
                                <p className="text-lightest text-sm pb-3"> Resources </p>

                                <a href="https://www.haystackteam.com" className="text-darkest text-lg flex items-center hover:text-orange"> <Image src={box} alt="" /> <span className="ml-4">Haystack University</span> <span className="text-[0.75rem] bg-browny text-whiter rounded-md pt-0.5 pb-0.5 pl-2 pr-2 ml-2">Coming Soon</span> </a>
                                <a href="https://www.haystackteam.com" className="text-darkest text-lg flex items-center hover:text-orange mt-4"> <Image src={book} alt="" /> <span className="ml-4">Press Relations</span> </a>
                                <a href="https://www.haystackteam.com/blog" className="text-darkest text-lg flex items-center hover:text-orange mt-4"> <Image src={blog} alt="" /> <span className="ml-4">Blog</span> </a>
                            </div>

                            <div className="flex flex-col items-start mt-0.5 ml-10">
                                <p className="text-lightest text-sm pb-3"> Company </p>

                                <a href="https://jobs.lever.co/Haystack" className="text-darkest text-lg flex items-center hover:text-orange"> <Image src={tool} alt="" /> <span className="ml-4">Help & support</span> </a>
                                <a href="https://jobs.lever.co/Haystack" className="text-darkest text-lg flex items-center hover:text-orange mt-4"> <Image src={persons} alt="" /> <span className="ml-4">Careers</span> </a>
                                <a href="https://support.haystackteam.com/en" className="text-darkest text-lg flex items-center hover:text-orange mt-4"> <Image src={unknown} alt="" /> <span className="ml-4">Contact Us</span> </a>
                            </div>

                        </div>
                    )}

                </div>
            </div>

        </div>
    )
}

export default Header;