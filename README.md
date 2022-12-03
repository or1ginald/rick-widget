Запуск проекта:  
#### Method 1(Docker).  
1) Go through the terminal to the project folder  
2) Build image
```
docker build . -t dockerized-react
```
3) Run image
```
docker run -e REACT_APP_API_BASE_URL=https://rickandmortyapi.com/api/ -p 3000:80 dockerized-react
```
4) Open http://localhost:3000/

#### Method 2 (Node.js).  
1) Download node_modules  
```
npm ci
```
2) Create a .env file in the root of the project folder and put there the following content
```
REACT_APP_API_BASE_URL=https://rickandmortyapi.com/api/
```
3) Run application
```
npm start
```
4) Open http://localhost:3000/
