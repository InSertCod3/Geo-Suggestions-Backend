### Libaries
Node.js based Practice Backend Service using express, fuse and papaparse.
1. Express --> Server
2. Fuse --> Database Query
3. papaparse --> Data formatting

***
```javascript
@param q = Required argument to search database for string match.
@param result_limit = Optional argument to limit how many results retrived. (Default : 50)
```
___

```javascript
GET .../suggestions?q=Fort&result_limit=3
```
```javascript
"status": "ok",
  "results": [
    {
      "id": "4111410",
      "name": "Fort Smith",
      "ascii": "Fort Smith",
      "alt_name": "FSM,Fort Smit,Fort Smith,Fort-Smit,fotosumisu,fwrt asmyth, arkanzas,shi mi si bao,Форт Смит,Форт-Смит,فورت اسمیث، آرکانزاس,フォートスミス,史密斯堡",
      "lat": "35.38592",
      "long": "-94.39855",
      "feat_class": "P",
      "feat_code": "PPL",
      "country": "US",
      "cc2": "",
      "admin1": "AR",
      "admin2": "131",
      "admin3": "",
      "admin4": "",
      "population": "86209",
      "elevation": "134",
      "dem": "135",
      "tz": "America/Chicago",
      "modified_at": "2011-05-14"
    },
    {
      "id": "4156018",
      "name": "Fort Pierce",
      "ascii": "Fort Pierce",
      "alt_name": "FPR,Fort Pirs,Fort-Pirs,Ft. Pierce,fwrt byrs, flwryda,fwrt pyrs, flwryda,pi er si bao,Форт Пирс,Форт-Пірс,فورت بيرس، فلوريدا,فورت پیرس، فلوریدا,匹尔斯堡",
      "lat": "27.44671",
      "long": "-80.32561",
      "feat_class": "P",
      "feat_code": "PPLA2",
      "country": "US",
      "cc2": "",
      "admin1": "FL",
      "admin2": "111",
      "admin3": "",
      "admin4": "",
      "population": "41590",
      "elevation": "5",
      "dem": "5",
      "tz": "America/New_York",
      "modified_at": "2013-07-19"
    },
    {
      "id": "5955815",
      "name": "Fort Erie",
      "ascii": "Fort Erie",
      "alt_name": "Fort Erie,Fort Iri,Fort Érié,Fort-Eri,fotoeri,fwrt ayry, awntaryw,yi li bao,Форт Ири,Форт-Ері,فورت إيري، أونتاريو,フォートエリー,伊利堡",
      "lat": "42.90012",
      "long": "-78.93286",
      "feat_class": "P",
      "feat_code": "PPL",
      "country": "CA",
      "cc2": "",
      "admin1": "08",
      "admin2": "",
      "admin3": "",
      "admin4": "",
      "population": "15953",
      "elevation": "",
      "dem": "183",
      "tz": "America/Toronto",
      "modified_at": "2006-01-22"
    }
  ]
}
```