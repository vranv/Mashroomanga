CREATE TABLE users (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE mushrooms (
    name_engl VARCHAR(255) NOT NULL,
    name_lat VARCHAR(255) NOT NULL,
    created_by_user_id INTEGER,
    created_at TIMESTAMP WITH TIME ZONE,
    updated_by_user_id INTEGER,
    updated_at TIMESTAMP WITH TIME ZONE,
    description TEXT,
    wiki TEXT NOT NULL,
    commercially_harvested VARCHAR(6) NOT NULL,
    commercially_cultivated VARCHAR(6) NOT NULL,
    color VARCHAR(50),
    shape VARCHAR(50),
    size VARCHAR(50),
    edibility VARCHAR(50),
    gathering_season DATE,
    habitat VARCHAR(255),
    preparation VARCHAR(255),
    medical_uses VARCHAR(255),
    nutritional_value INTEGER,
    similar_species VARCHAR(255),
    conservation_status VARCHAR(255)
);

CREATE INDEX idx_name_engl ON mushrooms (name_engl);
CREATE INDEX idx_name_lat ON mushrooms (name_lat);
ALTER TABLE mushrooms ADD CONSTRAINT user_id FOREIGN KEY (created_by_user_id) REFERENCES users;
