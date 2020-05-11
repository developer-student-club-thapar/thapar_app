import graphene
from .academiccalender_crud import UpdateAcademicCalendar, CreateAcademicCalendar
from .batch_crud import UpdateBatch, CreateBatch
from .branch_crud import UpdateBranch, CreateBranch
from .course_crud import UpdateCourse, CreateCourse
from .drivefolder_crud import UpdateDrivefolder, CreateDrivefolder
from .file_crud import UpdateFile, CreateFile
from .firstyearbatch_crud import UpdateFirstYearBatch, CreateFirstYearBatch
from .textbook_crud import UpdateTextbook, CreateTextbook


class Mutation(graphene.AbstractType):
    create_academiccalendar = CreateAcademicCalendar.Field()
    update_academiccalendar = UpdateAcademicCalendar.Field()
    create_batch = CreateBatch.Field()
    update_batch = UpdateBatch.Field()
    create_branch = CreateBranch.Field()
    update_branch = UpdateBranch.Field()
    create_course = CreateCourse.Field()
    update_course = UpdateCourse.Field()
    create_drivefolder = CreateDrivefolder.Field()
    update_drivefolder = UpdateDrivefolder.Field()
    create_file = CreateFile.Field()
    update_file = UpdateFile.Field()
    create_firstyearbatch = CreateFirstYearBatch.Field()
    update_firstyearbatch = UpdateFirstYearBatch.Field()
    create_textbook = CreateTextbook.Field()
    update_textbook = UpdateTextbook.Field()