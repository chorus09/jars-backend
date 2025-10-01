# Airline App API ✈️

Un proiect demonstrativ realizat în **NestJS**, care gestionează **zboruri** și **rezervări**.

## 📂 Funcționalități
- `GET /flights/list` – lista tuturor zborurilor
- `GET /flights/details/:id` – detalii despre un zbor
- `GET /flights/search` – căutare după nume, preț, locație
- `GET /flights/findByName/:name` – căutare simplă după nume
- `GET /flights/findByNameUpper/:name` – căutare după nume cu Pipe (majuscule)
- `GET /reservations/list` – lista rezervărilor
- `GET /reservations/details/:id` – detalii despre rezervare
- `GET /reservations/my/:username` – rezervările unui client (doar Client)
- `GET /users/list` – listă utilizatori
- `GET /admin/flights/list` – lista zborurilor (Admin only)
- `PUT /admin/flights/edit/:id` – modifică un zbor (Admin only)
- `GET /admin/reservations/list` – lista rezervărilor (Admin only)

## 🔑 Acces pe roluri
- **Admin** → acces la rutele `/admin/...`
- **Client** → acces la `/reservations/my/...`
- Request-urile folosesc header-ul:  

## 📬 Testare API
Colecția Postman este inclusă în proiect:
AirlineApp_extended.postman_collection.json

## 👨‍💻 Autori
Proiect creat pentru exercițiu educațional.