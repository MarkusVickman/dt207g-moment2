# Api - Lagra CV i databas
Detta repository innehåller kod för ett enklare REST API byggt med Express. Apiet kan ta emot CRUD (Create, Read, Update, Delete). Apiet är tänkt att användas för att göra ett digitalt CV som lagras i en mySql eller mariaDB-databas.

## Testwebbplats
Följ denna [länk](https://dt207g-moment2-frontend.netlify.app/) om du vill testa funktionerna och se ett exempel på hur APIet är tänkt att användas. För att se repot för testwebbplatsen följ denna [länk](https://github.com/MarkusVickman/dt207g-moment2-frontend).

## Installation, databas
APIet använder en MySQL-databas. För att ansluta till din databas måste environment variables för inloggningsuppgifter lagras hos din valda webbhost. Den här webbtjänsten använder [HelioHost](https://heliohost.org/) till sin mariaDB server. När du har valt databas-host och skapat en databas ska tabellen skapas med följande SQL-kommandon:

CREATE TABLE WORK_EXPERIENCE (
ID              INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
COMPANY_NAME    VARCHAR(100),
JOB_TITLE       VARCHAR(100),
START_DATE      DATE,
END_DATE        DATE,
LOCATION        VARCHAR(100),
DESCRIPTION     VARCHAR(1000));

## Användning
Nedan finns beskrivet hur man nå APIet på olika vis:

|Metod  |Ändpunkt        |Beskrivning                                                                             |
|-------|----------------|----------------------------------------------------------------------------------------|
|GET    |/api/cv         |Hämtar alla lagrade CV-inlägg.                                                          |
|POST   |/api/add        |Lagrar ett nytt cv. Kräver att alla parametrar för tabellen skickas med utom id.        |
|PUT    |/api/edit       |Uppdaterar ett inlägg. Kräver att alla parametrar för tabellen skickas med inklusive id.|
|DELETE |/api/delete/:ID |Raderar ett CV-inlägg med angivet ID.                                                   |

Ett CV-objekt returneras/skickas som JSON med följande struktur:
```
{
"indexId": "23", //Behövs bara för att ändra ett befintligt inlägg
"companyName": "Region Västernorrland",
"jobTitle": "Handläggare",
"location": "Örnsköldsvik",
"startDate": "2017-03-30",
"endDate": "2023-06-23",
"description": "Vända på och sortera papper.... samt ta seriösa beslut."
}
```
