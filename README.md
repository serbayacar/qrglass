# qrglass
NodeJS + MSSQL CRUD Project

## Kurulum

```
$ git clone https://github.com/serbayacar/qrglass
$ npm install
$ npm start
```

* `.env` dosyasi icerisinden servis edilen PORT ve sunucu IP bilgisi degistirilebilir.  

## EndPointler  

JSON Formatinda veriyi almak icin,

```
http://IP:PORT/get/json?urunID=119234
```

Web Formatinda veriyi almak icin,

```
http://IP:PORT/get/web?urunID=119234
```

# Dockerize 

`.env.example` dosyasi icerisindeki configleri duzenledikten sonra,

```
docker build -t qrglass .
docker run -it -p 80:80 --name web qrglass
```

* `docker-compose` yuklu ise,

```
docker-compose up
```