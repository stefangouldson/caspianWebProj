create database caspian;
use caspian;

create table users
(
    id INT NOT NULL
    auto_increment primary key,
    username varchar
    (100) unique not null,
    first_name varchar
    (100) NOT NULL,
    last_name varchar
    (100) NOT NULL,
    balance INT NOT NULL,
    insurance_id INT,
    foreign key
    (insurance_id) references insurances
    (id)
    );

    create table insurances
    (
        id INT NOT NULL
        auto_increment primary key,
    name varchar
        (100),
    type varchar
        (10),
    cost INT NOT NULL
    );

        INSERT INTO users
            (username, first_name, last_name, balance)
        VALUES
            ('Spectre', 'Delsin', 'Rowe', 700);

        INSERT INTO insurances
            (name,type,cost)
        VALUES
            ('Level Term', 'Life', 100),
            ('Mortgage', 'Life', 200),
            ('Whole of Life', 'Life', 300),
            ('Critical Illness', 'Life', 400),
            ('Income Protection', 'Life', 100),
            ('Family Income Benefit', 'Life', 300),
            ('Over 50s', 'Life', 300),
            ('Non Medical', 'Life', 400);

        INSERT INTO insurances
            (name,type,cost)
        VALUES
            ('Key Person', 'Business', 400),
            ('Relevant Life', 'Business', 100),
            ('Business Loan Protection', 'Business', 600),
            ('Shareholder Protection', 'Business', 200),
            ('Employee Benefits', 'Business', 900);

        select *
        from users;
        select *
        from insurances;

        select users.id AS user_id, username, first_name, last_name, balance, name
        from users
            left join insurances on insurances.id = users.insurance_id
        where username = "Spectre";

        update users SET insurance_id = 7 where id = 6;
    