from .enums import UserType

class CheckUserType(object):
    def check_user_type(self, user):
        if user.student is not None:
            return UserType.Student.name
        elif user.instructor is not None:
            return UserType.Instructor.name

class CheckNodeType(object):
    def check_node_type(self , root):
        # query = info.context.POST.get('query')
        try:
            print(str(type(root)) == 'HolidaysNodeConnection')
        except ValueError:
            pass
        pass