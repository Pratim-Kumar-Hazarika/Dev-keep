import { changeArchiveNotesDescription } from "./DescriptionUpdateAxios/updateArchiveDescription"
import { changeNotesDescription } from "./DescriptionUpdateAxios/updateNoteDescription"
import { changePinnedNotesDescription } from "./DescriptionUpdateAxios/updatePinnedNotesDescription"
import { changeArchiveNotesTitle } from "./TitleUpdateAxios/updateArchiveNoteTitle"
import { changeNotesTitle } from "./TitleUpdateAxios/updateNotesTitle"
import { changePinnedNotesTitle } from "./TitleUpdateAxios/updatePinnedNotesTitle"

export async function archiveNoteTitleDescriptionHandler(id: number, description: string, token: string, title: string) {
    await changeArchiveNotesDescription(id, description, token)
    await changeArchiveNotesTitle(id, title, token)
}

export async function pinnedNoteTitleDescriptionHandler(id: number, description: string, token: string, title: string) {
  await  changePinnedNotesDescription(id, description, token)
  await   changePinnedNotesTitle(id, title, token)
}

export async function cardTitleDescriptionHandler(id: number, description: string, token: string, title: string) {
    await changeNotesDescription(id, description, token)
    await changeNotesTitle(id, title, token)
}