# AnonBot: A Guide

# Overview of the AnonBot

The AnonBot is a Discord bot that allows users to send anonymous messages to a
specific channel in a Discord server. The safety of anonymity opens up the way
for discussions about sensitive issues, like mental health!

The bot has two sides to it: the user side, and the admin side. We will explain
the features of each in order to gain a complete understanding of the bot’s
functionality.

## The user side

Users can send anonymous messages to a channel in a Discord server that is
specifically set up to receive anonymous messages from the bot.

### Sending messages

Users can send anonymous messages by DMing the bot the command
`!send your_message_here`, where the user replaces `your_message_here` with
their message. Once the user sends the message to the bot, it will take the
message and send it to the anonymous channel.

Each anonymous message has an ID listed in its footer. This can be used to
identify the message.

### Replying to messages

Users can also reply to messages in the anonymous channel by DMing the bot with
`!send reply message_id_here your_message_here`, where `message_id_here` is
replaced with the ID of the message being replied to. This will send a reply to
the anonymous channel, where the message being replied to will be quoted and a
hyperlink to it will be visible so users can easily jump to it.

## The admin side

Admins of a Discord server have access to commands that can change the settings
of the bot and moderate the anonymous chat through bans. These commands can be
used in any channel of the server that the bot has access to. When in a channel,
check the right sidebar of your Discord server to see if the bot has access to
that channel.

### Setting the anonymous channel

To set which channel in the Discord server will be the one to receive anonymous
messages, admins can use the command `!anon set anon #anonymous-channel`, where
`#anonymous-channel` is the channel that will be used to receive anonymous
messages.

### Banning and unbanning users

Admins can ban users by using the command
`!anon permban msg_id_here reason_here`, replacing `msg_id_here` with the ID of
the offending message and `reason_here` with the reason for banning the user. To
unban a user, the command used is `!anon unban msg_id_here` , where
`msg_id_here` is replaced by the ID of the message that was used to ban the user
in the first place.

### Printing a list of banned users (a banlist)

To get a list of all currently banned users (a banlist), admins can use the
command `!anon banlist`.

## Ensuring Anonymity

In order to understand the bot, it’s important to understand how the anonymity
of the users is maintained.

When the bot receives a DM from a user to send an anonymous message, it takes
the Discord user ID of the user and runs it through an algorithm that encrypts
it, producing an “anonymous id”, or “anon id”, which is a string of numbers and
letters. This algorithm will produce the same string every time, and so, we will
get the same anon ID for each user every time we run the algorithm on their user
ID. However, this algorithm is not reversible—it is impossible to get their
Discord user ID from their anon ID. As such, we can store their anon ID in a
database in order to keep track of the messages a user sent, but we still cannot
find out who that user is on Discord.

# Using Discord.js

