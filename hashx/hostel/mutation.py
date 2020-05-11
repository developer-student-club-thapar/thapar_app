import graphene
from .hostel_crud import UpdateHostel, CreateHostel
from .complaint_crud import UpdateComplaint, CreateComplaint
from .complaintstatus_crud import UpdateComplaintStatus, CreateComplaintStatus
from .complainttypes_crud import UpdateComplaintTypes, CreateComplaintTypes
from .messunit_crud import UpdateMessUnit, CreateMessUnit
from .messunitcomment_crud import CreateMessUnitComment, UpdateMessUnitComment
from .room_crud import UpdateRoom, CreateRoom


class Mutation(graphene.AbstractType):
    create_hostel = CreateHostel.Field()
    update_hostel = UpdateHostel.Field()
    create_complaint = CreateComplaint.Field()
    update_complaint = UpdateComplaint.Field()
    create_complaintstatus = CreateComplaintStatus.Field()
    update_complaintstatus = UpdateComplaintStatus.Field()
    create_complainttypes = CreateComplaintTypes.Field()
    update_complainttypes = UpdateComplaintTypes.Field()
    create_messunit = CreateMessUnit.Field()
    update_messunit = UpdateMessUnit.Field()
    create_messunitcomment = CreateMessUnitComment.Field()
    update_messunitcomment = UpdateMessUnitComment.Field()
    create_room = CreateRoom.Field()
    update_room = UpdateRoom.Field()
