import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ModalCase from "./ModalCase";
import axios from 'axios'
import Button from '@mui/material/Button';

export default function Edit() {
    const [listfilm, setListfilm] = useState()

    async function getListfilm() {
        try {
            await axios.get(
                'https://653f92c39e8bd3be29e0d30d.mockapi.io/api/v1/movies',
                {
                    headers: {
                        Accept: 'application/json',
                    },
                },
            ).then(response => {
                setListfilm(response.data);
            });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    }

    useEffect(() => {
        getListfilm();
    }, []
    )
    const [isOpen, setIsOpen] = useState(false);
    const { id } = useParams()
    const thisfilm = listfilm?.find((film) => String(film.id) == id)
    //update movie
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [nation, setNation] = useState()
    const [year, setYear] = useState()
    const [detailImg, setDetailImg] = useState()
    const [clip, setClip] = useState()
    const [image, setImage] = useState()
    const [success, setSuccess] = useState()
    useEffect(() => {
        if (!title && !description && !nation && !year && !detailImg && !clip && !image) {
            setTitle(thisfilm?.title)
            setDescription(thisfilm?.description)
            setNation(thisfilm?.nation)
            setYear(thisfilm?.year)
            setDetailImg(thisfilm?.detailImg)
            setClip(thisfilm?.clip)
            setImage(thisfilm?.image)
        }
    }, [listfilm])
    const handleUpdateMovie = async (event) => {
        event.preventDefault()
        try {
            // 👇️ const data: CreateUserResponse
            const { data, status } = await axios.put(
                `https://653f92c39e8bd3be29e0d30d.mockapi.io/api/v1/movies/${thisfilm?.id}`,
                {
                    id:thisfilm?.id,
                    title: title,
                    image: image,
                    detailImg: detailImg,
                    clip: clip,
                    description: description,
                    year: year,
                    nation: nation
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                },
            );
            getListfilm();
            setSuccess("Update movie success")
            console.log(JSON.stringify(data, null, 4));
            console.log(status);
            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    }

    return (
        <>
            <div className="row">
                <h3>Update movie {thisfilm?.title} </h3>
                <form onSubmit={handleUpdateMovie} className="col s12">
                    <div className="row">
                        <div className="input-field col s4">
                            Title <input id="title" type="text" className="validate" required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <label htmlFor="title"></label>
                        </div>
                        <div className="input-field col s4">
                            Nation<input id="nation" type="text" className="validate" required
                                value={nation}
                                onChange={(e) => setNation(e.target.value)}
                            />
                            <label htmlFor="last_name"></label>
                        </div>
                        <div className="input-field col s4">
                            Release Year <input id="year" type="number" className="validate" required
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                            />
                            <label htmlFor="text"></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            Description<input id='description' type="text" className="validate" required
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <label htmlFor="phone"></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            Image <input id="image" type="text" className="validate" required
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                            <label htmlFor="text"></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            Detail Image<input id="detailImg" type="text" className="validate" required
                                value={detailImg}
                                onChange={(e) => setDetailImg(e.target.value)}
                            />
                            <label htmlFor="text"></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            Clip <input id="clip" type="text" className="validate" required
                                value={clip}
                                onChange={(e) => setClip(e.target.value)}
                            />
                            <label htmlFor="text"></label>
                        </div>
                    </div>
                    <Button type='submit' variant="contained" disableElevation className="grey darken-3">
                        Update Movie
                    </Button>
                    <h4 style={{ color: "grey" }}>{success}</h4>
                </form>
            </div>
        </>
    )
}