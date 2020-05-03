import graphene
from graphene_django.types import DjangoObjectType
from .models import Drivefolder, Course, Batch, Branch, Textbook
from .schema import DrivefolderType, CourseType, BatchType, BranchType, TextbookType


class CreateDrivefolder(graphene.Mutation):
    id = graphene.UUID()
    name = graphene.String()
    drive_id = graphene.String()
    year = graphene.Int()
    file_name = graphene.String()

    class Arguments:
        name = graphene.String()
        drive_id = graphene.String()
        year = graphene.Int()
        file_name = graphene.String()

    def mutate(self, info, name, drive_id, year, file_name):
        drivefolder = Drivefolder(name=name, drive_id=drive_id, year=year, file_name=file_name)
        drivefolder.save()

        return CreateDrivefolder(
            id = drivefolder.id,
            name = drivefolder.name,
            drive_id = drivefolder.drive_id,
            year = drivefolder.year,
            file_name = drivefolder.file_name,
        )


class UpdateDrivefolder(graphene.Mutation):
    class Arguments:
        id = graphene.UUID()
        name = graphene.String(required=False)
        drive_id = graphene.String(required=False)
        year = graphene.Int(required=False)
        file_name = graphene.String(required=False)

    drivefolder = graphene.Field(DrivefolderType)

    def mutate(self, info, id, name=None, drive_id=None, year=None, file_name=None):
        drivefolder = Drivefolder.objects.get(pk=id)
        if name:
            drivefolder.name = name
        if drive_id:
            drivefolder.drive_id = drive_id
        if year:
            drivefolder.year = year
        if file_name:
            drivefolder.file_name = file_name
        drivefolder.save()

        return UpdateDrivefolder(drivefolder=drivefolder)

class CreateCourse(graphene.Mutation):
    id = graphene.UUID()
    name = graphene.String()
    code = graphene.String()
    course_site = graphene.String()
    credit = graphene.Int()
    l = graphene.Int()
    t = graphene.Int()
    p = graphene.Int()
    mst = graphene.Int()
    tut_ses = graphene.Int()
    lab_proj = graphene.Int()
    quiz = graphene.Int()
    est = graphene.Int()
    syllabus = graphene.String()

    class Arguments:
        name = graphene.String()
        code = graphene.String()
        course_site = graphene.String()
        credit = graphene.Int()
        l = graphene.Int()
        t = graphene.Int()
        p = graphene.Int()
        mst = graphene.Int()
        tut_ses = graphene.Int()
        lab_proj = graphene.Int()
        quiz = graphene.Int()
        est = graphene.Int()
        syllabus = graphene.String()

    def mutate(self, info, name, code, course_site, credit, l, t, p, mst, tut_ses, lab_proj, quiz, est, syllabus):
        course = Course(name=name, code=code, course_site=course_site, credit=credit, l=l, t=t, p=p, mst=mst, lab_proj=lab_proj, tut_ses=tut_ses, quiz=quiz, est=est, syllabus=syllabus)
        course.save()

        return CreateCourse(
            id = course.id,
            name = course.name,
            course_site = course.course_site,
            credit = course.credit,
            l = course.l,
            t = course.t,
            p = course.p,
            mst = course.mst,
            tut_ses = course.tut_ses,
            lab_proj = course.lab_proj,
            quiz = course.quiz,
            est = course.est,
            syllabus = course.syllabus,
        )


class UpdateCourse(graphene.Mutation):
    class Arguments:
        id = graphene.UUID()
        name = graphene.String(required=False)
        code = graphene.String(required=False)
        course_site = graphene.String(required=False)
        credit = graphene.Int(required=False)
        l = graphene.Int(required=False)
        t = graphene.Int(required=False)
        p = graphene.Int(required=False)
        mst = graphene.Int(required=False)
        tut_ses = graphene.Int(required=False)
        lab_proj = graphene.Int(required=False)
        quiz = graphene.Int(required=False)
        est = graphene.Int(required=False)
        syllabus = graphene.String(required=False)

    course = graphene.Field(CourseType)

    def mutate(self, info, id, name=None, code=None, course_site=None, credit=None, l=None, t=None, p=None, mst=None, tut_ses=None, lab_proj=None, quiz=None, est=None, syllabus=None):
        course = Course.objects.get(pk=id)
        if name:
            course.name = name
        if code:
            course.code = code
        if course_site:
            course.course_site = course_site
        if credit:
            course.credit = credit
        if l:
            course.l = l
        if t:
            course.t = t
        if p:
            course.p = p
        if mst:
            course.mst = mst
        if tut_ses:
            course.tut_ses = tut_ses
        if lab_proj:
            course.lab_proj = lab_proj
        if quiz:
            course.quiz = quiz
        if est:
            course.est = est
        if syllabus:
            course.syllabus = syllabus
        course.save()

        return UpdateCourse(course=course)

