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

CREATE TABLE IF NOT EXISTS comment (
	id INT PRIMARY KEY AUTO_INCREMENT,
	content VARCHAR(1000) NOT NULL,
	moment_id INT NOT NULL,
	user_id INT NOT NULL,
	comment_id INT DEFAULT NULL,
	createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

	FOREIGN KEY(moment_id) REFERENCES moment(id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY(user_id) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY(comment_id) REFERENCES comment(id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO comment (content, moment_id, user_id) VALUES (?, ?, ?);

CREATE TABLE IF NOT EXISTS label (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(10) NOT NULL UNIQUE,
	createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS moment_label (
	moment_id INT NOT NULL,
	label_id INT NOT NULL,
	createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (moment_id, label_id),
	FOREIGN KEY (moment_id) REFERENCES moment(id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (label_id) REFERENCES label(id) ON DELETE CASCADE ON UPDATE CASCADE
);

SELECT 
		m.id id , m.content content, m.createAt createTime,
		m.updateAt updateTime, 
		JSON_OBJECT('id', u.id, 'name', u.name) user,
		(SELECT COUNT(*) FROM comment WHERE comment.moment_id = m.id) commentCount,
		(SELECT COUNT(*) FROM moment_label ml WHERE ml.moment_id = m.id) labelCount
FROM moment m 
LEFT JOIN user u ON m.user_id = u.id
LIMIT ?, ?;

SELECT 
		m.id id , m.content content, m.createAt createTime,
		m.updateAt updateTime,
		IF (COUNT(c.id), 
		JSON_ARRAYAGG(
			JSON_OBJECT('id', c.id, 'content', c.content, 'commentId', c.comment_id,
									'createTime', c.createAt
									'user', JSON_OBJECT('id', cu.id, 'name', cu.name)) 
		), NULL) comments
		IF (COUNT(l.id),JSON_ARRAYAGG(
		JSON_OBJECT('id', l.id, 'name', l.name)
		),NULL) labels
FROM moment m 
LEFT JOIN user u ON m.user_id = u.id
LEFT JOIN comment c ON c.moment_id = m.id
LEFT JOIN user cu ON c.user_id = cu.id
LEFT JOIN moment_label ml ON m.id = ml.moment_id
LEFT JOIN label l ON ml.label_id = l.id
WHERE m.id = 1
GROUP BY m.id;


CREATE TABLE IF NOT EXISTS avatar (
	id INT PRIMARY KEY AUTO_INCREMENT,
	filename VARCHAR(100) NOT NULL UNIQUE,
	mimetype VARCHAR(30),
	size INT,
	user_id INT,
	createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE
);


ALTER TABLE user ADD avatar_url VARCHAR(200);

CREATE TABLE IF NOT EXISTS file (
	id INT PRIMARY KEY AUTO_INCREMENT,
	filename VARCHAR(100) NOT NULL UNIQUE,
	mimetype VARCHAR(30),
	size INT,
	moment_id INT,
	user_id INT,
	createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (moment_id) REFERENCES moment(id) ON DELETE CASCADE ON UPDATE CASCADE
);
