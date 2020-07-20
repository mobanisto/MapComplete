import {LayerDefinition} from "../LayerDefinition";
import {And, Or, Tag} from "../../Logic/TagsFilter";
import {OperatorTag} from "../Questions/OperatorTag";
import * as L from "leaflet";
import FixedText from "../Questions/FixedText";
import ParkingType from "../Questions/bike/ParkingType";
import {ImageCarouselWithUploadConstructor} from "../../UI/Image/ImageCarouselWithUpload";


export default class BikeParkings extends LayerDefinition {
    constructor() {
        super();
        this.name = "bike_parking";
        this.icon = "./assets/bike/parking.svg";
        this.overpassFilter = new Tag("amenity", "bicycle_parking");
        this.newElementTags = [
            new Tag("amenity", "bicycle_parking"),
        ];
        this.maxAllowedOverlapPercentage = 10;

        this.minzoom = 13;
        this.style = this.generateStyleFunction();
        this.title = new FixedText("Fietsparking");
        this.elementsToShow = [
            new ImageCarouselWithUploadConstructor(),
            new OperatorTag(),
            new ParkingType()
        ];

    }

    private generateStyleFunction() {
        const self = this;
        return function (properties: any) {
            return {
                color: "#00bb00",
                icon: L.icon({
                    iconUrl: self.icon,
                    iconSize: [50, 50],
                    iconAnchor: [25,50]
                })
            };
        };
    }
}
