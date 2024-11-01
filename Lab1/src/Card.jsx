import person from "./assets/person.png";

function Card () {



    return (
        <div className="card">
          <img className="card-image" src= {person} alt="person" />
          <h2 className="card-titel">{}</h2>
          <p className="card-text">{}</p>
       </div>
     );




}
export default Card