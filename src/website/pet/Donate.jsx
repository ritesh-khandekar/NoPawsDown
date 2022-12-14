import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getNGOs } from "../actions/ngo";
import Loader from "../components/Loader";
import "../user/effects.css"
import "./bg.css"
import { motion } from "framer-motion"

function StarRating(props) {
    const rating = props.rating;
    const val = parseInt(rating);
    let stars = []
    for (let i = 1; i <= 5; i++) {
        if (i <= val) {
            stars.push(<span className="fa fa-star checked"></span>);
        } else {
            stars.push(<span className="fa fa-star"></span>);
        }
    }
    return stars;
}

function DonatePage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [NGOInfo, setNGOInfo] = useState([])
    const [isProgress, setIsProgress] = useState(true)

    useEffect(() => {
        dispatch(getNGOs(setIsProgress, setNGOInfo))
    }, [])

    const checkoutPage = async (data) => {
        localStorage.setItem("selectedNGO", JSON.stringify(data))
        navigate(data._id)
    }

    // const ngoData = [
    //     { "id": 0, "name": "Stray Matters Foundation", "address": "31, Agarwal Life Style (Kavya) Global City Chikal, Road, Virar West, Dongare, Maharashtra 401303", "reviews": 1, "stars": 5, "image": "https://scontent.fpnq7-4.fna.fbcdn.net/v/t1.6435-9/70119440_107758293943680_7408863820195561472_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=y_RPwK_Pd2sAX-PFoMr&_nc_ht=scontent.fpnq7-4.fna&oh=00_AT9ie8uSITOljKqwpQjjJwLnvB9Ndxg-nFrvpw81yYirjw&oe=637D3F07", "phone": "8293027942" },
    //     { "id": 1, "name": "Animals Matters to me", "address": "Rupakuchi, Assam 781314", "reviews": 8, "stars": 4.8, "phone": "9769806731", "image": "https://www.amtmindia.org/wp-content/uploads/2021/10/cropped-amtm-india-logo.png" },
    //     { "id": 2, "name": "Animal Rescue and Care", "address": "Mumbai, Maharashtra", "reviews": 12, "stars": 4.8, "phone": "9920722633", "image": "https://i.pinimg.com/736x/65/95/54/659554706213492ef44308c5983003fa--animal-adoption-animal-rescue.jpg" },
    //     { "id": 3, "name": "Rroaming Paws Foundation", "address": "Vasai-Virar, Maharashtra", "reviews": 21, "stars": 4.4, "phone": "8848230202", "image": "https://scontent.fpnq7-5.fna.fbcdn.net/v/t39.30808-6/300826557_413814367528296_1326438895483373609_n.png?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xQtb-Hy59K8AX-ZwAZk&_nc_ht=scontent.fpnq7-5.fna&oh=00_AT9NE9-RaMKq38u9H0NmFG3avaphRZJlF9jZRO-GNrPmjw&oe=635DC538" },
    // ]

    return <>
        {
            isProgress ?
                <Loader /> :
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="d-flex p-2 flex-wrap justify-content-center">
                    {
                        NGOInfo ? 
                        NGOInfo.ngolist.map((data, i) => <div key={"ngo" + i} className="card m-1 shadow" style={{ width: 18 + "rem" }}>
                            <img src={data.image} height="250px" className="card-img-top" alt={"Image of " + data.name} />
                            <div className="card-body">
                                <h5 className="card-title text-secondary">{data.name}</h5>
                                <p className="card-text">Rating: <StarRating rating={data.stars} /> ({data.reviews})</p>
                                {data.phone ? <p className="card-text">Contact: {data.phone}</p> : "    "}
                                <div className="text-muted card-text text-nowrap" data-toggle="tooltip" data-placement="top" title={data.address}><i><b></b>{data.address.slice(0, 30) + "..."}</i></div>
                                <button onClick={() => { checkoutPage(data) }} className="btn btn-primary mx-auto d-block btn-lg text-white my-2" >Donate</button>
                            </div>
                        </div>)
                        :""
                    }
                </motion.div>
        }
    </>
}
export default DonatePage;