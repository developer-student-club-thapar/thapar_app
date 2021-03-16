import graphene
from .student_crud import CreateStudent, UpdateStudent, SubscribeToCourse
from .user_crud import CreateUser
from .instructor_crud import CreateInstructor, UpdateInstructor
from .notification_crud import CreateFCMDevice, UpdateFCMDevice


class Mutation(graphene.AbstractType):
    create_student = CreateStudent.Field()
    update_student = UpdateStudent.Field()
    create_instructor = CreateInstructor.Field()
    update_instructor = UpdateInstructor.Field()
    create_user = CreateUser.Field()
    create_notification_device = CreateFCMDevice.Field()
    update_notification_device = UpdateFCMDevice.Field()
    subscribe_to_course = SubscribeToCourse.Field()
