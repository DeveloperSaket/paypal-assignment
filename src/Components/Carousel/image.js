import Grapes from "../../asset/grapes.jpg";
import Lime from "../../asset/lime.jpg";
import Lemon from "../../asset/lemon.jpg";
import Banana from "../../asset/banana.jpg";
import Apple from "../../asset/apple.jpg";
import Watermelon from "../../asset/watermelon.jpg";

import Alo from "../../asset/alo.jpg";
import termeric from "../../asset/termeric.jpg";
import tulsi from "../../asset/tulsi.jpg";

import corn from "../../asset/corn.jpg";
import Cucumber from "../../asset/cucumber.jpg";
import Cauliflower from "../../asset/cauliflower.jpg";
import Asparagus from "../../asset/asparagus.jpg";
import Eggplant from "../../asset/eggplant.jpg";
import Broccoli from "../../asset/broccoli.jpg";
import Carrot from "../../asset/carrot.jpg";
import GreenPepper from "../../asset/green-pepper.jpg";

const getImage = (imgId) => {
    switch (imgId) {
        case 'alo':
            return Alo;
        case 'termeric':
            return termeric;
        case 'tulsi':
            return tulsi;

        case 'corn':
            return corn;
        case 'cucumber':
            return Cucumber;
        case 'cauliflower':
            return Cauliflower;
        case 'asparagus':
            return Asparagus;
        case 'eggplant':
            return Eggplant;
        case 'broccoli':
            return Broccoli;
        case 'carrot':
            return Carrot;
        case 'GreenPepper':
            return GreenPepper;

        case 'grapes':
            return Grapes;
        case 'lime':
            return Lime;
        case 'lemon':
            return Lemon;
        case 'banana':
            return Banana;
        case 'apple':
            return Apple;
        case 'watermelon':
            return Watermelon;

        default:
            return Alo;
    }
}

export default getImage;