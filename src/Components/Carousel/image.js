import Alo from "../../asset/alo.jpg";
import fruits from "../../asset/fruits.jpg";
import fruits2 from "../../asset/fruits2.jpg";
import fruits3 from "../../asset/fruits3.jpg";
import termeric from "../../asset/termeric.jpg";
import tulsi from "../../asset/tulsi.jpg";
import veggie from "../../asset/veggie.jpg";
import veggie2 from "../../asset/veggie2.jpg";
import corn from "../../asset/corn.jpg";

const getImage = (imgId) => {
    switch (imgId) {
        case 'alo':
            return Alo;
        case 'fruits':
            return fruits;
        case 'fruits2':
            return fruits2;
        case 'fruits3':
            return fruits3;
        case 'termeric':
            return termeric;
        case 'tulsi':
            return tulsi;
        case 'veggie':
            return veggie;
        case 'veggie2':
            return veggie2;
        case 'corn':
            return corn;

        default:
            return Alo;
    }
}

export default getImage;