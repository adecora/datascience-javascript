drop table if exists Workshop;

create table Workshop(
    ident    integer unique not null primary key,
    name     text unique not null,
    duration integer not null -- duration in minutes
);

insert into Workshop values(1, "Building Community", 60);
insert into Workshop values(2, "ENIAC Programming", 150);