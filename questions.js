// NetMCQ Question Bank
// Sources: Sanfoundry, Scribd/Studocu, Chapter 6 PPT (Kurose & Ross 8th ed.)
// Categories: basics, ch6, mac, ethernet, arp, error, switch, vlan, mpls, wireless

const QUESTIONS = [

  // ═══════════════════════════════════════════
  // NETWORK BASICS
  // ═══════════════════════════════════════════
  {
    id: 1,
    category: "basics",
    question: "What is a computer network?",
    options: [
      "A device used to display information on a computer screen",
      "A collection of interconnected computers and devices that can communicate and share resources",
      "A type of software used to create documents and presentations",
      "The physical casing that protects a computer's internal components"
    ],
    answer: 1,
    explanation: "電腦網路是由多台電腦和設備相互連接，能夠互相通訊並共享資源的系統。"
  },
  {
    id: 2,
    category: "basics",
    question: "What is the Internet?",
    options: [
      "A network of interconnected local area networks",
      "A collection of unrelated computers",
      "Interconnection of wide area networks",
      "A single network"
    ],
    answer: 2,
    explanation: "網際網路（Internet）是由多個廣域網路（WAN）相互連接所形成的全球性網路系統。"
  },
  {
    id: 3,
    category: "basics",
    question: "When a collection of various computers appears as a single coherent system to its clients, what is it called?",
    options: [
      "Computer network",
      "Distributed system",
      "Networking system",
      "Mail system"
    ],
    answer: 1,
    explanation: "分散式系統（Distributed system）讓多台電腦對外呈現為單一一致的系統，使用者感覺不到背後是多台機器在運作。"
  },
  {
    id: 4,
    category: "basics",
    question: "Two devices are in a network if ___",
    options: [
      "A process is running on both devices",
      "PIDs of the processes running on different devices are the same",
      "A process in one device is able to exchange information with a process in another device",
      "A process is active and another is inactive"
    ],
    answer: 2,
    explanation: "網路中兩台設備的定義是：一台設備上的程序能夠與另一台設備上的程序交換資訊。"
  },
  {
    id: 5,
    category: "basics",
    question: "Which of the following computer networks is built on top of another network?",
    options: [
      "Prior network",
      "Chief network",
      "Prime network",
      "Overlay network"
    ],
    answer: 3,
    explanation: "覆蓋網路（Overlay network）是建立在另一個底層網路之上的虛擬網路，例如 VPN 和 P2P 網路。"
  },
  {
    id: 6,
    category: "basics",
    question: "In a computer network, nodes are ___",
    options: [
      "The computer that originates the data",
      "The computer that routes the data",
      "The computer that terminates the data",
      "All of the mentioned"
    ],
    answer: 3,
    explanation: "節點（node）泛指網路中任何參與通訊的設備，包含資料的起點、路由設備及終點。"
  },
  {
    id: 7,
    category: "basics",
    question: "Communication channel is shared by all the machines on the network in ___",
    options: [
      "Broadcast network",
      "Unicast network",
      "Multicast network",
      "Anycast network"
    ],
    answer: 0,
    explanation: "廣播網路（Broadcast network）中，所有機器共用同一條通訊通道，任何一台機器發送的訊息，所有其他機器都能收到。"
  },
  {
    id: 8,
    category: "basics",
    question: "Bluetooth is an example of ___",
    options: [
      "Personal Area Network (PAN)",
      "Local Area Network (LAN)",
      "Virtual Private Network (VPN)",
      "Wide Area Network (WAN)"
    ],
    answer: 0,
    explanation: "藍牙（Bluetooth）屬於個人區域網路（PAN），通訊距離短（約10公尺），用於連接個人設備，如耳機、鍵盤等。"
  },
  {
    id: 9,
    category: "basics",
    question: "A ___ is a device that forwards packets between networks by processing the routing information included in the packet.",
    options: [
      "Bridge",
      "Firewall",
      "Router",
      "Hub"
    ],
    answer: 2,
    explanation: "路由器（Router）是第三層（網路層）設備，透過讀取封包中的 IP 路由資訊，將封包轉送至目的地網路。"
  },
  {
    id: 10,
    category: "basics",
    question: "A list of protocols used by a system, one protocol per layer, is called ___",
    options: [
      "Protocol architecture",
      "Protocol stack",
      "Protocol suite",
      "Protocol system"
    ],
    answer: 1,
    explanation: "協定堆疊（Protocol stack）是指系統所使用的各層協定清單，每層一個協定，例如 TCP/IP 協定堆疊。"
  },
  {
    id: 11,
    category: "basics",
    question: "Network congestion occurs ___",
    options: [
      "In case of traffic overloading",
      "When a system terminates",
      "When connection between two nodes terminates",
      "In case of transfer failure"
    ],
    answer: 0,
    explanation: "網路壅塞（Network congestion）發生在網路流量超過網路容量時，導致封包延遲或遺失。"
  },
  {
    id: 12,
    category: "basics",
    question: "Which of the following networks extends a private network across public networks?",
    options: [
      "Local Area Network (LAN)",
      "Virtual Private Network (VPN)",
      "Enterprise Private Network",
      "Storage Area Network (SAN)"
    ],
    answer: 1,
    explanation: "虛擬私人網路（VPN）透過加密技術在公共網路上建立安全的私有連線，讓遠端用戶如同在內部網路中使用資源。"
  },
  {
    id: 13,
    category: "basics",
    question: "What is the full form of OSI?",
    options: [
      "Optical Service Implementation",
      "Open Service Internet",
      "Open System Interconnection",
      "Operating System Interface"
    ],
    answer: 2,
    explanation: "OSI 代表開放式系統互連（Open System Interconnection），是 ISO 制定的網路通訊標準模型。"
  },
  {
    id: 14,
    category: "basics",
    question: "How many layers are there in the ISO OSI reference model?",
    options: [
      "5",
      "4",
      "6",
      "7"
    ],
    answer: 3,
    explanation: "OSI 模型共有 7 層，由下而上為：實體層、資料連結層、網路層、傳輸層、會話層、表示層、應用層。"
  },
  {
    id: 15,
    category: "basics",
    question: "Which one of the following is NOT a function of the network layer?",
    options: [
      "Congestion control",
      "Error control",
      "Routing",
      "Internetworking"
    ],
    answer: 1,
    explanation: "錯誤控制（Error control）是資料連結層的功能，不是網路層。網路層負責路由、壅塞控制和網路互連。"
  },
  {
    id: 16,
    category: "basics",
    question: "How is a single channel shared by multiple signals in a computer network?",
    options: [
      "Multiplexing",
      "Phase modulation",
      "Analog modulation",
      "Digital modulation"
    ],
    answer: 0,
    explanation: "多工（Multiplexing）技術讓多個訊號共用同一條通訊通道，常見方式有分時多工（TDM）和分頻多工（FDM）。"
  },
  {
    id: 17,
    category: "basics",
    question: "What is the term for an endpoint of an inter-process communication flow across a computer network?",
    options: [
      "Port",
      "Machine",
      "Socket",
      "Pipe"
    ],
    answer: 2,
    explanation: "Socket（套接字）是網路上程序間通訊的端點，由 IP 地址加埠號（Port）組成，用於識別網路中的特定通訊流。"
  },
  {
    id: 18,
    category: "basics",
    question: "Which layer does the data link layer receive packets from to encapsulate them into frames for transmission?",
    options: [
      "Transport layer",
      "Application layer",
      "Network layer",
      "Physical layer"
    ],
    answer: 2,
    explanation: "資料連結層從網路層接收封包（packet），將其封裝成訊框（frame）後，透過實體層傳送出去。"
  },
  {
    id: 19,
    category: "basics",
    question: "Which of the following is NOT a network edge device?",
    options: [
      "Switch",
      "PC",
      "Smartphones",
      "Servers"
    ],
    answer: 0,
    explanation: "交換器（Switch）是網路核心設備（core device），負責在網路內部轉送資料；PC、手機和伺服器都是邊緣設備（edge devices）。"
  },
  {
    id: 20,
    category: "basics",
    question: "Which topology requires a multipoint connection?",
    options: [
      "Ring",
      "Bus",
      "Star",
      "Mesh"
    ],
    answer: 1,
    explanation: "匯流排拓樸（Bus topology）使用多點連接（multipoint），所有設備連接到同一條共用線路上。"
  },
  {
    id: 21,
    category: "basics",
    question: "Which of the following maintains the Domain Name System?",
    options: [
      "A single server",
      "A single computer",
      "Distributed database system",
      "None of the mentioned"
    ],
    answer: 2,
    explanation: "DNS（網域名稱系統）由分散式資料庫系統維護，全球各地有多個 DNS 伺服器協同運作，沒有單一中心點。"
  },
  {
    id: 22,
    category: "basics",
    question: "Which layer is responsible for process-to-process delivery in a general network model?",
    options: [
      "Session layer",
      "Data link layer",
      "Transport layer",
      "Network layer"
    ],
    answer: 2,
    explanation: "傳輸層（Transport layer）負責端點（end-to-end）的程序對程序傳輸，TCP 和 UDP 都工作在傳輸層。"
  },
  {
    id: 23,
    category: "basics",
    question: "What does each packet contain in a virtual circuit network?",
    options: [
      "Only source address",
      "Only destination address",
      "Full source and destination address",
      "A short VC number"
    ],
    answer: 3,
    explanation: "在虛擬電路（Virtual circuit）網路中，路徑建立後每個封包只需攜帶短暫的 VC 號碼，不需要完整的來源/目的地址，效率更高。"
  },
  {
    id: 24,
    category: "basics",
    question: "What is the term for the data communication system within a building or campus?",
    options: [
      "MAN",
      "LAN",
      "PAN",
      "WAN"
    ],
    answer: 1,
    explanation: "區域網路（LAN，Local Area Network）涵蓋建築物或校園範圍內的網路，如教室或辦公室網路。"
  },
  {
    id: 25,
    category: "basics",
    question: "What was the name of the first network?",
    options: [
      "ASAPNET",
      "ARPANET",
      "CNNET",
      "NSFNET"
    ],
    answer: 1,
    explanation: "ARPANET 是第一個封包交換網路，由美國國防部高等研究計劃局（ARPA）於 1969 年建立，是現代網際網路的前身。"
  },
  {
    id: 26,
    category: "basics",
    question: "Which of the following is the network layer protocol for the Internet?",
    options: [
      "HTTP (Hypertext Transfer Protocol)",
      "FTP (File Transfer Protocol)",
      "Ethernet",
      "IP (Internet Protocol)"
    ],
    answer: 3,
    explanation: "IP（網際網路協定）是網路層的核心協定，負責定址和路由，讓封包能夠在不同網路間傳遞。"
  },
  {
    id: 27,
    category: "basics",
    question: "Which network topology requires a central controller or hub?",
    options: [
      "Ring",
      "Bus",
      "Star",
      "Mesh"
    ],
    answer: 2,
    explanation: "星狀拓樸（Star topology）所有設備都連接到中央集線器或交換器，若中心設備故障，整個網路即中斷。"
  },
  {
    id: 28,
    category: "basics",
    question: "If a link transmits 4000 frames per second and each slot has 8 bits, what is the transmission rate of the link?",
    options: [
      "500 kbps",
      "32 kbps",
      "32 bps",
      "500 bps"
    ],
    answer: 1,
    explanation: "傳輸速率 = 每秒訊框數 × 每訊框位元數 = 4000 × 8 = 32,000 bps = 32 kbps。"
  },
  {
    id: 29,
    category: "basics",
    question: "Which of the following allows LAN users to share computer programs and data?",
    options: [
      "File server",
      "Network",
      "Communication server",
      "Print server"
    ],
    answer: 0,
    explanation: "檔案伺服器（File server）讓區域網路中的使用者能共用程式和資料，集中管理和儲存檔案。"
  },
  {
    id: 30,
    category: "basics",
    question: "What type of transmission is involved in communication between a computer and a keyboard?",
    options: [
      "Half-duplex",
      "Full-duplex",
      "Simplex",
      "Automatic"
    ],
    answer: 2,
    explanation: "單工（Simplex）傳輸只允許單向通訊。鍵盤只向電腦輸入資料，不接收電腦傳回的資料，因此是單工傳輸。"
  },
  {
    id: 31,
    category: "basics",
    question: "Which layer provides services to the user?",
    options: [
      "Physical layer",
      "Presentation layer",
      "Session layer",
      "Application layer"
    ],
    answer: 3,
    explanation: "應用層（Application layer）是 OSI 模型的最高層，直接與使用者的應用程式互動，提供 HTTP、FTP、SMTP 等服務。"
  },
  {
    id: 32,
    category: "basics",
    question: "Which connection is necessary for a computer to join the Internet?",
    options: [
      "Internet Society",
      "Internet Service Provider (ISP)",
      "Different computer",
      "Internet Architecture Board"
    ],
    answer: 1,
    explanation: "網際網路服務提供商（ISP）是電腦連上網際網路的必要條件，如中華電信、台灣大哥大等。"
  },
  {
    id: 33,
    category: "basics",
    question: "Which of the following allows you to connect and log in to a remote computer?",
    options: [
      "SMTP",
      "HTTP",
      "FTP",
      "Telnet"
    ],
    answer: 3,
    explanation: "Telnet 協定允許使用者透過網路遠端登入另一台電腦並進行操作，但傳輸資料不加密（安全性較差，現多用 SSH 替代）。"
  },
  {
    id: 34,
    category: "basics",
    question: "Which of the following is used in an attempt to render a computer resource unavailable to its intended users?",
    options: [
      "Botnet process",
      "Worms attack",
      "Virus attack",
      "Denial-of-service (DoS) attack"
    ],
    answer: 3,
    explanation: "拒絕服務攻擊（DoS, Denial-of-Service）透過大量請求或惡意流量使目標系統無法正常對合法使用者提供服務。"
  },
  {
    id: 35,
    category: "basics",
    question: "When discussing IDS/IPS, what is a 'signature'?",
    options: [
      "It refers to 'normal' baseline network behavior",
      "It is used to authorize the users on a network",
      "An electronic signature to authenticate a user's identity",
      "An attack-definition file"
    ],
    answer: 3,
    explanation: "在入侵偵測系統（IDS/IPS）中，特徵碼（signature）是已知攻擊的定義檔，用來比對網路流量是否符合已知攻擊模式。"
  },
  {
    id: 36,
    category: "basics",
    question: "Which of the following are Gigabit Ethernet standards?",
    options: [
      "1000BASE-LX only",
      "1000BASE-CX only",
      "1000BASE-SX only",
      "All of the mentioned (1000BASE-LX, CX, SX)"
    ],
    answer: 3,
    explanation: "1000BASE-LX（長波光纖）、1000BASE-CX（短銅纜）和 1000BASE-SX（短波光纖）都是 IEEE 802.3z 定義的千兆乙太網路標準。"
  },
  {
    id: 37,
    category: "basics",
    question: "What does DHCP stand for?",
    options: [
      "Dynamic Host Configuration Protocol",
      "Dynamic Host Connection Protocol",
      "Digital Host Configuration Program",
      "Direct Host Connection Protocol"
    ],
    answer: 0,
    explanation: "DHCP（動態主機設定協定）自動為網路設備分配 IP 位址、子網路遮罩、預設閘道和 DNS 伺服器等網路設定。"
  },
  {
    id: 38,
    category: "basics",
    question: "What does DNS stand for?",
    options: [
      "Domain Name Server",
      "Domain Name System",
      "Dynamic Name System",
      "Digital Network Service"
    ],
    answer: 1,
    explanation: "DNS（網域名稱系統）將人類可讀的網域名稱（如 www.google.com）轉換為機器可讀的 IP 位址，是網際網路的電話簿。"
  },
  {
    id: 39,
    category: "basics",
    question: "What is the IPv4 address size?",
    options: [
      "16-bit",
      "32-bit",
      "64-bit",
      "128-bit"
    ],
    answer: 1,
    explanation: "IPv4 使用 32 位元位址，以四組十進位數字表示（如 192.168.1.1），共可提供約 43 億個位址。"
  },
  {
    id: 40,
    category: "basics",
    question: "What is the IPv6 address size?",
    options: [
      "32-bit",
      "64-bit",
      "96-bit",
      "128-bit"
    ],
    answer: 3,
    explanation: "IPv6 使用 128 位元位址，以八組十六進位數字表示，可提供幾乎無限的位址空間（約 3.4×10³⁸ 個）。"
  },
  {
    id: 41,
    category: "basics",
    question: "What does bandwidth refer to in networking?",
    options: [
      "The physical width of the network cable",
      "The transmission capacity of a communication channel",
      "The number of devices connected to a network",
      "The distance between two network nodes"
    ],
    answer: 1,
    explanation: "頻寬（Bandwidth）指通訊通道的傳輸容量，即單位時間內能傳輸的最大資料量，通常以 bps（每秒位元數）為單位。"
  },
  {
    id: 42,
    category: "basics",
    question: "What does ADSL stand for?",
    options: [
      "Advanced Digital Subscriber Line",
      "Asymmetric Digital Subscriber Line",
      "Automatic Digital Signal Link",
      "Asynchronous Data Subscriber Line"
    ],
    answer: 1,
    explanation: "ADSL（非對稱數位用戶線路）是一種寬頻接取技術，下載速度遠高於上傳速度（非對稱），利用現有電話線路傳輸。"
  },
  {
    id: 43,
    category: "basics",
    question: "What is the primary function of a bridge in networking?",
    options: [
      "Connect two different types of networks at Layer 3",
      "Connect two LANs or divide a LAN into segments at Layer 2",
      "Amplify signals at the physical layer",
      "Provide wireless access points"
    ],
    answer: 1,
    explanation: "橋接器（Bridge）工作在第二層（資料連結層），用來連接兩個區域網路或將一個大型 LAN 分成多個區段，以減少碰撞域。"
  },
  {
    id: 44,
    category: "basics",
    question: "A router operates at which OSI layer?",
    options: [
      "Layer 1 – Physical",
      "Layer 2 – Data Link",
      "Layer 3 – Network",
      "Layer 4 – Transport"
    ],
    answer: 2,
    explanation: "路由器（Router）工作在 OSI 模型第三層（網路層），根據 IP 位址決定封包的轉送路徑。"
  },
  {
    id: 45,
    category: "basics",
    question: "What does a routing table contain?",
    options: [
      "MAC addresses of all network devices",
      "Routes to forward data packets to their destinations",
      "A list of all active users on the network",
      "Firewall rules for packet filtering"
    ],
    answer: 1,
    explanation: "路由表（Routing table）存放路由器的路徑資訊，告訴路由器應將封包往哪個介面轉送才能到達目的地。"
  },
  {
    id: 46,
    category: "basics",
    question: "What does ICMP stand for and what is its main use?",
    options: [
      "Internet Control Message Protocol — used for error reporting and diagnostics",
      "Internet Communication Management Protocol — used for managing connections",
      "Internal Control Messaging Protocol — used for internal routing",
      "Internet Circuit Message Protocol — used for circuit switching"
    ],
    answer: 0,
    explanation: "ICMP（網際網路控制訊息協定）用於回報錯誤和診斷網路問題，例如 ping 命令就使用 ICMP 來測試設備是否可達。"
  },
  {
    id: 47,
    category: "basics",
    question: "A repeater operates at which OSI layer?",
    options: [
      "Physical layer",
      "Data link layer",
      "Network layer",
      "Transport layer"
    ],
    answer: 0,
    explanation: "中繼器（Repeater）工作在第一層（實體層），用於放大或再生訊號，延伸網路的傳輸距離，不分析位址資訊。"
  },
  {
    id: 48,
    category: "basics",
    question: "What is broadcasting in a network?",
    options: [
      "Sending data to a specific device only",
      "Sending data to a group of selected devices",
      "Addressing a message to all machines on the network",
      "Sending encrypted data over the network"
    ],
    answer: 2,
    explanation: "廣播（Broadcasting）是將訊息發送給網路上所有機器，例如 ARP 請求使用廣播，目的 MAC 為 FF:FF:FF:FF:FF:FF。"
  },
  {
    id: 49,
    category: "basics",
    question: "What is the APIPA address range used when DHCP is unavailable?",
    options: [
      "10.0.0.1 to 10.255.255.254",
      "172.16.0.1 to 172.31.255.254",
      "169.254.0.1 to 169.254.255.254",
      "192.168.0.1 to 192.168.255.254"
    ],
    answer: 2,
    explanation: "APIPA（自動私人 IP 定址）在 DHCP 伺服器無法連接時自動分配，範圍為 169.254.0.1～169.254.255.254，屬於鏈路本地位址。"
  },
  {
    id: 50,
    category: "basics",
    question: "What is the maximum size of an IP header?",
    options: [
      "20 bytes",
      "40 bytes",
      "60 bytes",
      "80 bytes"
    ],
    answer: 2,
    explanation: "IPv4 標頭最小為 20 位元組（無選項時），最大為 60 位元組（含最多 40 位元組的選項欄位）。"
  },
  {
    id: 51,
    category: "basics",
    question: "How many bits are used for the host portion in a Class B IP address?",
    options: [
      "8 bits",
      "16 bits",
      "24 bits",
      "32 bits"
    ],
    answer: 1,
    explanation: "Class B IP 位址使用前 16 位元作為網路識別碼，後 16 位元作為主機識別碼，可容納最多 65,534 台主機。"
  },
  {
    id: 52,
    category: "basics",
    question: "Which of the following are benefits of networking?",
    options: [
      "File sharing only",
      "Resource access only",
      "Both file sharing and resource access",
      "Neither file sharing nor resource access"
    ],
    answer: 2,
    explanation: "網路的優點包括檔案共享（如共用文件）和資源存取（如共用印表機、網際網路連線）等，兩者都是重要效益。"
  },
  {
    id: 53,
    category: "basics",
    question: "A protocol in networking is best described as ___",
    options: [
      "A hardware device that connects networks",
      "A set of rules governing communication between devices",
      "A type of cable used in networking",
      "A software for encrypting data"
    ],
    answer: 1,
    explanation: "協定（Protocol）是網路通訊中各設備必須遵守的一套規則，定義訊息格式、傳輸順序和錯誤處理方式。"
  },
  {
    id: 54,
    category: "basics",
    question: "Which is an example of an external security threat to a network?",
    options: [
      "Underground threats",
      "Virus attacks from outside the network",
      "Accidental deletion by an employee",
      "Internal hardware failure"
    ],
    answer: 1,
    explanation: "外部安全威脅來自網路外部，如病毒、DoS 攻擊和駭客入侵；而內部威脅（如員工誤刪、硬體故障）則來自組織內部。"
  },
  {
    id: 55,
    category: "basics",
    question: "What does PAT (Port Address Translation) do?",
    options: [
      "Converts IPv4 addresses to IPv6",
      "Assigns static IP addresses to devices",
      "Allows multiple devices to share a single public IP using different port numbers",
      "Encrypts network traffic for security"
    ],
    answer: 2,
    explanation: "PAT（埠位址轉換）是 NAT 的一種變體，讓多台內部設備使用不同的埠號共用同一個公有 IP 位址，是家庭和企業網路常用技術。"
  },
  {
    id: 56,
    category: "basics",
    question: "IEEE 802.11 specifies the standard for ___",
    options: [
      "Ethernet (wired LAN)",
      "Wireless LAN (Wi-Fi) using CSMA/CA",
      "Token Ring networks",
      "WAN protocols"
    ],
    answer: 1,
    explanation: "IEEE 802.11 是無線區域網路（Wi-Fi）的標準，使用 CSMA/CA（帶碰撞避免的載波感知多重存取）作為媒介存取控制機制。"
  },
  {
    id: 57,
    category: "basics",
    question: "What type of switching does the local telephone network use?",
    options: [
      "Packet switching",
      "Message switching",
      "Circuit switching",
      "Cell switching"
    ],
    answer: 2,
    explanation: "傳統電話網路使用電路交換（Circuit switching），通話前先建立專用路徑，通話期間獨占該電路資源，結束後才釋放。"
  },
  {
    id: 58,
    category: "basics",
    question: "In Time Division Multiplexing (TDM), which type of signals are used?",
    options: [
      "Analog signals",
      "Digital signals",
      "Optical signals",
      "Radio signals"
    ],
    answer: 1,
    explanation: "分時多工（TDM）將時間分成若干時槽，每個通道輪流使用，適用於數位訊號。分頻多工（FDM）則用於類比訊號。"
  },
  {
    id: 59,
    category: "basics",
    question: "What is propagation delay in a network?",
    options: [
      "Time taken to place a packet onto the link",
      "Time taken for a bit to travel from source to destination",
      "Time a packet spends waiting in a queue",
      "Time to process a packet header"
    ],
    answer: 1,
    explanation: "傳播延遲（Propagation delay）是訊號從來源到目的地所需的時間，取決於距離和訊號在媒介中的速度，與封包大小無關。"
  },
  {
    id: 60,
    category: "basics",
    question: "What is the maximum speed of STP (Shielded Twisted Pair) cable?",
    options: [
      "10 Mbps",
      "100 Mbps",
      "1 Gbps",
      "10 Gbps"
    ],
    answer: 1,
    explanation: "屏蔽雙絞線（STP）的最大傳輸速度為 100 Mbps，與 Cat5 UTP 相同，但 STP 有金屬屏蔽層，抗干擾能力更強。"
  },
  {
    id: 61,
    category: "basics",
    question: "Which transmission medium offers the highest speed?",
    options: [
      "Coaxial cable",
      "Shielded twisted pair",
      "Optical fiber",
      "Unshielded twisted pair"
    ],
    answer: 2,
    explanation: "光纖（Optical fiber）使用光訊號傳輸，速度最高（可達數 Tbps），抗電磁干擾，但成本較高，適合長距離主幹網路。"
  },
  {
    id: 62,
    category: "basics",
    question: "What is digital modulation?",
    options: [
      "Converting analog signals to digital",
      "Converting digital data into analog signals for transmission",
      "Amplifying digital signals over long distances",
      "Compressing digital data for storage"
    ],
    answer: 1,
    explanation: "數位調變（Digital modulation）將數位資料（0和1）轉換為類比訊號（如改變載波的振幅、頻率或相位），以便在類比通道上傳輸。"
  },
  {
    id: 63,
    category: "basics",
    question: "What is a MAC address?",
    options: [
      "A 32-bit logical address assigned by software",
      "A 48-bit hardware address permanently assigned to a NIC",
      "A 64-bit address used in IPv6",
      "A 16-bit address used in Bluetooth"
    ],
    answer: 1,
    explanation: "MAC 位址是燒錄在網路介面卡（NIC）中的 48 位元硬體位址，以十六進位表示（如 1A:2F:BB:76:09:AD），全球唯一。"
  },
  {
    id: 64,
    category: "basics",
    question: "Which layer of OSI model does a MAC address belong to?",
    options: [
      "Physical layer",
      "Data link layer",
      "Network layer",
      "Transport layer"
    ],
    answer: 1,
    explanation: "MAC 位址屬於第二層（資料連結層），用於在同一網路區段內識別設備，不跨越路由器。"
  },
  {
    id: 65,
    category: "basics",
    question: "What does PING do?",
    options: [
      "Transfers files between two computers",
      "Tests whether a device on the network is reachable",
      "Assigns IP addresses automatically",
      "Resolves domain names to IP addresses"
    ],
    answer: 1,
    explanation: "Ping 使用 ICMP Echo 請求/回應封包測試目標設備是否可達，並測量來回時間（RTT），是常用的網路診斷工具。"
  },
  {
    id: 66,
    category: "basics",
    question: "What does RAID stand for?",
    options: [
      "Redundant Array of Independent Disks",
      "Random Access Independent Disk",
      "Reliable Array of Internet Devices",
      "Redundant Array of Inexpensive Data"
    ],
    answer: 0,
    explanation: "RAID（獨立磁碟冗餘陣列）將多個硬碟組合成一個邏輯單元，提高效能（條帶化）或資料可靠性（鏡像/奇偶校驗）。"
  },

  // ═══════════════════════════════════════════
  // CHAPTER 6 — LINK LAYER INTRODUCTION
  // ═══════════════════════════════════════════
  {
    id: 67,
    category: "ch6",
    question: "Where is the link layer primarily implemented?",
    options: [
      "In the operating system kernel",
      "In the router's CPU",
      "In the Network Interface Card (NIC) / on-a-chip",
      "In the application layer software"
    ],
    answer: 2,
    explanation: "連結層主要實作在網路介面卡（NIC）中，NIC 上的晶片（如 Ethernet 晶片）直接處理訊框的發送、接收和錯誤偵測。"
  },
  {
    id: 68,
    category: "ch6",
    question: "Which of the following is NOT a service provided by the link layer?",
    options: [
      "Framing",
      "Reliable delivery",
      "Routing between subnets",
      "Error detection and correction"
    ],
    answer: 2,
    explanation: "路由（Routing）是網路層的功能，連結層負責同一鏈路上的資料傳輸，包括訊框化、可靠傳遞、媒介存取控制和錯誤偵測/校正。"
  },
  {
    id: 69,
    category: "ch6",
    question: "In the link layer, what is 'framing'?",
    options: [
      "Adding a physical header to raw bits",
      "Encapsulating a network-layer datagram into a link-layer frame",
      "Breaking frames into smaller packets",
      "Translating MAC addresses to IP addresses"
    ],
    answer: 1,
    explanation: "訊框化（Framing）是將網路層傳來的資料報（datagram）封裝成連結層訊框（frame），加上標頭和尾端（包含位址、類型和 CRC）。"
  },
  {
    id: 70,
    category: "ch6",
    question: "Which of the following link layer services involves detecting whether transmitted bits were altered in transit?",
    options: [
      "Flow control",
      "Link access",
      "Framing",
      "Error detection and correction"
    ],
    answer: 3,
    explanation: "錯誤偵測與校正（Error detection and correction）讓接收端能偵測傳輸過程中是否有位元被改變，並在可能的情況下加以校正。"
  },

  // ═══════════════════════════════════════════
  // ERROR DETECTION & CORRECTION
  // ═══════════════════════════════════════════
  {
    id: 71,
    category: "error",
    question: "In single-bit parity checking, what type of errors can be detected?",
    options: [
      "Even number of bit errors",
      "Odd number of bit errors",
      "Burst errors only",
      "All errors without exception"
    ],
    answer: 1,
    explanation: "單一位元奇偶校驗（Single-bit parity）只能偵測奇數個位元錯誤（如 1 個、3 個位元出錯）；偶數個位元同時出錯時無法偵測。"
  },
  {
    id: 72,
    category: "error",
    question: "What can two-dimensional (2D) parity achieve compared to single-bit parity?",
    options: [
      "It can only detect errors",
      "It can detect and correct single-bit errors",
      "It only works with odd parity",
      "It uses fewer overhead bits"
    ],
    answer: 1,
    explanation: "二維奇偶校驗（2D parity）將資料排成矩陣，對每行和每列計算奇偶位元，不僅能偵測單一位元錯誤，還能將其定位並校正。"
  },
  {
    id: 73,
    category: "error",
    question: "In CRC (Cyclic Redundancy Check), if we have d data bits and a divisor of r+1 bits, how many CRC bits are appended?",
    options: [
      "d bits",
      "r+1 bits",
      "r bits",
      "d+r bits"
    ],
    answer: 2,
    explanation: "CRC 計算中，若除數（generator polynomial）為 r+1 位元，則附加 r 個 CRC 檢查位元到 d 個資料位元之後，讓接收端能以相同除數驗證。"
  },
  {
    id: 74,
    category: "error",
    question: "What is the advantage of CRC over parity checking?",
    options: [
      "CRC uses fewer bits",
      "CRC can detect all burst errors less than r+1 bits in length",
      "CRC works only at the transport layer",
      "CRC requires no additional hardware"
    ],
    answer: 1,
    explanation: "CRC 能偵測所有長度小於 r+1 位元的突發錯誤（burst errors），並且能偵測大部分較長的突發錯誤，比奇偶校驗強大得多。"
  },
  {
    id: 75,
    category: "error",
    question: "Which error detection method is used at the transport layer (e.g., UDP/TCP)?",
    options: [
      "CRC",
      "2D parity",
      "Internet checksum",
      "Hamming code"
    ],
    answer: 2,
    explanation: "網際網路檢查和（Internet checksum）是傳輸層（TCP/UDP）使用的錯誤偵測方法，計算資料的 16 位元加法總和的補數來驗證完整性。"
  },
  {
    id: 76,
    category: "error",
    question: "In CRC error detection, the receiver divides the received frame (D + CRC bits) by the divisor G. The transmission is error-free if ___",
    options: [
      "The remainder is non-zero",
      "The remainder equals the CRC bits",
      "The remainder is zero",
      "The quotient equals the original data"
    ],
    answer: 2,
    explanation: "接收端用同一個除數 G 對收到的訊框（資料+CRC）做模二除法，若餘數為零則表示傳輸無誤；非零餘數表示有錯誤發生。"
  },
  {
    id: 77,
    category: "error",
    question: "Which of the following error detection codes is most commonly used in Ethernet?",
    options: [
      "Internet checksum",
      "Single-bit parity",
      "CRC (Cyclic Redundancy Check)",
      "Hamming code"
    ],
    answer: 2,
    explanation: "乙太網路（Ethernet）在訊框末端使用 32 位元 CRC（CRC-32）進行錯誤偵測，此為 IEEE 802.3 標準規定。"
  },
  {
    id: 78,
    category: "error",
    question: "What does a Hamming code accomplish that CRC cannot easily do?",
    options: [
      "Detect single-bit errors",
      "Correct single-bit errors without retransmission",
      "Detect burst errors",
      "Work at lower data rates"
    ],
    answer: 1,
    explanation: "漢明碼（Hamming code）是一種前向錯誤校正碼（FEC），能直接在接收端校正單一位元錯誤，不需要重新傳送，適用於高延遲鏈路。"
  },

  // ═══════════════════════════════════════════
  // MULTIPLE ACCESS PROTOCOLS
  // ═══════════════════════════════════════════
  {
    id: 79,
    category: "ch6",
    question: "In TDMA (Time Division Multiple Access), how is the channel divided?",
    options: [
      "By frequency bands",
      "By geographic location",
      "By time slots assigned to each station",
      "By random access"
    ],
    answer: 2,
    explanation: "分時多重存取（TDMA）將時間分成固定週期，每個週期再分成時槽，每個站台被分配固定的時槽來傳輸，時槽不用時會浪費。"
  },
  {
    id: 80,
    category: "ch6",
    question: "In FDMA (Frequency Division Multiple Access), how is the channel divided?",
    options: [
      "Each station gets a fixed time slot",
      "Each station gets a specific frequency band",
      "Stations share frequency randomly",
      "Stations take turns using a token"
    ],
    answer: 1,
    explanation: "分頻多重存取（FDMA）將頻道的頻寬分成多個子頻帶，每個站台被分配一個固定頻帶，頻帶不使用時會浪費。"
  },
  {
    id: 81,
    category: "ch6",
    question: "What is the maximum channel efficiency of Pure ALOHA?",
    options: [
      "50% (1/2)",
      "37% (1/e)",
      "18% (1/2e)",
      "100%"
    ],
    answer: 2,
    explanation: "純 ALOHA（Pure ALOHA）的最大通道效率約為 1/(2e) ≈ 18.4%，因為沒有同步機制，碰撞可能性高，大部分頻道容量被浪費。"
  },
  {
    id: 82,
    category: "ch6",
    question: "What is the maximum channel efficiency of Slotted ALOHA?",
    options: [
      "50% (1/2)",
      "37% (1/e)",
      "18% (1/2e)",
      "100%"
    ],
    answer: 1,
    explanation: "時槽 ALOHA（Slotted ALOHA）的最大通道效率約為 1/e ≈ 36.8%，比純 ALOHA 高一倍，因為傳輸被同步到時槽邊界，減少碰撞視窗。"
  },
  {
    id: 83,
    category: "ch6",
    question: "In CSMA (Carrier Sense Multiple Access), what does a node do before transmitting?",
    options: [
      "Send a request-to-send signal",
      "Wait for a token to be passed",
      "Listen (sense) if the channel is idle before transmitting",
      "Reserve a time slot in advance"
    ],
    answer: 2,
    explanation: "CSMA（載波偵聽多重存取）的核心規則：傳輸前先偵聽頻道，若頻道閒置才傳輸；但因傳播延遲，仍可能發生碰撞。"
  },
  {
    id: 84,
    category: "ch6",
    question: "What does CSMA/CD add to CSMA?",
    options: [
      "Frequency hopping to avoid interference",
      "Collision detection — abort transmission when collision is detected",
      "Collision avoidance using RTS/CTS",
      "Forward error correction"
    ],
    answer: 1,
    explanation: "CSMA/CD（帶碰撞偵測的 CSMA）在傳輸期間同時偵聽頻道，一旦偵測到碰撞立即中止傳輸，發送jam訊號，然後等待隨機時間後重試。"
  },
  {
    id: 85,
    category: "ch6",
    question: "CSMA/CD is used in which type of network?",
    options: [
      "Wireless 802.11 networks",
      "Wired Ethernet (IEEE 802.3)",
      "Token Ring networks",
      "Cellular networks"
    ],
    answer: 1,
    explanation: "CSMA/CD 用於有線乙太網路（IEEE 802.3），因為有線網路可以邊傳邊偵聽。無線網路因無法同時收發，改用 CSMA/CA。"
  },
  {
    id: 86,
    category: "ch6",
    question: "Why does 802.11 (Wi-Fi) use CSMA/CA instead of CSMA/CD?",
    options: [
      "Wi-Fi has faster collision detection hardware",
      "Wireless nodes cannot detect collisions while transmitting (hidden terminal problem)",
      "CSMA/CD is patented and unavailable for wireless use",
      "CSMA/CA uses less power"
    ],
    answer: 1,
    explanation: "無線節點無法在傳輸的同時偵測碰撞（half-duplex 和隱藏終端問題），因此 802.11 改用 CSMA/CA，在傳輸前避免碰撞（backoff 等待）。"
  },
  {
    id: 87,
    category: "ch6",
    question: "In the 'taking turns' MAC protocol, what is polling?",
    options: [
      "Stations randomly compete for the channel",
      "A master node invites slave nodes to transmit in turn",
      "Stations pass a special token to grant channel access",
      "The base station allocates fixed time slots"
    ],
    answer: 1,
    explanation: "輪詢（Polling）是一種輪流協定，由主節點輪流邀請各從屬節點傳輸，可消除碰撞，但主節點故障會導致整個網路癱瘓。"
  },
  {
    id: 88,
    category: "ch6",
    question: "In token ring, a node can transmit only when ___",
    options: [
      "The channel is sensed idle for a random period",
      "It receives the token",
      "It is polled by the master node",
      "Its slot comes up in the TDMA cycle"
    ],
    answer: 1,
    explanation: "權杖環（Token ring）中，一個特殊的令牌（token）在環形網路上依序傳遞，節點只有持有令牌時才能傳輸，傳完後將令牌傳給下一個節點。"
  },
  {
    id: 89,
    category: "ch6",
    question: "After a collision in CSMA/CD, the binary exponential backoff algorithm ___",
    options: [
      "Always waits a fixed time before retransmitting",
      "Randomly chooses a wait time from {0, ..., 2^m - 1} slot times after m-th collision",
      "Exponentially increases the data rate",
      "Switches to FDMA channel partitioning"
    ],
    answer: 1,
    explanation: "二進制指數退避（Binary exponential backoff）：第 m 次碰撞後，節點從 {0, 1, ..., 2^m - 1} 中隨機選擇等待的時槽數，最多 2^10 個時槽，減少反覆碰撞的可能性。"
  },

  // ═══════════════════════════════════════════
  // MAC ADDRESSING & ARP
  // ═══════════════════════════════════════════
  {
    id: 90,
    category: "mac",
    question: "How long is a MAC (Media Access Control) address?",
    options: [
      "32 bits (4 bytes)",
      "48 bits (6 bytes)",
      "64 bits (8 bytes)",
      "128 bits (16 bytes)"
    ],
    answer: 1,
    explanation: "MAC 位址長度為 48 位元（6 位元組），通常以十六進位表示，如 1A-2F-BB-76-09-AD，前 24 位元為製造商識別碼（OUI）。"
  },
  {
    id: 91,
    category: "mac",
    question: "What is the broadcast MAC address?",
    options: [
      "00-00-00-00-00-00",
      "FF-FF-FF-FF-FF-FF",
      "01-00-5E-00-00-00",
      "AA-BB-CC-DD-EE-FF"
    ],
    answer: 1,
    explanation: "廣播 MAC 位址為 FF-FF-FF-FF-FF-FF（全部 48 個位元皆為 1），網路上的所有設備都會接收並處理目的地為此位址的訊框。"
  },
  {
    id: 92,
    category: "arp",
    question: "What is the purpose of ARP (Address Resolution Protocol)?",
    options: [
      "Translate domain names to IP addresses",
      "Assign IP addresses to hosts dynamically",
      "Map an IP address to a MAC address on the same subnet",
      "Route packets between different subnets"
    ],
    answer: 2,
    explanation: "ARP（位址解析協定）解決同一子網路內 IP 到 MAC 的映射問題。當節點要與同一子網路的另一個節點通訊時，需透過 ARP 取得對方的 MAC 位址。"
  },
  {
    id: 93,
    category: "arp",
    question: "How is an ARP query sent?",
    options: [
      "Unicast to the destination IP",
      "Broadcast to all devices on the subnet",
      "Multicast to a specific group",
      "Direct to the DNS server"
    ],
    answer: 1,
    explanation: "ARP 查詢以廣播方式發送（目的 MAC = FF:FF:FF:FF:FF:FF），詢問「誰擁有 IP 位址 X？請告訴我你的 MAC 位址」，子網路上所有設備都會收到。"
  },
  {
    id: 94,
    category: "arp",
    question: "How is an ARP reply sent?",
    options: [
      "Broadcast to all devices",
      "Unicast directly to the requesting node",
      "Multicast to the router",
      "Via the DNS server"
    ],
    answer: 1,
    explanation: "ARP 回應以單播（Unicast）方式直接回傳給發出查詢的節點，告訴它「我就是擁有該 IP 的設備，我的 MAC 位址是 X」。"
  },
  {
    id: 95,
    category: "arp",
    question: "In an ARP table, what does each entry contain?",
    options: [
      "IP address and port number",
      "IP address, MAC address, and TTL",
      "MAC address and subnet mask",
      "Hostname and IP address"
    ],
    answer: 1,
    explanation: "ARP 表格中的每個條目包含：IP 位址、對應的 MAC 位址，以及存活時間（TTL，通常約 20 分鐘），過期後自動刪除以保持更新。"
  },
  {
    id: 96,
    category: "arp",
    question: "When sending a frame to a node on a different subnet, what MAC address does the sender use as the destination?",
    options: [
      "The destination host's MAC address",
      "The broadcast MAC address",
      "The first-hop router's MAC address",
      "The DNS server's MAC address"
    ],
    answer: 2,
    explanation: "傳送到其他子網路時，訊框的目的 MAC 位址設為第一跳路由器（first-hop router）的 MAC 位址，而 IP 封包的目的 IP 仍為最終目的地的 IP。"
  },
  {
    id: 97,
    category: "arp",
    question: "ARP operates at which layer?",
    options: [
      "Application layer",
      "Network layer and data link layer boundary",
      "Transport layer",
      "Physical layer"
    ],
    answer: 1,
    explanation: "ARP 工作在網路層與資料連結層的邊界，它使用 IP 位址（網路層）來查詢 MAC 位址（資料連結層），是連接兩層的橋樑協定。"
  },

  // ═══════════════════════════════════════════
  // ETHERNET
  // ═══════════════════════════════════════════
  {
    id: 98,
    category: "ethernet",
    question: "What is the structure of an Ethernet frame from first to last field?",
    options: [
      "Source | Dest | Preamble | Type | Data | CRC",
      "Preamble | Dest Addr | Src Addr | Type | Data | CRC",
      "Type | Preamble | Dest Addr | Src Addr | Data | CRC",
      "Preamble | Type | Dest Addr | Src Addr | CRC | Data"
    ],
    answer: 1,
    explanation: "乙太網路訊框格式（IEEE 802.3）：前置碼(8B) → 目的 MAC(6B) → 來源 MAC(6B) → 類型(2B) → 資料(46-1500B) → CRC(4B)。"
  },
  {
    id: 99,
    category: "ethernet",
    question: "What is the valid data payload size range in an Ethernet frame?",
    options: [
      "1 to 1000 bytes",
      "46 to 1500 bytes",
      "64 to 1518 bytes",
      "1 to 1518 bytes"
    ],
    answer: 1,
    explanation: "乙太網路訊框的資料欄位為 46 到 1500 位元組。若資料不足 46 位元組，需填充（padding）到最小值；超過 1500 位元組則需要分片。"
  },
  {
    id: 100,
    category: "ethernet",
    question: "What is the size of the preamble in an Ethernet frame?",
    options: [
      "4 bytes",
      "6 bytes",
      "8 bytes",
      "12 bytes"
    ],
    answer: 2,
    explanation: "乙太網路訊框的前置碼（Preamble）為 8 位元組（64 位元），用於接收端同步時脈。前 7 個位元組為 10101010，第 8 個為 10101011（SFD 訊框開始符號）。"
  },
  {
    id: 101,
    category: "ethernet",
    question: "Ethernet is described as connectionless because ___",
    options: [
      "No physical cable is required",
      "No handshaking between NICs before data is sent",
      "It uses wireless connections",
      "It always uses UDP at the transport layer"
    ],
    answer: 1,
    explanation: "乙太網路是無連線（connectionless）的，傳送端的 NIC 在發送訊框前不需要與接收端建立連線（不做握手）。"
  },
  {
    id: 102,
    category: "ethernet",
    question: "Ethernet is described as unreliable because ___",
    options: [
      "It frequently drops packets",
      "The receiving NIC does not send ACKs or NAKs to the sending NIC",
      "It has no error detection mechanism",
      "It only works over short distances"
    ],
    answer: 1,
    explanation: "乙太網路是不可靠（unreliable）的，接收端的 NIC 不會傳送 ACK 或 NAK 給發送端。若需可靠傳輸，需由上層（如 TCP）負責。"
  },
  {
    id: 103,
    category: "ethernet",
    question: "Which of the following is a 100 Mbps Fast Ethernet standard?",
    options: [
      "10BASE-T",
      "100BASE-TX",
      "1000BASE-LX",
      "10GBASE-T"
    ],
    answer: 1,
    explanation: "100BASE-TX 是 IEEE 802.3u 定義的百兆乙太網路標準，使用 Cat5 雙絞線，最大距離 100 公尺。其他如 100BASE-FX（光纖）也是 100 Mbps 標準。"
  },
  {
    id: 104,
    category: "ethernet",
    question: "What does the 'Type' field in an Ethernet frame indicate?",
    options: [
      "The type of cable used",
      "The higher-layer protocol (e.g., IP, ARP) encapsulated in the data field",
      "The VLAN tag",
      "The error detection method used"
    ],
    answer: 1,
    explanation: "乙太網路訊框中的類型欄位指明資料欄位所封裝的上層協定，例如 0x0800 表示 IPv4，0x0806 表示 ARP，讓接收端知道如何解封裝。"
  },
  {
    id: 105,
    category: "ethernet",
    question: "Which standard defines the Ethernet MAC protocol?",
    options: [
      "IEEE 802.11",
      "IEEE 802.3",
      "IEEE 802.1Q",
      "IEEE 802.15"
    ],
    answer: 1,
    explanation: "IEEE 802.3 是乙太網路的標準，定義了 CSMA/CD 媒介存取控制方法和實體層規格；IEEE 802.11 是 Wi-Fi，802.1Q 是 VLAN。"
  },

  // ═══════════════════════════════════════════
  // ETHERNET SWITCH
  // ═══════════════════════════════════════════
  {
    id: 106,
    category: "switch",
    question: "An Ethernet switch is a ___-layer device that stores and forwards Ethernet frames.",
    options: [
      "Physical (Layer 1)",
      "Data link (Layer 2)",
      "Network (Layer 3)",
      "Transport (Layer 4)"
    ],
    answer: 1,
    explanation: "乙太網路交換器是第二層（資料連結層）設備，使用 MAC 位址轉送訊框，不像路由器需要 IP 位址（第三層）。"
  },
  {
    id: 107,
    category: "switch",
    question: "What does it mean that a switch is 'transparent' to hosts?",
    options: [
      "The switch has no IP address",
      "Hosts are unaware of the switch's presence — no configuration required",
      "The switch is physically invisible",
      "The switch passes all frames without filtering"
    ],
    answer: 1,
    explanation: "交換器是透明的（transparent），代表主機完全不知道交換器的存在，不需要任何設定，即插即用，主機直接對目的 MAC 位址通訊。"
  },
  {
    id: 108,
    category: "switch",
    question: "How does a switch learn which hosts can be reached through which interfaces?",
    options: [
      "Through manual configuration by the network admin",
      "By examining the source MAC address of received frames",
      "By broadcasting to all ports and waiting for responses",
      "Through ARP table synchronization"
    ],
    answer: 1,
    explanation: "交換器透過自我學習（self-learning）：檢查收到訊框的來源 MAC 位址，記錄該 MAC 位址與收到訊框的介面，逐漸建立交換器表格（MAC table）。"
  },
  {
    id: 109,
    category: "switch",
    question: "In a switch table entry, what three pieces of information are stored?",
    options: [
      "IP address, port number, and subnet mask",
      "MAC address, interface (port), and TTL",
      "MAC address, IP address, and VLAN ID",
      "Host name, MAC address, and routing table"
    ],
    answer: 1,
    explanation: "交換器表格（MAC table）的每個條目包含：MAC 位址（設備識別）、介面號碼（從哪個埠可達）、TTL（存活時間，逾時刪除）。"
  },
  {
    id: 110,
    category: "switch",
    question: "When a switch receives a frame and the destination MAC address is NOT in the switch table, what does it do?",
    options: [
      "Drops the frame",
      "Sends the frame back to the sender",
      "Floods the frame to all interfaces except the incoming one",
      "Sends an error message to the source"
    ],
    answer: 2,
    explanation: "當目的 MAC 位址不在交換器表格中，交換器執行泛洪（flooding）：將訊框轉送到除了來源介面以外的所有介面，確保目的主機能收到。"
  },
  {
    id: 111,
    category: "switch",
    question: "If a switch receives a frame where the destination MAC is on the same port as the source, the switch will ___",
    options: [
      "Forward the frame out all other ports",
      "Drop / filter the frame",
      "Send an ARP request to verify",
      "Forward it to the router"
    ],
    answer: 1,
    explanation: "若目的 MAC 位址和來源 MAC 位址位於同一個埠（即同一個區段），交換器會丟棄（filter）該訊框，避免不必要的流量在網路上傳播。"
  },
  {
    id: 112,
    category: "switch",
    question: "What is a major advantage of a switch over a hub?",
    options: [
      "Switches are cheaper",
      "Switches allow multiple simultaneous transmissions on different links",
      "Switches operate at the network layer",
      "Switches support wireless connections"
    ],
    answer: 1,
    explanation: "交換器允許多對主機同時傳輸（每個連接有獨立碰撞域），而集線器（hub）是共用媒介，同時只能有一個傳輸。這讓交換器的頻寬使用效率大幅提升。"
  },
  {
    id: 113,
    category: "switch",
    question: "Which statement correctly compares routers and switches?",
    options: [
      "Both are Layer 2 devices; switches use IP addresses",
      "Routers use MAC addresses; switches use IP addresses",
      "Both store-and-forward; routers are Layer 3 (IP), switches are Layer 2 (MAC)",
      "Switches use routing tables; routers use MAC tables"
    ],
    answer: 2,
    explanation: "路由器和交換器都是儲存轉送（store-and-forward）設備；路由器工作在第三層（使用 IP 位址和路由表），交換器工作在第二層（使用 MAC 位址和交換器表格）。"
  },
  {
    id: 114,
    category: "switch",
    question: "In a switched Ethernet, each link is its own ___",
    options: [
      "Broadcast domain",
      "IP subnet",
      "Collision domain",
      "VLAN"
    ],
    answer: 2,
    explanation: "在交換式乙太網路中，每個連接（主機-交換器）是獨立的碰撞域，不同於共享 Hub 環境。但整個交換器仍屬於同一個廣播域（除非有 VLAN）。"
  },
  {
    id: 115,
    category: "switch",
    question: "What is a switch table also known as?",
    options: [
      "Routing table",
      "ARP table",
      "MAC address table / forwarding table",
      "DNS table"
    ],
    answer: 2,
    explanation: "交換器表格也稱為 MAC 位址表或轉送表，記錄 MAC 位址與交換器介面（埠）的對應關係，讓交換器決定將訊框從哪個介面送出。"
  },

  // ═══════════════════════════════════════════
  // VLANs
  // ═══════════════════════════════════════════
  {
    id: 116,
    category: "vlan",
    question: "What is the primary purpose of a VLAN (Virtual LAN)?",
    options: [
      "Increase physical network speed",
      "Create logically isolated groups of ports on a switch without physical rewiring",
      "Connect different buildings with fiber",
      "Replace the router in a network"
    ],
    answer: 1,
    explanation: "VLAN 允許在同一台實體交換器上建立多個邏輯隔離的網路（廣播域），讓屬於不同 VLAN 的主機不能直接通訊，無需實體重新佈線。"
  },
  {
    id: 117,
    category: "vlan",
    question: "How do frames travel between VLANs on different physical switches?",
    options: [
      "Through a repeater",
      "Through a trunk port that carries 802.1Q tagged frames",
      "Via broadcast flooding across all switches",
      "Using a dedicated VLAN cable"
    ],
    answer: 1,
    explanation: "主幹埠（Trunk port）連接兩台交換器，攜帶帶有 802.1Q 標籤的訊框，標籤中的 VLAN ID 讓接收端交換器知道訊框屬於哪個 VLAN。"
  },
  {
    id: 118,
    category: "vlan",
    question: "What standard defines the VLAN tag format added to Ethernet frames?",
    options: [
      "IEEE 802.3",
      "IEEE 802.11",
      "IEEE 802.1Q",
      "IEEE 802.15"
    ],
    answer: 2,
    explanation: "IEEE 802.1Q 定義了 VLAN 標記格式，在乙太網路訊框的來源 MAC 和類型欄位之間插入 4 位元組的標籤（2B Tag Protocol ID + 2B Tag Control Info）。"
  },
  {
    id: 119,
    category: "vlan",
    question: "In an 802.1Q VLAN tag, the VLAN identifier (VID) is ___",
    options: [
      "4-bit field allowing 16 VLANs",
      "8-bit field allowing 256 VLANs",
      "12-bit field allowing 4096 VLANs",
      "16-bit field allowing 65536 VLANs"
    ],
    answer: 2,
    explanation: "802.1Q 標籤控制資訊（TCI）中的 VLAN 識別碼（VID）為 12 位元，允許最多 4096 個不同的 VLAN（0 和 4095 保留，實際可用 4094 個）。"
  },
  {
    id: 120,
    category: "vlan",
    question: "What is the Tag Protocol ID (TPID) value in an 802.1Q frame?",
    options: [
      "0x0800",
      "0x0806",
      "0x8100",
      "0x8200"
    ],
    answer: 2,
    explanation: "802.1Q VLAN 標籤的協定識別碼（TPID）為 0x8100，接收端設備透過此值識別這是一個帶有 VLAN 標籤的訊框。"
  },
  {
    id: 121,
    category: "vlan",
    question: "Traffic between different VLANs must be forwarded through ___",
    options: [
      "A hub",
      "A Layer 2 switch",
      "A router or Layer 3 switch",
      "An access point"
    ],
    answer: 2,
    explanation: "不同 VLAN 之間的流量必須通過路由器或第三層交換器（Layer 3 switch）進行路由，因為 VLAN 是不同的廣播域，第二層無法跨域轉送。"
  },
  {
    id: 122,
    category: "vlan",
    question: "What is a key benefit of port-based VLANs regarding security and traffic isolation?",
    options: [
      "VLAN members can see all traffic on the physical switch",
      "Each VLAN is isolated — broadcast traffic stays within the VLAN",
      "VLANs allow all devices to share the same IP subnet",
      "VLANs eliminate the need for routers entirely"
    ],
    answer: 1,
    explanation: "VLAN 的隔離性確保廣播訊框只在同一 VLAN 的成員之間傳播，不同 VLAN 無法互相看到彼此的流量，提升安全性和降低廣播風暴風險。"
  },

  // ═══════════════════════════════════════════
  // MPLS
  // ═══════════════════════════════════════════
  {
    id: 123,
    category: "mpls",
    question: "What is the primary goal of MPLS (Multi-Protocol Label Switching)?",
    options: [
      "Replace IP addresses with MAC addresses",
      "High-speed IP forwarding using fixed-length labels instead of IP destination addresses",
      "Provide wireless connectivity",
      "Encrypt data between routers"
    ],
    answer: 1,
    explanation: "MPLS（多協定標籤交換）的目標是高速 IP 封包轉送，使用固定長度的標籤（而非較長的 IP 位址）進行轉送決定，加快核心網路的處理速度。"
  },
  {
    id: 124,
    category: "mpls",
    question: "In MPLS, packet forwarding decisions at label-switched routers are based on ___",
    options: [
      "Destination IP address lookup in a routing table",
      "The fixed-length label appended to the packet",
      "Source MAC address",
      "The transport layer port number"
    ],
    answer: 1,
    explanation: "在 MPLS 中，標籤交換路由器（LSR）只根據封包上的固定長度標籤（label）決定轉送路徑，不需要查詢完整的 IP 路由表，速度更快。"
  },
  {
    id: 125,
    category: "mpls",
    question: "A key traffic engineering advantage of MPLS is that routing can be based on ___",
    options: [
      "Destination address only",
      "Source and destination address (flexible routing policies)",
      "MAC address only",
      "Port number only"
    ],
    answer: 1,
    explanation: "MPLS 流量工程（Traffic Engineering）允許路由決策同時考慮來源和目的地，能夠繞過壅塞路徑，將流量分散到不同路徑，提升網路效能。"
  },
  {
    id: 126,
    category: "mpls",
    question: "MPLS fast reroute provides ___",
    options: [
      "Encryption for MPLS tunnels",
      "Precomputed backup paths so traffic can quickly switch when a link fails",
      "Dynamic IP address assignment",
      "Wireless MPLS support"
    ],
    answer: 1,
    explanation: "MPLS 快速重新路由（Fast Reroute）預先計算備援路徑，當主要路徑發生故障時，能在毫秒級別內切換到備援路徑，提供高可用性。"
  },

  // ═══════════════════════════════════════════
  // DATA CENTER NETWORKING
  // ═══════════════════════════════════════════
  {
    id: 127,
    category: "ch6",
    question: "In a data center network hierarchy, TOR stands for ___",
    options: [
      "Top of Router",
      "Top of Rack switch",
      "Transfer of Request",
      "Type of Routing"
    ],
    answer: 1,
    explanation: "TOR（Top of Rack）交換器位於伺服器機架頂端，連接機架內的所有伺服器刀片，向上連接到第二層（Tier-2）匯聚交換器。"
  },
  {
    id: 128,
    category: "ch6",
    question: "In a data center, what does a load balancer do?",
    options: [
      "Balance the physical weight of servers in a rack",
      "Receive external requests and distribute workload across servers",
      "Balance electrical power to servers",
      "Route traffic between data centers"
    ],
    answer: 1,
    explanation: "負載均衡器（Load balancer）接收外部客戶端請求，根據各伺服器的負載情況將請求分配到不同的後端伺服器，確保服務的高可用性和效能。"
  },
  {
    id: 129,
    category: "ch6",
    question: "The 'multipath' design in data center networks provides ___",
    options: [
      "Multiple wireless access points",
      "Increased throughput and reliability through rich interconnections between servers",
      "Multi-layer encryption for data",
      "Multiple IP addresses per server"
    ],
    answer: 1,
    explanation: "資料中心多路徑（Multipath）設計透過伺服器間的豐富互連路徑，增加整體吞吐量並提高可靠性（一條路徑故障時可用其他路徑）。"
  },

  // ═══════════════════════════════════════════
  // DAY IN THE LIFE OF A WEB REQUEST
  // ═══════════════════════════════════════════
  {
    id: 130,
    category: "ch6",
    question: "When a laptop connects to a network for the first time, what protocol does it use to get its IP address, default gateway, and DNS server?",
    options: [
      "ARP",
      "DHCP (Dynamic Host Configuration Protocol)",
      "DNS",
      "ICMP"
    ],
    answer: 1,
    explanation: "設備首次連接到網路時使用 DHCP，透過 DHCP discover → offer → request → ACK 四步驟取得 IP 位址、子網路遮罩、預設閘道 IP 和 DNS 伺服器 IP。"
  },
  {
    id: 131,
    category: "ch6",
    question: "After getting an IP address via DHCP, what does the client need to resolve before sending the first packet to the router?",
    options: [
      "The router's domain name via DNS",
      "The router's MAC address via ARP",
      "The web server's IP via DNS",
      "The router's VLAN ID"
    ],
    answer: 1,
    explanation: "客戶端取得 IP 後，需用 ARP 查詢預設閘道路由器的 MAC 位址，才能將第一個訊框送出去（訊框的目的 MAC = 路由器 MAC）。"
  },
  {
    id: 132,
    category: "ch6",
    question: "When a browser accesses www.google.com, DNS is needed to ___",
    options: [
      "Get the MAC address of Google's server",
      "Resolve the domain name www.google.com to an IP address",
      "Establish a TCP connection",
      "Assign the client an IP address"
    ],
    answer: 1,
    explanation: "DNS（域名解析）將人類可讀的域名（www.google.com）轉換為電腦可路由的 IP 位址，客戶端才能知道要連接哪個 IP。"
  },
  {
    id: 133,
    category: "ch6",
    question: "After DNS resolution, a web browser establishes a TCP connection using ___",
    options: [
      "Two-way handshake (SYN, ACK)",
      "Three-way handshake (SYN, SYN-ACK, ACK)",
      "Four-way handshake (SYN, SYN-ACK, ACK, FIN)",
      "One-way handshake (SYN only)"
    ],
    answer: 1,
    explanation: "TCP 使用三次握手（Three-way handshake）建立連線：客戶端發送 SYN → 伺服器回應 SYN-ACK → 客戶端回應 ACK，確保雙方都準備好通訊。"
  },

  // ═══════════════════════════════════════════
  // ADDITIONAL CHAPTER 6 QUESTIONS
  // ═══════════════════════════════════════════
  {
    id: 134,
    category: "ch6",
    question: "Which of the following correctly describes the data flow when host A sends a datagram to host B in the same subnet?",
    options: [
      "A encapsulates datagram in frame with dest MAC = B's IP",
      "A encapsulates datagram in frame with dest MAC = B's MAC address",
      "A sends the datagram directly without any frame",
      "A sends the datagram to the router first"
    ],
    answer: 1,
    explanation: "在同一子網路內，主機 A 將資料報封裝成訊框，目的 MAC 位址填入主機 B 的 MAC 位址（透過 ARP 取得），直接發送不需要路由器。"
  },
  {
    id: 135,
    category: "ch6",
    question: "The link layer's 'link access' service is also called ___",
    options: [
      "Framing protocol",
      "MAC (Medium Access Control) protocol",
      "ARP protocol",
      "CRC protocol"
    ],
    answer: 1,
    explanation: "連結層的媒介存取服務也稱為 MAC（媒介存取控制）協定，負責協調多個節點共用同一媒介時的傳輸規則，如 CSMA/CD。"
  },
  {
    id: 136,
    category: "switch",
    question: "How does a switch differ from a hub?",
    options: [
      "A hub stores and forwards frames; a switch broadcasts all frames",
      "A switch intelligently forwards frames based on MAC address; a hub broadcasts to all ports",
      "A switch operates at Layer 3; a hub operates at Layer 2",
      "A hub has a MAC table; a switch does not"
    ],
    answer: 1,
    explanation: "交換器（Switch）根據 MAC 位址表智慧地將訊框轉送到正確的埠；集線器（Hub）是第一層設備，將所有收到的訊框廣播到所有埠，無任何篩選。"
  },
  {
    id: 137,
    category: "ch6",
    question: "Which layer is responsible for moving datagrams from one node to the physically adjacent node over a link?",
    options: [
      "Network layer",
      "Transport layer",
      "Link layer",
      "Application layer"
    ],
    answer: 2,
    explanation: "連結層（Link layer）負責在相鄰（physically adjacent）節點之間（即同一鏈路上）的資料傳輸，而網路層負責跨越多個鏈路的端對端路由。"
  },
  {
    id: 138,
    category: "ch6",
    question: "In the context of link layer, a 'node' refers to ___",
    options: [
      "Only end-user computers",
      "Only routers",
      "Hosts and routers — any device running a link-layer protocol",
      "Only switches"
    ],
    answer: 2,
    explanation: "在連結層的語境中，節點（node）泛指所有執行連結層協定的設備，包括主機（電腦、伺服器）和路由器，而連接節點的通訊路徑稱為連結（link）。"
  },
  {
    id: 139,
    category: "ch6",
    question: "An Ethernet frame's CRC field is ___",
    options: [
      "4 bytes used for error detection",
      "2 bytes used for VLAN tagging",
      "8 bytes for preamble synchronization",
      "6 bytes for the destination address"
    ],
    answer: 0,
    explanation: "乙太網路訊框的 CRC 欄位為 4 位元組（32 位元），位於訊框末端，接收端用它來偵測傳輸過程中是否發生位元錯誤。"
  },
  {
    id: 140,
    category: "ethernet",
    question: "What does 100BASE-TX mean?",
    options: [
      "100 Mbps speed, baseband transmission, twisted pair cable",
      "100 GHz frequency, broadband, coaxial",
      "100 meters range, base station, transmit",
      "100 channels, base frequency, extended range"
    ],
    answer: 0,
    explanation: "100BASE-TX 的命名解讀：100 = 100 Mbps 速率、BASE = 基頻（Baseband）傳輸、TX = Twisted pair（雙絞線，Cat5 UTP）。"
  },
  {
    id: 141,
    category: "mac",
    question: "MAC addresses are administered by ___",
    options: [
      "IANA (Internet Assigned Numbers Authority)",
      "IEEE (Institute of Electrical and Electronics Engineers)",
      "IETF (Internet Engineering Task Force)",
      "ICANN (Internet Corporation for Assigned Names and Numbers)"
    ],
    answer: 1,
    explanation: "MAC 位址由 IEEE 管理，製造商向 IEEE 申請唯一的組織唯一識別碼（OUI），即 MAC 位址前 24 位，確保全球 MAC 位址唯一性。"
  },
  {
    id: 142,
    category: "mac",
    question: "How is a MAC address different from an IP address?",
    options: [
      "A MAC address is logical and changes per network; an IP address is physical and permanent",
      "A MAC address is burned into hardware (permanent); an IP address is logical and can change",
      "Both are exactly 32 bits in length",
      "A MAC address is used for routing between networks"
    ],
    answer: 1,
    explanation: "MAC 位址是燒錄在 NIC 硬體中的永久位址（物理位址）；IP 位址是邏輯位址，由軟體分配，可隨網路環境改變。MAC 不跨路由器，IP 可以跨網路路由。"
  },
  {
    id: 143,
    category: "error",
    question: "Which error detection method works by summing all 16-bit words and taking the one's complement?",
    options: [
      "CRC",
      "Internet Checksum",
      "Parity check",
      "Hamming code"
    ],
    answer: 1,
    explanation: "網際網路檢查和（Internet Checksum）將資料分成 16 位元的字組，求所有字組的 1 的補數加法總和，再取補數作為檢查和，接收端重算後若全為 1 則正確。"
  },
  {
    id: 144,
    category: "ch6",
    question: "What happens to a frame after a switch detects an error via CRC check?",
    options: [
      "The frame is forwarded with an error flag",
      "The frame is dropped",
      "The frame is sent back to the source",
      "The switch requests retransmission"
    ],
    answer: 1,
    explanation: "交換器在儲存轉送（store-and-forward）過程中對訊框做 CRC 校驗，若 CRC 檢查失敗（表示訊框損壞），交換器直接丟棄該訊框，不轉送。"
  },
  {
    id: 145,
    category: "vlan",
    question: "In 802.1Q, what is the 3-bit 'PCP' (Priority Code Point) field used for?",
    options: [
      "Specify the VLAN ID",
      "Indicate the frame's CoS (Class of Service) priority for QoS",
      "Define the trunk port number",
      "Specify the source router"
    ],
    answer: 1,
    explanation: "802.1Q 標籤中的 3 位元優先級碼點（PCP）用於服務品質（QoS），標示訊框的優先權（0-7），讓交換器在壅塞時優先轉送高優先權訊框（如語音流量）。"
  },
  {
    id: 146,
    category: "arp",
    question: "What is a 'gratuitous ARP'?",
    options: [
      "An ARP request sent to a non-existent IP",
      "An ARP broadcast where a host announces its own IP-to-MAC mapping",
      "An ARP sent to the DNS server",
      "An ARP reply with no corresponding request"
    ],
    answer: 1,
    explanation: "免費 ARP（Gratuitous ARP）是主機廣播自己的 IP-MAC 對應關係，用於通知網路中其他設備更新 ARP 快取，也可用於 IP 地址衝突偵測。"
  },
  {
    id: 147,
    category: "basics",
    question: "In circuit switching, what is a 'silent period'?",
    options: [
      "When the network is fully down",
      "Time slots where no data is sent but the circuit is still allocated",
      "When all users are disconnected",
      "The time between frame transmissions"
    ],
    answer: 1,
    explanation: "電路交換中，靜默期（silent period）指通話雙方暫停交談時，電路仍被佔用但沒有資料傳輸，造成頻寬浪費，這是封包交換相對電路交換的優勢之一。"
  },
  {
    id: 148,
    category: "ch6",
    question: "Which ALOHA variant requires all frames to be the same length AND stations synchronize transmissions to slot boundaries?",
    options: [
      "Pure ALOHA",
      "Slotted ALOHA",
      "CSMA/CD",
      "CSMA/CA"
    ],
    answer: 1,
    explanation: "時槽 ALOHA（Slotted ALOHA）要求所有訊框長度相同，且節點只能在時槽邊界開始傳輸，透過同步減少碰撞視窗，效率約為 1/e ≈ 37%。"
  },
  {
    id: 149,
    category: "ch6",
    question: "In a 'day in the life of a web request', what is the correct order of protocols used?",
    options: [
      "DNS → DHCP → ARP → TCP → HTTP",
      "DHCP → ARP → DNS → TCP → HTTP",
      "TCP → DNS → ARP → DHCP → HTTP",
      "ARP → DHCP → DNS → HTTP → TCP"
    ],
    answer: 1,
    explanation: "正確順序：DHCP（取得 IP）→ ARP（解析閘道 MAC）→ DNS（解析網域名稱到 IP）→ TCP（三次握手建立連線）→ HTTP（傳送網頁請求）。"
  },
  {
    id: 150,
    category: "switch",
    question: "What is the Spanning Tree Protocol (STP) used for in switched Ethernet?",
    options: [
      "To add VLAN tags to frames",
      "To prevent switching loops in redundant topologies",
      "To configure MPLS labels",
      "To assign IP addresses to switches"
    ],
    answer: 1,
    explanation: "生成樹協定（STP）透過邏輯阻斷部分鏈路，防止交換網路中因冗餘連接產生的無限廣播迴圈（switching loops），確保訊框有一條無迴圈的路徑。"
  }
];

