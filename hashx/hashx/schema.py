import graphene
import users.schema as user_schema
import society.schema as society_schema
import exam.schema as exam_schema
import wifipass.schema as wifipass_schema
import timetable.schema as timetable_schema
import shop.schema as shop_schema
import acad.schema as acad_schema
import acad.mutation as acad_mutations
import featurebug.schema as featurebug_schema
import featurebug.mutation as featurebug_mutations
import members.schema as members_schema
import members.mutation as member_mutations
import hostel.schema as hostel_schema
import hostel.mutation as hostel_mutations
import lostfound.schema as lostfound_schema
import lostfound.mutation as lostfound_mutations
import shop.mutation as shop_mutations
import timetable.mutation as timetable_mutations
import exam.mutation as exam_mutations


class Query(acad_schema.RelayQuery, hostel_schema.RelayQuery, lostfound_schema.RelayQuery, members_schema.RelayQuery, society_schema.Query,exam_schema.RelayQuery,featurebug_schema.RelayQuery ,shop_schema.RelayQuery, timetable_schema.RelayQuery, wifipass_schema.Query,  graphene.ObjectType):

    # This Class wil inherit from multiple Queries
    # as we begin to add more apps to the project
    pass

class Mutation(acad_mutations.Mutation, hostel_mutations.Mutation, lostfound_mutations.Mutation, exam_mutations.Mutation ,featurebug_mutations.Mutation,timetable_mutations.Mutation , shop_mutations.Mutation ,member_mutations.Mutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query , mutation=Mutation)