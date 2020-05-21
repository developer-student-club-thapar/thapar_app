capitalname = input("Enter capital name: ")
smallname = input("Enter small name: ")
arr = list(map(str, input("Enter the fields: ").split()))

print('''
from .models import {}
from graphql_relay.node.node import from_global_id
from .schema import {}Node
import graphene
from graphene_django.types import DjangoObjectType

class Create{}(graphene.relay.ClientIDMutation):
    {} = graphene.Field({}Node)
    
    class Input:'''.format(capitalname, capitalname, capitalname, smallname, capitalname))

for i in arr:
    print("\t{} = graphene.String()".format(i))
    
print('''
    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):''')

for i in arr:
    print("\t{} = input.get('{}')".format(i, i))

print("\t{} = {}(name=name, )".format(smallname, capitalname))

print('''
        {}.save()
        return Create{}({}={})


class Update{}(graphene.relay.ClientIDMutation):
    {} = graphene.Field({}Node)
    
    class Input:
        id = graphene.String()'''.format(smallname, capitalname, smallname, smallname, capitalname, smallname, capitalname))

for i in arr:
    print("\t{} = graphene.String()".format(i))


print('''
    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]''')

for i in arr:
    print("\t{} = input.get('{}')".format(i, i))

print("\t{} = {}.objects.get(pk=id)".format(smallname, capitalname))

for i in arr:
    print('''
        if {}:
            {}.{} = {}'''.format(i, smallname, i, i))
        
print('''    
        {}.save()
        return Update{}({}={})'''.format(smallname, capitalname, smallname, smallname))

