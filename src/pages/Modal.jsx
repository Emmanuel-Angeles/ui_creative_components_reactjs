import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const Modal = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(!openModal);
    }

    return (
        <div className='containerCenter'>
            <button className='button_primary' onClick={handleOpenModal}>Abrir modal</button>
            <div className={`container_modal ${openModal ? "show_container_modal" : ""}`}>
                 <div className='modal_overlay' onClick={handleOpenModal}></div>
                 <button className='modal_button_close' onClick={handleOpenModal}>
                    <FontAwesomeIcon icon={faClose} />
                 </button>
                 <div className='modal_content'>
                    <h1>Contenido de modal</h1>
                 </div>
            </div>
        </div>
    )
}

export default Modal