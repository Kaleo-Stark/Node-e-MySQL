-- Cria a base de dados "crud" que recebera a tabela de cliente.
CREATE DATABASE crud;

-- Seleciona a tabela "crud".
USE crud;

-- Cria a tabela clientes que recebera os dados de cleintes e será manipulada pelo NodeJS.
CREATE TABLE clientes (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(30),
    idade INT,
    uf VARCHAR(2)
);

-- Insere dados na tabela.
INSERT INTO clientes (nome, idade, uf)
VALUES (  "Kaleo Stark"   , 22 , "SP"), 
       (     "Hulk"       , 30 , "DF"),
       ("Capitão America" , 99 , "SP");
