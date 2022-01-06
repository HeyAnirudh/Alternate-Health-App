use healthapp; 
CREATE TABLE Users(
  User_Id INTEGER PRIMARY KEY,
  First_Name TEXT NOT NULL,
  Last_Name TEXT NOT NULL,
  Address_Line1 TEXT NOT NULL,
  Address_Line2 TEXT NOT NULL,
  City TEXT NOT NULL,
  State TEXT NOT NULL,
  Country TEXT NOT NULL,
  Zipcode TEXT NOT NULL,
  Mobile_Number TEXT NOT NULL,
  Identification_Number VARCHAR(16) NOT NULL UNIQUE
);
use healthapp;
CREATE TABLE Patients (
  Patient_Id INTEGER PRIMARY KEY,
  User_Id INTEGER NOT NULL,
  FOREIGN KEY (User_Id) REFERENCES Users(User_Id),
  First_Name TEXT NOT NULL,
  Last_Name TEXT NOT NULL,
  Father_Name TEXT NOT NULL,
  Mother_Name TEXT NOT NULL,
  Address_Line1 TEXT NOT NULL,
  Address_Line2 TEXT NOT NULL,
  City TEXT NOT NULL,
  State TEXT NOT NULL,
  Country TEXT NOT NULL,
  Zipcode TEXT NOT NULL,
  Mobile_Number TEXT NOT NULL,
  Identification_Number VARCHAR(16) NOT NULL UNIQUE
 );

use healthapp;
DROP TABLE IF EXISTS Patient_History;
CREATE TABLE Patient_History(
  S_No INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  Patient_Id INTEGER NOT NULL,
  Practioner_Id INTEGER NOT NULL,
  FOREIGN KEY (Patient_Id) REFERENCES Patients(Patient_Id),
  Diagonsis_Code TEXT ,
  Diagonsis_Name TEXT,
  Diagnosis_Date datetime ,
  Start_Date datetime,
  End_Date datetime,
  Next_Apt_Date datetime,
  FOREIGN KEY (Practioner_Id) REFERENCES practioners(Practioner_Id)
  );

use healthapp;
DROP TABLE IF EXISTS Current_Diagnosis;
CREATE TABLE Current_Diagnosis(
S_No INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
Patient_Id INTEGER NOT NULL,
Practioner_Id INTEGER NOT NULL,
FOREIGN KEY (Practioner_Id) REFERENCES practioners(Practioner_Id),
  FOREIGN KEY (Patient_Id) REFERENCES Patients(Patient_Id),
  Diagnosis_Code VARCHAR(50) NOT NULL,
  Diagnosis_Name TEXT NOT NULL,
  Diagnosis_Date datetime NOT NULL ,
  Start_Date datetime NOT NULL,
  End_Date datetime NOT NULL,
  Next_Apt_Date datetime NOT NULL
);

use healthapp;
DROP TABLE IF EXISTS Medication;
CREATE TABLE Medication(
  S_No INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  Patient_Id INTEGER, 
  Practioner_Id INTEGER NOT NULL,
  Diagnosis_Code VARCHAR(50) NOT NULL,
  FOREIGN KEY (Patient_Id) REFERENCES Patients(Patient_Id),
  FOREIGN KEY (Practioner_Id) REFERENCES practioners(Practioner_Id),
  Abx_Id INTEGER ,
  Abx_Name TEXT,
  Abx_Frequency TEXT,
  Start_Date datetime,
  End_Date datetime
  

);
USE healthapp;
CREATE TABLE Practioners (
  Practioner_Id INTEGER PRIMARY KEY,
  User_Id integer,
  FOREIGN KEY (User_Id) REFERENCES users(User_Id),
  First_Name TEXT NOT NULL,
  Last_Name TEXT NOT NULL,
  Gender TEXT NOT NULL,
  Address_Line1 TEXT NOT NULL,
  Address_Line2 TEXT NOT NULL,
  City TEXT NOT NULL,
  State TEXT NOT NULL,
  Country TEXT NOT NULL,
  Zipcode TEXT NOT NULL,
  Mobile_Number TEXT NOT NULL,
  Birth_Date DATETIME ,
  Identification_Number VARCHAR(16) NOT NULL UNIQUE,
  Practioner_Type TEXT  NOT NULL 
);

use healthapp;
CREATE TABLE Availibility(
	S_No INTEGER PRIMARY KEY NOT NULL,
	Practioner_ID INTEGER NOT NULL,
    From_Time DATETIME NOT NULL,
    To_Time DATETIME NOT NULL,
	FOREIGN KEY (Practioner_Id) REFERENCES practioners(Practioner_Id)
);

use healthapp;
CREATE TABLE Qualifications(
 S_No INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
 Practioner_Id INTEGER NOT NULL,
 Qualification_Name TEXT NOT NULL,
 Institute_Name TEXT NOT NULL,
 Start_Year DATETIME NOT NULL,
 End_Year DATETIME NOT NULL,
 FOREIGN KEY (Practioner_Id) REFERENCES practioners(Practioner_Id)
);

use healthapp;
CREATE TABLE Certification(
 S_No INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
 Practioner_Id INTEGER NOT NULL,
 Certificate_Name TEXT NOT NULL,
 Certificate_Id TEXT NOT NULL,
 Institute_Name TEXT NOT NULL,
 Issue_Date DATETIME NOT NULL,
 Validity DATETIME,
 FOREIGN KEY (Practioner_Id) REFERENCES practioners(Practioner_Id)
);

use healthapp;
DROP TABLE IF EXISTS Appointment;
CREATE TABLE Appointment(
	 S_No INTEGER NOT NULL PRIMARY KEY,
     Patient_Id INTEGER NOT NULL,
     Practioner_Id INTEGER NOT NULL,
     Apt_Date DATETIME NOT NULL,
     Apt_Status TEXT NOT NULL
);

