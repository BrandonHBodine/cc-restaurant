DROP TABLE users;
CREATE TABLE users (
    id          SERIAL,
    firstname   VARCHAR(256),
    lastname    VARCHAR(256),
    email       VARCHAR(256),
    phone       VARCHAR(10),
    username    varchar(256),
    password    varchar(256),
    admin       boolean
);

DROP TABLE restaurants;
CREATE TABLE restaurants (
  id          SERIAL,
  name        VARCHAR(256),
  city        VARCHAR(256),
  state       VARCHAR(50),
  foodtype    VARCHAR(50),
  rating      integer,
  bio         varchar(3000),
  image       VARCHAR(1000)
);