class CreateBranch(graphene.Mutation):
    id = graphene.UUID()
    name = graphene.String()
    year = graphene.Int()
    code = graphene.String()
    course = graphene.String()

    class Arguments:
        name = graphene.String()
        year = graphene.Int()
        code = graphene.String()
        course = graphene.String()

    def mutate(self, info, name, code, year, course):
        branch = Branch(name=name, year=year, code=code, course=course)
        branch.save()

        return CreateBranch(
            id = branch.id,
            name = branch.name,
            year = branch.year,
            course = branch.course,
            code = branch.code,
        )


class UpdateBranch(graphene.Mutation):
    class Arguments:
        id = graphene.UUID()
        name = graphene.String(required=False)
        year = graphene.String(required=False)
        code = graphene.String(required=False)
        course = graphene.String(required=False)

    branch = graphene.Field(BranchType)

    def mutate(self, info, id, name=None, year=None, code=None, course=None):
        branch = Branch.objects.get(pk=id)
        if name:
            branch.name = name
        if course:
            branch.course = course
        if year:
            branch.year = year
        if code:
            branch.code = code
        branch.save()

        return UpdateBranch(branch=branch)


class CreateBatch(graphene.Mutation):
    id = graphene.UUID()
    branch = graphene.String()
    num = graphene.Int()

    class Arguments:
        branch = graphene.String()
        num = graphene.Int()

    def mutate(self, info, num, branch):
        batch = Batch(num=num, branch=branch)
        batch.save()

        return CreateBatch(
            id = batch.id,
            num = batch.num,
            batch = batch.batch,
        )


class UpdateBatch(graphene.Mutation):
    class Arguments:
        id = graphene.UUID()
        branch = graphene.String(required=False)
        num = graphene.Int(required=False)

    batch = graphene.Field(BatchType)

    def mutate(self, info, id, branch=None, num=None):
        batch = Batch.objects.get(pk=id)
        if num:
            batch.num = num
        if branch:
            batch.branch = branch
        batch.save()

        return UpdateBatch(batch=batch)


class CreateTextbook(graphene.Mutation):
    id = graphene.UUID()
    name = graphene.String()
    publisher = graphene.String()
    course = graphene.String()

    class Arguments:
        name = graphene.String()
        # auth_name = graphene.String()
        publisher = graphene.String()
        course = graphene.String()

    def mutate(self, info, name, publisher, course):
        textbook = Textbook(name=name, publisher=publisher, course=course)
        textbook.save()

        return CreateTextbook(
            id = textbook.id,
            name = textbook.name,
            publisher = textbook.publisher,
            auth_name = textbook.auth_name,
            course = textbook.file_name,
        )


class UpdateTextbook(graphene.Mutation):
    class Arguments:
        id = graphene.UUID()
        name = graphene.String(required=False)
        auth_name = graphene.String(required=False)
        publisher = graphene.String(required=False)
        course = graphene.String(required=False)

    textbook = graphene.Field(TextbookType)

    def mutate(self, info, id, name=None, auth_name=None, publisher=None, course=None):
        textbook = Textbook.objects.get(pk=id)
        if name:
            textbook.name = name
        if auth_name:
            textbook.auth_name = auth_name
        if publisher:
            textbook.publisher = publisher
        if course:
            textbook.course = course
        textbook.save()

        return UpdateTextbook(textbook=textbook)


class Mutation(graphene.ObjectType):
    create_drivefolder = CreateDrivefolder.Field()
    update_drivefolder = UpdateDrivefolder.Field()
    create_course = CreateCourse.Field()
    update_course = UpdateCourse.Field()
    create_branch = CreateBranch.Field()
    update_branch = UpdateBranch.Field()
    create_batch = CreateBatch.Field()
    update_batch = UpdateBatch.Field()
    create_textbook = CreateTextbook.Field()
    update_textbook = UpdateTextbook.Field()