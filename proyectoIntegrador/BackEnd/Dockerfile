FROM amazoncorretto:11-alpine-jdk                                                                                        //version de java
MAINTAINER SIA                                                                                                                                     //dueño
COPY  target/proyectofinalbcknd-0.0.1-SNAPSHOT.jar  bckendport.jar              //copia empaquetado a github
ENTRYPOINT ["java", "-jar", "/bckendport.jar"]              //una vez copiado indica por donde se ejecuta primero
