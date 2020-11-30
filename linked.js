// find all the users that have not been linked
import { allUsers, linked } from "./users";
function findUnlinkeduser() {
  let unlinkedList = [];
  for (let i = 0; i < allUsers.length; i++) {
    const found = linked.some((user) => user.name === allUsers[i].name);
    if (!found) {
      unlinkedList.push(allUsers[i]);
    }
  }
}

findUnlinkeduser();
