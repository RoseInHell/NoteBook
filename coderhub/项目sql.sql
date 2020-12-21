CREATE TABLE IF NOT EXISTS `user` (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(30) NOT NULL UNIQUE,
	password VARCHAR(50) NOT NULL,
	createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

ALTER TABLE user  RENAME COLUMN `PASSWORD` TO `password`;

CREATE TABLE IF NOT EXISTS moment (
	id INT PRIMARY KEY AUTO_INCREMENT,
	content VARCHAR(1000) NOT NULL,
	user_id INT NOT NULL,
	creteAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	FOREIGN KEY(user_id) REFERENCES user(id)
);

INSERT INTO moment (content, user_id) VALUES ('PHP是世界上最', 2);

ALTER TABLE moment RENAME COLUMN creteAt to createAt;

SELECT 
	m.id id , m.content content, m.createAt createTime,
	m.updateAt updateTime,
	JSON_OBJECT('id', u.id, 'name', u.name) user
FROM moment m 
LEFT JOIN user u ON m.user_id = u.id
WHERE m.id = 1;

SELECT 
	m.id id , m.content content, m.createAt createTime,
	m.updateAt updateTime,
	JSON_OBJECT('id', u.id, 'name', u.name) user
FROM moment m 
LEFT JOIN user u ON m.user_id = u.id
LIMIT ?, ?;


SELECT * FROM moment WHERE id = ? AND user_id = ?;