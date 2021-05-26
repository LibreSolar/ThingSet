(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{378:function(e,a,t){"use strict";t.r(a);var o=t(42),s=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"existing-standards"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#existing-standards"}},[e._v("#")]),e._v(" Existing Standards")]),e._v(" "),t("p",[e._v("In order to not re-invent the wheel, existing standards were investigated prior to the development of the ThingSet specification.")]),e._v(" "),t("p",[e._v("This chapter gives an overview about the advantages and disadvantages of existing solutions. If you just want to know how ThingSet works, you can move on to the next chapter.")]),e._v(" "),t("p",[e._v("As the ThingSet protocol was originally developed for energy management based on CAN communication, below analysis covers this aspect in more detail.")]),e._v(" "),t("h2",{attrs:{id:"protocols"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#protocols"}},[e._v("#")]),e._v(" Protocols")]),e._v(" "),t("h3",{attrs:{id:"modbus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modbus"}},[e._v("#")]),e._v(" Modbus")]),e._v(" "),t("p",[e._v("Modbus RTU and Modbus TCP are quite old, quasi-standard protocols to read and write registers of a device. Modbus requires knowledge of the accessible register addresses and the data format. A method to discover available settings and measurement values is not possible, so it does not fulfill the requirement to be self-describing.")]),e._v(" "),t("h3",{attrs:{id:"firmata"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#firmata"}},[e._v("#")]),e._v(" Firmata")]),e._v(" "),t("p",[e._v("In the Arduino community, a protocol called "),t("a",{attrs:{href:"http://firmata.org/wiki/Main_Page",target:"_blank",rel:"noopener noreferrer"}},[e._v("Firmata"),t("OutboundLink")],1),e._v(" is very popular to control Arduino devices directly via the serial interface. The protocol based on the MIDI protocol and very compact. However, the approach is very Arduino-specific and targets to remote-control as many Arduino features as possible. ThingSet aims to be a more general purpose solution.")]),e._v(" "),t("h3",{attrs:{id:"canopen-and-energybus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#canopen-and-energybus"}},[e._v("#")]),e._v(" CANopen and EnergyBus")]),e._v(" "),t("p",[e._v('CANopen is developed by CAN in Automation (CiA). This high level protocol uses CAN as physical layer and adds profile specifications, standardized communication protocol and advanced error handling to the core functionality of CAN. Despite the word "open" in the name, only the basic device profile specifications are open accessible. A paid CiA membership is necessary to access all specifications. Unfortunately, the EnergyBus profiles (CiA 454) for a CAN based energy management system are not provided with free access.')]),e._v(" "),t("p",[e._v("CiA DS301 specifies the basic communication functionalities of the CANopen application layer.")]),e._v(" "),t("p",[e._v("Every device (called CANopen node) must have an object dictionary (OD). This is a large table stored in the node which contains all kinds of data, including device parameters, measurement or control data. In addition to that, it stores also data necessary for communication e.g. which datatypes are used or how a message can be transported (broadcast, handshake, ..).")]),e._v(" "),t("p",[e._v("There are two different types of telegrams:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Service Data Objects (SDOs): These are only used to access the OD. When a device receives an SDO it changes the values of parameters or other OD table entries. The communication is based on a Client/Server relationship. A client initiates an SDO communication, the server then changes its OD according to the client's instruction and sends a response. The client is typically a master device or an operator who supervises and configures the entire network.")])]),e._v(" "),t("li",[t("p",[e._v('Process Data Objects (PDOs): The majority of messages in the bus contain process information like measurement data, control data, status data, etc. The data is read from the OD and transmitted as a PDO, which is basically a pure CAN telegram without protocol overhead. The CAN-identifier of a PDO telegram does not only contain the node-ID of a device (like this is the case in "pure CAN") but also what kind of content is delivered by the telegram.')])])]),e._v(" "),t("p",[e._v("The PDO telegrams are not predefined, but they are configured separately for each network. For each device, four Receive-PDOs (RPDOs) and four Transmit-PDOs (TPDOs) can be defined. For example, the actual current of the battery could be sent as a TPDO by the battery management system and an received as RPDO in a charge controller.")]),e._v(" "),t("p",[e._v("The connection channels between different devices for PDO exchange are defined using a PDO mapping procedure. This has the advantage that the process data exchange between different devices can be very flexible. However, it makes an initial network setup necessary. If a device is added to the network, it has to be shut down, some PDO mappings have to be defined and afterwards the network is put into operation mode again. This contradicts to the requirement of a plug-and-play capable energy system.")]),e._v(" "),t("p",[e._v("An intelligent master device implementing the network management (NMT) features could be used instead of manual configuration. But also a master device is not beneficial for a distributed, fail-safe energy system.")]),e._v(" "),t("p",[e._v("Summary of issues:")]),e._v(" "),t("ul",[t("li",[e._v("Pre-defined frame layout defined in not completely open specification")]),e._v(" "),t("li",[e._v("Complicated network setup (normally done using proprietary tools)")]),e._v(" "),t("li",[e._v("Not intended for master-less operation")]),e._v(" "),t("li",[e._v("Only 4 RPDOs and TPDOs possible per node ID for control functions")])]),e._v(" "),t("h3",{attrs:{id:"sae-j1939-rv-c-nmea2000-isobus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sae-j1939-rv-c-nmea2000-isobus"}},[e._v("#")]),e._v(" SAE J1939 / RV-C / NMEA2000 / ISOBUS")]),e._v(" "),t("p",[e._v("The collection of SAE J1939 standards describe a well-established CAN application layer protocol. Several other protocols like RV-C (recreational vehicles), NMEA2000 (marine applications) and ISOBUS (agriculture machines) are based on SAE J1939.")]),e._v(" "),t("p",[e._v("Unfortunately, all SAE J1939 based standards (including the base standard itself) are proprietary and not puplic. Only RV-C is available for download.")]),e._v(" "),t("p",[e._v("SAE J1939 uses only the extended format CAN id with 29 bits and encodes message priority, source ID, destination ID and the type of message (Parameter Group Number, PGN) inside the CAN ID.")]),e._v(" "),t("p",[e._v("In general, SAE J1939 is based on fixed (specified) layout of the data fields in the CAN frame, depending on the PGN.")]),e._v(" "),t("p",[e._v("In addition, the protocol is not designed for configuration of parameters. Writing parameters to a device can be achieved only by specifying special PGNs. In contrast to CANopen, parameters cannot be read or written by default.")]),e._v(" "),t("h3",{attrs:{id:"xcp-universal-measurement-and-calibration-protocol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xcp-universal-measurement-and-calibration-protocol"}},[e._v("#")]),e._v(" XCP (Universal Measurement and Calibration Protocol)")]),e._v(" "),t("p",[e._v("XCP is an established protocol for ECU (Engine Control Unit) development in the automotive industry. It is not limited to CAN as a low level interface, but CAN is probably the most commonly used lower layer.")]),e._v(" "),t("p",[e._v("Measurement data and calibration parameters are accessed directly via registers in the microcontroller. Thus, the register values and description has to be generated during linking of the binary code. The register description is typically saved in a .A2L file.")]),e._v(" "),t("p",[e._v("For an agile open source based development, the toolchain for generating the A2L file is considered too complicated. In addition to that, tools for XCP and A2L are mostly proprietary and expensive.")]),e._v(" "),t("p",[e._v("XCP is also not useable for a master-less control of devices in a system, as this was not a purpose of the protocol.")]),e._v(" "),t("p",[e._v("However, XCP offers a well-suited way for firmware upgrades of devices. This feature might be adapted in a future version of this specification.")]),e._v(" "),t("h3",{attrs:{id:"uavcan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uavcan"}},[e._v("#")]),e._v(" UAVCAN")]),e._v(" "),t("p",[t("a",{attrs:{href:"http://uavcan.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("UAVCAN"),t("OutboundLink")],1),e._v(" is a modern and lightweight protocol based on CAN, also targeting a master-less network. Main applications include aerospace and robotic applications.")]),e._v(" "),t("p",[e._v("The protocol is fully open, well-designed and easy to be implemented. However, it also uses pre-defined messages for the communication between devices.")]),e._v(" "),t("p",[e._v("The node ID assignment process is more complicated compared to SAE J1939.")]),e._v(" "),t("p",[e._v("Some aspects of the UAVCAN protocol might be adapted in the CAN lower layer of this specification.")])])}),[],!1,null,null,null);a.default=s.exports}}]);