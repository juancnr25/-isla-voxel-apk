# Isla Voxel · APK con GitHub Actions

Este repositorio convierte el juego (carpeta `www/`) en una app Android con **Capacitor 8**.
Cada vez que subes cambios a la rama `main`, GitHub compila el APK solo.

La app abre en horizontal y a pantalla completa, deja la pantalla encendida mientras juegas y funciona sin internet.

## Estructura

```
www/                      el juego (PWA): index.html, js/, fonts/, icons/
assets/                   imágenes para el ícono y la pantalla de carga
scripts/ajustes_android.py  horizontal + pantalla completa + vibración
firma/debug.keystore      firma fija de depuración (no la borres)
.github/workflows/build-apk.yml  la receta que compila el APK
capacitor.config.json     nombre e id de la app (pe.jc.islavoxel)
package.json
```

## Paso 1. Crea el repositorio

1. Entra a github.com y toca **New repository**.
2. Nombre: `isla-voxel-apk`. Puede ser privado.
3. No marques "Add a README". Toca **Create repository**.

## Paso 2. Sube los archivos

### Opción A: desde la laptop (navegador)

1. Descomprime el ZIP.
2. En el repositorio vacío toca **uploading an existing file**.
3. Arrastra **el contenido** de la carpeta `isla-voxel-apk` (no la carpeta misma).
4. Toca **Commit changes**.
5. Revisa que exista `.github/workflows/build-apk.yml`. El navegador a veces omite las carpetas que empiezan con punto. Si no aparece:
   - **Add file → Create new file**
   - En el nombre escribe `.github/workflows/build-apk.yml`
   - Pega el contenido del archivo y toca **Commit changes**.

### Opción B: desde el celular con Termux

```bash
pkg install git gh unzip -y
cd ~/storage/downloads
unzip isla-voxel-apk.zip -d isla-voxel-apk && cd isla-voxel-apk
git init -b main
git add .
git commit -m "Isla Voxel APK"
gh auth login
gh repo create isla-voxel-apk --private --source=. --push
```

## Paso 3. Espera la compilación

1. Abre la pestaña **Actions** del repositorio.
2. Verás "Compilar APK" corriendo. Tarda de 5 a 8 minutos.
3. Si no arrancó solo, entra a **Compilar APK → Run workflow**.

## Paso 4. Descarga e instala

1. Cuando el círculo se ponga verde, entra a esa ejecución.
2. Abajo, en **Artifacts**, descarga `IslaVoxel-apk` (viene en ZIP).
3. Descomprímelo en el celular y toca `IslaVoxel.apk`.
4. Android te pedirá permitir **instalar apps de origen desconocido** para tu navegador o gestor de archivos. Acéptalo solo para esta instalación.

> En Xiaomi (HyperOS/MIUI) puede salir el aviso de "app no verificada". Toca **Instalar de todas formas**.

## Actualizar el juego

1. Reemplaza los archivos de `www/` con la versión nueva.
2. Sube los cambios. GitHub compila un APK nuevo.
3. Instálalo encima del anterior. La carpeta `firma/` guarda una firma fija, así que Android acepta la actualización sin desinstalar ni perder nada.

## Si algo falla

| Síntoma | Qué hacer |
|---|---|
| Actions en rojo en "Compilar APK" | Abre el paso, copia las últimas 30 líneas del error y pásamelas |
| No aparece la pestaña Actions | Settings → Actions → General → Allow all actions |
| El ícono sale genérico | El paso de íconos falló sin detener la compilación. Revisa ese paso en Actions |
| Pantalla negra al abrir | Tu celular necesita WebView actualizado: Play Store → "Android System WebView" → Actualizar |

## Nota sobre la firma

El APK sale firmado en modo **debug**. Sirve para instalar en tus equipos y compartir con conocidos.
Para publicarlo en Play Store necesitas una firma de release (keystore) y un archivo AAB. Ese es otro paso que podemos armar después.

## Plan B: PWABuilder

Si ya tienes la versión PWA publicada en GitHub Pages o Netlify:
1. Entra a pwabuilder.com y pega la URL.
2. Toca **Package for stores → Android → Generate**.
3. Descarga el ZIP y usa el `.apk` que trae.

Esa ruta crea una app que abre tu sitio web (TWA). Necesita internet la primera vez y depende de que el sitio siga en línea. La ruta de este repositorio mete el juego completo dentro del APK.
