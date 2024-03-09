import{_ as u,r as n,o as c,c as d,a as e,b as i,d as a,w as o,e as p}from"./app.dab8f457.js";const h={},m={class:"custom-container danger"},_=e("p",{class:"custom-container-title"},"DANGER",-1),v=e("p",null,"Questa guida esiste solo come archivio - in futuro non apporteremo modifiche significative a questa guida se dovesse succedere qualcosa.",-1),g=e("p",null,"In ogni caso, se scegli di installare o di continuare ad utilizzare palera1n rootful, tieni a mente che ci sar\xE0 sempre meno supporto man mano che passa il tempo, e che i tweak pi\xF9 recenti tenderanno a non supportare questa configurazione di palera1n.",-1),b=e("p",null,"palera1n \xE8 un jailbreak work-in-progress che patcha il kernel in modo da poter utilizzare Sileo e installare tweak. Attualmente, palera1n \xE8 compatibile con A11 (iPhone X) e dispositivi precedenti su iOS 15 e successivi, con alcuni accorgimenti importanti.",-1),z=e("p",null,[i("Sui dispositivi con A11, devi disabilitare il "),e("strong",null,"pin di sblocco"),i(" e non sarai in grado di utilizzare il pin, o altre funzionalit\xE0 SEP, finch\xE9 non fai il boot allo stato di iOS stock. Le funzionalit\xE0 SEP comprendono funzioni come un codice di sblocco, Face ID/Touch ID e Apple Pay.")],-1),f=e("p",null,[i("Inoltre, se il tuo \xE8 un dispostivo A11 con iOS 16 a cui \xE8 stato impostato un codice di sblocco precedentemente, dovrai "),e("strong",null,"cancellare il contenuto e le impostazioni"),i(" per poter eseguire il jailbreak.")],-1),S={class:"custom-container warning"},x=e("p",{class:"custom-container-title"},"WARNING",-1),B={class:"custom-container tip"},I=e("p",{class:"custom-container-title"},"TIP",-1),A=e("h2",{id:"download",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#download","aria-hidden":"true"},"#"),i(" Download")],-1),k={href:"https://github.com/palera1n/palera1n/releases",target:"_blank",rel:"noopener noreferrer"},q=p('<ul><li>Gli utenti macOS generalmente dovrebbero scaricare <code>palera1n-macos-universal</code></li><li>Gli utenti Linux dovrebbero scaricare la versione che corrisponde all&#39;architettura del computer che stanno usando <ul><li>Solitamente \xE8 <code>palera1n-linux-x86_64</code>. Scegli questa se non sei sicuro.</li><li>Se stai usando un computer a 32 bit, scegli <code>palera1n-linux-x86</code>.</li><li>Se stai usando un computer ARM (ad esempio un Raspberry Pi), scegli <code>palera1n-linux-armel</code> per 32-bit e <code>palera1n-linux-arm64</code> per 64-bit.</li></ul></li></ul><h2 id="installazione-del-jailbreak" tabindex="-1"><a class="header-anchor" href="#installazione-del-jailbreak" aria-hidden="true">#</a> Installazione del jailbreak</h2><p>Seleziona un sistema operativo:</p>',3),w=e("h3",{id:"installa-palera1n",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installa-palera1n","aria-hidden":"true"},"#"),i(" Installa palera1n")],-1),G=e("ol",null,[e("li",null,[e("p",null,"Abilita l'accesso completo ai dischi per il terminale (questo deve essere fatto solo una volta)"),e("ul",null,[e("li",null,"macOS Monterey e inferiori: Preferenze di sistema \u2192 Sicurezza e Privacy\u2192 Privacy \u2192 Accesso completo al disco"),e("li",null,"macOS Ventura e superiori: Impostazioni di sistema \u2192 Privacy & Sicurezza \u2192 Accesso a disco completo")]),e("p",null,"Se il terminale non viene visualizzato nell'elenco, fare clic sull'icona del pi\xF9 e selezionarlo da Applicazioni \u2192 Utilit\xE0.")]),e("li",null,[e("p",null,"Se sei su macOS Monterey 12.2.1 o inferiori, esegui i seguenti comandi (questo deve essere fatto solo una volta):"),e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`sudo python -m ensurepip
sudo python -m pip install setuptools xattr==0.6.4
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])])]),e("li",null,[e("p",null,[i("Apri una finestra di terminale e fai "),e("code",null,"cd"),i(" alla directory in cui palera1n \xE8 stato scaricato (solitamente "),e("code",null,"cd ~/Downloads"),i(").")])]),e("li",null,[e("p",null,[i("Esegui "),e("code",null,"sudo mkdir -p /usr/local/bin")])]),e("li",null,[e("p",null,[i("Esegui "),e("code",null,"sudo mv ./palera1n-macos-universal /usr/local/bin/palera1n")]),e("ul",null,[e("li",null,[i("Sostituisci "),e("code",null,"./palera1n-macos-universal"),i(" con qualsiasi versione tu abbia scaricato")])])]),e("li",null,[e("p",null,[i("Esegui "),e("code",null,"sudo xattr -c /usr/local/bin/palera1n")])]),e("li",null,[e("p",null,[i("Esegui "),e("code",null,"sudo chmod +x /usr/local/bin/palera1n")])])],-1),U=e("h3",{id:"eseguire-palera1n",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#eseguire-palera1n","aria-hidden":"true"},"#"),i(" Eseguire palera1n")],-1),N=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"WARNING"),e("p",null,"Se si utilizza un cavo USB-C a Lightning per eseguire questo processo, \xE8 possibile riscontrare problemi ad entrare in modalit\xE0 DFU"),e("p",null,"In caso di problemi, usa un cavo USB-A a Lightning e, se necessario, usa anche un adattatore USB-C a USB-A.")],-1),E=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,[i("Se si utilizza un Mac con Apple Silicon e si utilizza una porta USB-C per collegare il cavo/adattatore, dovrai scollegare e ricollegare il dispositivo dopo che "),e("code",null,"Checkmate!"),i(" compare nei log.")])],-1),P=e("ol",null,[e("li",null,[i("Esegui "),e("code",null,"palera1n <insert arguments here>"),e("ul",null,[e("li",null,[i("I dispositivi da 16GB dovrebbero utilizzare "),e("code",null,"palera1n -B -f"),i(" - nota che avrai bisogno di 2-3GB di spazio di archiviazione libero.")]),e("li",null,[i("I dispositivi con pi\xF9 di 2-3GB di spazio di archiviazione libero, ma con meno di 10-15GB di spazio di archiviazione libero possono anche utilizzare "),e("code",null,"palera1n -B -f"),i(", ma solo se sono su iOS 15.")]),e("li",null,[i("I dispositivi che hanno iOS 16 o hanno pi\xF9 di 10-15GB di spazio di archiviazione libero dovrebbero usare "),e("code",null,"palera1n -c -f")]),e("li",null,"Assicurati che il tuo dispositivo sia collegato quando inserisci questo comando")])])],-1),O={class:"custom-container warning"},D=e("p",{class:"custom-container-title"},"WARNING",-1),F=e("p",null,"Se il tuo dispositivo \xE8:",-1),R=e("ul",null,[e("li",null,"Su iOS 15 e non ha almeno 2-3GB di spazio di archiviazione libero"),e("li",null,"Su iOS 16 e non ha almeno 10-15GB di spazio di archiviazione libero")],-1),y=e("p",null,"Non sarai in grado di continuare a seguire questa guida.",-1),C={start:"2"},T=e("code",null,"Enter",-1),L=e("p",null,"Il tuo dispositivo dovrebbe iniziare a creare il FakeFS o il BindFS (a seconda dell'opzione scelta).",-1),W=e("ol",{start:"3"},[e("li",null,[i("Una volta che il dispositivo ha finito di creare il FakeFS o il BindFS, esegui "),e("code",null,"palera1n -f")])],-1),j=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"Dispostitivi con A9(X) o precedenti hanno un problema in cui si bloccheranno a met\xE0 di questo processo in pongoOS. Per risolvere questo problema, dovrai fare quanto segue:"),e("ol",null,[e("li",null,[i("Nella finestra del terminale, premere "),e("code",null,"Control"),i(" + "),e("code",null,"C"),i(" sulla tastiera")]),e("li",null,"Riesegui il comando che hai appena eseguito")]),e("p",null,"Dovrai farlo ogni volta che riesegui il jailbreak sul tuo dispositivo.")],-1),M=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"DANGER"),e("p",null,"Se stai provando ad utilizzare un software per macchina virtuale di qualche tipo da Windows (es. Virtualbox, VMWare, Windows Subsystem for Linux, ecc) non sar\xE0 possibile seguire questa guida.")],-1),V=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"WARNING"),e("p",null,"Se utilizzi un computer con una CPU AMD Ryzen, probabilmente riscontrerai problemi. Se si verificano problemi, \xE8 necessario utilizzare un Mac o un computer con una CPU Intel per seguire questa guida.")],-1),Q=e("h3",{id:"installa-palera1n-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installa-palera1n-1","aria-hidden":"true"},"#"),i(" Installa palera1n")],-1),X=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"WARNING"),e("p",null,"Se si utilizza un cavo USB-C a Lightning per eseguire questo processo, \xE8 possibile riscontrare problemi ad entrare in modalit\xE0 DFU"),e("p",null,"In caso di problemi, usa un cavo USB-A a Lightning e, se necessario, usa anche un adattatore USB-C a USB-A.")],-1),H=e("ol",null,[e("li",null,"Apri una finestra di terminale"),e("li",null,[i("Esegui "),e("code",null,"sudo systemctl stop usbmuxd")]),e("li",null,[i("Esegui "),e("code",null,"sudo usbmuxd -f -p")]),e("li",null,[i("Apri una nuova finestra di terminale e fai "),e("code",null,"cd"),i(" alla directory in cui palera1n \xE8 stato scaricato (solitamente "),e("code",null,"cd ~/Downloads"),i(").")]),e("li",null,[i("Esegui "),e("code",null,"sudo mv ./palera1n-linux-* /usr/bin/palera1n")]),e("li",null,[i("Esegui "),e("code",null,"sudo chmod +x /usr/bin/palera1n")])],-1),J=e("h3",{id:"eseguire-palera1n-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#eseguire-palera1n-1","aria-hidden":"true"},"#"),i(" Eseguire palera1n")],-1),K=e("ol",null,[e("li",null,[i("Esegui "),e("code",null,"sudo palera1n"),e("ul",null,[e("li",null,[i("I dispositivi da 16GB dovrebbero utilizzare "),e("code",null,"sudo palera1n -B -f"),i(" - nota che avrai bisogno di 2-3GB di spazio di archiviazione libero.")]),e("li",null,[i("I dispositivi con pi\xF9 di 2-3GB di spazio di archiviazione libero, ma con meno di 10-15GB di spazio di archiviazione libero possono anche utilizzare "),e("code",null,"sudo palera1n -B -f"),i(", ma solo se sono su iOS 15.")]),e("li",null,[i("I dispositivi che hanno iOS 16 o hanno pi\xF9 di 10-15GB di spazio di archiviazione libero dovrebbero usare "),e("code",null,"sudo palera1n -c -f")]),e("li",null,"Assicurati che il tuo dispositivo sia collegato quando inserisci questo comando")])])],-1),Y={class:"custom-container warning"},Z=e("p",{class:"custom-container-title"},"WARNING",-1),$=e("p",null,"Se il tuo dispositivo \xE8:",-1),ee=e("ul",null,[e("li",null,"Su iOS 15 e non ha almeno 2-3GB di spazio di archiviazione libero"),e("li",null,"Su iOS 16 e non ha almeno 10-15GB di spazio di archiviazione libero")],-1),ie=e("p",null,"Non sarai in grado di continuare a seguire questa guida.",-1),ae={start:"2"},oe=e("code",null,"Enter",-1),le=e("p",null,"Il tuo dispositivo dovrebbe iniziare a creare il FakeFS o il BindFS (a seconda del comando che hai eseguito).",-1),ne=e("ol",{start:"3"},[e("li",null,[i("Una volta che il dispositivo ha finito di creare il FakeFS o il BindFS, esegui "),e("code",null,"sudo palera1n -f")])],-1),se=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"Dispostitivi con A9(X) o precedenti hanno un problema in cui si bloccheranno a met\xE0 di questo processo in pongoOS. Per risolvere questo problema, dovrai fare quanto segue:"),e("ol",null,[e("li",null,[i("Nella finestra del terminale, premere "),e("code",null,"Control"),i(" + "),e("code",null,"C"),i(" sulla tastiera")]),e("li",null,"Riesegui il comando che hai appena eseguito")]),e("p",null,"Dovrai farlo ogni volta che riesegui il jailbreak sul tuo dispositivo.")],-1),te=e("p",null,[i("Una volta che il dispositivo si avvia, aprire l'app palera1n loader e toccare "),e("code",null,"Install"),i(". Dopo un po' di tempo, ti verr\xE0 chiesto di riprenderti e "),e("code",null,"Sileo"),i(" dovrebbe essere sulla tua schermata iniziale.")],-1),re={class:"custom-container tip"},ue=e("p",{class:"custom-container-title"},"TIP",-1),ce=e("p",null,[i("Per rieseguire il jailbreak sul tuo dispositivo, indipendentemente dai comandi che hai eseguito sopra, esegui semplicemente "),e("code",null,"palera1n -f"),i(" e ripeti ogni step applicabile.")],-1),de=e("br",null,null,-1);function pe(he,me){const l=n("router-link"),t=n("ExternalLinkIcon"),s=n("Tab"),r=n("Tabs");return c(),d("div",null,[e("div",m,[_,v,e("p",null,[i("Per gli utenti che sono alla ricerca di una guida per palera1n aggiornata - consigliamo generalmente di seguire la normale guida "),a(l,{to:"/installing-palera1n"},{default:o(()=>[i("Utilizzare palera1n")]),_:1}),i(", in quanto fornisce una migliore esperienza complessiva rispetto all'utilizzo di palera1n rootful, ed \xE8 la direzione generale che la maggior parte degli sviluppatori sta intraprendendo, dando la priorit\xE0 al supporto tweak.")]),e("p",null,[i("Se stai attualmente utilizzando palera1n rootful, ti cosigliamo di seguire la guida per "),a(l,{to:"/removing-palera1n"},{default:o(()=>[i("rimuovere palera1n rootful")]),_:1}),i(" e poi "),a(l,{to:"/installing-palera1n"},{default:o(()=>[i("Installare palera1n rootless")]),_:1})]),g]),b,z,f,e("div",S,[x,e("p",null,[i("Se stai usando una vecchia versione di palera1n che \xE8 tethered, dovrai "),a(l,{to:"/removing-palera1n"},{default:o(()=>[i("rimuovere palera1n")]),_:1}),i(" prima di continuare.")])]),e("div",B,[I,e("p",null,[i("Se stai usando Windows, dovresti invece seguire "),a(l,{to:"/archived-palen1x-rootful"},{default:o(()=>[i("Utilizzare palen1x-rootful")]),_:1}),i(".")])]),A,e("p",null,[i("La versione di "),e("a",k,[i("palera1n"),a(t)]),i(" per il tuo sistema operativo.")]),q,a(r,{tabs:""},{default:o(()=>[a(s,{tab:"",name:"macOS",default:!0},{default:o(()=>[w,G,U,N,E,P,e("div",O,[D,F,R,y,e("p",null,[i("Se non riesci a liberare abbastanza spazio per seguirla, dovresti invece usare palera1n rootless seguendo "),a(l,{to:"/installing-palera1n-rootless"},{default:o(()=>[i("Utilizzare palera1n (Rootless)")]),_:1}),i(".")])]),e("ol",C,[e("li",null,[i("Quando sei pronto, premi "),T,i(" e segui le istruzioni sullo schermo per entrare in "),a(l,{to:"/faq/#what-is-dfu-mode"},{default:o(()=>[i("modalit\xE0 DFU")]),_:1}),i(".")])]),L,W,j]),_:1}),a(s,{tab:"",name:"Linux"},{default:o(()=>[M,V,Q,X,H,J,K,e("div",Y,[Z,$,ee,ie,e("p",null,[i("Se non riesci a liberare abbastanza spazio per seguirla, dovresti invece usare palera1n rootless seguendo "),a(l,{to:"/installing-palera1n"},{default:o(()=>[i("Utilizzare palera1n")]),_:1}),i(".")])]),e("ol",ae,[e("li",null,[i("Quando sei pronto, premi "),oe,i(" e segui le istruzioni sullo schermo per entrare in "),a(l,{to:"/faq/#what-is-dfu-mode"},{default:o(()=>[i("modalit\xE0 DFU")]),_:1}),i(".")])]),le,ne,se]),_:1})]),_:1}),te,e("div",re,[ue,ce,e("p",null,[i("::: "),de,i(" To revert the jailbreak, follow "),a(l,{to:"/removing-palera1n/"},{default:o(()=>[i("Removing palera1n")]),_:1}),i(".")])])])}var ve=u(h,[["render",pe],["__file","index.html.vue"]]);export{ve as default};
