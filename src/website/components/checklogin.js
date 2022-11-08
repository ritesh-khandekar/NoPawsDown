export const checkNGOlogin = () => {
    const UserID = JSON.parse(localStorage.getItem("Profile"))
    let login = true;
    if (UserID) {
        try {
            let test = UserID['reviews']
        } catch (e) {
            login = false;
        }
    } else {
        login = false;
    }
    return login;
}