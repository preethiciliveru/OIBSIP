# User database (username: password)
users = {}

# Function to register a new user
def register():
    username = input("Enter a username: ")
    while username in users:
        print("Username already exists. Try another one.")
        username = input("Enter a username: ")

    password = input("Enter a password: ")
    users[username] = password
    print("Registration successful!")

# Function to authenticate user login
def login():
    username = input("Enter your username: ")
    password = input("Enter your password: ")

    if username in users and users[username] == password:
        print("Login successful!")
        return True
    else:
        print("Invalid username or password.")
        return False

# Secured page accessible after login
def secured_page():
    print("Welcome to the secured page!")

# Main program loop
while True:
    print("\n1. Register\n2. Login\n3. Exit")
    choice = input("Enter your choice: ")

    if choice == "1":
        register()
    elif choice == "2":
        if login():
            secured_page()
            break
    elif choice == "3":
        print("Goodbye!")
        break
    else:
        print("Invalid choice. Try again.")
