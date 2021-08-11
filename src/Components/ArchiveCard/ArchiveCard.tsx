import React from 'react'
import {Link} from 'react-router-dom'
import {useGoogleKeep} from '../../Context/GoogleKeepProvider'
import {colorsData} from '../../Context/reducer/colors'
import {Image, NoteLabelTypes} from '../../Context/types'
import {EditNote} from '../EditNote/EditNote'
import AddImage from '../Reusable/AddImage'
import {ChangeColor} from '../Reusable/ChangeColor'
import {DeleteNote} from '../Reusable/DeleteNote'
import {Description} from '../Reusable/Description'
import {DisplayImage} from '../Reusable/DisplayImage'
import {EditNoteIcon} from '../Reusable/EditNoteIcon'
import {NoteImages} from '../Reusable/NoteImages'
import {PinArchivedNote} from '../Reusable/PinArchivedNote'
import {ShowLabels} from '../Reusable/ShowLabels'
import {SmallImages} from '../Reusable/SmallImages'
import {UnarchiveNote} from '../Reusable/UnarchiveNote'
import {VerticalDots} from '../Reusable/VerticalDots'
type CardProps = {
    title: string;
    description: string;
    id: number;
    color: string;
    from: string;
    image: Image[] | undefined;
    label: NoteLabelTypes[]

}
export const ArchiveCard : React.FC < CardProps > = ({
    title,
    description,
    id,
    color,
    from,
    image,
    label
}) => {
    const {dispatch, setShowEditNoteModel, setKeepOpacity} = useGoogleKeep()
    function openNoteInEditModeHandler() {
        console.log("from card", from)
        // setKeepOpacity(true)
        setShowEditNoteModel("visible")
    }
    return (
       <> <div className="card_div" style={{
        backgroundColor: color
    }}>
        <NoteImages image={image} id={id}/>

        <form>
            <div className="card_title_pin">
                <span>{title}</span>

                <div className="pin_edit_icons">
                    <PinArchivedNote
                        onClick={() => dispatch({type: "PIN_ARCHIVED_NOTE", payload: {
                            id
                        }})}
                        pinText={"Pin archived Note"}/>
                    <Link
                        to={{
                        pathname: `/note/archive/${id}`
                    }}>
                        <EditNoteIcon/>
                    </Link>
                </div>
            </div>
            <br/>
            <Description description={description}/>
            <ShowLabels label={label}/>
            <div className="card_icons_btns">
                <div className="card_icons">
                    <div className="change_color_icon">
                        <ChangeColor/>
                        <div className="color_divs ">
                            {colorsData.map((color : any) => (
                                <div
                                    className="circle tooltip"
                                    style={{
                                    backgroundColor: color.color
                                }}
                                    onClick={() => dispatch({
                                    type: "CHANGE_ARCHIVED_NOTES_BG",
                                    payload: {
                                        colorName: color.color,
                                        id: id
                                    }
                                })}>
                                    <span className="tooltiptext">{color.name}</span>
                                </div>
                            ))
}
                        </div>
                    </div>
                    <AddImage from="archiveCard" noteId={id}/>
                    <UnarchiveNote
                        onClick={() => dispatch({type: "UNARCHIVE", payload: {
                            id
                        }})}/>
                    <DeleteNote
                        onClick={() => dispatch({type: "DELETE_ARCHIVED_NOTE", payload: {
                            id
                        }})}/>
                    <VerticalDots noteId={id} from={"archive"}/>
                </div>
            </div>
        </form>
    </div> 
    </>
    )
}