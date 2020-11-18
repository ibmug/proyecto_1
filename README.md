# MEDIDOR DE COVID-19 POR AlCALDÍA
​
Primer proyecto grupal para el Full-Stack Web Development Programming Bootcamp
en el Tecnológico de Monterrey (Noviembre 2020)
​
## Nuestra idea
​
El 2020 no le cayó bien a nadie y México (como el resto de la humanidad) se ha
tenido que enfrentar a la "nueva normalidad" causada por el coronavirus
SARS-CoV-2 o COVID-19. Ésta nueva realidad conlleva alterar la forma en que
interactuamos con los demás (la sana distancia) y realizamos nuestra rutina
diaria.
​
La idea detrás de nuestra aplicación es simple y se basa en utilizar el web
development para solucionar o, cuando menos, aminorar las dificultades de lidiar
con el riesgo de contagio existente en la Ciudad de México.
​
Nuestro proyecto intenta darle solución a una situación común: te encuentras en
un área de la Ciudad de México y necesitas ingerir alimentos, pero quieres tomar
una decisión (visitar o no un restaurante) en base al nivel de riesgo/alerta de
esa área. En otras palabras, ¿cómo saber el número de contagios registrados
respecto a tu posición actual?
​
**El medidor de Covid por alcaldía** es una herramienta que toma la cantidad de
contagios y personas hospitalizadas por COVID-19 que el gobierno mexicano ha
reportado en cada "alcaldía/delegación" de la CDMX. Al obtener estos datos, la
aplicación crea un porcentaje estimado que el usuario puede utilizar como
información general para conocer el grado de "precaución" de cada zona.
​
## Funcionalidades
​
1. La aplicación obtiene de forma automática la geolocalización del usuario y
   muestra restaurantes cercanos.
​
2. El usuario puede realizar una búsqueda por delegación/alcaldía.
​
3. La aplicación muestra un procentaje estimado de contagios en relación a la
   población total de la alcaldía/delegación buscada por el usuario.
​
4. La aplicación presenta al usuario el número de contagios registrados
   (hospitalizados y ambulatorios) en dicha alcadía/delegación.
