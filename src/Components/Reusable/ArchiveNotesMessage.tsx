import { useGoogleKeep } from '../../Context/GoogleKeepProvider'
import { EmojioneV1NotePage } from '../Svgs/Svg'

export default function ArchiveNotesMessage() {
    const {state} = useGoogleKeep()
    return (
        <div>
            {
        state?.archive?.length <1 && <div className="center_archive_notes">
            <div>
            <div className="no_notes_mssg">Archive Notes will Appear here</div>
            <div className="center_img_note"><EmojioneV1NotePage/></div>
            </div>
        </div>
        }
        </div>
    )
}