// Category metadata
const CATEGORIES = {
  all:      { label: "All Topics",          icon: "📚", description: "全部題目" },
  ch6:      { label: "Link Layer & LANs",   icon: "🔗", description: "Chapter 6 PPT 重點" },
  basics:   { label: "Network Basics",      icon: "🌐", description: "OSI、IP、協定基礎" },
  mac:      { label: "MAC & ARP",           icon: "📡", description: "MAC 位址、ARP 協定" },
  ethernet: { label: "Ethernet",            icon: "🖧",  description: "乙太網路標準與訊框" },
  error:    { label: "Error Detection",     icon: "🔍", description: "Parity、CRC、Checksum" },
  switch:   { label: "Switches & VLANs",    icon: "🔀", description: "交換器、VLAN、STP" },
  arp:      { label: "ARP",                 icon: "🗺️", description: "位址解析協定" },
  vlan:     { label: "VLANs",              icon: "🏷️",  description: "802.1Q VLAN" },
  mpls:     { label: "MPLS",               icon: "⚡",  description: "多協定標籤交換" },
  random:   { label: "Random 20",           icon: "🎲", description: "隨機抽 20 題練習" }
};

// ─── ADDITIONAL QUESTIONS FROM SUBAGENT RESULTS ───────────
// Sources: Sanfoundry Data Link Layer, Error Detection, Ethernet, MAC, Multiple Access, VLAN

