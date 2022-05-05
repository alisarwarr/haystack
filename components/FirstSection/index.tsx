//REACT-ICONS
import { RiArrowRightSLine } from 'react-icons/ri';
//REACT-RESPONSIVE
import { useMediaQuery } from 'react-responsive';
//IMAGES
import { pic } from '../../images';
//NEXTJS-IMAGE
import Image from 'next/image';


function FirstSection() {
    const screen1150= useMediaQuery({ query: "(max-width: 1150px)" });
    const screen1140= useMediaQuery({ query: "(max-width: 1140px)" });
    const screen1015= useMediaQuery({ query: "(max-width: 1015px)" });
    const screen935 = useMediaQuery({ query: "(max-width: 935px)" });
    const screen880 = useMediaQuery({ query: "(max-width: 880px)" });
    const screen830 = useMediaQuery({ query: "(max-width: 830px)" });
    const screen780 = useMediaQuery({ query: "(max-width: 780px)" });
    const screen770 = useMediaQuery({ query: "(max-width: 770px)" });
    const screen720 = useMediaQuery({ query: "(max-width: 720px)" });
    const screen670 = useMediaQuery({ query: "(max-width: 670px)" });
    const screen610 = useMediaQuery({ query: "(max-width: 610px)" });
    const screen575 = useMediaQuery({ query: "(max-width: 575px)" });
    const screen555 = useMediaQuery({ query: "(max-width: 555px)" });
    const screen505 = useMediaQuery({ query: "(max-width: 505px)" });
    const screen460 = useMediaQuery({ query: "(max-width: 460px)" });
    const screen430 = useMediaQuery({ query: "(max-width: 430px)" });
    const screen420 = useMediaQuery({ query: "(max-width: 420px)" });
    const screen400 = useMediaQuery({ query: "(max-width: 400px)" });
    const screen355 = useMediaQuery({ query: "(max-width: 355px)" });
    const screen350 = useMediaQuery({ query: "(max-width: 350px)" });
    const screen325 = useMediaQuery({ query: "(max-width: 325px)" });
    const screen310 = useMediaQuery({ query: "(max-width: 310px)" });
    const screen280 = useMediaQuery({ query: "(max-width: 280px)" });
    const screen260 = useMediaQuery({ query: "(max-width: 260px)" });


    return (
        <div className="w-full bg-bgcolor flex items-center flex-col">
            <div className={`w-[62.5%] mt-16 flex items-center justify-center flex-col text-whiter ${!screen430 ? (!screen575 ? (screen770 ? `pt-10` : `pt-10`) : `pt-14`) : `pt-20`}`}>
                <p className={`text-center font-semibold tracking-wide leading-[72.5px] ${!screen350 ? (!screen575 ? (screen1150 && `w-[50rem]`) : `!w-[28rem]`) : `!w-[14rem]`} ${screen770 && `w-[36.5rem] !leading-[2.65rem] -mt-9`} ${!screen350 ? (!screen430 ? (screen770 ? `text-4xl` : `text-[4.025rem]`) : `text-3xl !leading-[2.15rem]`) : `text-2xl !leading-[1.45rem]`}`}>
                    Haystack makes big companies feel <span className="text-pinky">smaller</span>
                </p>

                <p className={`text-center font-normal leading-snug ${!screen770 ? (screen1150 ? `w-[45rem]` : `w-[85.15%]`) : `w-[130%]`} ${!screen350 ? (!screen430 ? (screen770 ? `text-md` : `text-lg`) : `text-sm`) : `text-[0.795rem]`} ${screen350 ? `mt-8` : `mt-7`}`}>
                    Connect every employee in your organization to the people, information, and resources they need to succeed and thrive with Haystack.
                </p>

                <div className={`flex ${screen325 ? `mt-6` : `mt-8`} ${screen770 ? `justify-center flex-col` : `items-center`}`}>
                    <a href="https://www.haystackteam.com/demo-request" className={`${screen420 && `w-[14rem]`} ${screen770 ? `mt-2` : `ml-3`} tracking-wide font-medium ${screen350 ? `text-[0.835rem]` : `text-[0.935rem]`} rounded-[4.5px] ${!screen430 ? `pt-[0.64rem] pb-[0.64rem]` : `pt-[0.37rem] pb-[0.37rem]`} ${!screen770 ? `pl-5 pr-2.5 flex items-center` : `pl-14 pr-10 flex items-center justify-around`} text-whiter bg-orange hover:bg-potato`}> <div className="flex-1">{`${screen770 ? `Discovery Call` : `Book Discovery Call`}`}</div> <RiArrowRightSLine size="20" /> </a>
                    <a href="https://www.haystackteam.com/demo-request" className={`${screen420 && `w-[14rem]`} ${screen770 ? `mt-2` : `ml-3`} tracking-wide font-medium ${screen350 ? `text-[0.835rem]` : `text-[0.935rem]`} rounded-[4.5px] ${!screen430 ? `pt-[0.64rem] pb-[0.64rem]` : `pt-[0.32rem] pb-[0.32rem]`} ${!screen770 ? `pl-5 pr-2.5 flex items-center` : `pl-14 pr-10 flex items-center justify-around`} text-whiter hover:!border-whiter`} style={{ border: "1px solid rgba(255,255,255,.2)" }}> <div className="flex-1">Watch Video</div> <RiArrowRightSLine size="20" /> </a>
                </div>
            </div>


            <div className={`mt-24 h-auto ${!screen260 ? (!screen280 ? (!screen310 ? (!screen355 ? (!screen400 ? (!screen460 ? (!screen505 ? (!screen555 ? (!screen610 ? (!screen670 ? (!screen720 ? (!screen780 ? (!screen830 ? (!screen880 ? (!screen935 ? (!screen1015 ? (screen1140 ? `w-[1009px]` : `w-[1129px]`) : `w-[929px]`) : `w-[879px]`) : `w-[829px]`) : `w-[779px]`) : `w-[709px]`) : `w-[661px]`) : `w-[601px]`) : `w-[551px]`) : `w-[501px]`) : `w-[453px]`) : `w-[393px]`) : `w-[353px]`) : `w-[303px]`) : `w-[273px]`) : `w-[253px]`) : `w-[233px]`}`}>
                <Image src={pic} alt=""/>
            </div>
        </div>
    )
}

export default FirstSection;