
const year= new Date()
const yearOfThisYear=year.getFullYear()
function Footer(){

    return (
        <footer>
            <p>copyright@{ yearOfThisYear}</p>
        </footer>
    )
}
export default Footer;