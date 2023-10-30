
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ModalCase from "./ModalCase";
import  axios  from "axios";

export default function Detail() {
    const [listfilm, setListfilm] = useState()
    const getListfilm = async () => {
        try {
            const response = await axios.get("https://653f92c39e8bd3be29e0d30d.mockapi.io/api/v1/movies");
            setListfilm(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getListfilm();
    }, []
    )
    const [isOpen, setIsOpen] = useState(false);
    const { id } = useParams()
    const thisfilm = listfilm?.find((film) => String(film.id) === id)

    return (
        <>
            <div className="row container">
                <div className="col s12 m12">
                    <div className="card">
                        <div className="card-image">
                            <img src={thisfilm?.detailImg} />
                            <span className="card-title">{thisfilm?.title}</span>
                            <a onClick={() => setIsOpen(true)} class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">ondemand_video</i></a>
                            {isOpen && <ModalCase setIsOpen={setIsOpen} thisfilm={thisfilm} />}
                        </div>
                        <div className="card-content">
                            <p>{thisfilm?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}