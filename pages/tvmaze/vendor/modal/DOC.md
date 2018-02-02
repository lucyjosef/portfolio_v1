----------------------------- MY MODAL PLUGIN -----------------------------
Documentation FR
Pour mon plugin modal, 
- Incluez le dossier modal dans votre projet
- chargez les modal.css ET le modal.js dans votre fichier HTML
- Pour faire fonctionner MMP, il vous suffit d'insérer dans votre code HTML, la modal et le déclencheur comme dans les exemples ci-dessous
- Pour personnaliser vos couleurs dans la modal, utilisez data-color="#000" par exemple

code modal :
<div class="parentModal">
    <div class="childModal">
        Your content here
    </div>
</div>

code declencheur :
<input data-modal="show" type="button" name="" value="show modal">

    
Documentation EN
For my modal plugin, 
- include the modal directory in your project
- Into your HTML file, load modal.css AND modal.js
- To enable MMP, just insert into you body your modal HTML code as the example down here and the launcher example
- To put your own color on the modal, just use data-color="#fff" for example

modal code :
<div class="parentModal">
    <div class="childModal">
        Your content here
    </div>
</div>

launcher code :
<input data-modal="show" type="button" name="" value="show modal">


----------------------------- MY DATAS -----------------------------
launcher : data-modal="show"
color : data-color="myColor" 