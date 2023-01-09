import { Client } from "https://deno.land/x/mysql@v2.11.0/mod.ts";

const [hostname, port, username, password] = Deno.args;

if (!hostname || !port || !username || !password) {
  console.log(
    "Usage: deno run --allow-net 05_database.ts [hostname] [port] [username] [password]"
  );
  Deno.exit(1);
}

const mysqlClient = await new Client().connect({
  hostname,
  username,
  password,
  port: Number(port),
});

await mysqlClient.execute("CREATE DATABASE IF NOT EXISTS mydb");

/**
 * Start MySQL: docker run --name deno-mysql -e MYSQL_ROOT_PASSWORD=mytmppassword -p 23306:3306 mysql:8
 * Run: deno run --allow-net src/05_database.ts 192.168.1.3 23306 root mytmppassword
 */

await mysqlClient.execute("use mydb");
await mysqlClient.execute(
  "CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))"
);
await mysqlClient.execute("INSERT INTO users (name) VALUES (?)", ["John"]);

const result = await mysqlClient.query("SELECT * FROM users");
console.log(result);