const EXTRA_QUESTIONS = [

  // ── Data Link Layer (Sanfoundry) ──
  {
    id: 151,
    category: "ch6",
    question: "Which task is NOT performed by the data link layer?",
    options: ["Framing", "Error control", "Flow control", "Channel coding"],
    answer: 3,
    explanation: "通道編碼（Channel coding）是實體層的功能，不是資料連結層。資料連結層負責訊框化、錯誤控制和流量控制。"
  },
  {
    id: 152,
    category: "ch6",
    question: "Which sublayer of the data link layer performs functions that depend upon the type of medium?",
    options: [
      "Logical Link Control (LLC) sublayer",
      "Media Access Control (MAC) sublayer",
      "Network Interface Control sublayer",
      "Error Control sublayer"
    ],
    answer: 1,
    explanation: "媒介存取控制（MAC）子層負責與實體媒介相關的功能，如 CSMA/CD；邏輯連結控制（LLC）子層則提供媒介無關的服務。"
  },
  {
    id: 153,
    category: "ch6",
    question: "A frame header generally contains ___",
    options: [
      "Synchronization bytes",
      "Addresses",
      "Frame identifier",
      "All of the mentioned"
    ],
    answer: 3,
    explanation: "訊框標頭通常包含同步位元組（用於時脈同步）、位址（來源和目的 MAC）和訊框識別碼，這些都是標頭的常見元素。"
  },
  {
    id: 154,
    category: "ch6",
    question: "Automatic Repeat reQuest (ARQ) error management is provided by which sublayer?",
    options: [
      "Logical Link Control (LLC) sublayer",
      "Media Access Control (MAC) sublayer",
      "Network Interface Control sublayer",
      "Application Access Control sublayer"
    ],
    answer: 0,
    explanation: "自動重傳請求（ARQ）由邏輯連結控制（LLC）子層提供，負責當訊框遺失或損壞時請求重傳，提供可靠的資料連結服務。"
  },
  {
    id: 155,
    category: "error",
    question: "When 2 or more bits in a data unit are changed during transmission, the error is called ___",
    options: ["Random error", "Burst error", "Inverted error", "Double error"],
    answer: 1,
    explanation: "突發錯誤（Burst error）指資料單元中兩個或兩個以上連續位元同時發生錯誤，通常由電磁干擾或雜訊引起，比單一位元錯誤更難校正。"
  },
  {
    id: 156,
    category: "error",
    question: "CRC stands for ___",
    options: [
      "Cyclic Redundancy Check",
      "Code Repeat Check",
      "Code Redundancy Check",
      "Cyclic Repeat Check"
    ],
    answer: 0,
    explanation: "CRC 代表循環冗餘校驗（Cyclic Redundancy Check），是一種基於多項式除法的強力錯誤偵測方法，廣泛用於乙太網路和其他通訊協定。"
  },
  {
    id: 157,
    category: "ch6",
    question: "Which of the following is a data link layer protocol?",
    options: ["Ethernet only", "PPP (Point-to-Point Protocol) only", "HDLC only", "All of the mentioned"],
    answer: 3,
    explanation: "乙太網路（Ethernet）、點對點協定（PPP）和高階資料連結控制（HDLC）都是資料連結層協定，各適用於不同的網路環境。"
  },
  {
    id: 158,
    category: "ch6",
    question: "Which of the following is the multiple access protocol for channel access control?",
    options: ["CSMA/CD only", "CSMA/CA only", "Both CSMA/CD and CSMA/CA", "HDLC"],
    answer: 2,
    explanation: "CSMA/CD（有線乙太網路）和 CSMA/CA（無線 802.11）都是多重存取協定，用於控制多個節點對共用媒介的存取。"
  },
  {
    id: 159,
    category: "ch6",
    question: "The technique of temporarily delaying outgoing acknowledgements to hook them onto the next outgoing data frame is called ___",
    options: ["Piggybacking", "Cyclic Redundancy Check", "Fletcher's Checksum", "Parity Check"],
    answer: 0,
    explanation: "搭便車（Piggybacking）技術讓確認（ACK）訊號附掛在下一個要傳送的資料訊框上，避免單獨傳送 ACK 浪費頻寬，提高傳輸效率。"
  },

  // ── Error Detection (Sanfoundry) ──
  {
    id: 160,
    category: "error",
    question: "What is the Hamming distance between 1010101 and 1100110?",
    options: ["4", "5", "8", "3"],
    answer: 0,
    explanation: "漢明距離是兩個等長字串中對應位置不同的位元數。1010101 XOR 1100110 = 0110011，共有 4 個 1，所以漢明距離為 4。"
  },
  {
    id: 161,
    category: "error",
    question: "What is the disadvantage of burst errors over single-bit errors in error detection and correction?",
    options: ["Difficult to correct", "Difficult to detect", "High error rate", "Frequent occurring"],
    answer: 0,
    explanation: "突發錯誤（Burst error）雖然可以被偵測，但非常難以校正，因為大量連續位元同時出錯，需要更複雜的糾錯碼（如 Reed-Solomon 碼）。"
  },
  {
    id: 162,
    category: "error",
    question: "Which of the following is an error CORRECTING code (not just detecting)?",
    options: ["Checksum", "Parity", "CRC", "Hamming codes"],
    answer: 3,
    explanation: "漢明碼（Hamming codes）是錯誤更正碼（FEC），能直接校正單一位元錯誤；而 Checksum、Parity 和 CRC 只能偵測錯誤，不能校正。"
  },
  {
    id: 163,
    category: "error",
    question: "How many bits are added to a data word in simple parity check?",
    options: ["1 bit", "2 bits", "0 bits", "4 bits"],
    answer: 0,
    explanation: "簡單奇偶校驗（Simple parity check）只在資料末尾加上 1 個奇偶位元，使整個傳輸字組的 1 的總數為奇數（奇同位）或偶數（偶同位）。"
  },
  {
    id: 164,
    category: "error",
    question: "Which error correcting code works well for burst errors?",
    options: ["CRC", "Hamming code", "Checksum", "Reed-Solomon codes"],
    answer: 3,
    explanation: "Reed-Solomon 碼對突發錯誤有很強的校正能力，廣泛用於 CD/DVD、QR 碼和衛星通訊，能校正連續多個位元的錯誤。"
  },
  {
    id: 165,
    category: "error",
    question: "CRC is also known as ___",
    options: ["Fletcher's Checksum", "Polynomial code", "Generator polynomial code", "Checksum"],
    answer: 1,
    explanation: "CRC 也被稱為多項式碼（Polynomial code），因為 CRC 計算基於多項式的模二除法，除數稱為生成多項式（generator polynomial）。"
  },
  {
    id: 166,
    category: "error",
    question: "Simple parity-check can detect even numbers of errors.",
    options: ["True", "False", "Only for 2-bit errors", "Depends on error position"],
    answer: 1,
    explanation: "單一奇偶校驗無法偵測偶數個位元錯誤，因為偶數個位元同時出錯時奇偶位元仍然正確，讓接收端誤以為資料無誤。"
  },
  {
    id: 167,
    category: "error",
    question: "What is the maximum number of errors that can be DETECTED (not corrected) using two-dimensional parity check?",
    options: ["4", "5", "3", "2"],
    answer: 2,
    explanation: "二維奇偶校驗能偵測最多 3 個位元錯誤，並能校正任意單一位元錯誤，比一維奇偶校驗更強大。"
  },

  // ── Ethernet (Sanfoundry) ──
  {
    id: 168,
    category: "ethernet",
    question: "What is the Start Frame Delimiter (SFD) value in an Ethernet frame?",
    options: ["10101010", "10101011", "00000000", "11111111"],
    answer: 1,
    explanation: "SFD（訊框開始符號）值為 10101011，是前置碼（Preamble）的最後一個位元組，前 7 個位元組為 10101010，SFD 的最後兩個位元 11 標示資料訊框開始。"
  },
  {
    id: 169,
    category: "ethernet",
    question: "What is autonegotiation in Ethernet?",
    options: [
      "A procedure by which two connected devices choose common transmission parameters",
      "A security algorithm",
      "A routing algorithm",
      "An encryption algorithm"
    ],
    answer: 0,
    explanation: "自動協商（Autonegotiation）允許兩台相連的設備自動協商最佳的傳輸速率（10/100/1000 Mbps）和雙工模式（半/全雙工），無需人工設定。"
  },
  {
    id: 170,
    category: "ethernet",
    question: "What is the maximum payload size of an Ethernet frame?",
    options: ["1000 bytes", "1200 bytes", "1300 bytes", "1500 bytes"],
    answer: 3,
    explanation: "乙太網路訊框的資料（payload）欄位最大為 1500 位元組，這也是 IPv4 的預設 MTU（最大傳輸單元），超過此大小需要分片。"
  },
  {
    id: 171,
    category: "ethernet",
    question: "What is an interframe gap in Ethernet?",
    options: [
      "Idle time between frames",
      "Idle time between frame bits",
      "Idle time between packets",
      "Idle time between networks"
    ],
    answer: 0,
    explanation: "訊框間隔（Interframe gap）是連續兩個乙太網路訊框之間的強制空閒時間（12 個位元組/96 位元），讓接收端有時間處理前一個訊框。"
  },
  {
    id: 172,
    category: "ethernet",
    question: "An Ethernet frame shorter than the IEEE 802.3 minimum of 64 bytes is called ___",
    options: ["Short frame", "Runt frame", "Mini frame", "Man frame"],
    answer: 1,
    explanation: "矮訊框（Runt frame）是長度不足 64 位元組的乙太網路訊框，通常是碰撞（collision）的結果，接收端會直接丟棄這類訊框。"
  },
  {
    id: 173,
    category: "ethernet",
    question: "High-speed Ethernet (100 Gbps and above) primarily works on ___",
    options: ["Coaxial cable", "Twisted pair cable", "Optical fiber", "Unshielded twisted pair cable"],
    answer: 2,
    explanation: "高速乙太網路（如 100GbE、400GbE）主要使用光纖傳輸，因為光纖能提供超高頻寬和長距離傳輸能力，而銅纜在超高速時受到距離限制。"
  },

  // ── MAC Address (Sanfoundry) ──
  {
    id: 174,
    category: "mac",
    question: "Which of the following is NOT another name for MAC address?",
    options: ["Burned-in address", "Hardware address", "Physical address", "Logical address"],
    answer: 3,
    explanation: "MAC 位址又稱燒錄位址（Burned-in address）、硬體位址（Hardware address）或實體位址（Physical address）；邏輯位址（Logical address）是指 IP 位址。"
  },
  {
    id: 175,
    category: "mac",
    question: "Which character is NOT a valid separator in a MAC address notation?",
    options: ["Hyphen (-)", "Period (.)", "Colon (:)", "Dollar ($)"],
    answer: 3,
    explanation: "MAC 位址常見的分隔符號有冒號（:）如 AA:BB:CC:DD:EE:FF、連字號（-）如 AA-BB-CC-DD-EE-FF，或句點（.）如 AABB.CCDD.EEFF；美元符號（$）不是有效分隔符。"
  },
  {
    id: 176,
    category: "mac",
    question: "MAC addresses are represented in ___",
    options: ["Decimal", "Binary", "Hexadecimal", "Octal"],
    answer: 2,
    explanation: "MAC 位址以十六進位（Hexadecimal）表示，48 位元分成 6 組，每組 8 位元以兩個十六進位數字表示，例如 1A:2F:BB:76:09:AD。"
  },
  {
    id: 177,
    category: "mac",
    question: "What is the primary use of MAC filtering on wireless networks?",
    options: ["Efficiency", "Speed", "Security", "Performance"],
    answer: 2,
    explanation: "MAC 過濾（MAC filtering）在無線網路中用於安全控制，只允許特定 MAC 位址的設備連接到 Wi-Fi 網路，防止未授權設備接入。"
  },
  {
    id: 178,
    category: "mac",
    question: "Which of the following is NOT a type of MAC address?",
    options: ["Unicast MAC address", "Multicast MAC address", "Broadcast MAC address", "Multiplecast MAC address"],
    answer: 3,
    explanation: "MAC 位址類型有三種：單播（Unicast，目的地單一設備）、多播（Multicast，目的地一組設備）、廣播（Broadcast，FF:FF:FF:FF:FF:FF，目的地所有設備）；沒有「Multiple cast」類型。"
  },
  {
    id: 179,
    category: "mac",
    question: "Which hardware in a computer is embedded with a MAC address?",
    options: ["Keyboard", "NIC (Network Interface Card)", "CPU chip", "Device driver"],
    answer: 1,
    explanation: "MAC 位址燒錄在網路介面卡（NIC，Network Interface Card）的 ROM 中，每個 NIC 在出廠時就有一個全球唯一的 MAC 位址。"
  },
  {
    id: 180,
    category: "mac",
    question: "How many octets are dedicated to the OUI (Organizationally Unique Identifier) in a 48-bit MAC address?",
    options: ["5", "3", "2", "4"],
    answer: 1,
    explanation: "48 位元 MAC 位址的前 3 個位元組（24 位元）是組織唯一識別碼（OUI），由 IEEE 分配給各製造商；後 3 個位元組由製造商自行分配給各設備。"
  },
  {
    id: 181,
    category: "mac",
    question: "A router node in a network has only ONE MAC address.",
    options: ["True", "False"],
    answer: 1,
    explanation: "路由器通常有多個網路介面，每個介面各有一個獨立的 MAC 位址，因此路由器有多個 MAC 位址（每個介面一個），不是只有一個。"
  },

  // ── Multiple Access Protocols (Sanfoundry) ──
  {
    id: 182,
    category: "ch6",
    question: "What are the types of basic protocols present in multiple access control in the data link layer?",
    options: [
      "Random, controlled, channelization",
      "Controlled, channelization",
      "Random, channelization",
      "Random, controlled, contributed"
    ],
    answer: 0,
    explanation: "多重存取控制協定分為三類：隨機存取（Random access，如 ALOHA、CSMA）、受控存取（Controlled access，如 Polling、Token Ring）和頻道化（Channelization，如 TDMA、FDMA、CDMA）。"
  },
  {
    id: 183,
    category: "ch6",
    question: "Why does a station wait a random amount of time before retransmitting after a collision in Pure ALOHA?",
    options: [
      "To prevent other stations from transmitting",
      "To avoid more collisions",
      "To detect other collisions",
      "To get acknowledgment from the receiver"
    ],
    answer: 1,
    explanation: "純 ALOHA 使用隨機等待時間，是為了避免相同的兩個站台再次同時重傳而再度碰撞（synchronized retransmission），隨機化讓碰撞機率降低。"
  },
  {
    id: 184,
    category: "ch6",
    question: "What is the vulnerable time of Pure ALOHA (for fixed-length frames with transmission time T)?",
    options: ["2*T", "3*T", "1/2*T", "5*T"],
    answer: 0,
    explanation: "純 ALOHA 的易碰撞時間（vulnerable time）為 2T，因為在目前傳輸開始前 T 時間內或開始後 T 時間內開始的傳輸都會造成碰撞，共 2 倍的訊框時間。"
  },
  {
    id: 185,
    category: "ch6",
    question: "Slotted ALOHA has a vulnerable time that is __ of Pure ALOHA's vulnerable time.",
    options: ["Double", "Half", "Equal", "One-quarter"],
    answer: 1,
    explanation: "時槽 ALOHA 的易碰撞時間（T）是純 ALOHA（2T）的一半，因為傳輸只能在時槽邊界開始，碰撞視窗縮短一半，效率因此提升（1/e 對比 1/2e）。"
  },
  {
    id: 186,
    category: "ch6",
    question: "Which controlled access protocol is known as the master-slave method?",
    options: ["Polling", "Reservation", "Token passing", "Scheduling"],
    answer: 0,
    explanation: "輪詢（Polling）是主從式（master-slave）方法，由主節點輪流向各從屬節點發出邀請，被邀請的節點才能傳輸，確保有序存取，無碰撞。"
  },
  {
    id: 187,
    category: "ch6",
    question: "Which of the following is NOT a channelization protocol?",
    options: [
      "Frequency Division Multiple Access (FDMA)",
      "Time Division Multiple Access (TDMA)",
      "Code Division Multiple Access (CDMA)",
      "Bandwidth Division Multiple Access"
    ],
    answer: 3,
    explanation: "頻道化協定包括 FDMA（分頻）、TDMA（分時）和 CDMA（展頻碼）；「頻寬分割多重存取（Bandwidth Division）」並不是標準協定類型。"
  },
  {
    id: 188,
    category: "ch6",
    question: "What technique does TDMA use to accomplish synchronization?",
    options: ["Preamble bits", "Synchronization bytes", "Guard bits", "Start points"],
    answer: 0,
    explanation: "TDMA 使用前置碼位元（Preamble bits）在每個時槽開始時進行時脈同步，確保各站台精確對齊各自的時槽，避免訊號重疊。"
  },
  {
    id: 189,
    category: "ch6",
    question: "What is the vulnerable time in CSMA (Carrier Sense Multiple Access)?",
    options: ["T_propagation", "T_frame", "2*T_frame", "2*T_propagation"],
    answer: 0,
    explanation: "CSMA 的易碰撞時間等於傳播延遲（T_propagation），因為站台偵聽到頻道閒置後開始傳輸，但其訊號到達其他站台前的這段傳播延遲時間內，其他站台可能也開始傳輸。"
  },
  {
    id: 190,
    category: "ch6",
    question: "Which type of random-access protocol reduces collisions and uses the medium more efficiently?",
    options: [
      "1-persistent",
      "Non-persistent",
      "Pure persistent",
      "1-persistent and non-persistent"
    ],
    answer: 1,
    explanation: "非持續性（Non-persistent）CSMA 在頻道忙碌時等待隨機時間再重試（而非持續偵聽），減少多個站台同時等待後同時傳輸的碰撞機率，比 1-persistent 更有效率。"
  },

  // ── VLAN (Sanfoundry) ──
  {
    id: 191,
    category: "vlan",
    question: "Physical partitioning of a switch is required to create VLANs.",
    options: ["True", "False"],
    answer: 1,
    explanation: "錯誤。VLAN 是虛擬的邏輯分割，不需要實體分割交換器，只需透過軟體設定將埠分組到不同 VLAN，這正是 VLAN 的核心優點。"
  },
  {
    id: 192,
    category: "vlan",
    question: "Which of the following CANNOT be used as a criterion to create VLANs on a switch?",
    options: [
      "Port numbers of the switch",
      "IP addresses of the stations",
      "Port numbers of the stations (transport layer ports)",
      "MAC addresses of the stations"
    ],
    answer: 2,
    explanation: "VLAN 可以基於交換器埠號（port-based）、MAC 位址或 IP 位址（第三層 VLAN）來建立；傳輸層的埠號（如 TCP port 80）不是 VLAN 的分類依據。"
  },
  {
    id: 193,
    category: "vlan",
    question: "Why is it important to add VLAN identifiers to frames when they move between VLANs?",
    options: [
      "To identify which VLAN they belong to",
      "To identify which switch they belong to",
      "To identify which host they belong to",
      "To identify which router they belong to"
    ],
    answer: 0,
    explanation: "當訊框透過主幹（trunk）鏈路在交換器間傳遞時，需要加上 VLAN 標籤（802.1Q tag）來標示訊框屬於哪個 VLAN，讓目的交換器知道要轉送到哪個 VLAN 的埠。"
  },
  {
    id: 194,
    category: "vlan",
    question: "What are the benefits of partitioning a LAN into VLANs?",
    options: [
      "Security and cost reduction only",
      "Security, cost reduction, efficiency, and application management",
      "Efficiency and application management only",
      "Security, cost reduction, and efficiency only"
    ],
    answer: 1,
    explanation: "VLAN 的優點全面：安全性（隔離敏感部門）、降低成本（一台交換器虛擬多個網路）、效率（限制廣播域大小）和應用程式管理（依功能分組設備）。"
  },
  {
    id: 195,
    category: "vlan",
    question: "Which of the following is a DISADVANTAGE of VLANs?",
    options: ["Division of broadcast domains", "Adds security", "Latency reduction", "VLAN hopping attack"],
    answer: 3,
    explanation: "VLAN 跳躍攻擊（VLAN hopping）是 VLAN 的已知缺點，攻擊者透過雙重標記（double tagging）或交換機欺騙（switch spoofing）技術繞過 VLAN 隔離，存取其他 VLAN 的流量。"
  },
  {
    id: 196,
    category: "vlan",
    question: "What is the normal VLAN range on a Cisco switch?",
    options: ["VLAN 2-1001", "VLAN 0-4095", "VLAN 1002-1005", "VLAN 1006-4094"],
    answer: 0,
    explanation: "一般 VLAN 範圍為 VLAN 2-1001（VLAN 1 是預設 VLAN，通常保留；1002-1005 保留給 Token Ring 和 FDDI；1006-4094 為延伸範圍 VLAN）。"
  },
  {
    id: 197,
    category: "vlan",
    question: "Which VLAN receives a frame that does not contain a VLAN tag?",
    options: ["Data VLAN", "Management VLAN", "Default VLAN", "Native VLAN"],
    answer: 3,
    explanation: "原生 VLAN（Native VLAN）接收主幹埠上沒有 802.1Q 標籤的訊框，預設為 VLAN 1。為安全起見，建議將原生 VLAN 改為非預設 VLAN。"
  },
  {
    id: 198,
    category: "vlan",
    question: "In how many ways can stations be configured to be grouped into different VLANs?",
    options: [
      "Manual and semi-automatic",
      "Manual and automatic",
      "Automatic, manual, and semi-automatic",
      "Automatic and semi-automatic"
    ],
    answer: 2,
    explanation: "VLAN 成員設定方式有三種：手動（manual，管理員直接指定埠）、自動（automatic，根據 MAC 或 IP 自動分組）和半自動（semi-automatic，部分自動化）。"
  }
];

// Merge extra questions into main array
QUESTIONS.push(...EXTRA_QUESTIONS);

// Update total count display
document.addEventListener('DOMContentLoaded', () => {
  const totalEl = document.getElementById('totalCount');
  if (totalEl) totalEl.textContent = QUESTIONS.length;
});
