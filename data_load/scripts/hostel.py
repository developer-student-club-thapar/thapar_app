name = input("name: ")
about = input("about: ")
warden_name = input("warden_name: ")
caretaker_name = input("caretaker_name: ")
caretaker_contact = input("caretaker_contact: ")
capacity = input("capacity: ")

print('''
{{
    \"model\": \"hostel.hostel\",
    \"pk\": 1,
    \"fields\": {{
        \"name\": \"{}\",
        \"about\": \"{}\",
        \"warden_name\": \"{}\",
        \"caretaker_name\": \"{}\",
        \"caretaker_contact\": \"{}\",
        \"capacity\": \"{}\",
        \"user\": 1,
        \"b_start\": \"07:00:00\",
        \"b_end\": \"09:00:00\",
        \"l_start\": \"12:00:00\",
        \"l_end\": \"14:00:00\",
        \"d_start\": \"20:00:00\",
        \"d_end\": \"21:00:00\"
        }}
}},
    '''.format(name, about, warden_name, caretaker_name, caretaker_contact, capacity))
