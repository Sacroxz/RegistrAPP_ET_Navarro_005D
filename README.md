# RegistrAPP
Aplicacion movil para el registro de asistencia por medio de la generacion y lectura de codigos QR.

## Requisitos
Requisitos para instalar el proyecto:
- Node.js
- NPM
- Ionic 6 `npm install -g @ionic/cli`

## Instalacion
1. Iniciar un proyecto en blanco de Ionic.
```
ionic start registrapp blank
cd registrapp
```
2. Instalar los packages necesarios.
```
npm install --save @ionic/storage
npm install --save @ionic/storage-angular
npm install @capacitor-community/barcode-scanner
npm install angularx-qrcode@14.0.0 --save
npm install json-server
```
3. Clonar el proyecto de GitHub.
```
git clone https://github.com/Sacroxz/RegistrAPP_ET_Navarro_005D.git
```
4. Reemplazar el src del proyecto clonado con el src del proyecto que creamos.
5. Correr la aplicacion.
```
ionic serve --lab
```
