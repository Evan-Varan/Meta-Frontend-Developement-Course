import "./InstagramGallery.css"
import InstagramCards from "./InstagramCards/InstagramCards"
import InstagramHeader from "./InstagramHeader/InstagramHeader"
import InstagramCard from "./InstagramCard/InstagramCard"
import CardSlider from "./CardSlider/CardSlider"
import Diner from "../../assets/yuliia-huzenko-x5jrushqsMg-unsplash.webp"
import Outdoors from "../../assets/artur-tumasjan-bVWGUemqotE-unsplash.webp"
import Indoors from "../../assets/baguette-knight-TS62YsZj53Y-unsplash.webp"
import Chairs from "../../assets/pexels-reneterp-1581384.webp"
import SetTable from "../../assets/pexels-mat-brown-150387-1395967.webp"
import PrepareFood from "../../assets/pexels-yente-van-eynde-1263034-2403391.webp"
import OutDoorSeating from "../../assets/pexels-wendywei-1546039.webp"
import Bar from "../../assets/pexels-kyle-lui-231290-734562.webp"
import Food from "../../assets/food.webp"
import Bar2 from "../../assets/barsitting2.webp"
import { useState } from "react"

const cardImgs = [
    //need keys to render each animation
    <InstagramCard key = "1" img = {Diner} imageNum = "1" />,
    <InstagramCard key = "2" img = {Indoors} imageNum = "2" />,
    <InstagramCard key = "3" img = {Outdoors} imageNum = "3" />,
    <InstagramCard key = "4" img = {Chairs} imageNum = "4" />,
    <InstagramCard key = "5" img = {SetTable} imageNum = "5" />,
    <InstagramCard key = "6" img = {PrepareFood} imageNum = "6" />,
    <InstagramCard key = "7" img = {OutDoorSeating} imageNum = "7" />,
    <InstagramCard key = "8" img = {Bar} imageNum = "8" />,
    <InstagramCard key = "9" img = {Food} imageNum = "9" />,
    <InstagramCard key = "10" img = {Bar2} imageNum = "10" />,
    
]





export default function InstagramGallery(){

    const [slot1,setSlot1] = useState(cardImgs[0]);
    const [slot1Tracker,setSlot1Tracker] = useState(0);
    const [slot2,setSlot2] = useState(cardImgs[1]);
    const [slot2Tracker,setSlot2Tracker] = useState(1);
    const [slot3,setSlot3] = useState(cardImgs[2]);
    const [slot3Tracker,setSlot3Tracker] = useState(2);

    function changeCardsForward(){
    
        let newSlot1Tracker = slot1Tracker + 1;
        let newSlot2Tracker = slot2Tracker + 1;
        let newSlot3Tracker = slot3Tracker + 1;
        if(newSlot3Tracker >= cardImgs.length){
            newSlot3Tracker = 0;
        }
        if(newSlot2Tracker >= cardImgs.length){
            newSlot2Tracker = newSlot3Tracker - 1;
        }
        if(newSlot1Tracker >= cardImgs.length){
            newSlot1Tracker = newSlot2Tracker - 1;
        }

        setSlot1(cardImgs[newSlot1Tracker])
        setSlot1Tracker(newSlot1Tracker)
        setSlot2(cardImgs[newSlot2Tracker])
        setSlot2Tracker(newSlot2Tracker)
        setSlot3(cardImgs[newSlot3Tracker])
        setSlot3Tracker(newSlot3Tracker)

    }
    function changeCardsBackwards(){
        
        let newSlot1Tracker = slot1Tracker - 1;
        let newSlot2Tracker = slot2Tracker - 1;
        let newSlot3Tracker = slot3Tracker - 1;
        if(newSlot1Tracker < 0){
            newSlot1Tracker = 9;
        }
        if(newSlot2Tracker < 0){
            newSlot2Tracker = newSlot1Tracker + 1;
        }
        if(newSlot3Tracker < 0){
            newSlot3Tracker = newSlot2Tracker + 1;
        }

        setSlot1(cardImgs[newSlot1Tracker])
        setSlot1Tracker(newSlot1Tracker)
        setSlot2(cardImgs[newSlot2Tracker])
        setSlot2Tracker(newSlot2Tracker)
        setSlot3(cardImgs[newSlot3Tracker])
        setSlot3Tracker(newSlot3Tracker)

    }
    return(
        <div className="insta-gallery">
            <InstagramHeader/>
            <InstagramCards slot1={slot1} slot2={slot2} slot3={slot3}/>
            <CardSlider changeCardsForward= {changeCardsForward} changeCardsBackwards= {changeCardsBackwards} slotTracker3={slot3Tracker}/>
        </div>
        
    )
}