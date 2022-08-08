function NGODetails(){
    const NGO_DATA = {"name": "Empowering Humanity NGO", "address": "31, Agarwal Life Style (Kavya) Global City Chikal, Road, Virar West, Dongare, Maharashtra 401303", "reviews": 1, "stars": 5, "image": "https://www.empoweringhumanity.org/wp-content/uploads/2021/09/cropped-Untitled-design-24.jpg", "phone": "8293027942"};
    return (
        <div class="container-fluid d-flex align-items-center bg-gradient">
        <div class="row">
          <div class="col-lg-7 col-md-10">
            <h1 class="display-2 text-white">{NGO_DATA["name"]}</h1>
            <p class="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>          </div>
        </div>
      </div>
    );
}
export default NGODetails;