import graphene

import users.schema as user_schema


class Query(user_schema.Query, graphene.ObjectType):
    # This Class wil inherit from multiple Queries
    # as we begin to add more apps to the project
    pass


schema = graphene.Schema(query=Query)
