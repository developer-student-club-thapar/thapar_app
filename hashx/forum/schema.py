import graphene
import django_filters
from graphene_django import DjangoObjectType
from hashx.mixins import ViewAllAuthenticatedQuery , AuthenticatedNode , AuthenticatedNode
from .models import Category , Question , Reply , Like
from django.db import models

class CategoryFilter(django_filters.FilterSet):
    class Meta:
        model = Category
        fields = '__all__'
class CategoryNode(DjangoObjectType):
    class Meta:
        model = Category
        interfaces = (AuthenticatedNode, )
    

class QuestionFilter(django_filters.FilterSet):
    class Meta:
        model = Question
        fields = '__all__'
    order_by = django_filters.OrderingFilter(
        fields=(
            ('created_at', 'created_at'),
            ('title','title')

        )
    )
class QuestionNode(DjangoObjectType):
    class Meta:
        model = Question
        interfaces = (AuthenticatedNode, )

class ReplyFilter(django_filters.FilterSet):
    class Meta:
        model = Reply
        fields = '__all__'
class ReplyNode(DjangoObjectType):
    class Meta:
        model = Reply
        interfaces = (AuthenticatedNode, )
    


class LikeFilter(django_filters.FilterSet):
    class Meta:
        model = Like
        fields = '__all__'
class LikeNode(DjangoObjectType):
    class Meta:
        model = Like
        interfaces = (AuthenticatedNode, )
    
class RelayQuery(graphene.ObjectType):
    all_likes =  ViewAllAuthenticatedQuery(LikeNode , filterset_class=LikeFilter)
    likes = AuthenticatedNode.Field(LikeNode)
    all_replies =  ViewAllAuthenticatedQuery(ReplyNode , filterset_class=ReplyFilter)
    replies = AuthenticatedNode.Field(ReplyNode)
    all_questions =  ViewAllAuthenticatedQuery(QuestionNode , filterset_class=QuestionFilter)
    questions = AuthenticatedNode.Field(QuestionNode)
    all_categories =  ViewAllAuthenticatedQuery(CategoryNode , filterset_class=CategoryFilter)
    categories = AuthenticatedNode.Field(CategoryNode)


