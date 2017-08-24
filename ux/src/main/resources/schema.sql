CREATE TABLE Users (
  id INTEGER IDENTITY PRIMARY KEY,
  username VARCHAR(50),
  password VARCHAR (50)
);

DROP TABLE Vocabulary
CREATE TABLE Vocabulary (
  vocabularyId INTEGER IDENTITY PRIMARY KEY,
  name VARCHAR(50),
  description VARCHAR (50),
  createddate DATE,
  createdby INTEGER,
  FOREIGN KEY (createdby) REFERENCES Users(id)
);

DROP TABLE VocabularyItem
CREATE TABLE VocabularyItem (
  vocabularyItemId INTEGER IDENTITY PRIMARY KEY,
  createddate DATE,
  createdby INTEGER,
  type VARCHAR (50),
  source VARCHAR (100),
  grammaticaltype VARCHAR (50),
  FOREIGN KEY (createdby) REFERENCES Users(id),
  vocabularyid INTEGER,
  FOREIGN KEY (vocabularyid) REFERENCES Vocabulary(VOCABULARYID)
);


CREATE TABLE EntryField (
  entryFieldId INTEGER IDENTITY PRIMARY KEY,
  createddate DATE,
  createdby INTEGER,
  name VARCHAR (50),
  description VARCHAR (200),
  FOREIGN KEY (createdby) REFERENCES Users(id),
  vocabularyid INTEGER,
  FOREIGN KEY (vocabularyid) REFERENCES Vocabulary(VOCABULARYID)
);