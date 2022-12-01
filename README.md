Запуск проекта:  
#### Способ 1(Через докер).  
1) Зайти в терминале в папку с проектом  
2) Сбилдить image
```
docker build . -t dockerized-react
```
3) Запустить image
```
docker run -e REACT_APP_API_BASE_URL=https://rickandmortyapi.com/api/ -p 3000:80 dockerized-react
```

#### Способ 2 (Через ноду)  
1) Скачать модули  
```
npm ci
```
2) Создать в корне проекта папку .env и положить туда
```
REACT_APP_API_BASE_URL=https://rickandmortyapi.com/api/
```
3) Запустить приложение
```
npm start
```
