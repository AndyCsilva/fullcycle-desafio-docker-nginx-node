CREATE DATABASE IF NOT EXISTS nodedb;
USE nodedb;
CREATE TABLE IF NOT EXISTS PEOPLE (
    id int not null auto_increment,
    NOME varchar(255),
    primary key (id)
)
