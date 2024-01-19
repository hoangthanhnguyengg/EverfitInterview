# Hướng dẫn chạy dự án:
1. CLI: 

```
yarn
```
2. Thêm config vào cấu hình db và chạy file sql để seed data: 
``` 
src\database\database.module.ts 

{
      type: 'postgres', // Use 'postgres' for postgres
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'YOURPASSWORD',
      database: 'YOURDB',
      entities: [...Entities],
      synchronize: false, // Set to false in production
      logging: true,
    }
```
3. Khởi chạy dự án: 
```
    yarn start:dev
```

4. Yêu cầu dự án: 
- ![alt text](https://i.ibb.co/C98pSQ1/0-requirement.png)

5. Phân tích yêu cầu:
- Xây dựng 1 hệ thống có khả năng đo lường các metric thông số theo các đơn vị về khoảng cách (distance) và nhiệt độ (temperature).
- Có chức năng lưu trữ các thông số về metrics (thời gian, giá trị, đơn vị) 
- Có chức năng lọc ra các thông số về metrics (lọc theo đơn vị, người dùng, khoảng thời gian...)

6. Thiết kế Database:

![altText](https://i.ibb.co/ZBPKGnh/1-db-Design.png)

7. Kết quả: 
- Chức năng lưu trữ metrics:
![altText](https://i.ibb.co/9gPMMxm/2-insert.png)

![altText](https://i.ibb.co/kBGz8L5/3-insert.png)

- Chức năng lọc metrics theo đơn vị, người dùng, khoảng thời gian:

![altText](https://i.ibb.co/dcNNT4h/5-get.png)

![altText](https://i.ibb.co/gJLH08j/4-get.png)
