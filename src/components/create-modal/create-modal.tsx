import { useEffect, useState } from "react";
import { useBookDataMutate } from "../../hooks/useBookDataMutate";
import { BookData } from "../../interface/BookData";

import "./modal.css";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void

}

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue}: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>        
        </>
    )
}


export function CreateModal({ closeModal }: ModalProps){
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [position, setPosition] = useState(0);
    const [link, setLink] = useState("");
    const { mutate, isSuccess, isLoading } = useBookDataMutate();

    const submit = () => {
        const bookData: BookData = {
            title,
            position,
            image,
            link
        }

        mutate(bookData)
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])
    
    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre uma nova obra</h2>
                <form className="input-container">
                    <Input label="title" value={title} updateValue={setTitle}/>
                    <Input label="position" value={position} updateValue={setPosition}/>
                    <Input label="image" value={image} updateValue={setImage}/>
                    <Input label="link" value={link} updateValue={setLink}/>
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isLoading ? 'postando...' : 'postar'}
                </button>
            </div>
        </div>
    )
}