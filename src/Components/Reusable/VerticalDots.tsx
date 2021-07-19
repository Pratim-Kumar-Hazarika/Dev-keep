import {useEffect, useRef, useState, useCallback} from "react"
import {AkarIconsMoreVertical} from '../../Svgs/Svgs'
import "../../index.css"
import { Label } from "../AddLabel/Label"
type State = "hidden" | "visible"
export const VerticalDots : React.FC < {} > = () => {
    const [showLabelNote,
        setShowLabelNote] = useState < State > ("hidden")
    const [showMore,
        setShowMore] = useState < State > ("hidden")
    function addLabelClickHandler() {
        setShowLabelNote("visible")
    }
    function moreClickHandler() {
        setShowMore("visible")
    }

    const ref = useRef(null);
    const clickListener = (e : MouseEvent) => {
        if (!(ref.current !as any).contains(e.target)) {
            setShowLabelNote("hidden")
            setShowMore("hidden")
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", clickListener);
        return () => {
            document.removeEventListener("mousedown", clickListener);
        };
    }, []);
  
    return (
        <div ref={ref} style={{
            position: "relative"
        }}>
            <div className="tooltip" onClick={moreClickHandler}>
                <AkarIconsMoreVertical/>
                <span className="tooltiptext">More</span>
            </div>
            <div
                className="add_label"
                style={{
                visibility: showMore
            }}>
                <div className="add_label_div" onClick={addLabelClickHandler}>Add Label</div>
            </div>
            <br/>
           <Label showLabelNote={showLabelNote}/>
        </div>
    )
}