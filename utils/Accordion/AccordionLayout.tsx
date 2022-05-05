//REACT-ICONS
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
//IMAGES
import { message, person, file, calendar, shield, mobile, box, book, blog, tool, persons, unknown } from '../../images/utils';
//NEXTJS-IMAGE
import Image from 'next/image';


function AccordionLayout({ title, index, activeIndex, setActiveIndex }) {
    const handleSetIndex = (index) => (activeIndex === index) ? setActiveIndex(0) : setActiveIndex(index);


    return (
        <>
            <div
                className="w-full p-2 mt-2 rounded text-whiter"
                onClick={() => handleSetIndex(index)}
            >
                <div className="flex items-center justify-between">
                    <div className={`font-bold ${(activeIndex === index) && `text-orange`}`}> {title} </div>

                    <div className="flex items-center justify-center rounded-2xl">
                        {
                            (activeIndex !== index)
                                ? <MdOutlineKeyboardArrowDown className="w-8 h-8" />
                                : <MdOutlineKeyboardArrowUp className="w-8 h-8" />
                        }
                    </div>
                </div>

                <div className="w-full mt-2">
                    <div className="w-full border-t border-dim"></div>
                </div>
            </div>


            {(activeIndex === index && index === 1) && (
                <div className="w-full bg-whiter p-4 mb-10">
                    <div className="flex flex-col items-start">
                        <p className="text-lightest text-sm pb-5"> Core Features </p>

                        <a href="https://www.haystackteam.com/core/communication" className="text-darkest text-lg flex items-center"> <Image src={message} alt="" /> <span className="ml-4">Communication</span> </a>
                        <a href="https://www.haystackteam.com/core/directory" className="text-darkest text-lg flex items-center mt-4"> <Image src={person} alt="" /> <span className="ml-4">Directory</span> </a>
                        <a href="https://www.haystackteam.com/core/knowledge" className="text-darkest text-lg flex items-center mt-4"> <Image src={file} alt="" /> <span className="ml-4">Knowledge</span> </a>
                        <a href="https://www.haystackteam.com/core/events" className="text-darkest text-lg flex items-center mt-4"> <Image src={calendar} alt="" /> <span className="ml-4">Events</span> </a>
                    </div>

                    <div className="flex flex-col items-start mt-6">
                        <p className="text-lightest text-sm pb-3"> More </p>

                        <a href="https://www.haystackteam.com/more/security" className="text-darkest text-lg flex items-center"> <Image src={shield} alt="" /> <span className="ml-4">Security</span> </a>
                        <a href="https://www.haystackteam.com/more/mobile-app" className="text-darkest text-lg flex items-center ml-0.5 mt-4"> <Image src={mobile} alt="" /> <span className="ml-4">Mobile App</span> </a>
                    </div>
                </div>
            )}


            {(activeIndex === index && index === 2) && (
                <div className="w-full bg-whiter p-4 mb-10">
                    <div className="flex flex-col items-start">
                        <p className="text-lightest text-sm pb-3"> Resources </p>

                        <button className="text-darkest text-lg flex items-center"> <Image src={box} alt="" /> <span className="ml-4">Haystack University</span> </button>
                        <button className="text-darkest text-lg flex items-center mt-4"> <Image src={book} alt="" /> <span className="ml-4">Press Relations</span> </button>
                        <button className="text-darkest text-lg flex items-center mt-4"> <Image src={blog} alt="" /> <span className="ml-4">Blog</span> </button>
                    </div>

                    <div className="flex flex-col items-start mt-6">
                        <p className="text-lightest text-sm pb-3"> Company </p>

                        <button className="text-darkest text-lg flex items-center"> <Image src={tool} alt="" /> <span className="ml-4">Help & support</span> </button>
                        <button className="text-darkest text-lg flex items-center mt-4"> <Image src={persons} alt="" /> <span className="ml-4">Careers</span> </button>
                        <button className="text-darkest text-lg flex items-center mt-4"> <Image src={unknown} alt="" /> <span className="ml-4">Contact Us</span> </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default AccordionLayout;