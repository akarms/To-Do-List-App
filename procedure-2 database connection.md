in the Server File create a new file called databse.sql and add the following code
```sql
CREATE DATABASE perntodo;


CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
```
And then in the terminal run the following command
```bash
psql -U postgres
```

actually this refers to connection of the user named postgres to the database server
```bash
\c perntodo
```
this refers to connecting to the database named perntodo

<br>

So now you are in the database named perntodo and then run the following command
```bash

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
```

for creating a table named todo with two columns todo_id and description


and then create a new file called db.js 
```javascript

const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "admin",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;

```

and in the index file we can create api routes for calling 


example code for post file 
```javascript

app.post("/todos", async (req, res) => {
    try {
      //console.log(req.body);
      const { description } = req.body;
      const newTodo = await pool.query(
        "INSERT INTO todo (description) VALUES($1) RETURNING *",
        [description]
      );
      res.json(newTodo);
    } catch (err) {
        console.error(err.message);
    }
});

```




