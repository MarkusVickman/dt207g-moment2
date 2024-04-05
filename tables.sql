CREATE TABLE WORK_EXPERIENCE (
ID              INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
COMPANY_NAME    VARCHAR(100),
JOB_TITLE       VARCHAR(100),
START_DATE      DATE,
END_DATE        DATE,
LOCATION        VARCHAR(100),
DESCRIPTION     VARCHAR(1000));

--Data till COURSES

INSERT INTO WORK_EXPERIENCE (COMPANY_NAME, JOB_TITLE, START_DATE, END_DATE, LOCATION, DESCRIPTION) VALUES ('Domsjöfabriker','Sodapannsoperatör',STR_TO_DATE('12-Jun-2012','%e-%M-%Y'),STR_TO_DATE('31-Mar-2017','%e-%M-%Y'),'Örnskölkdsvik','Jobbade som drifttekniker/operatör med huvuduppgift att styra och köra sodapannor på ett massabruk');
INSERT INTO WORK_EXPERIENCE (COMPANY_NAME, JOB_TITLE, START_DATE, END_DATE, LOCATION, DESCRIPTION) VALUES ('SCA Östrand','Operatör',STR_TO_DATE('01-Apr-2017','%e-%M-%Y'),STR_TO_DATE('07-Jun-2025','%e-%M-%Y'),'Timrå','Jobbade som operatör med huvuduppgift att styra och köra energiavdelningen på ett massabruk');
