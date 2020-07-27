import React, { useState } from "react";
import "./catalogs.scss";
import Slider from "../Slider/Slider";
const Catalogs = (props) => {
  const [slide, setSlide] = useState(false);
  const [img, setimg] = useState();
  const getImage = (type) => {
    let image;
    switch (type) {
      case "animation":
        image = [
          "https://cdn.pixabay.com/photo/2016/12/05/21/55/super-woman-1885016_960_720.jpg",
          "https://cdn.pixabay.com/photo/2020/04/03/19/02/virus-4999857_960_720.png",
          "https://cdn.pixabay.com/photo/2020/06/16/16/00/covid-5306374_960_720.png",
          "https://cdn.pixabay.com/photo/2016/09/01/10/33/witchs-house-1635770_960_720.jpg",
          "https://cdn.pixabay.com/photo/2014/11/16/23/39/superhero-534120_960_720.jpg",
          "https://cdn.pixabay.com/photo/2016/09/23/21/08/motorcycle-1690452_960_720.jpg",
        ];
        break;
      case "shuttle":
        image = [
          "https://cdn.pixabay.com/photo/2014/09/11/12/45/science-fiction-441708_960_720.jpg",
          "https://cdn.pixabay.com/photo/2010/12/01/space-shuttle-774_960_720.jpg",
          "https://cdn.pixabay.com/photo/2016/03/09/09/15/space-travel-1245698_960_720.jpg",
          "https://cdn.pixabay.com/photo/2015/03/26/18/44/space-center-693251_960_720.jpg",
          "https://cdn.pixabay.com/photo/2017/08/28/16/22/space-shuttle-2690279_960_720.jpg",
          "https://cdn.pixabay.com/photo/2013/03/11/02/14/columbia-92366_960_720.jpg",
        ];
        break;
      case "airplanes":
        image = [
          "https://cdn.pixabay.com/photo/2015/10/12/14/55/airplane-983991_960_720.jpg",
          "https://cdn.pixabay.com/photo/2013/08/06/19/13/plane-170272_960_720.jpg",
          "https://cdn.pixabay.com/photo/2014/11/27/00/58/aircraft-547105_960_720.jpg",
          "https://cdn.pixabay.com/photo/2016/04/30/08/35/aircraft-1362586_960_720.jpg",
          "https://cdn.pixabay.com/photo/2015/07/11/23/02/plane-841441_960_720.jpg",
          "https://cdn.pixabay.com/photo/2019/09/05/15/25/airbus-4454338_960_720.jpg",
        ];
        break;
      case "technology":
        image = [
          "https://cdn.pixabay.com/photo/2017/10/17/19/11/fantasy-2861815_960_720.jpg",
          "https://cdn.pixabay.com/photo/2017/04/23/19/30/earth-2254769_960_720.jpg",
          "https://cdn.pixabay.com/photo/2014/09/24/14/29/mac-459196_960_720.jpg",
          "https://cdn.pixabay.com/photo/2014/05/02/21/46/office-336368_960_720.jpg",
          "https://cdn.pixabay.com/photo/2014/05/02/21/50/home-office-336378_960_720.jpg",
          "https://cdn.pixabay.com/photo/2015/01/08/18/25/startup-593327_960_720.jpg",
        ];
        break;
      case "nature":
        image = [
          "https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_960_720.jpg",
          "https://cdn.pixabay.com/photo/2014/09/07/22/17/forest-438432_960_720.jpg",
          "https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297_960_720.jpg",
          "https://cdn.pixabay.com/photo/2014/02/27/16/10/spring-276014_960_720.jpg",
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
          "https://cdn.pixabay.com/photo/2014/05/03/00/56/summerfield-336672_960_720.jpg",
        ];
        break;

      case "ocean":
        image = [
          "https://cdn.pixabay.com/photo/2018/06/13/18/20/wave-3473335_960_720.jpg",
          "https://cdn.pixabay.com/photo/2016/11/29/04/19/beach-1867285_960_720.jpg",
          "https://cdn.pixabay.com/photo/2010/12/13/10/09/abstract-2384_960_720.jpg",
          "https://cdn.pixabay.com/photo/2013/11/01/11/13/dolphin-203875_960_720.jpg",
          "https://cdn.pixabay.com/photo/2016/05/02/10/13/ship-1366926_960_720.jpg",
          "https://cdn.pixabay.com/photo/2017/05/01/12/24/ship-2275399_960_720.jpg",
        ];
        break;
      case "fashion":
        image = [
          "https://cdn.pixabay.com/photo/2015/11/07/11/46/fashion-1031469_960_720.jpg",
          "https://cdn.pixabay.com/photo/2014/09/07/21/52/urban-438393_960_720.jpg",
          "https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg",
          "https://cdn.pixabay.com/photo/2017/06/20/22/14/men-2425121_960_720.jpg",
          "https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_960_720.jpg",
          "https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593371_960_720.jpg",
        ];
        break;
      default:
        break;
    }
    setimg(image);
    setSlide(true);
  };
  const image = [
    {
      name: "animation",
      image:
        "https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_1.jpg",
    },
    {
      name: "shuttle",
      image:
        "https://cdn.pixabay.com/photo/2017/03/11/15/21/space-shuttle-2135247_960_720.jpg",
    },
    {
      name: "airplanes",
      image:
        "https://cdn.pixabay.com/photo/2015/08/02/00/25/blue-angels-870905_960_720.jpg",
    },
    {
      name: "technology",
      image:
        "https://cdn.pixabay.com/photo/2016/08/07/20/10/using-device-1577035_960_720.jpg",
    },
    {
      name: "nature",
      image:
        "https://cdn.pixabay.com/photo/2016/10/03/19/30/freedom-1712590_960_720.jpg",
    },
    {
      name: "ocean",
      image:
        "https://cdn.pixabay.com/photo/2012/02/29/11/53/surfer-18661_960_720.jpg",
    },
    {
      name: "fashion",
      image:
        "https://cdn.pixabay.com/photo/2018/01/11/09/52/one-3075755_960_720.jpg",
    },
  ];
  const card = image.map((e, i) => {
    return (
      <div key={i} class="b-game-card" onClick={(h) => getImage(e.name)}>
        <div
          class="b-game-card__cover"
          style={{
            backgroundImage: `url(${e.image})`,
          }}
        >
          <div class="b-game-card__text">{e.name.toLocaleUpperCase()}</div>
        </div>
      </div>
    );
  });
  return (
    <div className="catalog">
      {slide && (
        <div className="blur">
          <span className="closeslide close" onClick={(e) => setSlide(false)}>
            <i className="fa fa-times fa-2x" aria-hidden="true"></i>
          </span>
          <div className="slider">
            <Slider images={img} />
          </div>
        </div>
      )}
      <div class="l-container">{card}</div>
    </div>
  );
};
export default Catalogs;
