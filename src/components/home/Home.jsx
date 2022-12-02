import React from "react";
import "./Home.css";
import studentBosh from "../imgs/graduation-g0682985c1_1280.png";
import Homeswaper from "./homeswiper/Homeswaper";

export default function Home() {
  return (
    <div className="home-card">
      <div className="home-about">
        <div className="img-bosh-card">
          <img src={studentBosh} alt="studentBosh" className="home-bosh" />
        </div>
        <h1 className="home-title">
        (mavzu nomi) Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae delectus
          facilis, voluptatibus quasi inventore quod placeat accusamus nihil
          doloremque expedita.
        </h1>
        <p className="home-title-about">
        (mavzu maqsadi) Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          cumque suscipit atque minus earum repellendus architecto dignissimos
          sequi perferendis veniam, maxime amet impedit tenetur reprehenderit
          fugiat quis molestiae voluptatibus quidem dolores repellat, excepturi,
          voluptatum aperiam doloremque aliquam. Pariatur accusantium, amet
          cumque in sapiente sit odio odit optio veritatis id rerum.
        </p>
        <button className="home-about-btn">
          batafsil o'qish
        </button>
      </div>
      <Homeswaper/>
    </div>
  );
}
