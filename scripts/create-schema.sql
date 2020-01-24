CREATE TABLE IF NOT EXISTS users
(
    email         text primary key,
    password      text not null,
    full_name     text,
    profile_photo text,
    created_at    timestamp default now(),
    updated_at    timestamp default now(),
    verified      boolean   default false,
    deleted_at    timestamp
);