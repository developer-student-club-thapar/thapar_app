from django.db import models
import uuid
# Create your models here.

# Create Data Models to Store Analytics created by The user


class Snippet(models.Model):
    """
      Random Snnipets or Jokes Inserted in the Codebase which randomly get rendered on screen while loading or around side spcaes
      Effotr of these is towards humour
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    text = models.CharField(max_length=255)


class Collaborators(models.Model):
    """
        Data of Colloborators who colloborate with us on the Project and there repsective links of Pixxel Panda, Humans of Tiet etc.
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=40)
    image = models.FileField(upload_to="collab", null=True)
    link = models.URLField(null=True)
    date_created = models.DateTimeField(auto_now_add=True, editable=False)
