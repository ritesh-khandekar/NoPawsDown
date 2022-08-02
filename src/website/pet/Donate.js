import "../user/RegisterForm.css"

function StarRating(props) {
    const rating = props.rating;
    const val = parseInt(rating);
    let stars = []
    for (let i = 1; i <= 5; i++) {
        if (i <= val) {
            stars.push(<span class="fa fa-star checked"></span>);
        } else {
            stars.push(<span class="fa fa-star"></span>);
        }
    }
    return stars;
}

function DonatePage() {
    const ngoData = [
        { "name": "Empowering Humanity", "address": "31, Agarwal Life Style (Kavya) Global City Chikal, Road, Virar West, Dongare, Maharashtra 401303", "reviews": 1, "stars": 5, "image": "https://www.empoweringhumanity.org/wp-content/uploads/2021/09/cropped-Untitled-design-24.jpg", "phone": "8293027942" },
        { "name": "Ashwamedh Foundation", "address": "A/01, Sindhu Garden CHS. Y.K. Taluka: Vasai, District: Palghar, Pincode: 401303, Y K Nagar, Virar West, Virar, Maharashtra 401303", "reviews": 27, "stars": 4.3, "phone": "9769806731", "image": "" },
    ]
    const cards = ngoData.map((data, i) => {
        return <div className="card m-1 shadowbtn" style={{ width: 18 + "rem" }} key={data.name + "i"}>
            <img src={data.image} className="card-img-top" alt={"Image of " + data.name} />
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">Rating: <StarRating rating={data.stars} /> ({data.reviews})</p>
                {data.phone ? <p className="card-text">Contact: {data.phone}</p> : "    "}
                <div className="text-muted card-text text-nowrap" data-toggle="tooltip" data-placement="top" title={data.address}><i><b></b>{data.address.slice(0,30)+"..."}</i></div>
                <a className="btn btn-primary mx-auto d-block btn-lg text-white my-2">Donate</a>
            </div>
        </div>
    })
    return <div className="d-flex p-2 flex-wrap justify-content-center">
        {cards}
    </div>;
}
export default DonatePage;