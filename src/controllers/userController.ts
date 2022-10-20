const data = [
  {
    id: 1,
    name: 'User 1'
  },
  {
    id: 2,
    name: 'User 2'
  }
];

async function getUsers() {
  return data;
}

async function getUser(request) {
  const user = data.find((u) => u.id === request.input.id);
  return user;
}

async function createUser(request) {
  const user = {
    id: data.length + 1,
    name: request.input.name
  };
  data.push(user);
  return user;
}

export { getUsers, getUser, createUser };
