import { useGoogleKeep } from '../../Context/GoogleKeepProvider'
import { EmojioneV1NotePage } from '../Svgs/Svg'

function NoNotesMessage() {
    const {state} = useGoogleKeep()
    return (
        <div>
            {
        state?.trash?.length <1 && <div className="center_archive_notes">
            <div>
            <div className="no_notes_mssg">Trashed Notes will appear here</div>
            <div className="center_img_note"><EmojioneV1NotePage/></div>
            </div>
        </div>
        }
        </div>
    )
}

export default NoNotesMessage
