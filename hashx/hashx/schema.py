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


class Query(acad_schema.Query, members_schema.Query, society_schema.Query, shop_schema.RelayQuery, timetable_schema.RelayQuery, wifipass_schema.Query,  graphene.ObjectType):

    # This Class wil inherit from multiple Queries
    # as we begin to add more apps to the project
    pass

class Mutation(acad_mutations.Mutation,timetable_mutations.Mutation , shop_mutations.Mutation ,member_mutations.Mutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query , mutation=Mutation)
