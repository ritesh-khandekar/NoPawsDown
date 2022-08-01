const navData = [
    "RESCUE",
    "DONATE",
    "ADOPT",
    "NGO REG.",
    "SHOP",
    "HOSPITALS"
]
function SideTabs() {
    const links = navData.map((link, i) => {
        return <div className="py-4 text-center bg-light border fs-4" key={link + i}>
            {link}
        </div>
    });
    return links;
}
export default SideTabs;