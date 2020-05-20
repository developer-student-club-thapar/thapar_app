# A test was conducted to check if we have the famous N+1 GraphQL bug in out db.

### Query sent through GraphiQL
`
{
  allSociety {
    edges {
      node {
        name
        Event {
          edges {
            node {
              title
              inCampus
            }
          }
        }
      }
    }
  }
}
`
### Response
`
{
  "data": {
    "allSociety": {
      "edges": [
        {
          "node": {
            "name": "CCS",
            "Event": {
              "edges": [
                {
                  "node": {
                    "title": "1",
                    "inCampus": false
                  }
                },
                {
                  "node": {
                    "title": "2",
                    "inCampus": false
                  }
                }
              ]
            }
          }
        }
      ]
    }
  }
}
`

### Logs
`
(0.000) SELECT "django_session"."session_key", "django_session"."session_data", "django_session"."expire_date" FROM "django_session" WHERE ("django_session"."expire_date" > '2020-05-20 05:08:24.759079' AND "django_session"."session_key" = '5ysj9mcy0tmocif362act2wmu1rx9unn') LIMIT 21; args=('2020-05-20 05:08:24.759079', '5ysj9mcy0tmocif362act2wmu1rx9unn')
(0.000) SELECT "auth_user"."id", "auth_user"."password", "auth_user"."last_login", "auth_user"."is_superuser", "auth_user"."username", "auth_user"."first_name", "auth_user"."last_name", "auth_user"."email", "auth_user"."is_staff", "auth_user"."is_active", "auth_user"."date_joined" FROM "auth_user" WHERE "auth_user"."id" = 1 LIMIT 21; args=(1,)
(0.000) SELECT COUNT(*) AS "__count" FROM "society_society"; args=()
(0.000) SELECT "society_society"."id", "society_society"."name", "society_society"."category", "society_society"."about", "society_society"."student_head", "society_society"."site_link", "society_society"."logo", "society_society"."image", "society_society"."user_id" FROM "society_society" LIMIT 1; args=()
(0.000) SELECT COUNT(*) AS "__count" FROM "society_event" WHERE "society_event"."society_id" = '87b128d0568944ceac0b88491fac8823'; args=('87b128d0568944ceac0b88491fac8823',)
(0.000) SELECT "society_event"."id", "society_event"."title", "society_event"."content", "society_event"."date_posted", "society_event"."date_modified", "society_event"."start_time", "society_event"."end_time", "society_event"."place_id", "society_event"."inCampus", "society_event"."location", "society_event"."location_url", "society_event"."poster_image", "society_event"."external_link", "society_event"."society_id" FROM "society_event" WHERE "society_event"."society_id" = '87b128d0568944ceac0b88491fac8823' LIMIT 2; args=('87b128d0568944ceac0b88491fac8823',)
`

`Only one request was made to the Database for fetching both the events`