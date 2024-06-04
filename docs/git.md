# Uso de Git
1. Clonar este repo: `git clone https://github.com/BraianMG/practiquemos-juntos.git`
2. Revisar en qué rama estamos, seguramente estemos en `main` si no lo estamos nos movemos a esa rama `git checkout main`
3. De la rama actual crear una nueva y movernos a ella para trabajar lo nuevo allí: `git checkout -b nombre-de-la-nueva-rama`
4. De aquí en adelante lo podemos hacer todo desde la interfaz de VScode o como se explica a continuación con línea de comandos
5. Para agregar cambios al __stage__ (zona en la que ponemos los cambios que próximamente confirmaremos):
   - Para agregar todos los cambios: `git add .`
   - Para agregar los cambios de algunos archivos: `git add archivo-a archivo-b archivo-c`
6. Para sacar cambios de __stage__:
   - Para sacar todos los cambios: `git restore --staged .`
   - Para sacar los cambios de algunos archivos: `git restore --staged archivo-a archivo-b archivo-c`
7. Para commitear (confirmar) los cambios agregados al __stage__: `git commit -m"Mensaje del commit explicando brevemente lo que agrega"`
8. Para pushear los cambios al repositorio remoto: `git push -u origin nombre-de-la-rama`