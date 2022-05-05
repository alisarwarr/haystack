//REACT-RESPONSIVE
import { useMediaQuery } from 'react-responsive';
//IMAGES
import { pic1, pic2, pic3, pic4, pic5 } from '../../images';
//NEXTJS-IMAGE
import Image from 'next/image';


function ThirdSection() {
    const screen1200= useMediaQuery({ query: "(max-width: 1200px)" });
    const screen1125= useMediaQuery({ query: "(max-width: 1125px)" });
    const screen1050= useMediaQuery({ query: "(max-width: 1050px)" });
    const screen1000= useMediaQuery({ query: "(max-width: 1000px)" });
    const screen960 = useMediaQuery({ query: "(max-width: 960px)" });
    const screen825 = useMediaQuery({ query: "(max-width: 825px)" });
    const screen430 = useMediaQuery({ query: "(max-width: 430px)" });
    const screen380 = useMediaQuery({ query: "(max-width: 380px)" });
    const screen350 = useMediaQuery({ query: "(max-width: 350px)" });
    const screen285 = useMediaQuery({ query: "(max-width: 285px)" });


    return (
        <div className={`w-full flex items-center flex-col text-center ${!screen430 ? (screen1125 ? `mt-20` : `mt-24`) : `mt-12`}`}>
            <p className={`text-darkest h-20 font-bold tracking-wide leading-tight ${!screen380 ? (!screen825 ? (screen1125 ? `w-[65%] text-[2.85rem]` : `w-[70%] text-[3.25rem]`) : `w-[90%] text-[2.15rem]`) : `w-[90%] text-[1.5rem]`}`}>
                See what Haystack can do for your organization.
            </p>


            <div className="w-full flex items-center justify-center flex-col">

                <div className={`w-[90%] flex items-center justify-around mt-40 ${screen960 ? `flex-col -ml-5` : `flex-row ml-10`}`}>
                    <div className={`rounded-md bg-dimmest flex items-center justify-center flex-col ${!screen285 ? (!screen350 ? (!screen430 ? (screen960 ? `w-[25rem] h-[25rem] ml-5` : `w-[85rem] h-full`) : `w-[20rem] h-[20rem] ml-6`) : `w-[16rem] h-[16rem] ml-6`) : `w-[14rem] h-[14rem] ml-6`}`}>
                        <Image src={pic1} alt=""/>
                    </div>


                    <div className={`pb-2 ${screen960 && `mt-14`} ${!screen430 ? (!screen1050 ? (screen1200 ? `ml-12` : `ml-20`) : `ml-10`) : `ml-9`}`}>
                        <p className={`text-darkest text-left tracking-wide font-semibold mt-1 ${screen1200 ? `w-[92%]` : `w-[102%]`} ${!screen430 ? (!screen960 ? (screen1000 ? `text-[36px] leading-[40.45px]` : `text-[42px] leading-[48.45px]`) : `text-[33.25px] leading-[36.95px] text-center`) : `text-[26.25px] leading-[30.95px] ml-0.5 text-center`}`}>
                            Foster a culture of communication.
                        </p>

                        <p className={`mt-6 text-left ${screen430 ? `text-sm` : ` text-lg`}`}>
                            With Haystack, organizations can break down silos, foster employee connections, and streamline communication. Create engaging content, publish across multiple platforms, and measure success—all from one place.
                        </p>

                        <ul className="mt-7">
                            <li className={`mt-2 text-blacker text-left leading-normal tracking-wide text-lg ${screen430 ? `text-sm` : ` text-lg`}`}>
                                Put your brand front and center in beautiful employee newsletters.
                            </li>
                            <li className={`mt-2 text-blacker text-left leading-normal tracking-wide text-lg ${screen430 ? `text-sm` : ` text-lg`}`}>
                                Distribute important information across multiple channels, all at once.
                            </li>
                            <li className={`mt-2 text-blacker text-left leading-normal tracking-wide text-lg ${screen430 ? `text-sm` : ` text-lg`}`}>
                                Bring employees together and build connections with customizable groups.
                            </li>
                        </ul>

                        <div className="flex justify-start mt-12">
                            {
                                screen960 ? (
                                    <a href="https://www.haystackteam.com/core/communication" className={`w-full rounded-[4.5px] hover:!border-blacker text-darkest tracking-wide font-medium text-[0.935rem] pt-[0.64rem] pb-[0.64rem] pl-5 pr-4 flex items-center justify-between ${screen430 ? `-mt-6` : `-mt-0.5`}`} style={{ border: "1px solid #d9d9df" }}>
                                        <div className="-1">Learn More</div> <p>{">"}</p>
                                    </a>
                                ) : (
                                    <a href="https://www.haystackteam.com/core/communication" className={`mt-6 rounded-[4.5px] hover:!border-blacker text-darkest tracking-wide font-medium text-[0.935rem] pt-[0.64rem] pb-[0.64rem] pl-5 pr-4 ${screen960 && `w-full flex items-center`}`} style={{ border: "1px solid #d9d9df" }}>
                                        Learn More {">"}
                                    </a>
                                )
                            }
                        </div>
                    </div>
                </div>


                <div className={`w-[90%] flex items-center justify-around mt-28 ${screen960 ? `flex-col-reverse -ml-5` : `flex-row mr-28`}`}>
                    <div className={`pb-2 ${screen960 && `mt-14`} ${!screen430 ? (!screen1050 ? (screen1200 ? `ml-12` : `ml-20 pr-40`) : `ml-10`) : `ml-9`}`}>
                        <p className={`text-darkest text-left tracking-wide font-semibold mt-1 ${screen1200 ? `w-[92%]` : `w-[102%]`} ${!screen430 ? (!screen960 ? (screen1000 ? `text-[36px] leading-[40.45px]` : `text-[42px] leading-[48.45px]`) : `text-[33.25px] leading-[36.95px] text-center`) : `text-[26.25px] leading-[30.95px] ml-0.5 text-center`}`}>
                            See your whole organization at a glance.
                        </p>

                        <p className={`mt-6 text-left ${screen430 ? `text-sm` : ` text-lg`}`}>
                            As teams grow and evolve, it can be challenging to connect with everyone, especially for distributed employees. Haystack’s company directory and rich employee profiles make colleagues across the world feel like they’re right across the hall.
                        </p>

                        <ul className="mt-7">
                            <li className={`mt-2 text-blacker text-left leading-normal tracking-wide text-lg ${screen430 ? `text-sm` : ` text-lg`}`}>
                                Outline your organization’s structure and reporting relationships with a dynamic org chart.
                            </li>
                            <li className={`mt-2 text-blacker text-left leading-normal tracking-wide text-lg ${screen430 ? `text-sm` : ` text-lg`}`}>
                                Build connections over shared experiences like skills, hobbies, or work history.
                            </li>
                            <li className={`mt-2 text-blacker text-left leading-normal tracking-wide text-lg ${screen430 ? `text-sm` : ` text-lg`}`}>
                                Connect to colleagues easily with employee calendars, Zoom links, and more without leaving their profile.
                            </li>
                        </ul>

                        <div className="flex justify-start mt-12">
                            {
                                screen960 ? (
                                    <a href="https://www.haystackteam.com/core/directory" className={`w-full rounded-[4.5px] hover:!border-blacker text-darkest tracking-wide font-medium text-[0.935rem] pt-[0.64rem] pb-[0.64rem] pl-5 pr-4 flex items-center justify-between ${screen430 ? `-mt-6` : `-mt-0.5`}`} style={{ border: "1px solid #d9d9df" }}>
                                        <div className="-1">Learn More</div> <p>{">"}</p>
                                    </a>
                                ) : (
                                    <a href="https://www.haystackteam.com/core/directory" className={`mt-6 rounded-[4.5px] hover:!border-blacker text-darkest tracking-wide font-medium text-[0.935rem] pt-[0.64rem] pb-[0.64rem] pl-5 pr-4 ${screen960 && `w-full flex items-center`}`} style={{ border: "1px solid #d9d9df" }}>
                                        Learn More {">"}
                                    </a>
                                )
                            }
                        </div>
                    </div>


                    <div className={`rounded-md bg-dimmest flex items-center justify-center flex-col ${!screen285 ? (!screen350 ? (!screen430 ? (screen960 ? `w-[25rem] h-[25rem] ml-5` : `w-[85rem] h-full`) : `w-[20rem] h-[20rem] ml-6`) : `w-[16rem] h-[16rem] ml-6`) : `w-[14rem] h-[14rem] ml-6`}`}>
                        <Image src={pic2} alt=""/>
                    </div>
                </div>


                <div className={`w-[90%] flex items-center justify-around mt-28 ${screen960 ? `flex-col -ml-5` : `flex-row ml-10`}`}>
                    <div className={`rounded-md bg-dimmest flex items-center justify-center flex-col ${!screen285 ? (!screen350 ? (!screen430 ? (screen960 ? `w-[25rem] h-[25rem] ml-5` : `w-[85rem] h-full`) : `w-[20rem] h-[20rem] ml-6`) : `w-[16rem] h-[16rem] ml-6`) : `w-[14rem] h-[14rem] ml-6`}`}>
                        <Image src={pic3} alt=""/>
                    </div>


                    <div className={`pb-2 ${screen960 && `mt-14`} ${!screen430 ? (!screen1050 ? (screen1200 ? `ml-12` : `ml-20`) : `ml-10`) : `ml-9`}`}>
                        <p className={`text-darkest text-left tracking-wide font-semibold mt-1 ${screen1200 ? `w-[92%]` : `w-[102%]`} ${!screen430 ? (!screen960 ? (screen1000 ? `text-[36px] leading-[40.45px]` : `text-[42px] leading-[48.45px]`) : `text-[33.25px] leading-[36.95px] text-center`) : `text-[26.25px] leading-[30.95px] ml-0.5 text-center`}`}>
                            Catalog and share company knowledge.
                        </p>

                        <p className={`mt-6 text-left ${screen430 ? `text-sm` : ` text-lg`}`}>
                            Spend less time searching for information and more time making progress toward your company goals. Haystack’s knowledge base tools make it quick and simple for employees to access the materials they need, no matter where they are.
                        </p>

                        <ul className="mt-7">
                            <li className={`mt-2 text-blacker text-left leading-normal tracking-wide text-lg ${screen430 ? `text-sm` : ` text-lg`}`}>
                                Share a unified company knowledge base with company resources, links, and glossary.
                            </li>
                            <li className={`mt-2 text-blacker text-left leading-normal tracking-wide text-lg ${screen430 ? `text-sm` : ` text-lg`}`}>
                                Search across people, events, and company resources, instantly.
                            </li>
                            <li className={`mt-2 text-blacker text-left leading-normal tracking-wide text-lg ${screen430 ? `text-sm` : ` text-lg`}`}>
                                Promote knowledge sharing across departments and focus resources in custom groups.
                            </li>
                        </ul>

                        <div className="flex justify-start mt-12">
                            {
                                screen960 ? (
                                    <a href="https://www.haystackteam.com/core/knowledge" className={`w-full rounded-[4.5px] hover:!border-blacker text-darkest tracking-wide font-medium text-[0.935rem] pt-[0.64rem] pb-[0.64rem] pl-5 pr-4 flex items-center justify-between ${screen430 ? `-mt-6` : `-mt-0.5`}`} style={{ border: "1px solid #d9d9df" }}>
                                        <div className="-1">Learn More</div> <p>{">"}</p>
                                    </a>
                                ) : (
                                    <a href="https://www.haystackteam.com/core/knowledge" className={`mt-6 rounded-[4.5px] hover:!border-blacker text-darkest tracking-wide font-medium text-[0.935rem] pt-[0.64rem] pb-[0.64rem] pl-5 pr-4 ${screen960 && `w-full flex items-center`}`} style={{ border: "1px solid #d9d9df" }}>
                                        Learn More {">"}
                                    </a>
                                )
                            }
                        </div>
                    </div>
                </div>


                <div className={`w-[90%] flex items-center justify-around mt-28 ${screen960 ? `flex-col-reverse -ml-5` : `flex-row mr-28`}`}>
                    <div className={`pb-2 ${screen960 && `mt-14`} ${!screen430 ? (!screen1050 ? (screen1200 ? `ml-12` : `ml-20 pr-40`) : `ml-10`) : `ml-9`}`}>
                        <p className={`text-darkest text-left tracking-wide font-semibold mt-1 ${screen1200 ? `w-[92%]` : `w-[102%]`} ${!screen430 ? (!screen960 ? (screen1000 ? `text-[36px] leading-[40.45px]` : `text-[42px] leading-[48.45px]`) : `text-[33.25px] leading-[36.95px] text-center`) : `text-[26.25px] leading-[30.95px] ml-0.5 text-center`}`}>
                            Organize irresistible internal company events.
                        </p>

                        <p className={`mt-6 text-left ${screen430 ? `text-sm` : ` text-lg`}`}>
                            Whether you’re planning an in-person, hybrid, or online company event, Haystack has the tools you need to make sure it’s one to remember.
                        </p>

                        <ul className="mt-7">
                            <li className={`mt-2 text-blacker text-left leading-normal tracking-wide text-lg ${screen430 ? `text-sm` : ` text-lg`}`}>
                                Surprise and delight attendees with vibrant, engaging event invites and promotion tools.
                            </li>
                            <li className={`mt-2 text-blacker text-left leading-normal tracking-wide text-lg ${screen430 ? `text-sm` : ` text-lg`}`}>
                                Gather important information like food preferences, allergies, and sizing with customizable registration forms.
                            </li>
                            <li className={`mt-2 text-blacker text-left leading-normal tracking-wide text-lg ${screen430 ? `text-sm` : ` text-lg`}`}>
                                Boost attendance with a prominent dashboard display, “add to calendar” links, and RSVP reminders.
                            </li>
                        </ul>

                        <div className="flex justify-start mt-12">
                            {
                                screen960 ? (
                                    <a href="https://www.haystackteam.com/core/events" className={`w-full rounded-[4.5px] hover:!border-blacker text-darkest tracking-wide font-medium text-[0.935rem] pt-[0.64rem] pb-[0.64rem] pl-5 pr-4 flex items-center justify-between ${screen430 ? `-mt-6` : `-mt-0.5`}`} style={{ border: "1px solid #d9d9df" }}>
                                        <div className="-1">Learn More</div> <p>{">"}</p>
                                    </a>
                                ) : (
                                    <a href="https://www.haystackteam.com/core/events" className={`mt-6 rounded-[4.5px] hover:!border-blacker text-darkest tracking-wide font-medium text-[0.935rem] pt-[0.64rem] pb-[0.64rem] pl-5 pr-4 ${screen960 && `w-full flex items-center`}`} style={{ border: "1px solid #d9d9df" }}>
                                        Learn More {">"}
                                    </a>
                                )
                            }
                        </div>
                    </div>


                    <div className={`rounded-md bg-dimmest flex items-center justify-center flex-col ${!screen285 ? (!screen350 ? (!screen430 ? (screen960 ? `w-[25rem] h-[25rem] ml-5` : `w-[85rem] h-full`) : `w-[20rem] h-[20rem] ml-6`) : `w-[16rem] h-[16rem] ml-6`) : `w-[14rem] h-[14rem] ml-6`}`}>
                        <Image src={pic4} alt=""/>
                    </div>
                </div>


                <div className={`w-[90%] flex items-center justify-around mt-28 ${screen960 ? `flex-col -ml-5` : `flex-row ml-10`}`}>
                    <div className={`rounded-md bg-dimmest flex items-center justify-center flex-col ${!screen285 ? (!screen350 ? (!screen430 ? (screen960 ? `w-[25rem] h-[25rem] ml-5` : `w-[85rem] h-full`) : `w-[20rem] h-[20rem] ml-6`) : `w-[16rem] h-[16rem] ml-6`) : `w-[14rem] h-[14rem] ml-6`}`}>
                        <Image src={pic5} alt=""/>
                    </div>


                    <div className={`pb-2 ${screen960 && `mt-14`} ${!screen430 ? (!screen1050 ? (screen1200 ? `ml-12` : `ml-20`) : `ml-10`) : `ml-9`}`}>
                        <p className={`text-darkest text-left tracking-wide font-semibold mt-1 ${screen1200 ? `w-[92%]` : `w-[102%]`} ${!screen430 ? (!screen960 ? (screen1000 ? `text-[36px] leading-[40.45px]` : `text-[42px] leading-[48.45px]`) : `text-[33.25px] leading-[36.95px] text-center`) : `text-[26.25px] leading-[30.95px] ml-0.5 text-center`}`}>
                            No desk? No problem.
                        </p>

                        <p className={`mt-6 text-left ${screen430 ? `text-sm` : ` text-lg`}`}>
                            Empower everyone on your team with equal access to the people, information, and resources they need to grow and succeed with iOS, Android, and mobile web apps.
                        </p>

                        <ul className="mt-7">
                            <li className={`mt-2 text-blacker text-left leading-normal tracking-wide text-lg ${screen430 ? `text-sm` : ` text-lg`}`}>
                                Provide more flexibility with a mobile-optimized web app accessible through any browser.
                            </li>
                            <li className={`mt-2 text-blacker text-left leading-normal tracking-wide text-lg ${screen430 ? `text-sm` : ` text-lg`}`}>
                                Ensure easy access through full-featured iOS and Android apps.
                            </li>
                            <li className={`mt-2 text-blacker text-left leading-normal tracking-wide text-lg ${screen430 ? `text-sm` : ` text-lg`}`}>
                                Reach employees where they work with a custom-branded Slack bot and mobile push notifications.
                            </li>
                        </ul>

                        <div className="flex justify-start mt-12">
                            {
                                screen960 ? (
                                    <a href="https://www.haystackteam.com/more/mobile-app" className={`w-full rounded-[4.5px] hover:!border-blacker text-darkest tracking-wide font-medium text-[0.935rem] pt-[0.64rem] pb-[0.64rem] pl-5 pr-4 flex items-center justify-between ${screen430 ? `-mt-6` : `-mt-0.5`}`} style={{ border: "1px solid #d9d9df" }}>
                                        <div className="-1">Learn More</div> <p>{">"}</p>
                                    </a>
                                ) : (
                                    <a href="https://www.haystackteam.com/more/mobile-app" className={`mt-6 rounded-[4.5px] hover:!border-blacker text-darkest tracking-wide font-medium text-[0.935rem] pt-[0.64rem] pb-[0.64rem] pl-5 pr-4 ${screen960 && `w-full flex items-center`}`} style={{ border: "1px solid #d9d9df" }}>
                                        Learn More {">"}
                                    </a>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdSection;