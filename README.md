# qrglass
NodeJS + MSSQL CRUD Project

## Kurulum

### Node kurulumu

Centos Icin ,

* https://prototurk.com/makaleler/centos-node-js-kurulumu

Ubuntu Icin,

* https://blog.veriloji.com/ubuntu-uzerine-nodejs-kurulumu/

Windows Icin,

* https://www.yusufsezer.com.tr/node-js-kurulumu/


### Projenin sunucuya kurulmasi

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

MSSQL veritabanindan   veriyi almak icin,

```
http://IP:PORT/get/mssql?urunID=119234
```

# Dockerize 

`.env.example` dosyasi icerisindeki configleri duzenledikten sonra,

```
docker build -t qrglass .
docker run -it -p 3001:80 --name web qrglass
```

* `docker-compose` yuklu ise,

```
docker-compose up
```

# QR Code Olusturma

Text formatinda icerisinde sadece veri tabanindaki id bilgisini qrcode olarak olusturuyoruz.

* https://www.qr-code-generator.com/

Ornek veri,

```
16909617
```


# Yardimci Dokumanlar

* https://docs.microsoft.com/en-us/sql/connect/node-js/step-3-proof-of-concept-connecting-to-sql-using-node-js?view=sql-server-ver15

* https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-ver15&pivots=cs1-bash