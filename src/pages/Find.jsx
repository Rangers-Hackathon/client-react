import "../assets/css/search.css"
import diseasemap from "../assets/img/diseasemap.jpg"
import Navbar from "../components/Navbar"
const Find = () => {
  return (
    <>
    <Navbar classname="shadowed" bg="white"/>

    <main className="flex-column">
        <div className="container grid-2">
            <div>
                <img src={diseasemap} alt="" width="95%" height="95%"/>
            </div>
            <div>
                <h1 className="txt-primary">Find the right facility for you</h1>
                <form action="">
                    <input type="text" name="search" id="search" placeholder="Search for a facility"/>
                    <input type="submit" value="Search" className="btn btn-primary"/>
                </form>
            </div>
        </div>
    </main>

    </>
  )
}

export default Find