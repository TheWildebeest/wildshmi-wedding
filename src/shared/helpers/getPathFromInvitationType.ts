import { InvitationType, InvitationTypes } from "../models";

export const getPathByInvitationType = (invitationType: InvitationType): 'Wedding'|'Wedding Reception' => {
  switch(invitationType) {
    case InvitationTypes.DAY_GUEST:
      return 'Wedding';
    case InvitationTypes.EVENING_GUEST:
    default:
      return 'Wedding Reception';
  }
}
