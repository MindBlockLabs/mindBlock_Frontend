# Creating a list
fruits = ["apple", "banana", "cherry"]

# Accessing elements
print(fruits[0])  # Output: apple

# Adding elements
fruits.append("orange")

# Removing elements
fruits.remove("banana")

print(fruits)






# Creating a dictionary
student = {"name": "John", "age": 25, "course": "Data Science"}

# Accessing values
print(student["name"]) 

# Adding key-value pairs
student["grade"] = "A"

# Removing a key-value pair
del student["age"]
print (student)


# Creating a tuple
coordinates = (4, 5)

# Accessing elements
print(coordinates[0])  # Output: 4



# Creating a set
numbers = {1, 2, 3, 4, 4, 5}
# Adding elements
numbers.add(6)
# Removing elements
numbers.remove(3)
print ("Numbers:",numbers)
# Set operations (union, intersection)
A = {1, 2, 3}
B = {3, 4, 5}
# Union
print("Union",A | B)
# Intersection
print("Intersection",A & B)





age = 18
if age >= 18:
    print("Eligible to vote")
else:
    print("Not eligible to vote")



age = float (input("Enter a age: "))
if age >= 18:
    print("Eligible to vote")
else:
    print("Not eligible to vote")



numbers = [1, 2, 3, 4, 5] 
for num in numbers: 
print(num)
count = 0 
while count < 5: 
  count = count + 1
  print(count) 


for num in range(5):
    if num == 3:
        continue  # Skips 3
    print(num)



Defining Functions
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))



Lambda Functions
Regular function
def square(x):    return x ** 2# Lambda function
square_lambda = lambda x: x ** 2
print(square(5))         # Output: 25
print(square_lambda(5))  # Output: 25



square_lambda = lambda x: x ** 2

print(square_lambda(5))  # Output: 25


import numpy as np# Creating arrays

arr1 = np.array([1, 2, 3, 4, 5])  # 1D array

arr2 = np.array([[1, 2, 3], [4, 5, 6]])  # 2D array

print(arr1)
print(arr2)


arr = np.array([10, 20, 30, 40, 50])

print(arr[1])  # Access second element (Output: 20)
print(arr[1:4])  # Slicing from index 1 to 3 (Output: [20 30 40])


arr = np.array([1, 2, 3])
print(arr + 5)  # Adds 5 to each element (Output: [6 7 8])


import pandas as pd

# Creating DataFrame from a dictionary
data = {"Name": ["Alice", "Bob", "Charlie"],
        "Age": [25, 30, 35],
        "Salary": [50000, 60000, 70000]}

df = pd.DataFrame(data)
print(df)


df["Salary"] = df["Salary"] + 5000  # Increasing all salaries by 5000

print(df)
Filtering Data
#Selecting rows where Age > 25
filtered_df = df[df["Age"] > 25]
print(filtered_df)


# Sorting DataFrame by Salary in descending order
sorted_df = df.sort_values(by="Salary", ascending=False)
print(sorted_df)



df.loc[1, "Salary"] = None  # Introduce missing value
print(df.isnull().sum())  # Count missing values
  df

df_filled = df.fillna(df["Salary"].mean())  # Fill missing values with mean salary
print(df_filled)


df = pd.concat([df, pd.DataFrame([{"Name": "Alice", "Age": 25, "Salary": 50000}])], ignore_index=True)  
df_cleaned = df.drop_duplicates(subset=['Name'],keep='first')
print(df_cleaned)

# Create an array of even numbers from 2 to 20
even_numbers = np.arange(2, 21, 2)
print(even_numbers)


import pandas as pd

# Creating DataFrame
data = {
    "Name": ["Alice", "Bob", "Charlie"],
    "Salary": [50000, 60000, 70000]
}

df = pd.DataFrame(data)

# Adding a new column for yearly bonus (10% of Salary)
df["Yearly Bonus"] = df["Salary"] * 0.10

print(df)


# Creating a DataFrame with missing values and duplicates
df = pd.DataFrame({
    "Name": ["Alice", "Bob", "Charlie", "Alice"],
    "Age": [25, 30, 35, 25],
    "Salary": [50000, None, 70000, 50000]  # Bob's salary is missing
})

print("Original DataFrame:")
print(df)

# Removing missing values
df_cleaned = df.dropna()

# Removing duplicates
df_cleaned = df_cleaned.drop_duplicates()

print("\nCleaned DataFrame:")
print(df_cleaned)

