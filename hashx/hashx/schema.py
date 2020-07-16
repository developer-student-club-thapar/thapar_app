import graphene
import graphql_jwt
import graphql_social_auth
import users.schema as users_schema
import users.mutation as users_mutations
import society.schema as society_schema
import society.mutation as society_mutations
import acad.schema as acad_schema
import acad.mutation as acad_mutations
import featurebug.schema as featurebug_schema
import featurebug.mutation as featurebug_mutations
import members.schema as members_schema
import timetable.mutation as timetable_mutations
import timetable.schema as timetable_schema
from social_django.models import UserSocialAuth


"""import members.mutation as member_mutations
import exam.mutation as exam_mutations
import exam.schema as exam_schema
import wifipass.schema as wifipass_schema
import timetable.schema as timetable_schema
import shop.schema as shop_schema
import hostel.mutation as hostel_mutations
import lostfound.schema as lostfound_schema
import lostfound.mutation as lostfound_mutations
import shop.mutation as shop_mutations
import hostel.schema as hostel_schema
import timetable.mutation as timetable_mutations"""


class SocialAuth(graphql_social_auth.SocialAuthMutation , graphql_social_auth.mixins.JSONWebTokenMixin):
    user = graphene.Field(users_schema.UserNode)
    new_user = graphene.Boolean()
    @classmethod
    def resolve(cls, root, info, social, **kwargs):
        new_user = True
        try:
            social.user.student
        except Exception:
            print(Exception)
        else:
            new_user = False
        return cls(user=social.user , new_user=new_user , token=graphql_jwt.shortcuts.get_token(social.user, info.context) )


class Query(acad_schema.RelayQuery,
            users_schema.RelayQuery,
            members_schema.RelayQuery,
            society_schema.RelayQuery,
            timetable_schema.RelayQuery,
            featurebug_schema.RelayQuery,
            graphene.ObjectType):
    # This Class wil inherit from multiple Queries
    # as we begin to add more apps to the project
    pass

    # exam_schema.RelayQuery,
    # shop_schema.RelayQuery,
    # timetable_schema.RelayQuery,
    # wifipass_schema.Query,
    # lostfound_schema.RelayQuery,
    # hostel_schema.RelayQuery,

    # Open these end points in next update


class Mutation(acad_mutations.Mutation, users_mutations.Mutation, society_mutations.Mutation, timetable_mutations.Mutation, featurebug_mutations.Mutation, graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()
    social_auth = SocialAuth.Field()
    revoke_token = graphql_jwt.Revoke.Field()
    #    hostel_mutations.Mutation,
    #    lostfound_mutations.Mutation,
    #    exam_mutations.Mutation,
    #    timetable_mutations.Mutation,
    #    shop_mutations.Mutation,
    #    member_mutations.Mutation,
    # Open these end points in next update


schema = graphene.Schema(query=Query, mutation=Mutation)
