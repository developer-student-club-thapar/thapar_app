from django import forms
from .models import OnlineClass


class OnlineClassModelForm(forms.ModelForm):
    def clean_link(self):
        self.cleaned_data['meetingURL'] == 'https://google.com'
        return self.cleaned_data['meetingURL']
