# Crear una Pull Request en GitHub

Primero que nada siempre que trabajemos en algo nuevo que querramos agregar, debemos hacerlo sobre una nueva rama partiendo de la principal, para esto nos aseguraremos de que estamos en la rama principal, en este caso `main` y si no lo estmaos vamos a ella haciendo `git checkout main` luego nos aseguramos de tenerla actualizada haciendo `git pull` finalmente crearemos una nueva rama con por ejemplo `git checkout -b prueba-para-pull-request`

Trabajaremos sobre ella y cuando lo tengamos listo, luego de commitear cambios, los pushearemos al repositorio remoto con por ejemplo `git push -u origin prueba-para-pull-request`

Luego de haber pusheado la nueva rama al repositorio remoto iremos al [repo en GitHub](https://github.com/BraianMG/practiquemos-juntos) y daremos clic en la opción `"Pull Requests"`

![Botón Pull requests](images/boton-pull-requests.png)

Luego en `"New pull request"`

![Botón New pull request](images/boton-new-pull-request.png)

1. Seleccionamos la rama destino donde queremos agregar cambios
2. Seleccionamos la rama que contiene los nuevos cambiso que queremos agregar

![Selección de ramas](images/seleccion-de-ramas.png)

Para estar seguros de que seleccionamos correctamente las ramas podemos ver los cambios que aplicaremos, luego damos clic en `"Create pull request"`

![Crear pull request](images/crear-pull-request.png)

Podemos indicar un título (toma el que hayamos escrito en el mensaje del commit) y una descripción para aclarar de que se tratan los cambios o cualquier otra cosa que sea necesario. Finalmente damos clic en `"Create pull request"`

![Título y descripción de pull request](images/titulo-y-descripcion-de-pull-request.png)

La pull request quedara creada a la espera de una code review y que finalmente quien tenga permiso suficientes la mergee

![Pull request resultante](images/pull-request-resultante.png)

En el tab `"Files changed"` podemos agregar comentarios sobre las líneas de código que deseemos haciendo clic sobre una línea específica o clicando y arrastrando las N líneas que querramos comentar, luego escribimos el comentario y damos clic en `"Start a review"`

![Comentarios sobre cambios](images/comentarios-sobre-cambios.png)
