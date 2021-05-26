(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{379:function(e,a,t){"use strict";t.r(a);var o=t(42),n=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("This specification describes a communication protocol for control, configuration and monitoring of connected devices. It is published under the permissive "),t("a",{attrs:{href:"https://creativecommons.org/licenses/by-sa/4.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC BY-SA 4.0 License"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("The protocol is called ThingSet - a protocol for "),t("strong",[e._v("set")]),e._v("tings of "),t("strong",[e._v("thing")]),e._v("s. The main goals of the protocol are:")]),e._v(" "),t("h3",{attrs:{id:"flexible"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flexible"}},[e._v("#")]),e._v(" Flexible")]),e._v(" "),t("p",[e._v("As an application layer protocol it should be widely independent of the underlying transport protocols and physical interfaces. It can be used with e.g. CAN, USB, WiFi, Bluetooth, a simple serial interface or upcoming interfaces of the future.")]),e._v(" "),t("h3",{attrs:{id:"easy-to-use-and-human-readable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#easy-to-use-and-human-readable"}},[e._v("#")]),e._v(" Easy to use and human-readable")]),e._v(" "),t("p",[e._v("Similar to Modbus, the protocol should have a text-based mode which is human-readable. This allows easy manual device communication via the serial interface. For M2M communication, a more compact binary mode should be available.")]),e._v(" "),t("h3",{attrs:{id:"compact-footprint"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compact-footprint"}},[e._v("#")]),e._v(" Compact footprint")]),e._v(" "),t("p",[e._v("Implementation and binary data representations should be very compact to enable transport via LoRa and CAN. Standard CAN frames allow a payload of only 8 bytes per frame, LoRa allows "),t("a",{attrs:{href:"https://www.thethingsnetwork.org/forum/t/limitations-data-rate-packet-size-30-seconds-uplink-and-10-messages-downlink-per-day-fair-access-policy/1300",target:"_blank",rel:"noopener noreferrer"}},[e._v("51 bytes"),t("OutboundLink")],1),e._v(" of application payload per message.")]),e._v(" "),t("h3",{attrs:{id:"schema-less-and-self-explaining"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#schema-less-and-self-explaining"}},[e._v("#")]),e._v(" Schema-less and self-explaining")]),e._v(" "),t("p",[e._v("It should be possible to configure and monitor a device without a manual or a configuration file. This means that the protocol needs functions to discover the features and configurable settings of an unknown device. In contrast to other protocols like Modbus, you should not need to know the variable type and register address where a setting is stored.")]),e._v(" "),t("p",[e._v("In addition to that, it should be forward and backward compatible: An old device should happily talk to a newer client application and an updated device (providing more data for example) should still be able to talk to an older client.")])])}),[],!1,null,null,null);a.default=n.exports}}]);