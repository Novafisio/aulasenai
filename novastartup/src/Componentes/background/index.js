import background2 from "../imagens/background2.jpeg";
import sobre from "../imagens/sobre.png";

export default function Background() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${background2})`,
        backgroundSize: "cover",
        backgroundPosition: "center 20%",
        flex:1,
        height:"100%",
        position: "relative"
      }}
    >
      <div className="overlay">
        <div className="info-container" style={{
          position: "absolute", 
          top: "110px",
          right: "20px",
        }}>
          <img src={sobre} 
          alt="sobre" 
          className="info-img" 
          style={{width: 400}}/>
          
        </div>
      </div>
    </section>
  );
}