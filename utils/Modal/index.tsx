//REACT-RESPONSIVE
import { useMediaQuery } from 'react-responsive';
//REACT-RESPONSIVE-MODAL
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
//COMPONENT
import Accordion from '../Accordion';


function Modal_({ open, setOpen }: { open: boolean, setOpen: Function }) {
    const screen540 = useMediaQuery({ query: "(max-width: 540px)" });
    
    
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            showCloseIcon={false}
            center={true}
            styles={{ modal: { background: "#442b3d", color: "#fff", width: "91.5%", marginTop: screen540 ? "9.75rem" : "7rem", marginLeft: "1rem" } }}
        >
            <Accordion
            />

            <div className="-mt- flex">
                <a href="https://www.haystackteam.com/demo-request" className="font-bold p-2 mt-4 w-full"> Contact Sales </a>
            </div>


            <button className="mt-6 w-full flex items-center rounded-[4.5px] text-whiter bg-orange hover:bg-potato font-bold tracking-wide text-[0.935rem] pt-[0.64rem] pb-[0.64rem] pl-5 pr-4">
                Request Demo
            </button>
        </Modal>
    )
}

export default Modal_;