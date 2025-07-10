# Condiment API

## REST API Specification

| Endpoint          | HTTP   | Description            |
| ----------------- | ------ | ---------------------- |
| `/condiments`     | GET    | Get all condiments     |
| `/condiments/:id` | GET    | Get condiment by id    |
| `/condiments`     | POST   | Add new condiment      |
| `/condiments`     | DELETE | Delete all condiments  |
| `/condiments/:id` | DELETE | Delete condiment by id |
| `/condiments/:id` | PATCH  | Patch condiment by id  |
| `/condiments/:id` | PUT    | Update condiment by id |

## ERD Diagram

![ERD Diagram](/aset/db.png)
[ERD Diagram] (https://dbdiagram.io/d/686fe2b5f413ba3508493aef)

## Getting Started

To install dependencies:

```sh
bun install
```

To run:

```sh
bun run dev
```

open http://localhost:3000
