INSERT INTO USERS (username, password)
VALUES (${username}, ${password})
RETURNING * ;