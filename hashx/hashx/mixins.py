from graphql_jwt.decorators import login_required
from graphene_django.filter import DjangoFilterConnectionField
from .decorators import student_check, instructor_check, every_authenticated
from graphene.relay.node import Node, NodeField
from graphql_relay import from_global_id, to_global_id
from .decorators import setup_jwt_cookie_social
import graphql_social_auth
import graphene
import graphql_jwt
import users.schema as users_schema

class SocialAuth(graphql_social_auth.SocialAuthMutation, graphql_social_auth.mixins.JSONWebTokenMixin):
    user = graphene.Field(users_schema.UserNode)
    new_user = graphene.Boolean()
    jwt_refresh_token = graphene.String()
    @classmethod
    @setup_jwt_cookie_social
    def resolve(cls, root, info, social, **kwargs):
        new_user = True
        try:
            social.user.student
        except Exception:
            print(Exception)
        else:
            new_user = False
        return cls(user=social.user, new_user=new_user, token=graphql_jwt.shortcuts.get_token(social.user, info.context), jwt_refresh_token=graphql_jwt.shortcuts.create_refresh_token(social.user))


class StudentOnlyQuery(DjangoFilterConnectionField):
    @classmethod
    @login_required
    @student_check
    def resolve_queryset(
        cls, connection, iterable, info, args, filtering_args=None, filterset_class=None
    ):
        return super(StudentOnlyQuery, cls).resolve_queryset(
            connection, iterable, info, args, filtering_args, filterset_class
        )


class InstructorOnlyQuery(DjangoFilterConnectionField):
    @classmethod
    @login_required
    @instructor_check
    def resolve_queryset(
        cls, connection, iterable, info, args, filtering_args=None, filterset_class=None
    ):
        return super(InstructorOnlyQuery, cls).resolve_queryset(
            connection, iterable, info, args, filtering_args, filterset_class
        )


class ViewAllAuthenticatedQuery(DjangoFilterConnectionField):
    @classmethod
    @login_required
    @every_authenticated
    def resolve_queryset(
        cls, connection, iterable, info, args, filtering_args=None, filterset_class=None
    ):
        return super(ViewAllAuthenticatedQuery, cls).resolve_queryset(
            connection, iterable, info, args, filtering_args, filterset_class
        )


class OpenForAllQuery(DjangoFilterConnectionField):
    @classmethod
    def resolve_queryset(
        cls, connection, iterable, info, args, filtering_args=None, filterset_class=None
    ):
        return super(OpenForAllQuery, cls).resolve_queryset(
            connection, iterable, info, args, filtering_args, filterset_class
        )


class AuthenticatedNode(Node):
    @classmethod
    def Field(cls, *args, **kwargs):  # noqa: N802
        return NodeField(cls, *args, **kwargs)

    @classmethod
    @login_required
    def node_resolver(cls, only_type, root, info, id):
        return cls.get_node_from_global_id(info, id, only_type=only_type)

    @classmethod
    def get_node_from_global_id(cls, info, global_id, only_type=None):
        try:
            _type, _id = cls.from_global_id(global_id)
            graphene_type = info.schema.get_type(_type).graphene_type
        except Exception:
            return None

        if only_type:
            assert graphene_type == only_type, ("Must receive a {} id.").format(
                only_type._meta.name
            )

        # We make sure the ObjectType implements the "Node" interface
        if cls not in graphene_type._meta.interfaces:
            return None

        get_node = getattr(graphene_type, "get_node", None)
        if get_node:
            return get_node(info, _id)

    @classmethod
    def from_global_id(cls, global_id):
        return from_global_id(global_id)

    @classmethod
    def to_global_id(cls, type, id):
        return to_global_id(type, id)
