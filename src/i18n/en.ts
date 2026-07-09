const en = {
  lang: "en",
  dir: "ltr",
  label: "English",
  nav: {
    howItWorks: "How It Works",
    features: "Features",
    privacy: "Privacy",
    download: "Download",
  },
  hero: {
    badge: "Open Source \u00B7 No Cloud Required",
    title: "Turn Your Phone Into a",
    titleHighlight: "Wireless Barcode Scanner",
    subtitle:
      "LinkScan Pro transforms your smartphone into a powerful wireless barcode and QR code scanner for your PC. Scan codes with your phone and instantly send them to your computer over your local network \u2014 no dedicated hardware needed.",
    ctaPrimary: "Download Companion",
    ctaSecondary: "Learn More",
  },
  howItWorks: {
    heading: "How It Works",
    subheading: "Get started in minutes. No complex setup required.",
    steps: [
      { num: "01", title: "Install on Mobile", desc: "Install LinkScan Pro from the app store on your Android or iOS device." },
      { num: "02", title: "Run the Companion", desc: "Download and run the LinkScanPC companion on your Windows, macOS, or Linux computer." },
      { num: "03", title: "Connect to Network", desc: "Ensure both devices are connected to the same local Wi-Fi network." },
      { num: "04", title: "Scan Any Code", desc: "Scan any barcode or QR code with your phone\u2019s camera." },
      { num: "05", title: "Data Appears on PC", desc: "The scanned data is automatically typed into the application currently in focus on your computer." },
    ],
  },
  features: {
    heading: "Key Features",
    subheading: "Everything you need to streamline your scanning workflow.",
    items: [
      { title: "Wireless Barcode & QR Scanning", desc: "Use your smartphone as a wireless scanner and transmit barcode or QR code data directly to your computer in real time." },
      { title: "Automatic Keyboard Input", desc: "Scanned codes are automatically typed into the active window on your computer, making data entry fast and effortless." },
      { title: "Works with Your Existing Software", desc: "No special integrations required. Works with spreadsheets, databases, inventory systems, and virtually any desktop application." },
      { title: "LinkScanPC Companion", desc: "The desktop companion receives scan data and delivers it directly to your active application." },
      { title: "Windows Companion Management", desc: "Download the latest release, start and stop the companion, view live logs, monitor status, and manage files \u2014 all from the app." },
      { title: "Cross-Platform Support", desc: "LinkScanPC is available for Windows, macOS, and Linux." },
      { title: "Offline Scan History", desc: "All scans are stored locally using SQLite, so you can review scan history even without an internet connection." },
      { title: "Duplicate Scan Protection", desc: "Prevent accidental repeated scans with a configurable anti-duplicate cooldown timer." },
      { title: "Flashlight Support", desc: "Enable the device flashlight for reliable scanning in low-light environments like warehouses and stockrooms." },
      { title: "Fast and Lightweight", desc: "Designed for speed and simplicity with minimal setup required." },
    ],
  },
  privacy: {
    heading: "Privacy & Security",
    subheading: "Your scan data stays under your control.",
    footnote: "Fully Local Wi-Fi Connection • No Traffic Ever Leaves Your Local Router",
    items: [
      "Operates on your local network",
      "No cloud account required",
      "No subscription required",
      "Scan history stored locally on your device",
      "No external servers for core functionality",
      "Open source \u2014 fully auditable",
    ],
  },
  useCases: {
    heading: "Ideal For",
    subheading: "From inventory management to data entry \u2014 LinkScan Pro fits into any workflow.",
    items: [
      "Inventory Management",
      "Warehouse Operations",
      "Asset Tracking",
      "Retail Stock Management",
      "Shipping and Receiving",
      "Spreadsheet Data Entry",
      "Business Administration",
      "Logistics Workflows",
      "Manufacturing Environments",
      "Educational and Office Use",
    ],
  },
  whyChoose: {
    heading: "Why Choose LinkScan Pro?",
    items: [
      { title: "No Hardware Cost", desc: "Turn your existing smartphone into a barcode scanner and avoid the expense of dedicated hardware scanners." },
      { title: "Works with Any App", desc: "Compatible with Excel, Google Sheets, ERP software, databases, web apps, and virtually any software that accepts keyboard input." },
      { title: "Fast Wireless Transmission", desc: "Scans are sent over your local Wi-Fi network instantly with minimal latency." },
      { title: "Easy Setup", desc: "Install the app, run the companion, connect to the same network, and start scanning in minutes." },
      { title: "Cross-Platform", desc: "Use the companion on Windows, macOS, or Linux. Your phone works with all of them." },
      { title: "Reliable & Professional", desc: "Built for professional workflows with duplicate protection, offline history, and low-light support." },
    ],
  },
  openSource: {
    badge: "Open Source",
    heading: "Built in the Open",
    description:
      "LinkScan Pro and the LinkScanPC companion are fully open-source. Review the code, report issues, contribute improvements, and help shape the future of the project.",
    cta: "View on GitHub",
  },
  cta: {
    heading: "Ready to Streamline Your Workflow?",
    description:
      "Download LinkScan Pro on your mobile device and the LinkScanPC companion on your computer. Get started for free \u2014 no account or subscription needed.",
    primary: "Download Companion",
    secondary: "Get the Mobile App",
    or: "or",
  },
  footer: {
    text: "Open source \u00B7 Built with privacy in mind",
  },
};

export default en;
export type Translations = typeof en;
