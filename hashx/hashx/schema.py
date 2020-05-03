import graphene
import users.schema as user_schema
import society.schema as society_schema
# import society.mutations as society_mutations
# import society.schema_relay as society_relay
import wifipass.schema as wifipass_schema
import timetable.schema as timetable_schema
import shop.schema as shop_schema


class Query(society_schema.Query, shop_schema.RelayQuery, timetable_schema.RelayQuery, wifipass_schema.Query,  graphene.ObjectType):

    # This Class wil inherit from multiple Queries
    # as we begin to add more apps to the project
    pass


schema = graphene.Schema(query=Query)
