import { InvitationType, InvitationTypes } from "../models";

export const getEventNameByInvitationType = (invitationType: InvitationType): 'Wedding'|'Wedding Reception' => {
  switch(invitationType) {
    case InvitationTypes.DAY_GUEST:
      return 'Wedding';
    case InvitationTypes.EVENING_GUEST:
    default:
      return 'Wedding Reception';
  }
}

export const getPathByInvitationType = (invitationType: InvitationType): string => {
  return getEventNameByInvitationType(invitationType).toLocaleLowerCase().replaceAll(' ', '-')
}
