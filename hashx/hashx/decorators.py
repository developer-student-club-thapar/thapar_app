from graphql_jwt.decorators import user_passes_test

student_check = user_passes_test(lambda user: user.student)
instructor_check = user_passes_test(lambda user: user.student)
viewall = user_passes_test(lambda user: user.is_authenticated)