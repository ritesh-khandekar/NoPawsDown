function Header(){
    return   <header className="bg-gradient py-5">
    <div className="container px-5">
        <div className="row gx-5 justify-content-center">
            <div className="col-lg-6">
                <div className="text-center my-5">
                    <h1 className="display-5 fw-bolder text-white mb-2">Create <b className="text-white">Happiness</b>, Save <b className="text-white">Lives</b></h1>
                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                        <a className="btn btn-primary border border-white btn-lg px-4 me-sm-3 m-1 text-white" >Donate</a>
                        <a className="btn btn-outline-primary btn-lg px-4 m-1 bg-white" >Adopt</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
}
export default Header;