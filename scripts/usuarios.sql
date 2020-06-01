/* Tabla de usuarios */

Create table if not exists Usuarios (
id biginit not null,
nombreDeUsuario varchar(25) not null,
email varchar(320) not null,
password varchar(8) not null,
fechaDeNacimiento date null,
 primary key (id) 
);

insert into Usuarios (

id,
nombreDeUsuario,
email, 
password,
fechaDeNacimiento
)

/* Crear 5 Usuarios */

values (
  1,
  juan,
  juanperez@gmail.com,
  Juan4567,
  1995/08/06
  )

values (
  2,
  Nicolas,
  nicolas00feld@gmail.com,
  Nico4567,
  1998/07/23
)

values(
  3,
  Leandro,
  leandrogonzalez@gmail.com,
  Lean4567,
  2000/01/06
  )
values(
  4,
  Matias,
  matias01@gmail.com,
  Mati4567,
  1999/09/30
  )

values(
  5,
  Fransisco,
  fransiscoramirez@gmail.com,
  Fran4567,
  2001/12/06
  );
  

/* Tabla de Resenias */

createTable if not exists Resenias (
id bigint not null ,
idPelicula bigint not null,
idUsuario bigint not null,
texto varchar(500) not null,
fechaCreacion date null,
fechaActualizacion date null,
puntaje smallint, 
primary key (`id`) 
);

insert into Resenias (
id,
idPelicula,
idUsuario,
texto,
fechaCreacion,
fechaActualizacion,
puntaje
)


/* Crear 25 resenias */

values: (
  1,
  1,
  1,
  In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.,
  2019/10/03,
  2020/02/07,
  10
  )

values(
  1,
  2,
  1,
  Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.,
  2020/01/23,
  2020/09/09,
  7
  )
values(
  1,
  3,
  1,
  A down and out cop lands the case of a lifetime when four suspects are nabbed in the assassination attempt of a journalist. The pursuit of it leads him to 'Paatal Lok', and to shocking discoveries in the past of the four suspects.,
  2018/02/02,
  2020/05/02,
  1
  )
values(
  1,
  4,
  1,
  April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.,
  2019/08/30,
  2020/02/13,
  8
  )
values(
  1,
  5,
  1,
  A detective investigates the death of a patriarch of an eccentric, combative family.,
  2019/12/12,
  2020/02/02,
  6
  )

values(
  1,
  6,
  2,
  The surviving members of the resistance face the First Order once again, and the legendary conflict between the Jedi and the Sith reaches its peak bringing the Skywalker saga to its end.,
  2019/11/11,
  2020/07/07,
  1
  )

values(
  1,
  7,
  2,
  A detective investigates the death of a patriarch of an eccentric, combative family.,
  2019/11/12,
  2019/12/07,
  10
  )

values(
  1,
  8,
  2,
  After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos.,
  2019/10/18,
  2020/04/17,
  4
  )

values(
  1,
  9,
  2,
  A team of explorers travel through a wormhole in space in an attempt to ensure humanity.,
  2019/10/03,
  2020/02/07,
  3
  )

values(
  1,
  10,
  2,
  Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.,
  2019/11/13,
  2020/02/22,
  8.5
  )

values(
  1,
  11,
  3,
  The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.,
  2019/01/29,
  20200107,
  2
  )

values(
  1,
  12,
  3,
  Follows the adventures of Aang, a young successor to a long line of Avatars, who must master all four elements and stop the Fire Nation from enslaving the Water Tribes and the Earth Kingdom.,
  2017/10/03,
  2020/05/07,
  8
  )
     
values(
  1,
  13,
  3,
  A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.,
  2019/10/24,
  2020/01/17,
  10
  )

values(
  1,
  14,
  3,
  Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.,
  2019/10/03,
  2020/02/07,
  8.2
  )
     
values(
  1,
  15,
  3,
  In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world.,
  2019/12/23,
  2020/03/02,
  9,4
  )
     
values(
  1,
  16,
  4,
  A man is able to choose his own afterlife after his untimely death.,
  2019/10/26,
  2020/02/28,
  8.2
  )
     
values(
  1,
  17,
  4,
  The Feds try to take down notorious American gangsters John Dillinger, Baby Face Nelson and Pretty Boy Floyd during a booming crime wave in the 1930s.,
  2019/10/13,
  2020/02/02,
  7
  )

values(
  1,
  18,
  4,
  A down and out cop lands the case of a lifetime when four suspects are nabbed in the assassination attempt of a journalist. The pursuit of it leads him to 'Paatal Lok', and to shocking discoveries in the past of the four suspects.,
  2019/11/01,
  2020/01/27,
  3
  )

values(
  1,
  19,
  4,
  When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.,
  2019/09/04,
  2020/01/27,
  9
  )

values(
  1,
  20,
  4,
  An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.,
  2019/03/13,
  2020/05/17,
  8.8
  )

values(
  1,
  21,
  5,
  An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.,
  2018/10/13,
  2020/02/02,
  8,4
  )

values(
  1,
  22,
  5,
  Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.,
  2016/10/03,
  2020/52/07,
  8.9
  )

values(
  1,
  23,
  5,
  A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park.,
  2019/10/23,
  2020/04/27,
  7.8
  )

values(
  1,
  24,
  5,
  Inspired by the viral New York Magazine article, Hustlers follows a crew of savvy former strip club employees who band together to turn the tables on their Wall Street clients.,
  2019/11/13,
  2020/05/27,
  6.3
  )

values(
  1,
  25,
  5,
  A team of explorers travel through a wormhole in space in an attempt to ensure humanity.,
  2018/11/23,
  2020/02/27,
  8.6
  );
