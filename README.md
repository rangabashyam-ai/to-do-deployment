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



# GPU Architectures: CDNA vs RDNA

| Feature                    | **CDNA (Compute DNA)**                                          | **RDNA (Radeon DNA)**                                        |
|-----------------------------|----------------------------------------------------------------|--------------------------------------------------------------|
| **Primary Focus**           | High-performance compute tasks, data centers                   | Gaming, graphics, visual rendering                           |
| **Target Applications**     | Machine learning, scientific computing, AI workloads          | Gaming, visual applications, consumer graphics               |
| **Display Output**          | No display output support                                     | Full display output support                                  |
| **Power Efficiency**        | Optimized for compute workloads, power-efficient in data centers| Optimized for gaming performance and power efficiency         |
| **Memory Architecture**     | High-bandwidth memory (HBM)                                    | GDDR memory optimized for graphics workloads                 |
| **Scalability**             | Designed for multi-GPU scaling in compute clusters             | Single GPU performance scaling for gaming                    |
| **AI/ML Acceleration**      | Specialized for AI and machine learning tasks                 | Focused on gaming and graphics rendering, limited AI support  |
| **Market**                  | Enterprise and data centers                                   | Consumer and gaming markets                                  |



Here are the abbreviations expanded and explained in concise points:

1. **XGMI (AMD XGMI - eXtended GPU Memory Interconnect):**
   - A high-speed interconnect that links multiple GPU cards into a unified memory space.
   - Organized by a collective hive ID and individual node IDs, both of which are 64-bit numbers.

2. **DMA (Direct Memory Access):**
   - A mechanism that provides a direct path between storage and GPU memory.
   - It bypasses the CPU by allowing data to move directly between storage and GPU memory, avoiding extra copying through the CPU's memory.

3. **HWS (Hardware Scheduler):**
   - A feature in AMD GPUs that schedules graphics and compute jobs to the hardware dispatch blocks.
   - Added in GCN 3, it virtualizes queues and handles scheduling, freeing the host driver from bookkeeping, and allows more compute tasks to be in flight.

4. **ACE (Accelerated Computational Engine):**
   - A GPU-enabled framework that simplifies the creation of GPU-capable applications.
   - ACE could also refer to other components related to GPU acceleration in specific contexts.
  
5. **Infinity Fabric:**
  - Infinity Fabric in AMD GPUs is a high-speed interconnect architecture that links various components within the GPU, enabling efficient data transfer and communication across cores, memory, and other hardware blocks.


Here’s a simplified explanation of L1, L2, and L3 caches in a GPU:

- **L1 Cache**:
  - The smallest and fastest cache level, located closest to the GPU cores.
  - It stores data that is frequently accessed by individual cores to reduce latency and improve performance.

- **L2 Cache**:
  - Larger than L1 and shared among multiple cores, providing a middle ground in speed and size.
  - It helps in reducing memory access time by storing data that might not fit in L1 but is still frequently used.

- **L3 Cache**:
  - The largest cache level, shared across the entire GPU and slower compared to L1 and L2.
  - It acts as a backup storage for data that doesn't fit in L1 or L2, improving overall access speed to main memory.
