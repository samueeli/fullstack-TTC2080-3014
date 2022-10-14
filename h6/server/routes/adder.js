import { Router } from 'express';

export const router = Router();

router.get('/', (req, res) => {
  const markup = `
    <span><a href="/users">List All Users</a></span> |
    <span><a href="/adder">Add New User</a></span>
    <br />
    <hr />
    <br />
    <form action=/users method=post>
      Add a new user: <input type=text name=name><br>
      <input type=submit value="add user">
    </form>
  `;
  res.send(markup);
});
