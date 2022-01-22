CREATE TABLE watchlist (
    id VARCHAR(50) NOT NULL,
    user_id VARCHAR(50) NOT NULL,
    title VARCHAR(50) NOT NULL,
    category VARCHAR(50) NOT NULL,
    season INT NOT NULL,
    episode INT NOT NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,

    PRIMARY KEY (id),
    CONSTRAINT fk_users
      FOREIGN KEY(user_id) 
	    REFERENCES users(id)
);