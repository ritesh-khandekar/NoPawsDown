import "../user/RegisterForm.css"

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
    const ngoData = [
        { "name": "Empowering Humanity NGO", "address": "31, Agarwal Life Style (Kavya) Global City Chikal, Road, Virar West, Dongare, Maharashtra 401303", "reviews": 1, "stars": 5, "image": "https://www.empoweringhumanity.org/wp-content/uploads/2021/09/cropped-Untitled-design-24.jpg", "phone": "8293027942" },
        { "name": "Apollo Charitable Foundation", "address": "Rupakuchi, Assam 781314", "reviews": 12, "stars": 4.8, "phone": "9769806731", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Logo_Apollo_Charitable_Foundation_%28N.G.O%29.jpg/450px-Logo_Apollo_Charitable_Foundation_%28N.G.O%29.jpg" },
    ]
    const cards = ngoData.map((data, i) => {
        return <div key={"ngo"+i} className="card m-1 shadow" style={{ width: 18 + "rem" }}>
            <img src={data.image} height="250px" className="card-img-top" alt={"Image of " + data.name} />
            <div className="card-body">
                <h5 className="card-title text-secondary">{data.name}</h5>
                <p className="card-text">Rating: <StarRating rating={data.stars} /> ({data.reviews})</p>
                {data.phone ? <p className="card-text">Contact: {data.phone}</p> : "    "}
                <div className="text-muted card-text text-nowrap" data-toggle="tooltip" data-placement="top" title={data.address}><i><b></b>{data.address.slice(0, 30) + "..."}</i></div>
                <a className="btn btn-primary mx-auto d-block btn-lg text-white my-2">Donate</a>
            </div>
        </div>
    })
    return <div className="d-flex p-2 flex-wrap justify-content-center">
        {cards}
    </div>;
}
export default DonatePage;