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
