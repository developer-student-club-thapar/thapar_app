import graphene
import users.schema as user_schema
import society.schema as society_schema
# import society.mutations as society_mutations
# import society.schema_relay as society_relay
import wifipass.schema as wifipass_schema
import timetable.schema as timetable_schema
import shop.schema as shop_schema
import acad.schema as acad_schema
import members.schema as members_schema
import acad.mutation as acad_mutations
import members.mutation as member_mutations
import shop.mutation as shop_mutations
import timetable.mutation as timetable_mutations
import hostel.schema as hostel_schema
import featurebug.schema as featurebug_schema
import hostel.mutation as hostel_mutations
import featurebug.mutation as featurebug_mutation
import lostfound.schema as lostfound_schema
import lostfound.mutation as lostfound_mutation



class Query(acad_schema.RelayQuery, lostfound_schema.RelayQuery, hostel_schema.RelayQuery, featurebug_schema.RelayQuery, members_schema.RelayQuery, society_schema.Query, shop_schema.RelayQuery, timetable_schema.RelayQuery, wifipass_schema.Query,  graphene.ObjectType):
    # This Class wil inherit from multiple Queries
    # as we begin to add more apps to the project
    pass


class Mutation(featurebug_mutation.Mutation, lostfound_mutation.Mutation,hostel_mutations.Mutation, acad_mutations.Mutation, timetable_mutations.Mutation, shop_mutations.Mutation,member_mutations.Mutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
