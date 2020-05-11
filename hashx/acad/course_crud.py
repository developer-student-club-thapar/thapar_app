from .models import Course
from graphql_relay.node.node import from_global_id
from .schema import CourseNode
import graphene
from graphene_django.types import DjangoObjectType


class CreateCourse(graphene.relay.ClientIDMutation):
    course = graphene.Field(CourseNode)

    class Input:
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

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        name = input.get('name')
        code = input.get('code')
        course_site = input.get('course_site')
        credit = input.get('credit')
        l = input.get('l')
        t = input.get('t')
        p = input.get('p')
        mst = input.get('mst')
        tut_ses = input.get('tut_ses')
        lab_proj = input.get('lab_proj')
        quiz = input.get('quiz')
        est = input.get('est')
        syllabus = input.get('syllabus')
        course = Course(name=name, code=code, course_site=course_site, credit=credit, l=l, t=t, p=p, mst=mst, tut_ses=tut_ses, lab_proj=lab_proj, quiz=quiz, est=est, syllabus=syllabus)

        course.save()
        return CreateCourse(course=course)


class UpdateCourse(graphene.relay.ClientIDMutation):
    course = graphene.Field(CourseNode)

    class Input:
        id = graphene.String()
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

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        name = input.get('name')
        code = input.get('code')
        course_site = input.get('course_site')
        credit = input.get('credit')
        l = input.get('l')
        t = input.get('t')
        p = input.get('p')
        mst = input.get('mst')
        tut_ses = input.get('tut_ses')
        lab_proj = input.get('lab_proj')
        quiz = input.get('quiz')
        est = input.get('est')
        syllabus = input.get('syllabus')
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
