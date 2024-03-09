import{_ as c}from"./aluminum_tv_remote.eab613f5.js";import{_ as u,r as l,o as d,c as p,a as e,b as t,d as o,w as n}from"./app.dab8f457.js";const h={},_=e("h2",{id:"requisiti",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#requisiti","aria-hidden":"true"},"#"),t(" Requisiti")],-1),b=e("li",null,"Intel-based Mac running macOS 10.9 or later.",-1),m={href:"https://github.com/NSSpiral/Blackb0x/releases/tag/0.6.2",target:"_blank",rel:"noopener noreferrer"},f=e("li",null,"A non-Siri enabled Apple TV aluminum remote:",-1),y=e("p",null,[e("img",{src:c,alt:"A photo of a non-Siri enabled Apple TV aluminum remote",style:{display:"block","margin-inline":"auto","max-width":"30em"}})],-1),k=e("h2",{id:"installing-blackb0x",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-blackb0x","aria-hidden":"true"},"#"),t(" Installing Blackb0x")],-1),T=e("p",null,"Depending on your model of Apple TV, the steps are different. Select the tab that lists the A-code that corresponds to your Apple TV model.",-1),g=e("ol",null,[e("li",null,"Unzip and run the Blackb0x application"),e("li",null,"Connect your Apple TV via USB to your Mac - you will most likely need to disconnect the HDMI cable."),e("li",null,[t("Click "),e("code",null,"Install Jailbreak")]),e("li",null,"Once Blackb0x says done, your Apple TV will reboot"),e("li",null,"Disconnect it from your Mac, but do not use the Apple TV yet when it first boots"),e("li",null,"Wait a few minutes until it displays a loading circle and then loads the home screen.")],-1),A=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"It may take a few tries to get your Apple TV into DFU. Be patient and ensure you follow the steps exactly.")],-1),w=e("li",null,"Unzip and run Blackb0x",-1),x=e("li",null,"Connect your Apple TV via USB to your computer - you will most likely need to disconnect the HDMI cable.",-1),V=e("li",null,"Follow the steps blackb0x provides to enter DFU",-1),v=e("li",null,[t("Click "),e("code",null,"Install Jailbreak")],-1),S=e("li",null,"Once Blackb0x says done, your Apple TV will reboot.",-1),B=e("li",null,"Disconnect it from your Mac, but do not use the Apple TV yet when it first boots",-1),I=e("li",null,"Wait a few minutes until it displays a loading circle and then loads the home screen.",-1),j=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"Your Apple TV (3rd generation) may boot into recovery mode after using blackb0x. This is normal, it means you didn't disconnect the USB cable in time - the Apple TV automatically boots into Recovery Mode if it is connected to a computer. Power cycle it and it will boot normally.")],-1),U=e("p",null,[t("You should now be jailbroken with Kodi installed on your home screen. To install packages, you will need to use SSH. To gain access, run the command "),e("code",null,"ssh -oHostKeyAlgorithms=+ssh-dss root@apple.tv.ip.here"),t(". You can find the IP address in Settings.")],-1);function C(D,M){const a=l("router-link"),s=l("ExternalLinkIcon"),i=l("Tab"),r=l("Tabs");return d(),p("div",null,[e("p",null,[t("Blackb0x is capable of untether jailbreaking the Apple TV (2nd generation) on Apple TV Software 5.3 and the Apple TV (3rd generation) on Apple TV Software 7.2.1 to 7.9. It is also capable of "),o(a,{to:"/types-of-jailbreak/#tethered-jailbreaks"},{default:n(()=>[t("tether jailbreaking")]),_:1}),t(" the Apple TV (2nd generation) on Apple TV Software 6.2.1 and the Apple TV (3rd generation) on Apple TV Software 6.0 to 6.2.")]),e("p",null,[t("Blackb0x is an "),o(a,{to:"/types-of-jailbreak/#untethered-jailbreaks"},{default:n(()=>[t("untethered")]),_:1}),t(" jailbreak meaning that it survives a reboot and can cause a permanent bootloop if something goes wrong. If you encounter a bootloop, restore your device via iTunes, Finder (macOS Catalina and newer) or FutureRestore")]),_,e("ul",null,[b,e("li",null,[t("The latest version of "),e("a",m,[t("Blackb0x"),o(s)])]),f]),y,k,T,o(r,{tabs:""},{default:n(()=>[o(i,{tab:"",name:"A1378, A1469",default:!0},{default:n(()=>[g,A]),_:1}),o(i,{tab:"",name:"A1427",default:!1},{default:n(()=>[e("ol",null,[e("li",null,[t("Follow the "),o(a,{to:"/using-checkm8-a5"},{default:n(()=>[t("Using checkm8-a5")]),_:1}),t(" guide")]),w,x,V,v,S,B,I])]),_:1})]),_:1}),j,U])}var N=u(h,[["render",C],["__file","index.html.vue"]]);export{N as default};
