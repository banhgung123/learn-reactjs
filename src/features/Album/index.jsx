import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Tet 50: Zing Choice",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/2/f/4/6/2f467dab6b61f8b63d07b45420ee25a2.jpg"
    },
    {
      id: 2,
      name: "Chao Xuan Moi 2021",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/2/9/2/1/2921b5f9c7cdfbd5b5dd1974f0397e71.jpg"
    },
    {
      id: 3,
      name: "Tet Khap Moi Nha",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/f/e/d/a/feda7903980264ff9ff0d64f4deb552d.jpg"
    }
  ];
  return (
    <div>
      <h2>Co the ban se thich day</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
