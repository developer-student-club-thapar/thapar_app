import graphene
import django_filters
from graphene_django import DjangoObjectType
from hashx.mixins import ViewAllAuthenticatedQuery , AuthenticatedNode
from .models import FeaturenBugCategory , FeaturenBug , FeaturenBugStatus
from django.db import models


class FeaturenBugFilter(django_filters.FilterSet):
    class Meta:
        model = FeaturenBug
        fields = '__all__'
        filter_overrides = {
            models.ImageField :{
                'filter_class' : django_filters.CharFilter,
                'extra' : lambda f:{
                    'lookup_expr': 'icontains'
                }
            } , models.SlugField :{
                'filter_class' : django_filters.CharFilter,
                'extra' : lambda f:{
                    'lookup_expr': 'icontains'
                }
                
            }

        }
class FeaturenBugNode(DjangoObjectType):
    class Meta:
        model = FeaturenBug
        interfaces = (AuthenticatedNode , )
    
class FeaturenBugStatusFilter(django_filters.FilterSet):
    class Meta:
        model = FeaturenBugStatus
        fields = '__all__'
        
class FeaturenBugStatusNode(DjangoObjectType):
    class Meta:
        model = FeaturenBugStatus
        interfaces = (AuthenticatedNode , )
class FeaturenBugCategoryFilter(django_filters.FilterSet):
    class Meta:
        model = FeaturenBugCategory
        fields = '__all__'
class FeaturenBugCategoryNode(DjangoObjectType):
    class Meta:
        model = FeaturenBugCategory
        interfaces = (AuthenticatedNode , )
    
    

class RelayQuery(graphene.ObjectType):
    all_featurenbug =  ViewAllAuthenticatedQuery(FeaturenBugNode , filterset_class=FeaturenBugFilter)
    featurenbug = AuthenticatedNode.Field(FeaturenBugNode)
    all_featurenbugstatus =  ViewAllAuthenticatedQuery(FeaturenBugStatusNode , filterset_class=FeaturenBugStatusFilter)
    featurenbugstatus = AuthenticatedNode.Field(FeaturenBugStatusNode)
    all_featurenbugcategory =  ViewAllAuthenticatedQuery(FeaturenBugCategoryNode , filterset_class=FeaturenBugCategoryFilter)
    featurenbugcategory = AuthenticatedNode.Field(FeaturenBugCategoryNode)



    