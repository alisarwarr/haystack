import { useState } from 'react';
//COMPONENTS
import AccordionLayout from './AccordionLayout';


function Accordion() {
    const [ activeIndex, setActiveIndex ] = useState(0);


    return (
        <div className="flex flex-col justify-center items-center">
            <AccordionLayout
                title="Product"
                index={1}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            />

            <AccordionLayout
                title="Resources"
                index={2}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            />
        </div>
    )
}

export default Accordion;