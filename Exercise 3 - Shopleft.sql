CREATE SCHEMA `shopleft` ;

CREATE TABLE `shopleft`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));
  
  CREATE TABLE `shopleft`.`products` (
  `product_code` VARCHAR(40) NOT NULL,
  `product_name` VARCHAR(45) NOT NULL,
  `product_price` DECIMAL(5,2) NOT NULL,
  `product_quantity` INT NOT NULL,
  PRIMARY KEY (`product_code`));
  
INSERT INTO `shopleft`.`users` (`id`, `email`, `first_name`, `last_name`, `password`) 
    VALUES ('1', 'matthew@lifechoices.co.za', 'Matthew', 'Brown', 'matthewbrown');
INSERT INTO `shopleft`.`users` (`email`, `first_name`, `last_name`, `password`) 
    VALUES ('indiphile@lifechoices.co.za', 'Indiphile', 'Mcengwa', 'indimcengwa');
INSERT INTO `shopleft`.`users` (`email`, `first_name`, `last_name`, `password`) 
    VALUES ('tarryn@lifechoices.co.za', 'Tarryn', 'Masunda', 'tarrynmasunda');
INSERT INTO `shopleft`.`users` (`email`, `first_name`, `last_name`, `password`) 
    VALUES ('owethu', 'Owethu', 'Sityata', 'owethusityata');

INSERT INTO `shopleft`.`products` (`product_code`, `product_name`, `product_price`, `product_quantity`) 
    VALUES ('baro1', 'Bar One', '9.99', '20');
INSERT INTO `shopleft`.`products` (`product_code`, `product_name`, `product_price`, `product_quantity`) 
    VALUES ('hand1', 'Handy Andy', '19.00', '5');
INSERT INTO `shopleft`.`products` (`product_code`, `product_name`, `product_price`, `product_quantity`) 
    VALUES ('pota1', 'Potatoes', '38.99', '10');
