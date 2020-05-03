import graphene
from graphene_django.types import DjangoObjectType
from .models import Drivefolder, Course, Batch, Branch, Textbook



class DrivefolderType(DjangoObjectType):
    class Meta:
        model = Drivefolder
        fields = '__all__'


class CourseType(DjangoObjectType):
    class Meta:
        model = Course
        exclude = ('created_date',)


class BatchType(DjangoObjectType):
    class Meta:
        model = Batch
        fields = '__all__'


class BranchType(DjangoObjectType):
    class Meta:
        model = Branch
        exclude = ('created_date',)


class TextbookType(DjangoObjectType):
    class Meta:
        model = Textbook
        exclude = ('created_date', 'auth_name')


class Query(object):
    all_drivefolder = graphene.List(DrivefolderType)
    drivefolder = graphene.List(
        DrivefolderType,
        id = graphene.UUID(),
        name = graphene.String(),
        drive_id = graphene.String(),
        year = graphene.Int(),
        file_name = graphene.String(),
    )

    def resolve_all_drivefolder(self, info, **kwargs):
        return Drivefolder.objects.all()

    def resolve_drivefolder(self, info, **kwargs):
        id = kwargs.get("id")
        name = kwargs.get("name")
        drive_id = kwargs.get("drive_id")
        year = kwargs.get("year")
        file_name = kwargs.get("file_name")

        if id is not None:
            return Drivefolder.objects.filter(pk=id)
        if name is not None:
            return Drivefolder.objects.filter(name=name)
        if drive_id is not None:
            return Drivefolder.objects.filter(drive_id=drive_id)
        if year is not None:
            return Drivefolder.objects.filter(year=year).all()
        if file_name is not None:
            return Drivefolder.objects.filter(file_name=file_name)

################################################################################################################

    all_course = graphene.List(CourseType)
    course = graphene.List(
        CourseType,
        id = graphene.UUID(),
        name = graphene.String(),
        code = graphene.String(),
        syllabus = graphene.String(),
    )

    def resolve_all_course(self, info, **kwargs):
        return Course.objects.all()

    def resolve_course(self, info, **kwargs):
        id = kwargs.get("id")
        name = kwargs.get("name")
        code = kwargs.get("code")
        syllabus = kwargs.get("syllabus")

        if id is not None:
            return Course.objects.filter(pk=id)
        if name is not None:
            return Course.objects.filter(name=name)
        if code is not None:
            return Course.objects.filter(code=code)
        if syllabus is not None:
            return Course.objects.filter(syllabus=syllabus).all()

################################################################################################################

    all_batch = graphene.List(BatchType)
    batch = graphene.List(
        BatchType,
        id = graphene.UUID(),
        branch = graphene.String(),
        num = graphene.Int(),
    )

    def resolve_all_batch(self, info, **kwargs):
        return Batch.objects.all()

    def resolve_batch(self, info, **kwargs):
        id = kwargs.get("id")
        branch = kwargs.get("branch")
        num = kwargs.get("num")

        if id is not None:
            return Batch.objects.filter(pk=id)
        if branch is not None:
            return Batch.objects.filter(branch=branch).all()
        if num is not None:
            return Batch.objects.filter(num=num)

################################################################################################################

    all_branch = graphene.List(BranchType)
    branch = graphene.List(
        BranchType,
        id = graphene.UUID(),
        code = graphene.String(),
        name = graphene.String(),
        course = graphene.String(),
    )

    def resolve_all_branch(self, info, **kwargs):
        return Branch.objects.all()

    def resolve_branch(self, info, **kwargs):
        id = kwargs.get("id")
        code = kwargs.get("code")
        name = kwargs.get("name")
        course = kwargs.get("course")

        if id is not None:
            return Branch.objects.filter(pk=id)
        if code is not None:
            return Branch.objects.filter(code=code)
        if name is not None:
            return Branch.objects.filter(name=name)
        if course is not None:
            return Branch.objects.filter(course=course).all()

################################################################################################################

    all_textbook = graphene.List(TextbookType)
    textbook = graphene.List(
        TextbookType,
        id = graphene.UUID(),
        name = graphene.String(),
        publisher = graphene.String(),
        course = graphene.String(),
    )

    def resolve_all_textbook(self, info, **kwargs):
        return Textbook.objects.all()

    def resolve_textbook(self, info, **kwargs):
        id = kwargs.get("id")
        name = kwargs.get("name")
        publisher = kwargs.get("publisher")
        course = kwargs.get("course")

        if id is not None:
            return Textbook.objects.filter(pk=id)
        if name is not None:
            return Textbook.objects.filter(name=name)
        if publisher is not None:
            return Textbook.objects.filter(publisher=publisher).all()
        if course is not None:
            return Textbook.objects.filter(course=course).all()

################################################################################################################


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
        name = graphene.String()
        drive_id = graphene.String()
        year = graphene.Int()
        file_name = graphene.String()

    drivefolder = graphene.Field(DrivefolderType)

    def mutate(self, info, name, drive_id, year, file_name, id):
        drivefolder = Drivefolder.objects.get(pk=id)
        drivefolder.name = name
        drivefolder.drive_id = drive_id
        drivefolder.year = year
        drivefolder.file_name = file_name
        drivefolder.save()

        return UpdateDrivefolder(drivefolder=drivefolder)

################################################################################################################

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
        name = graphene.String()
        drive_id = graphene.String()
        year = graphene.Int()
        file_name = graphene.String()

    drivefolder = graphene.Field(DrivefolderType)

    def mutate(self, info, name, drive_id, year, file_name, id):
        drivefolder = Drivefolder.objects.get(pk=id)
        drivefolder.name = name
        drivefolder.drive_id = drive_id
        drivefolder.year = year
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

    course = graphene.Field(CourseType)

    def mutate(self, info, name, code, course_site, credit, l, t, p, mst, tut_ses, lab_proj, quiz, est, syllabus, id):
        course = Course.objects.get(pk=id)
        course.name = name
        course.code = code
        course.course_site = course_site
        course.credit = credit
        course.l = l
        course.t = t
        course.p = p
        course.mst = mst
        course.tut_ses = tut_ses
        course.lab_proj = lab_proj
        course.quiz = quiz
        course.est = est
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
        name = graphene.String()
        year = graphene.Int()
        code = graphene.String()
        course = graphene.String()

    branch = graphene.Field(BranchType)

    def mutate(self, info, name, year, code, course, id):
        branch = Branch.objects.get(pk=id)
        branch.name = name
        branch.course = course
        branch.year = year
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
        branch = graphene.String()
        num = graphene.Int()

    batch = graphene.Field(BatchType)

    def mutate(self, info, branch, num, id):
        batch = Batch.objects.get(pk=id)
        batch.num = num
        batch.branch = branch
        batch.save()

        return UpdateBranch(batch=batch)

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
        textbook = Drivefolder(name=name, publisher=publisher, course=course)
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
        name = graphene.String()
        # auth_name = graphene.String()
        publisher = graphene.String()
        course = graphene.String()

    textbook = graphene.Field(TextbookType)

    def mutate(self, info, name, auth_name, publisher, course, id):
        textbook = Drivefolder.objects.get(pk=id)
        textbook.name = name
        textbook.auth_name = auth_name
        textbook.publisher = publisher
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