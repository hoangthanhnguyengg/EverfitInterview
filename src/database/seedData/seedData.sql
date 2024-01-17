CREATE TABLE
    IF NOT EXISTS Users (
        id INT PRIMARY KEY,
        Username VARCHAR(50) NOT NULL,
        Password VARCHAR(255) NOT NULL,
        CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE
    IF NOT EXISTS MetricTypes (id INT PRIMARY KEY, TypeName VARCHAR(50) NOT NULL);

CREATE TABLE
    IF NOT EXISTS Metrics (
        id INT PRIMARY KEY,
        UserID INT,
        MetricTypeID INT,
        Date DATE,
        Value DECIMAL(10, 2),
        FOREIGN KEY (UserID) REFERENCES Users (id), -- Giả sử có bảng Users
        FOREIGN KEY (MetricTypeID) REFERENCES MetricTypes (id)
    );

CREATE TABLE
    IF NOT EXISTS Units (
        id INT PRIMARY KEY, 
        MetricTypeID INT, 
        Name VARCHAR(50) NOT NULL, 
        FOREIGN KEY (MetricTypeID) REFERENCES MetricTypes (id)
    );

INSERT INTO Units (id, name, metricTypeId) VALUES
    ( 1,'Meter', 1),
    ( 2,'Centimeter', 1),
    ( 3,'Inch', 1),
    ( 4,'Feet', 1),
    ( 5,'Yard', 1),
    ( 6,'C', 2),
    ( 7,'F', 2),
    ( 8,'K', 2);

INSERT INTO
    Users (id, Username, Password, CreatedAt)
VALUES
    (1, 'hoang', 'abcdef', CURRENT_TIMESTAMP),
    (2, 'huy', '123456', CURRENT_TIMESTAMP);

INSERT INTO
    MetricTypes (id, TypeName)
VALUES
    (1, 'Temperature'),
    (2, 'Distance');

-- Thêm 5 bản ghi cho người dùng 1
INSERT INTO
    Metrics (id, UserID, MetricTypeID, Date, Value)
VALUES
    (1, 1, 1, '2024-01-01', 20.5),
    (2, 1, 1, '2024-01-02', 21.2),
    (3, 1, 1, '2024-01-05', 22.8),
    (4, 1, 2, '2024-01-15', 15.3),
    (5, 1, 2, '2024-01-20', 16.7);

-- Thêm 5 bản ghi cho người dùng 2
INSERT INTO
    Metrics (id, UserID, MetricTypeID, Date, Value)
VALUES
    (6, 2, 1, '2024-01-10', 23.4),
    (7, 2, 1, '2024-01-12', 24.1),
    (8, 2, 1, '2024-01-18', 25.7),
    (9, 2, 2, '2024-01-25', 18.9),
    (10, 2, 2, '2024-01-28', 19.5);