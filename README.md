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