In order to have your bot work with Discord, you need to be able to interface
with Discord. To do this, we can use Discord.js. We will cover a few of the
basic elements of the library here. However, as you complete features during the
Open Source Contest, you may need other functions or classes not mentioned here.
You can consult the
[Discord.js documentation](https://discord.js.org/#/docs/discord.js/stable/general/welcome)
to find the code you need.

- **The client.on function:** The `client.on` function allows us to handle
  events as they occur. The three main events we can handle are logging in,
  receiving a message in the server, and deleting a message. To handle an event,
  we pass in two parameters: a string that describes the event we want to
  handle, and a function that is meant to execute when the event occurs.
  - **Logging in:** When our bot logs in, it will trigger the “ready” event. As
    such, the second parameter—the function to be executed—will be called when
    this happens. Note that you won’t need to touch the code for the “ready”
    event during the course of the contest.
  ```jsx
  // From the AnonBot code:
  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
  })
  ```
  - **Receiving a message:** When a message is sent in the server, the “message”
    event will trigger. The second argument then will be a function that will be
    executed when a message is sent in the chat.
  - **Deletion of a message:** When a message is deleted in the server, the
    “messageDelete” event will trigger, and the second argument will then be a
    function that will be called when a message is deleted in the server.

# Using SQL

The AnonBot codebase uses a database to store data on users and messages. In
order to interface with the database, this project uses SQL, a popular query
language. In this section, we will cover the basics of databases, as well as
some of fundamental statements in SQL that you will see in the AnonBot code.

## How databases work

While this is a simplification, you can think of a database as a collection of
tables that store data. These tables are similar in nature to constructs like
spreadsheets, in that they have columns for certain attributes and rows for
entries of data. For example, in the AnonBot code, there is a table called
`messages`, and it is structured like so:

| Number (message ID) | message_content | message_url |
| ------------------- | --------------- | ----------- |
|                     |                 |             |
|                     |                 |             |

So, if our bot has currently received three anonymous messages, our table could
look like the following example:

| Number (message ID) | message_content | message_url                                                                           |
| ------------------- | --------------- | ------------------------------------------------------------------------------------- |
| 0                   | Hi!             | https://discord.com/channels/950609460651507722/950609703283613756/953843355937308692 |
| 1                   | Hello           | https://discordapp.com/channels/@me/753668534675964005/863630203476246548             |
| 2                   | How are you?    | https://discord.com/channels/950609460651507722/952449588957163532/952479710741409812 |

In the AnonBot code, we have five different tables, each serving a different
purpose and storing different collections of data.

We can operate on these tables using different statements as described in the
sections below.

## Statements

### SELECT

The `SELECT` statement retrieves data from the database. The syntax is:

```sql
SELECT column1, column2, ... FROM table_name
```

This will select all the data in columns `column1`, `column2`, and any other
columns specified from the table `table_name` and return it. You only need to
list the columns for which you want to retrieve data for.

So, continuing with our previous table example, if we ran the statement
`SELECT number, message_url FROM messages`, the result would be:

| number | message_url                                                                           |
| ------ | ------------------------------------------------------------------------------------- |
| 0      | https://discord.com/channels/950609460651507722/950609703283613756/953843355937308692 |
| 1      | https://discordapp.com/channels/@me/753668534675964005/863630203476246548             |
| 2      | https://discord.com/channels/950609460651507722/952449588957163532/952479710741409812 |

If you want to retrieve all of the columns in the database, you can replace the
column names with a star `*`. The syntax would then be:

```sql
SELECT * FROM table_name
```

To retrieve only rows where a certain condition holds, we can use the syntax:

```sql
SELECT column1, column2, ... FROM table_name WHERE condition
```

For example, consider the scenario where you have a table that stored data about
messages, and you wanted to retrieve complete rows for messages sent by a user
with the anon ID `abcdef123`. If your table has a column called `anon_id`, your
`WHERE` condition could be `WHERE anon_id = abcdef123`. So the full statement
would be:

```sql
SELECT * FROM table_name WHERE anon_id = abcdef123
```

More examples of this statement can be found
[here](https://www.w3schools.com/sql/sql_select.asp).

### INSERT INTO

The `INSERT` statement will insert a new column into the database. The syntax
is:

```sql
INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...)
```

This will insert a new row into the table `table_name`. The value in `column1`
of the new row will be `value`, the value in `column2` will be `value2`, and so
on. Again, you only needs to list the columns for which you want to insert data
into.

If you are going to insert a value for each column, then you can omit the
`(column1, column2, ...)` portion and simply write:

```sql
INSERT INTO table_name VALUES (value1, value2, ...)
```

Examples of this statement can be found
[here](https://www.w3schools.com/sql/sql_insert.asp).

### UPDATE

The `UPDATE` statement will update the values in an existing column of the
database. They syntax is:

```sql
	UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition
```

This will replace the existing values in `column1` with `value1`, `column2` with
`value2`, and so on for all the columns that you choose to update. However, only
the rows where `condition` is true will be updated.

Examples of this statement can be found
[here](https://www.w3schools.com/sql/sql_update.asp).

### DELETE

The `DELETE` statement will delete a row from the database. The syntax is:

```sql
DELETE FROM table_name WHERE condition
```

More examples of this statement can be found
[here](https://www.w3schools.com/sql/sql_delete.asp).

### CREATE TABLE

The `CREATE TABLE` statement will create a new table in the database. The syntax
is:

```sql
CREATE TABLE table_name (column1 datatype, column2 datatype, ...)
```

To create a table only if it does not already exist in the database, you can use
the syntax:

```sql
CREATE TABLE IF NOT EXISTS table_name (column1 datatype, column2 datatype, ...)
```

Examples of this statement can be found
[here](https://www.w3schools.com/sql/sql_create_table.asp).

## Better-sqlite3

In the AnonBot codebase, we write SQL code using JavaScript. In order to do
this, we use a library called better-sqlite3.

To create statements in better-sqlite3, we use the `db.prepare` function which
takes in a SQL statement as a string, and we assign the result of the call to
this function like so:

```sql
let stmt = db.prepare("SELECT ivValue FROM encryptor");
```

Next, to run a statement, we have a few options. If we have a statement variable
`stmt`, then the possible methods we could call are:

- **.get():** This will return one row of data from a table. As such, this
  should be used with SELECT statements, not statements like UPDATE or INSERT
  INTO.

```jsx
const stmt = db.prepare('SELECT anon_id FROM msgMap WHERE msg_id = ?')
const result = stmt.get(msgId)
```

- **.all():** This will return multiple rows of data from a table, and should
  also be used with SELECT statements, and not other statements that don’t
  return data.

```jsx
const statement = db.prepare('SELECT * FROM messageBlocker WHERE reason = ?')
return statement.all(metadata.blockReason.PERMBAN)
```

- **.run():** This will run a statement but not return any data. As such, this
  is suitable for statements like INSERT INTO, UPDATE, DELETE, etc.

```jsx
const stmt = db.prepare('UPDATE messages SET message_url = ? WHERE number = ?')
stmt.run(url, number)
```

One thing you may have noticed from the above examples: if you want to pass in
values to the statements, you need to use question marks (?) in the statement
string, and then pass in the values as arguments in the `run`, `get`, or `all`
functions. This makes it easy to pass in the values of JavaScript variables into
statements.