​
5. En base al número de contagios, la aplicación calcula el porcentaje de
   contagios de la alcaldía/delegación buscada y le presenta al usuario una
   alerta basada en los colores del semáforo epidemiológico
   (https://coronavirus.gob.mx/semaforo/) implementado por el gobierno mexicano.
​
6. Los colores del semáforo indican un grado de alerta en base a los porcentaje
   de casos hospitalizados de esa misma área.
​
   Verde    --> menor o igual a 1%. 
   Amarillo --> entre 2% o igual  4%.
   Naranja  --> entre 4% o igual a 5%. 
   Rojo     --> mayor o igual al 6%.
​
7. La localización del mapa y la información de los restaurantes cambia en base
   a la búsqueda del usuario.
​
## Third-Party APIs utilizadas
​
-La aplicación utiliza el API de casos positivos y las hospitalizaciones por
COVID-19 que forma parte del sistema de base de datos abiertos de la CDMX
(https://datos.cdmx.gob.mx/explore/dataset/casos-asociados-a-covid-19/api/).
​
-La geolocalización del usuario y la información de los restaurantes es obtenida
a través de las APIs de Google Maps
(https://developers.google.com/maps/documentation) y Google Places
(https://developers.google.com/places/web-service/overview).
​
## ADVERTENCIA SOBRE LA INFORMACIÓN PRESENTADA EN ESTA APLICACIÓN
​
**Los números y porcentajes usados en esta aplicación son estimaciones**
**calculadas por los programadores.** La aplicación está dirigida a proveer
información general sobre los contagios y el nivel de riesgo de la CDMX y **no
intenta sustituir** la información oficial presentada por el gobierno y los
epidemiólogos profesionales.
​
Los datos y resultados de esta aplicación son estimaciones en base a un par de
criterios simples (población total del área y el número de
contagios/hospitalizaciones). La API del gobierno mexicano registra los datos
más actuales de contagios y hospitalizaciones, pero no muestra la proporción de
contagios en relación a la alcaldía/delegación. **La información demográfica**
**usada en el código fue obtenida del INEGI y no se encuentra actualizada.**
​
## Viendo a Futuro
​
-Expandir la funcionalidad y los datos de la aplicación para que la búsqueda
abarque el resto de los estados.
​
-Agregar las APIs de Twitter y de algún periódico para que muestren información
sobre el COVID-19 en tiempo real.
​
-Nos gustaria que los usuarios pudieran agregar datos de su situación o
experiencia con el COVID-19 y la percepción que tiene del plan sanitario del
gobierno.
​
-Expandir la implementación de Google Maps. Por ejemplo, que el usuario trace
una ruta y que la aplicación muestre un estimado de cuántas personas más pueden
estar en riesgo.
​
## El equipo
​
Alheli Miranda 
Rodrigo Sanchez 
Mario N. Castro
​
---
​
# ENGLISH VERSION
​
# MEXICO CITY'S COVID SAFE PLACES SEARCHER (BY MUNICIPALITIES)
​
First coding group proyect for Tecnológico de Monterrey's Full-Stack Web
Development Programming Bootcamp (November 2020).
​
## Our Idea
​
2020 was not particularly great for anyone and México (just like the rest of
human kind) had to deal with the novel coronavirus SARS-CoV-2 or COVID-19, which
brought a "new normal." This reality meant we are now radically altering our
social relations (social distancing) and daily habits.
​
The idea behind this application is simple, and it's meant to use Web
Development to solve, or, at the very least, ameliorate the challenges of
dealing with risk of contagion in Mexico City.
​
Our project attempts to provide a solution for a common scenario: you are in an
area of Mexico City and you need to eat, but you want to make a decision (visit
or not visit a nearby restaurant) based on the level of risk of said area. In
other words, ¿how to know the number of infected in your current location?
​
**Mexico City's Covid Safe Places Searcher (by municipality)** is a tool that 
retrieves Mexico's government's current numbers of positive COVID-19 cases 
and hospitalization rates of each municipality/city in Mexico City. After 
obtaining this data, the application creates an estimated percentage of cases 
that the user can use to know the level of risk and "precaution" 
needed in each area.
​
## Functionalities
​
1. Application obtains the user's geolocalization and displays nearby
   restaurants.
​
2. User can search for a specific city/municipality in Mexico City.
​
3. The application returns an estimated percentage rate of positive COVID-19
   cases in relation to the total population of the city/municipality.
​
4. The application displays the number of registered cases (hospitalized and
   discharged) of each area.
​
5. Based on the rate of contagion, the application calculates the percentage of
   the infected population of each city/municipality and returns a colored alert
   based on the "epidemiological alert" (https://coronavirus.gob.mx/semaforo/)
   implemented by the Mexican government.
​
6. The colors displayed are based on the hospitalization percentage rates of the
   infected population.
​
   Green    --> below or equal to 1%. 
   Yellow   --> between 2% or between/equal to 4%.
   Orange   --> between 4% or equal to 5%. 
   Red      --> over or equal to 6%.
​
7. The map location and restaurant info change based on user's search.
​
## Third-Party APIs
​
-The application uses Mexico City's COVID-19 API, part of the city's open
database system, which registers up-to-date data of positive infections and
hospitalization rates in Mexico City's metropolitan area
(https://datos.cdmx.gob.mx/explore/dataset/casos-asociados-a-covid-19/api/).
​
-User's geolocalization and restaurant info is retrieved from Google Maps
(https://developers.google.com/maps/documentation) and Google Places
(https://developers.google.com/places/web-service/overview) API tools.
​
## WARNING ABOUT INFORMATION PROVIDED IN THIS WEBSITE
​
**The programers of this application only provide estimated calculations of**
**numbers and percentages.** This application is aimed at providing general
information about current COVID-19's infection and hospitalization rates and it
doesn't substitute official data presented by experts and epidemiologists.
​
The data and results are estimates based on simple criteria (total area
population and percentage/number of infected/hospitalized). The Mexican
government's API presents current data, but doesn't show the proportion of
infected in relation to Mexico City's municipalities/cities. **Demographic**
**information used in the code was obtained through INEGI and is currently**
**outdated.**
​
## Future Expansions
​
-Expand data set to cover the rest of Mexico's states.
​
-Add Twitter's and a newspaper's APIs in order to display live news and current
information related to COVID-19.
​
-We would like for users to add/input information about their experiences
dealing with the virus and the government's public health response.
​
-Expand Google Map's API functionalities. For example, the user could trace a
travel route and the application will show estimates of how many people were at
risk.
​
## The Team
​
Alheli Miranda 
Rodrigo Sanchez 
Mario N. Castro
