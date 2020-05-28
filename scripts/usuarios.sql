/* Tabla de usuarios */

Create table if not exists `Usuarios` (
`id` bigint not null ,
`nombreDeUsuario` varchar(25) not null,
`email` varchar(320) not null,
`password` varchar(8) not null,
`fechaDeNacimiento` date null,
 primary key (`id`) 
);

insert into `Usuarios` (
  `id`,
 `nombreDeUsuario`,
`email`, 
`password`,
`fechaDeNacimiento`
  )

  /* Crear 5 Usuarios */

  values(
   1,
  'juan',
   'juanperez@gmail.com',
    'Juan4567',
   '19950806'
  ) 
  values(
   2,
  'nicolas',
   'nicolas00feld@gmail.com',
    'Nico4567',
   '19980723'
  )
   values(
   3,
  'leandro',
   'leandrogonzalez@gmail.com',
    'Lean4567',
   '20000106'
  )
   values(
   4,
  'Matias',
   'matias01@gmail.com',
    'Mati4567',
   '19990930'
  )
   values(
   5,
  'fransisco',
   'fransiscoramirez@gmail.com',
    'Fran4567',
   '20011206'
  );
  

/* Tabla de Resenias */

  Create table if not exists `Resenias` (
`id` bigint not null ,
`idPelicula` bigint not null,
`idUsuario` bigint not null,
`texto` varchar(500) not null,
`fechaCreacion` date null,
`fechaActualizacion` date null,
`puntaje` smallint, 
 primary key (`id`) 
);

 insert into `Resenias` (
  `id`,
 `idPelicula`,
`idUsuario`,
`texto`,
`fechaCreacion`,
`fechaActualizacion`,
`puntaje`
  )

  /* Crear 25 resenias */

   values(
   1,
  1,
   1,
    'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
   '20191003',
   '20200207',
   10
  )
     values(
   1,
  2,
   1,
    'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
   '20200123',
   '20200909',
   7
  )
     values(
   1,
  3,
   1,
    'A down and out cop lands the case of a lifetime when four suspects are nabbed in the assassination attempt of a journalist. The pursuit of it leads him to 'Paatal Lok', and to shocking discoveries in the past of the four suspects.',
   '201822',
   '20200502',
   1
  )
     values(
   1,
  4,
   1,
    'April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.',
   '20190830',
   '20200213',
   8
  )
     values(
   1,
  5,
   1,
    'A detective investigates the death of a patriarch of an eccentric, combative family.',
   '20191212',
   '20200202',
   6
  )
     values(
   1,
  6,
   2,
    'The surviving members of the resistance face the First Order once again, and the legendary conflict between the Jedi and the Sith reaches its peak bringing the Skywalker saga to its end.
',
   '20191111',
   '20200707',
   1
  )
     values(
   1,
  7,
   2,
    'A detective investigates the death of a patriarch of an eccentric, combative family.',
   '20191112',
   '20191207',
   10
  )
     values(
   1,
  8,
   2,
    'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos.',
   '20191018',
   '20200417',
   4
  )
     values(
   1,
  9,
   2,
    'A team of explorers travel through a wormhole in space in an attempt to ensure humanity.',
   '20191003',
   '20200207',
   3
  )
     values(
   1,
  10,
   2,
    'Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.',
   '20191113',
   '20200222',
   8.5
  )
     values(
   1,
  11,
   3,
    'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
   '20190129',
   '20200107',
   2
  )
     values(
   1,
  12,
   3,
    'Follows the adventures of Aang, a young successor to a long line of Avatars, who must master all four elements and stop the Fire Nation from enslaving the Water Tribes and the Earth Kingdom.',
   '20171003',
   '20200507',
   8
  )
     values(
   1,
  13,
   3,
    'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.
',
   '20191024',
   '20200117',
   10
  )
     values(
   1,
  14,
   3,
    'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.',
   '20191003',
   '20200207',
   8.2
  )
     values(
   1,
  15,
   3,
    'In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world.',
   '20191223',
   '20200302',
   9,4
  )
     values(
   1,
  16,
   4,
    'A man is able to choose his own afterlife after his untimely death.',
   '20191026',
   '20200228',
   8.2
  )
     values(
   1,
  17,
   4,
    'The Feds try to take down notorious American gangsters John Dillinger, Baby Face Nelson and Pretty Boy Floyd during a booming crime wave in the 1930s.',
   '20191013',
   '20200202',
   7
  )
     values(
   1,
  18,
   4,
    'A down and out cop lands the case of a lifetime when four suspects are nabbed in the assassination attempt of a journalist. The pursuit of it leads him to 'Paatal Lok', and to shocking discoveries in the past of the four suspects.',
   '20191101',
   '20200127',
   3
  )
     values(
   1,
  19,
   4,
    'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
   '20190904',
   '20200127',
   9
  )
     values(
   1,
  20,
   4,
    'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
   '20190313',
   '20200517',
   8.8
  )
     values(
   1,
  21,
   5,
    'An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.',
   '20181013',
   '20200202',
   8,4
  )
     values(
   1,
  22,
   5,
    'Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.',
   '20161003',
   '20205207',
   8.9
  )
     values(
   1,
  23,
   5,
    'A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park.',
   '20191023',
   '20200427',
   7.8
  )
     values(
   1,
  24,
   5,
    'Inspired by the viral New York Magazine article, Hustlers follows a crew of savvy former strip club employees who band together to turn the tables on their Wall Street clients.',
   '20191113',
   '20200527',
   6.3
  )
     values(
   1,
    25,
   5,
    'A team of explorers travel through a wormhole in space in an attempt to ensure humanity.',
   '20181123',
   '20200227',
   8.6
  );
