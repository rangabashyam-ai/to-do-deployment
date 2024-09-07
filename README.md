###  1: Introduction to SQL
- **What is SQL?**
  - Structured Query Language
  - Used to interact with relational databases
- **Purpose**
  - Querying data
  - Updating data
  - Managing database schemas

---

###  2: Basic SQL Syntax
- **Structure of a SQL Query**
  - `SELECT column1, column2 FROM table_name WHERE condition;`
- **Case Insensitivity**
  - SQL keywords are case-insensitive
  - E.g., `SELECT`, `select`, and `SELECT` are equivalent

---

###  3: Data Definition Language (DDL)
- **Purpose**: Define and modify database structure
- **Commands**:
  - `CREATE TABLE`: Define a new table
  - `ALTER TABLE`: Modify an existing table
  - `DROP TABLE`: Delete a table

---

###  4: Data Query Language (DQL)
- **Purpose**: Query and retrieve data
- **Command**:
  - `SELECT`: Retrieve data from one or more tables

---

###  5: Data Manipulation Language (DML)
- **Purpose**: Insert, update, and delete data
- **Commands**:
  - `INSERT INTO`: Add new rows
  - `UPDATE`: Modify existing rows
  - `DELETE`: Remove rows

---

###  6: Data Control Language (DCL)
- **Purpose**: Control access to data
- **Commands**:
  - `GRANT`: Provide privileges to users
  - `REVOKE`: Remove privileges

---

###  7: Transaction Control Language (TCL)
- **Purpose**: Manage transactions
- **Commands**:
  - `COMMIT`: Save changes
  - `ROLLBACK`: Undo changes
  - `SAVEPOINT`: Set a point to roll back to

---

###  8: SELECT and SELECT DISTINCT
- **`SELECT`**:
  - Basic syntax: `SELECT column1, column2 FROM table_name;`
- **`SELECT DISTINCT`**:
  - Remove duplicate rows
  - Syntax: `SELECT DISTINCT column1 FROM table_name;`

---

###  9: WHERE and ORDER BY Clauses
- **`WHERE`**:
  - Filter records
  - Syntax: `SELECT column1 FROM table_name WHERE condition;`
- **`ORDER BY`**:
  - Sort results
  - Syntax: `SELECT column1 FROM table_name ORDER BY column1 [ASC|DESC];`

---

###  10: AND, OR, NOT Operators
- **`AND`**:
  - Combine multiple conditions
  - Syntax: `SELECT * FROM table_name WHERE condition1 AND condition2;`
- **`OR`**:
  - At least one condition must be true
  - Syntax: `SELECT * FROM table_name WHERE condition1 OR condition2;`
- **`NOT`**:
  - Negate a condition
  - Syntax: `SELECT * FROM table_name WHERE NOT condition;`

---

###  11: INSERT INTO and UPDATE
- **`INSERT INTO`**:
  - Add new records
  - Syntax: `INSERT INTO table_name (column1, column2) VALUES (value1, value2);`
- **`UPDATE`**:
  - Modify existing records
  - Syntax: `UPDATE table_name SET column1 = value1 WHERE condition;`

---

###  12: DELETE
- **Purpose**: Remove records from a table
- **Syntax**:
  - `DELETE FROM table_name WHERE condition;`
- **Caution**: Be careful with `DELETE` as it permanently removes data

---

###  13: SELECT TOP
- **Purpose**: Retrieve a specified number of rows
- **Syntax**:
  - `SELECT TOP number column1, column2 FROM table_name;`
- **Example**:
  - `SELECT TOP 5 * FROM table_name ORDER BY column1;`
---
###  14: Difference Between DELETE, TRUNCATE, and DROP

- **`DELETE`**:
  - **Purpose**: Remove specific rows from a table
  - **Syntax**: `DELETE FROM table_name WHERE condition;`
  - **Behavior**: 
    - Removes rows based on the condition
    - Can be rolled back (if using transactions)
    - Triggers are fired
    - Slower compared to `TRUNCATE`

- **`TRUNCATE`**:
  - **Purpose**: Remove all rows from a table
  - **Syntax**: `TRUNCATE TABLE table_name;`
  - **Behavior**: 
    - Removes all rows quickly without logging individual row deletions
    - Cannot specify a condition
    - Cannot be rolled back in some databases
    - Resets identity columns

- **`DROP`**:
  - **Purpose**: Remove the entire table (or database)
  - **Syntax**: `DROP TABLE table_name;`
  - **Behavior**: 
    - Deletes the table structure and all its data
    - Cannot be rolled back
    - Removes all associated indexes, constraints, and triggers
   




## CPU vs GPU Comparison

| Feature                        | CPU                                           | GPU                                            |
| ------------------------------ | --------------------------------------------- | ---------------------------------------------- |
| **Type**                       | Host                                           | Device                                          |
| **Code Execution**             | Host code execution                            | Device code execution                           |
| **Task Suitability**           | Control-intensive tasks                        | Computation-intensive tasks                     |
| **Data Size Handling**         | Small data size                                | Huge amount of data                             |
| **Parallelism Level**          | Low level parallelism                          | Very high level parallelism                     |

