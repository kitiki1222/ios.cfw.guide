import{_ as s}from"./sideloadly_win.6263388d.js";import{_ as c,r as l,o as d,c as u,a as o,b as e,d as t,w as i,e as r}from"./app.dab8f457.js";const p={},h=o("p",null,"The tool is capable of jailbreaking nearly every iOS device on firmware version 11.0 up to 14.8 (excluding iOS 12.5.6), however, for our purposes, it will be used to jailbreak devices in which no easier option is available.",-1),f=o("p",null,"We will use Sideloadly to install the unc0ver jailbreak application to your iOS device for use in the next step.",-1),_={class:"custom-container tip"},v=o("p",{class:"custom-container-title"},"TIP",-1),m=o("strong",null,"highly",-1),g={class:"custom-container tip"},w=o("p",{class:"custom-container-title"},"TIP",-1),b={class:"custom-container warning"},y=o("p",{class:"custom-container-title"},"WARNING",-1),k=r('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>unc0ver on firmware versions 14.6 to 14.8 only supports A12 and A13 iPhones.</p></div><h2 id="downloads" tabindex="-1"><a class="header-anchor" href="#downloads" aria-hidden="true">#</a> Downloads</h2><div class="custom-container tip" id="ifJailbreaksAppSigned"><p> unc0ver is currently signed at <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> for easy installation without a computer. </p></div>',3),I={href:"https://unc0ver.dev/downloads/5.3.1/72004596b31ba3eae886ac6cc781725879d3b7a4/unc0ver_5.3.1.ipa",target:"_blank",rel:"noopener noreferrer"},T={href:"https://unc0ver.dev/downloads/6.1.1/decf7c36cc08118dc83ba455f8ca42e0e3cf354c/unc0ver_Release_6.1.1.ipa",target:"_blank",rel:"noopener noreferrer"},S={href:"https://unc0ver.dev/downloads/7.0.2/11c3f7b0eea806ba3cac975f74dcc2cc4e916bac/unc0ver_Release_7.0.2.ipa",target:"_blank",rel:"noopener noreferrer"},x={href:"https://unc0ver.dev",target:"_blank",rel:"noopener noreferrer"},A={href:"https://sideloadly.io/",target:"_blank",rel:"noopener noreferrer"},O={href:"https://www.apple.com/itunes/download/win32",target:"_blank",rel:"noopener noreferrer"},j=r('<p><img src="'+s+'" alt="A screenshot of the Sideloadly application (Windows)"></p><h2 id="installing-the-application" tabindex="-1"><a class="header-anchor" href="#installing-the-application" aria-hidden="true">#</a> Installing the application</h2><ol><li>Open Sideloadly</li><li>Plug your iOS device into your computer <ul><li>Make sure your computer is trusted and allowed to view the contents of your device</li></ul></li><li>Drag and drop the unc0ver <code>.ipa</code> file into Sideloadly</li><li>Enter in your Apple ID</li><li>Enter in your password <ul><li>Sideloadly must make a request to its servers in order to work with free developer accounts. If you are not OK with this, you may use an alternate Apple ID.</li></ul></li></ol><p>The app will now install to your iOS device.</p><h2 id="trusting-the-application" tabindex="-1"><a class="header-anchor" href="#trusting-the-application" aria-hidden="true">#</a> Trusting the application</h2><ol><li>Go to <code>Settings</code> -&gt; <code>General</code> -&gt; <code>Device Management</code> -&gt; <code>&lt;Your Apple ID&gt;</code><ul><li>Depending on your usage, <code>Device Management</code> may be labeled <code>Profiles and Device Management</code></li></ul></li><li>Tap <code>Trust &quot;&lt;Your Apple ID&gt;&quot;</code></li></ol><p>The unc0ver application can now be opened from home screen.</p><h2 id="running-unc0ver" tabindex="-1"><a class="header-anchor" href="#running-unc0ver" aria-hidden="true">#</a> Running unc0ver</h2><ol><li>Reboot your phone <ul><li>This is not necessary but recommended</li></ul></li><li>Open the unc0ver application from your home screen immediately afterwards <ul><li>If unc0ver warns you that the app has been tampered with, reinstall unc0ver via Sideloadly</li></ul></li><li>Open the settings menu and disable the <code>Disable Auto Updates</code> toggle <ul><li>unc0ver disables Over-The-Air updates by default, however it&#39;s recommended to toggle this as it can cause issues when updating manually if not disabled</li></ul></li><li>Tap &quot;Done&quot;</li><li>Tap &quot;Jailbreak&quot;</li><li>Reboot your phone when prompted</li><li>Open the unc0ver application from your home screen immediately after rebooting</li><li>Tap &quot;Jailbreak&quot;</li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If the app or your device crashes/restarts unexpectedly and the jailbreak isn&#39;t installed, simply try rebooting and running the exploit again until it does work.</p></div>',10),D={class:"custom-container warning"},q=o("p",{class:"custom-container-title"},"WARNING",-1),N=o("code",null,"rootFS already mounted, delete the OTA update",-1),P={class:"custom-container tip"},R=o("p",{class:"custom-container-title"},"TIP",-1),W=o("p",null,"If you wish to use a more modern package manager, continue to the following depending on your iOS version:",-1);function E(G,C){const n=l("router-link"),a=l("ExternalLinkIcon");return d(),u("div",null,[o("p",null,[e("unc0ver is a "),t(n,{to:"/types-of-jailbreak/#semi-untethered-jailbreaks"},{default:i(()=>[e("semi-untethered jailbreak")]),_:1}),e(", meaning it requires an app to re-apply the exploit after a reboot.")]),h,o("p",null,[e("Due to how semi-untethered jailbreaks work, the app will need to be "),t(n,{to:"/resigning-apps"},{default:i(()=>[e("re-signed")]),_:1}),e(" once every 7 days.")]),f,o("div",_,[v,o("p",null,[e("If you are on an A12 or newer device running iOS 14.0 to 14.3 or 14.6 to 14.8, it is "),m,e(" recommended to follow "),t(n,{to:"/installing-unc0ver-trollstore"},{default:i(()=>[e("Installing unc0ver (TrollStore)")]),_:1}),e(" instead.")])]),o("div",g,[w,o("p",null,[e("If you are looking for the guide on how to use unc0ver on A12 or newer devices on firmware versions 14.4 to 14.5.1, continue to "),t(n,{to:"/installing-unc0ver-fugu14"},{default:i(()=>[e("Installing unc0ver (Fugu14)")]),_:1})])]),o("div",b,[y,o("p",null,[e("If you are already jailbroken with another jailbreak, make sure to properly "),t(n,{to:"/restoring-rootfs"},{default:i(()=>[e("remove it")]),_:1}),e(" before proceeding.")])]),k,o("ul",null,[o("li",null,[e("The 5.3.1 version of "),o("a",I,[e("unc0ver"),t(a)]),o("ul",null,[o("li",null,[e("Users on firmware versions 12.4.9 - 12.5.4, 13.5.1 - 14.3 should download the 6.1.1 version of "),o("a",T,[e("unc0ver"),t(a)]),e(" instead")]),o("li",null,[e("Users on firmware version 12.5.5 should download the 7.0.2 version of "),o("a",S,[e("unc0ver"),t(a)]),e(" instead")]),o("li",null,[e("Users with A12 or A13 iPhones on firmware versions 14.6 - 14.8 should download the latest version of "),o("a",x,[e("unc0ver"),t(a)]),e(" instead")])])]),o("li",null,[e("The latest version of "),o("a",A,[e("Sideloadly"),t(a)])]),o("li",null,[e("The latest version of "),o("a",O,[e("iTunes"),t(a)]),e(" if on Windows")])]),j,o("div",D,[q,o("p",null,[e("If you receive the error "),N,e(", read the "),t(n,{to:"/troubleshooting/#rootfs-already-mounted"},{default:i(()=>[e("Troubleshooting")]),_:1}),e(" page")])]),o("p",null,[e("You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install "),t(n,{to:"/faq/#what-are-tweaks"},{default:i(()=>[e("tweaks")]),_:1}),e(", themes and more.")]),o("div",P,[R,W,o("ul",null,[o("li",null,[e("If you are on iOS 12 or later, continue to "),t(n,{to:"/installing-sileo"},{default:i(()=>[e("Installing Sileo")]),_:1})]),o("li",null,[e("If you are on iOS 11, continue to "),t(n,{to:"/installing-zebra"},{default:i(()=>[e("Installing Zebra")]),_:1})])])])])}var V=c(p,[["render",E],["__file","index.html.vue"]]);export{V as default};
