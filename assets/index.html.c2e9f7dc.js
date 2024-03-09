import{_ as s,r,o as c,c as d,a as e,b as i,d as a,w as n,e as l}from"./app.dab8f457.js";const u={},p={class:"custom-container danger"},h=e("p",{class:"custom-container-title"},"DANGER",-1),v=e("p",null,"Questa guida esiste solo come archivio - in futuro non apporteremo modifiche significative a questa guida se dovesse succedere qualcosa.",-1),m=e("p",null,"In ogni caso, se scegli di installare o di continuare ad utilizzare palera1n rootful, tieni a mente che ci sar\xE0 sempre meno supporto man mano che passa il tempo, e che i tweak pi\xF9 recenti tenderanno a non supportare questa configurazione di palera1n.",-1),g=l('<div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Se si sta cercando di utilizzare un software Virtual Machine di qualche tipo da Windows (es. Virtualbox, VMWare, Sottosistema Windows per Linux, ecc) non si avr\xE0 successo seguendo questa guida, e avrai bisogno di un supporto avviabile come una chiavetta USB e di seguire i passaggi seguenti.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Se utilizzi un computer con una CPU AMD Ryzen, probabilmente riscontrerai problemi. Se si verificano problemi, \xE8 necessario utilizzare un Mac o un computer con una CPU Intel per seguire questa guida.</p></div><p>palen1x \xE8 una distro Linux avviabile in live che consente di eseguire rapidamente palera1n su un dispositivo compatibile. palera1n \xE8 in grado di eseguire il jailbreak su dispositivi iOS da A8(X) ad A11 su iOS 15 o successivi</p><p>Sui dispositivi con A11, devi disabilitare il <strong>pin di sblocco</strong> e non sarai in grado di utilizzare il pin, o altre funzionalit\xE0 SEP, finch\xE9 non fai il boot allo stato di iOS stock. Le funzionalit\xE0 SEP comprendono funzioni come un codice di sblocco, Face ID/Touch ID e Apple Pay.</p><p>Inoltre, se il tuo \xE8 un dispostivo A11 con iOS 16 a cui \xE8 stato impostato un codice di sblocco precedentemente, dovrai <strong>cancellare il contenuto e le impostazioni</strong> per poter eseguire il jailbreak.</p><h2 id="requisiti" tabindex="-1"><a class="header-anchor" href="#requisiti" aria-hidden="true">#</a> Requisiti</h2>',6),b=e("li",null,[i("Unit\xE0 USB da 64MB o superiore "),e("ul",null,[e("li",null,"Se non hai un'unit\xE0 USB, ma hai un'altra forma di hardware rimovibile supportato (es. Un CD o DVD), \xE8 possibile utilizzarlo invece di un'unit\xE0 USB")])],-1),z={href:"https://github.com/palera1n/palen1x/releases",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/ventoy/Ventoy/releases",target:"_blank",rel:"noopener noreferrer"},f=l('<h2 id="installare-ventoy" tabindex="-1"><a class="header-anchor" href="#installare-ventoy" aria-hidden="true">#</a> Installare Ventoy</h2><ol><li>Scarica ed estrai il contenuto del file <code>Ventoy.zip</code></li><li>Inserisci l&#39;unit\xE0 USB se non l&#39;hai gi\xE0 fatto e apri il file <code>Ventoy2Disk.exe</code></li><li>Seleziona l&#39;unit\xE0 USB dalla quale vuoi avviare palen1x <ul><li>Questa unit\xE0 USB verr\xE0 completamente cancellata</li><li>Assicurati di eseguire il backup di tutti i dati importanti in anticipo</li></ul></li><li>Fai clic su <code>Install</code> e conferma di essere d&#39;accordo con il cancellare l&#39;unit\xE0 USB <ul><li>Non rimuovere l&#39;unit\xE0 USB fino a quando il processo non sar\xE0 completato</li></ul></li><li>Una volta installato, copia il file iso di palen1x che hai scaricato sul drive USB</li></ol><h2 id="avviare-palen1x" tabindex="-1"><a class="header-anchor" href="#avviare-palen1x" aria-hidden="true">#</a> Avviare palen1x</h2><ol><li>Riavvia il pc, vai nelle impostazioni del BIOS e disabilita il Secure Boot, quindi entra nel boot picker e seleziona l&#39;unit\xE0 USB da avviare <ul><li>Questo \xE8 diverso per ogni computer</li><li>Cerca il tuo PC o la marca della scheda madre per scoprire come entrare nelle impostazioni del BIOS se non sei sicuro</li></ul></li><li>Premi Invio una volta che visualizzi la schermata di Ventoy per avviare palen1x</li></ol><h2 id="eseguire-palera1n" tabindex="-1"><a class="header-anchor" href="#eseguire-palera1n" aria-hidden="true">#</a> Eseguire palera1n</h2><h3 id="creazione-del-fakefs-bindfs" tabindex="-1"><a class="header-anchor" href="#creazione-del-fakefs-bindfs" aria-hidden="true">#</a> Creazione del FakeFS/BindFS</h3><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Se si utilizza un cavo USB-C a Lightning per eseguire questo processo, \xE8 possibile riscontrare problemi ad entrare in modalit\xE0 DFU</p><p>In caso di problemi, usa un cavo USB-A a Lightning e, se necessario, usa anche un adattatore USB-C a USB-A.</p></div><ol><li>Una volta che hai caricato palen1x, seleziona <code>palera1n</code></li><li>Seleziona <code>Options</code></li><li>Abilita una delle due opzioni, a seconda della capacit\xE0 del tuo dispositivo, quantit\xE0 di spazio libero e versione iOS: <ul><li>I dispositivi da 16GB dovrebbero abilitare <code>Create BindFS</code> - nota che avrai bisogno di 2-3GB di spazio di archiviazione libero.</li><li>I dispositivi con pi\xF9 di 2-3GB (se su iOS 15) o pi\xF9 di 5-6GB (se su iOS 16) di spazio di archiviazione libero ma con meno di 10-15GB di spazio di archiviazione libero possono abilitare <code>Create BindFS</code></li><li>I dispositivi che hanno pi\xF9 di 10-15GB di spazio di archiviazione libero dovrebbero abilitare <code>Create FakeFS</code></li></ul></li></ol>',8),S={class:"custom-container warning"},x=e("p",{class:"custom-container-title"},"WARNING",-1),B=e("p",null,"Se il tuo dispositivo \xE8:",-1),U=e("ul",null,[e("li",null,"Su iOS 15 e non ha almeno 2-3GB di spazio di archiviazione libero"),e("li",null,"Su iOS 16 e non ha almeno 5-6GB di spazio di archiviazione libero")],-1),q=e("p",null,"Non sarai in grado di continuare a seguire questa guida.",-1),I={start:"4"},k=e("li",null,[i("Premi "),e("code",null,"Enter"),i(" per salvare le opzioni appena selezionate, quindi seleziona "),e("code",null,"Start"),e("ul",null,[e("li",null,"Assicurati che il tuo dispositivo sia collegato quando fai ci\xF2.")])],-1),A=l('<p>Il tuo dispositivo dovrebbe creare il FakeFS o il BindFS (a seconda dell&#39;opzione scelta).</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Dispostitivi con A9(X) o precedenti hanno un problema in cui si bloccheranno a met\xE0 di questo processo in pongoOS. Per risolvere questo problema, dovrai fare quanto segue:</p><ol><li>Nella finestra del terminale, premere <code>Control</code> + <code>C</code> sulla tastiera</li><li>Scrivi <code>exit</code></li><li>Riesegui su palen1x gli step che hai appena fatto</li></ol></div><h3 id="jailbreaking-con-palera1n" tabindex="-1"><a class="header-anchor" href="#jailbreaking-con-palera1n" aria-hidden="true">#</a> Jailbreaking con palera1n</h3>',3),C=e("li",null,[i("Quando appare "),e("code",null,"press enter to exit"),i(", premere il tasto Invio.")],-1),N=e("li",null,[i("Una volta caricato nuovamente il menu palen1x, riselezionare "),e("code",null,"palera1n")],-1),D=e("li",null,[i("Seleziona "),e("code",null,"Start"),e("ul",null,[e("li",null,"Assicurati che il tuo dispositivo sia collegato quando fai ci\xF2.")])],-1),F=l('<p>Il tuo dispositivo dovrebbe ora iniziare a eseguire il jailbreak.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Dispostitivi con A9(X) o precedenti hanno un problema in cui si bloccheranno a met\xE0 di questo processo in pongoOS. Per risolvere questo problema, dovrai fare quanto segue:</p><ol><li>Nella finestra del terminale, premere <code>Control</code> + <code>C</code> sulla tastiera</li><li>Scrivi <code>exit</code></li><li>Riesegui su palen1x gli step che hai appena fatto</li></ol></div><p>Una volta che il dispositivo si avvia, aprire l&#39;app palera1n loader e toccare <code>Install</code>. Dopo un po&#39; di tempo, ti verr\xE0 chiesto di riprenderti e <code>Sileo</code> dovrebbe essere sulla tua schermata iniziale.</p>',3);function O(V,w){const o=r("router-link"),t=r("ExternalLinkIcon");return c(),d("div",null,[e("div",p,[h,v,e("p",null,[i("Per gli utenti che sono alla ricerca di una guida per palera1n aggiornata - consigliamo generalmente di seguire la normale guida "),a(o,{to:"/using-palen1x"},{default:n(()=>[i("Usando palen1x")]),_:1}),i(", in quanto fornisce una migliore esperienza complessiva rispetto all'utilizzo di palera1n rootful tramite palen1x, ed \xE8 la direzione generale che la maggior parte degli sviluppatori sta intraprendendo, dando la priorit\xE0 al supporto tweak.")]),e("p",null,[i("Se stai attualmente utilizzando palera1n rootful, ti cosigliamo di seguire la guida per "),a(o,{to:"/removing-palera1n"},{default:n(()=>[i("rimuovere palera1n rootful")]),_:1}),i(" e utilizzare palen1x per "),a(o,{to:"/using-palen1x"},{default:n(()=>[i("Installare palera1n rootless")]),_:1})]),m]),g,e("ul",null,[b,e("li",null,[i("L'ultima versione di "),e("a",z,[i("palen1x"),a(t)])]),e("li",null,[e("a",_,[i("Ventoy"),a(t)])])]),f,e("div",S,[x,B,U,q,e("p",null,[i("Se non riesci a liberare abbastanza spazio per seguirla, dovresti invece usare palera1n rootless seguendo "),a(o,{to:"/using-palen1x"},{default:n(()=>[i("Utilizzare palera1n")]),_:1}),i(".")])]),e("ol",I,[k,e("li",null,[i("Segui le istruzioni sullo schermo per entrare in "),a(o,{to:"/faq/#what-is-dfu-mode"},{default:n(()=>[i("modalit\xE0 DFU")]),_:1}),i(".")])]),A,e("ol",null,[C,N,D,e("li",null,[i("Segui le istruzioni sullo schermo per entrare in "),a(o,{to:"/faq/#what-is-dfu-mode"},{default:n(()=>[i("modalit\xE0 DFU")]),_:1}),i(".")])]),F])}var P=s(u,[["render",O],["__file","index.html.vue"]]);export{P as default};
