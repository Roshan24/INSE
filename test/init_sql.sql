-- create database if not exists sportvantage;
--
-- create table if not exists sportvantage.team (
--     test varchar(20)
-- ) charset 'utf8mb4';
--
-- insert into sportvantage.team values ('test');

create database if not exists sportvantage;
  create table teams(
    teamID      INT           AUTO_INCREMENT PRIMARY KEY
    sportID     INT           NOT NULL
    leagueID    INT           NOT NULL
    playerID    INT           NOT NULL
    reqPlayers  INT           NOT NULL
    CONSTRAINT FK_sport FOREIGN KEY (sportID) REFERENCES sport(sportID),
    CONSTRAINT FK_league FOREIGN KEY (leagueID) REFERENCES league(leagueID),
    CONSTRAINT FK_players FOREIGN KEY (playerID) REFERENCES players(playerID)
  );

  create table if not exists sport(
    sportID     INT           AUTO_INCREMENT PRIMARY KEY
    sportName   CHAR(10)      NOT NULL
  );
  create table if not exists league();
  create table if not exists users() charset 'utf8mb4';
