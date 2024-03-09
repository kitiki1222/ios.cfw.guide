import{_ as s,r as n,o as d,c as h,a as e,b as o,d as i,w as l,e as a}from"./app.dab8f457.js";const c={},u=a('<h2 id="bootloops-and-respring-loops" tabindex="-1"><a class="header-anchor" href="#bootloops-and-respring-loops" aria-hidden="true">#</a> Bootloops and respring loops</h2><h3 id="respring-loops" tabindex="-1"><a class="header-anchor" href="#respring-loops" aria-hidden="true">#</a> Respring Loops</h3><p>A respring loop is a symptom of an incompatible tweak(s), causing the device to be stuck in resprings while in a jailbroken state.</p><p>While there is no easy way to diagnose what causes a respring loop, the most likely culprit is your most recently installed/updated tweak being incompatible with your iOS version or another tweak.</p><h4 id="semi-un-tethered-jailbreaks" tabindex="-1"><a class="header-anchor" href="#semi-un-tethered-jailbreaks" aria-hidden="true">#</a> Semi-(un)tethered jailbreaks</h4><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>A semi-tethered jailbreak is a jailbreak that needs an app on a computer in order to jailbreak after a reboot.</p><p>A semi-untethered jailbreak is a jailbreak that needs an app that is installed on the device or website in order to jailbreak after a reboot.</p></div><p>In order to escape the respring loop, <a href="#How-to-exit-dfu-mode">force reboot your device</a>. Once you&#39;ve booted back up, use your jailbreak of choice and disable tweak injection from the jailbreak settings. Once you&#39;ve jailbroken, you should be able to access your package manager and remove your most recent tweak or your last tweak setting change that may have caused the respring loop.</p>',7),p={href:"https://discord.gg/jb",target:"_blank",rel:"noopener noreferrer"},b=a('<h4 id="untethered-jailbreaks" tabindex="-1"><a class="header-anchor" href="#untethered-jailbreaks" aria-hidden="true">#</a> Untethered jailbreaks</h4><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>A untethered jailbreak is a jailbreak that persists after a reboot</p></div><p>A respring loop on an untethered jailbreak is very easy to confuse with a bootloop, since even restarting your device will keep you in the respring loop.</p><p>In order to escape a potential respring loop, you must <a href="#How-to-exit-dfu-mode">forcefully reboot</a> your device and hold Volume Up, as the timing varies depending on jailbreaks, your best bet is to hold Volume Up until you&#39;ve booted into iOS.</p><p>Even after you&#39;ve attempted to do this multiple times, you may find that you cannot boot into iOS while holding volume up; you may be in a <a href="#Bootloops">bootloop</a>.</p><h3 id="bootloops" tabindex="-1"><a class="header-anchor" href="#bootloops" aria-hidden="true">#</a> Bootloops</h3><p>A bootloop is an unrecoverable error caused by either corrupted system files or a hardware failure. While much rarer in modern iOS versions, it is still possible to bootloop your device through accidental or intentional means.</p><p>A bootloop can be diagnosed by looking for a constant re-occuring Apple logo, even after you&#39;ve forcefully rebooted your device.</p><p>In order to escape from a bootloop, you must DFU restore your device.</p><h2 id="how-to-enter-dfu-mode" tabindex="-1"><a class="header-anchor" href="#how-to-enter-dfu-mode" aria-hidden="true">#</a> How to enter DFU mode</h2><h4 id="for-devices-with-a-real-home-button-iphone-6s-and-below" tabindex="-1"><a class="header-anchor" href="#for-devices-with-a-real-home-button-iphone-6s-and-below" aria-hidden="true">#</a> For devices with a real home button (iPhone 6s and below):</h4><ol><li>Hold down both the Home button and Lock button.</li><li>After 8 seconds, release the Lock button while continuing to hold down the Home button.</li></ol><h4 id="for-iphone-7-7-ipod-7th-gen-and-2018-ipads" tabindex="-1"><a class="header-anchor" href="#for-iphone-7-7-ipod-7th-gen-and-2018-ipads" aria-hidden="true">#</a> For iPhone 7/7+, iPod 7th Gen and 2018 iPads:</h4><ol><li>Power on your iPhone/iPad if it&#39;s not on already</li><li>Connect it to your computer with your cable</li><li>Launch iTunes (or Finder on macOS Catalina and newer) and check that the iPhone/iPad is recognised</li><li>Hold down both the Side button and Volume Down button.</li><li>After 8 seconds, release the Side button while continuing to hold down the Volume Down button.</li></ol><h4 id="for-devices-without-a-home-button-iphone-8-8-ipad-air-5-and-ipad-mini-6" tabindex="-1"><a class="header-anchor" href="#for-devices-without-a-home-button-iphone-8-8-ipad-air-5-and-ipad-mini-6" aria-hidden="true">#</a> For devices without a home button, iPhone 8/8+, iPad Air 5 and iPad Mini 6:</h4><ol><li>Power on your iPhone/iPad if it&#39;s not on already</li><li>Connect it to your computer with your cable</li><li>Launch iTunes (or Finder on macOS Catalina and newer) and check that the iPhone/iPad is recognised</li><li>Press the Volume Up button immediately followed by the Volume Down button</li><li>Press and hold down the Power button until the screen turns black</li><li>Release the Power button</li><li>Hold down the Power button and the Volume Down button for immediately after for 5 seconds</li><li>Release the Power button but keep holding down the Volume Down button for another 5 seconds</li></ol><h2 id="how-to-exit-dfu-mode" tabindex="-1"><a class="header-anchor" href="#how-to-exit-dfu-mode" aria-hidden="true">#</a> How to exit DFU mode</h2><h4 id="for-devices-with-a-real-home-button-iphone-6s-and-below-1" tabindex="-1"><a class="header-anchor" href="#for-devices-with-a-real-home-button-iphone-6s-and-below-1" aria-hidden="true">#</a> For devices with a real home button (iPhone 6s and below):</h4><p>Hold the Home button and the Lock button until the device reboots.</p><h4 id="for-iphone-7-7-ipod-7th-gen-and-2018-ipads-1" tabindex="-1"><a class="header-anchor" href="#for-iphone-7-7-ipod-7th-gen-and-2018-ipads-1" aria-hidden="true">#</a> For iPhone 7/7+, iPod 7th Gen and 2018 iPads:</h4><p>Hold down the Side button and Volume Down button until the device reboots.</p><h4 id="for-devices-without-a-home-button-iphone-8-8-ipad-air-5-and-ipad-mini-6-1" tabindex="-1"><a class="header-anchor" href="#for-devices-without-a-home-button-iphone-8-8-ipad-air-5-and-ipad-mini-6-1" aria-hidden="true">#</a> For devices without a home button, iPhone 8/8+, iPad Air 5 and iPad Mini 6:</h4><ol><li>Quick-press the Volume Up button</li><li>Quick-press the Volume Down button</li><li>Hold down the Side button until the device reboots.</li></ol><h2 id="common-errors-on-chimera-odyssey-and-taurine" tabindex="-1"><a class="header-anchor" href="#common-errors-on-chimera-odyssey-and-taurine" aria-hidden="true">#</a> Common Errors on Chimera, Odyssey, and Taurine</h2><h3 id="err-jailbreak" tabindex="-1"><a class="header-anchor" href="#err-jailbreak" aria-hidden="true">#</a> ERR_Jailbreak</h3><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>If you are seeing this issue while using taurine-permanent, follow <a href="#ERR_Jailbreak-when-using-taurine-permanent">ERR_Jailbreak when using taurine-permanent</a> instead.</p></div><p>This is caused by you having used a previous jailbreak. To solve this, you need to restore rootfs:</p><ol><li>Reboot the device.</li><li>Open the Odyssey or Taurine app, depending on your iOS version.</li><li>Toggle the <code>Restore Rootfs</code> option</li><li>Press the Jailbreak button.</li></ol><p>Once the restore rootfs successfully completes, try jailbreaking again.</p><h3 id="err-already-jailbroken-and-err-kernrw-taurine-err-tfp0-odyssey" tabindex="-1"><a class="header-anchor" href="#err-already-jailbroken-and-err-kernrw-taurine-err-tfp0-odyssey" aria-hidden="true">#</a> ERR_Already_Jailbroken and ERR_KernRW (Taurine)/ERR_TFP0 (Odyssey)</h3><p><code>ERR_Already_Jailbroken</code> indicates that the jailbreak process was interrupted. <code>ERR_KernRW</code> and <code>ERR_TFP0</code> indicate that the exploit failed. Both can be solved in the same way:</p><ol><li>Reboot the device.</li><li>Open the Odyssey or Taurine app, depending on your iOS version.</li><li>Press the Jailbreak button.</li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Jailbreaks are hardly ever 100% successful, you may need to re-attempt running the jailbreak multiple times</p></div><h3 id="installation-error-upon-opening-sileo-after-initially-jailbreaking-on-odyssey-1-4-2" tabindex="-1"><a class="header-anchor" href="#installation-error-upon-opening-sileo-after-initially-jailbreaking-on-odyssey-1-4-2" aria-hidden="true">#</a> &quot;Installation Error&quot; upon opening Sileo after initially jailbreaking on Odyssey 1.4.2</h3>',34),f={href:"https://theodyssey.dev",target:"_blank",rel:"noopener noreferrer"},m=e("h3",{id:"unable-to-open-newterm-or-cr4shed-among-other-things-after-a-period-of-time-on-taurine",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#unable-to-open-newterm-or-cr4shed-among-other-things-after-a-period-of-time-on-taurine","aria-hidden":"true"},"#"),o(" Unable to open NewTerm or Cr4shed (among other things) after a period of time on Taurine")],-1),g=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,[o("If you're on 14.3 and later "),e("em",null,"or"),o(" have an A12 or newer device, you likely either rebooted (which would mean you're no longer in a jailbroken state) or you may have something else causing issues entirely unrelated to the jailbreak.")])],-1),y=e("p",null,[o("If you're on 14.0 to 14.2 "),e("em",null,"and"),o(" have A11 or earlier device, this issue is caused by the fact that some tweaks and apps use libaries which have components that may run before the jailbreak is able to stop codesigning. When this happens, affected tweaks and apps cannot be used.")],-1),w=e("h3",{id:"err-jailbreak-when-using-taurine-permanent",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#err-jailbreak-when-using-taurine-permanent","aria-hidden":"true"},"#"),o(" ERR_Jailbreak when using taurine-permanent")],-1),v=e("p",null,"Update to the latest version of taurine-permanent.",-1),k=e("h3",{id:"sileo-not-appearing-upon-initially-jailbreaking-on-chimera-1-6-1-or-taurine-1-1-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sileo-not-appearing-upon-initially-jailbreaking-on-chimera-1-6-1-or-taurine-1-1-2","aria-hidden":"true"},"#"),o(" Sileo not appearing upon initially jailbreaking on Chimera 1.6.1 or Taurine 1.1.2")],-1),_={href:"https://chimera.coolstar.org/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://taurine.app/",target:"_blank",rel:"noopener noreferrer"},S=a('<h2 id="common-errors-on-unc0ver" tabindex="-1"><a class="header-anchor" href="#common-errors-on-unc0ver" aria-hidden="true">#</a> Common Errors on unc0ver</h2><h3 id="general-issues-with-unc0ver-on-ios-14" tabindex="-1"><a class="header-anchor" href="#general-issues-with-unc0ver-on-ios-14" aria-hidden="true">#</a> General issues with unc0ver on iOS 14</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>While these issues are generally the most frequent on iOS 14, some issues could be present even on earlier versions of iOS</p></div><p>While using unc0ver on iOS 14, it is very common to run into the following issues:</p><ul><li>Apps hanging when trying to launch them</li><li>Various app store related issues (including the inability to download apps or make in-app purchases)</li><li>Being unable to receive phone calls while jailbroken</li><li>Having issues utilizing cellular data (such as being unable to load web pages or other online services)</li><li>Being unable to save, take, or view screenshots</li><li>Safari not loading pages, or reloading pages infinitely</li><li>The share sheet not functioning properly</li><li>Issues connecting to Carplay.</li></ul><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you are using Fugu14 to have unc0ver be permanently signed, you may experience these issues to a larger extent, as well as some Fugu14 exclusive issues, such as:</p><ul><li>The inability to view battery statistics</li><li>More frequent and random kernel panics</li></ul></div><p>To <strong>temporarily</strong> resolve these issues, userspace reboot by typing <code>launchctl reboot userspace</code> into a terminal app (e.g. NewTerm) on your device.</p><h3 id="rootfs-already-mounted" tabindex="-1"><a class="header-anchor" href="#rootfs-already-mounted" aria-hidden="true">#</a> rootFS already mounted</h3><ol><li>Open the Settings application</li><li>Go to <code>General</code> -&gt; <code>iX Storage</code><ul><li>This could be <code>iPhone Storage</code>, <code>iPad Storage</code> or <code>iPod Storage</code></li></ul></li><li>Scroll to the System Update downloaded and tap on it</li><li>Tap <code>Delete</code></li><li>Re-run unc0ver</li></ol><p>If this doesn&#39;t fix it, or there is no update downloaded, you may need to download the OTA update and delete it again. Try the following instructions:</p><ol><li>Open the unc0ver application</li><li>Tap on the settings icon in the top right-hand corner</li><li>Uncheck all the options</li><li>Enable <code>Restore RootFS</code></li><li>Press <code>Done</code> in the top right-hand corner</li><li>Go to the jailbreak tab and press <code>Restore RootFS</code><ul><li>If the button says <code>Jailbreak</code>, go back and check to see if <code>Restore RootFS</code> is the only option enabled</li></ul></li><li>When prompted about restoring, tap <code>OK</code><ul><li>This may take some time</li><li>If it fails, try again from the beginning</li></ul></li><li>When finished, tap <code>OK</code> again, and your device will restart</li><li>Open the Settings application</li><li>Go to <code>General</code> -&gt; <code>Software Update</code></li><li>Download the software update but <strong>do not install it</strong></li><li>Go back to <code>General</code></li><li>Once downloaded, go to <code>iX Storage</code> like before <ul><li>This could be <code>iPhone Storage</code>, <code>iPad Storage</code> or <code>iPod Storage</code></li></ul></li><li>Scroll to the System Update downloaded and tap on it</li><li>Tap <code>Delete</code></li><li>Scroll to the unc0ver application and tap on it</li><li>Tap <code>Delete</code></li><li><a href="/installing-unc0ver">Install unc0ver</a> again like before but don&#39;t run it yet</li><li>Turn on Airplane Mode and run the jailbreak now <ul><li>This may take several attempts, keep trying until it works</li></ul></li></ol>',11),T={class:"custom-container tip"},j=e("p",{class:"custom-container-title"},"TIP",-1),O={href:"https://discord.gg/jb",target:"_blank",rel:"noopener noreferrer"},P=e("h3",{id:"not-being-able-to-rejailbreak-or-restore-rootfs-in-unc0ver-after-using-tweaks-such-as-batchomatic-or-iamlazy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#not-being-able-to-rejailbreak-or-restore-rootfs-in-unc0ver-after-using-tweaks-such-as-batchomatic-or-iamlazy","aria-hidden":"true"},"#"),o(" Not being able to rejailbreak or restore rootfs in unc0ver after using tweaks such as Batchomatic or IAmLazy")],-1),R=e("p",null,"Your ability to fix this issue if you end up in this state depends on your iOS version:",-1),I=e("li",null,"If you are on iOS versions 14.4 to 14.5.1, attempt to restore rootfs in the Fugu14 app",-1),F=e("li",null,"If you are either on iOS versions 14.6 to 14.8, or in the group excluded from the first group, your only options are to wait for another jailbreak, wait for an unc0ver update which fixes this issue, or to DFU Restore to the latest iOS version and lose your ability to jailbreak for the forseeable future",-1),A=e("h2",{id:"fixing-package-installation-errors-on-sileo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fixing-package-installation-errors-on-sileo","aria-hidden":"true"},"#"),o(" Fixing package installation errors on Sileo")],-1),E=e("p",null,"For the purposes of this troubleshooting section, we are assuming you are running Sileo on Taurine/Odyssey/Odysseyra1n.",-1),D=e("p",null,[o("In order to determine which error you are encountering, you will have to tap "),e("code",null,"Show Details"),o(" in Sileo when you encounter an error with installing or removing a package.")],-1),U={href:"https://discord.gg/Sileo",target:"_blank",rel:"noopener noreferrer"},C=a('<h3 id="syntax-error-unexpected" tabindex="-1"><a class="header-anchor" href="#syntax-error-unexpected" aria-hidden="true">#</a> Syntax error: &quot;(&quot; unexpected</h3><p>This error indicates that the developer of the tweak you are trying to install/remove has written the installation/removal script incorrectly. You will need Filza to fix this issue.</p><h4 id="removing-the-tweak-causing-this-error" tabindex="-1"><a class="header-anchor" href="#removing-the-tweak-causing-this-error" aria-hidden="true">#</a> Removing the tweak causing this error</h4><ol><li>Open Filza and navigate to <code>/Library/dpkg/info</code></li><li>Find the .postinst or .postrm file corresponding to the tweak with an error, e.g. <code>com.miro.shortmoji2.postinst</code> would be the file to edit if ShortMoji 2 had an install error or <code>com.miro.shortmoji2.postrm</code> if it had an uninstall error</li><li>Tap and hold the file until a menu appears</li><li>Tap <code>Open with</code></li><li>Tap <code>Text Editor</code></li><li>Find the first line of the file that says <code>#!/bin/sh</code></li><li>Change <code>sh</code> to <code>bash</code></li><li>Tap <code>Save</code></li><li>Open Sileo</li><li>Uninstall the tweak. <ul><li>For paid tweaks, you will need to file a bug report to the developer if you wish to install the tweak.</li><li>For free tweaks, you should file a bug report to the developer. If you wish to install the tweak immediately, continue with this guide.</li></ul></li></ol><h4 id="editing-the-tweak-to-fix-the-error-free-tweaks-only" tabindex="-1"><a class="header-anchor" href="#editing-the-tweak-to-fix-the-error-free-tweaks-only" aria-hidden="true">#</a> Editing the tweak to fix the error (Free tweaks only)</h4>',5),V={href:"https://parcility.co",target:"_blank",rel:"noopener noreferrer"},H=a("<li>Search for the tweak you wish to install <ul><li>If it does not appear in the search, you will have to wait for the developer to update their tweak</li></ul></li><li>Tap <code>Download</code></li><li>Once the file has finished downloading, tap on the file in Safari&#39;s downloads menu</li><li>Tap the share button</li><li>Tap <code>Save to Filza</code></li><li>Tap <code>Save</code></li><li>Open Filza, it will open to the folder where you downloaded the tweak file</li><li>Tap on the tweak you wish to fix</li><li>Scroll down and tap <code>Extract</code></li><li>Open the result folder, and navigate to <code>DEBIAN</code></li><li>Repeat steps 2-8 of <code>Removing the tweak causing this error</code> above</li><li>Navigate back to the folder where you downloaded the tweak</li><li>Tap and hold on the tweak folder</li><li>Tap on <code>Create DEB</code></li><li>Tap and hold on the resulting deb file</li><li>Tap <code>Open with</code></li><li>Tap on <code>Sileo</code></li><li>Tap <code>Get</code></li>",18),N=a('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Some developers in the Jailbreak community put a call to the wrong shell in their installation/removal scripts. Until April 2021, most Jailbreaks pointed <code>/bin/sh</code> to <code>/bin/bash</code> so developers were able to use <code>#!/bin/sh</code> to indicate which shell to use even if they use Bash features. In April 2021, Procursus, which runs on Chimera, Odyssey, Taurine, and Odysseyra1n, changed to a different, higher performance shell. This broke these incorrectly formatted scripts.</p></div><h3 id="exec-format-error" tabindex="-1"><a class="header-anchor" href="#exec-format-error" aria-hidden="true">#</a> Exec format error</h3><p>This error indicates that the developer of the tweak you are trying to install/remove has omitted a key part of the installation/removal script. You will need Filza to fix this issue.</p><h4 id="removing-the-tweak-causing-this-error-1" tabindex="-1"><a class="header-anchor" href="#removing-the-tweak-causing-this-error-1" aria-hidden="true">#</a> Removing the tweak causing this error</h4><ol><li>Open Filza and navigate to <code>/Library/dpkg/info</code></li><li>Find the .postinst or .postrm file corresponding to the tweak with an error, e.g. <code>com.miro.shortmoji2.postinst</code> would be the file to edit if ShortMoji 2 had an install error</li><li>Tap and hold the file until a menu appears.</li><li>Tap <code>Open with</code></li><li>Tap <code>Text Editor</code></li><li>Add a new line to the start of the file that says <code>#!/bin/bash</code>.</li><li>Tap <code>Save</code></li><li>Open Sileo</li><li>Uninstall the tweak.</li><li>Navigate to the <code>Sources</code> tab</li><li>Swipe down and refresh your sources</li><li>Navigate to the <code>Search</code> tab</li><li>Type <code>libiosexec1</code> into the Search field</li><li>Install <code>libiosexec1</code> by Hayden Seay</li><li>Try installing the tweak causing an error again</li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>In May 2021, Procursus attempted to migrate to a version of dpkg that no longer handles this install error, as developers should have included the <code>#!/bin/sh</code> or <code>#!/bin/bash</code> calls in their scripts. At the time of writing, the lead developer of Procursus has created a patch, <code>libiosexec</code>, that re-adds this error handling. If you still encounter this error, you may not have updated for a while.</p></div>',6);function B(G,J){const t=n("ExternalLinkIcon"),r=n("router-link");return d(),h("div",null,[u,e("p",null,[o("In a worst case scenario, where you cannot diagnose or fix the issue, ask for support in the "),e("a",p,[o("r/jailbreak discord server"),i(t)]),o(" or restore rootFS.")]),b,e("p",null,[o("Remove the currently installed version of Odyssey, sideload the "),e("a",f,[o("latest version of Odyssey"),i(t)]),o(", and then restore rootfs and then rejailbreak.")]),m,g,y,e("p",null,[o("The easiest solution to this issue is to reboot and rejailbreak when this issue happens. Alternatively, if you do not want this issue to happen, you can jailbreak with "),i(r,{to:"/installing-odysseyra1n"},{default:l(()=>[o("Odysseyra1n")]),_:1}),o(", as Taurine and Odysseyra1n are both intercompatible with eachother, and Odysseyra1n is not affected by this issue.")]),w,v,k,e("ul",null,[e("li",null,[o("If you are having this issue on Chimera, get the "),e("a",_,[o("latest version of Chimera"),i(t)])]),e("li",null,[o("If you are having this issue on Taurine, get the "),e("a",x,[o("latest version of Taurine"),i(t)])])]),S,e("div",T,[j,e("p",null,[o("If this doesn't work, ask on the r/Jailbreak "),e("a",O,[o("Discord Server"),i(t)]),o(" for support.")])]),P,R,e("ul",null,[e("li",null,[o("If you are on iOS versions at or below 14.3 (excluding if you're on 11.x or are A12(X) 12.1.3-12.4.1), follow another jailbreak's "),i(r,{to:"/restoring-rootfs"},{default:l(()=>[o("Restoring Rootfs")]),_:1}),o(" method that is supported on your device/version combination.")]),I,F]),A,E,D,e("p",null,[o("If the fixes below don't help, feel free to ask on the Sileo "),e("a",U,[o("Discord Server"),i(t)]),o(" for support.")]),C,e("ol",null,[e("li",null,[o("Open "),e("a",V,[o("Parcility"),i(t)]),o(" in Safari on your device")]),H]),N])}var z=s(c,[["render",B],["__file","index.html.vue"]]);export{z as default};
