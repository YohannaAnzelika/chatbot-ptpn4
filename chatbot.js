function getReply(message) {
  const msg = message.toLowerCase().trim();

  const linkMap = [
    {
      keywords: ["profil", "tentang", "utama", "beranda"],
      name: "Situs resmi PTPN IV",
      url: "https://www.ptpn4.co.id/",
    },
    {
      keywords: ["publik", "informasi publik", "kip"],
      name: "Portal Informasi Publik",
      url: "https://kip.ptpn4.co.id/",
    },
    {
      keywords: ["ims", "mutu", "sertifikasi", "management system"],
      name: "IMS PTPN IV",
      url: "https://ims.ptpn4.co.id/",
    },
    {
      keywords: ["project", "apps", "proyek", "eproc", "pengadaan"],
      name: "PTPN4 Project Apps",
      url: "https://www.ptpn4apps.id/ptpn4-projects/",
    },
    {
      keywords: ["bibit", "perkebunan", "tanaman"],
      name: "Portal Bibit",
      url: "https://bibit.ptpn4.co.id/",
    },
    {
      keywords: ["tanam ulang", "dashboard tanam", "replanting", "tanam"],
      name: "Dashboard Tanam Ulang",
      url: "https://www.ptpn4apps.id:8089/",
    },
    {
      keywords: ["doctrace r2", "r2", "dashboard r2"],
      name: "Dashboard DOCTRACE R2",
      url: "https://www.ptpn4apps.id:8087/",
    },
    {
      keywords: ["produksi", "harian", "produksi harian"],
      name: "Produksi Harian",
      url: "https://www.ptpn4apps.id:8086/",
    },
    {
      keywords: [
        "dhbb",
        "katalog",
        "catalogue dhbb",
        "dhbb online",
        "online dhbb",
        "dhbb login",
      ],
      name: "DHBB ONLINE",
      url: "https://www.ptpn4apps.id:8085/",
    },
    {
      keywords: ["tracking lama", "etracking lama"],
      name: "eTracking (lama)",
      url: "https://www.ptpn4apps.id:8084/",
    },
    {
      keywords: ["marketing", "sales"],
      name: "Sales Marketing",
      url: "https://www.ptpn4apps.id:8083/",
    },
    {
      keywords: ["album", "tbm", "album tbm"],
      name: "Album TBM V.3",
      url: "https://www.ptpn4apps.id:8082/",
    },
    {
      keywords: ["teknis", "proses bisnis", "doctrace proses"],
      name: "Monitoring Proses Bisnis TEKPOL (DOCTRACE)",
      url: "https://www.ptpn4apps.id:8000/",
    },
    {
      keywords: ["pica", "dashboard pica", "pica tanaman"],
      name: "PICA TANAMAN",
      url: "https://gis.ptpn4.or.id/portal/sharing/oauth2/authorize?client_id=opsdashboard&response_type=token&state=%7B%22portalUrl%22%3A%22https%3A%2F%2Fgis.ptpn4.or.id%2Fportal%22%2C%22hash%22%3A%22%23%2F7f5f47f3533348478e082c15824b6561%22%7D&expiration=20160&redirect_uri=https%3A%2F%2Fgis.ptpn4.or.id%2Fportal%2Fapps%2Fopsdashboard%2Findex.html",
    },
    {
      keywords: ["mims", "losses", "ptpn group"],
      name: "Dashboard MIMS Losses PTPN Group",
      url: "https://mims-foss.holding-perkebunan.com/",
    },
    {
      keywords: ["tbs", "pembelian tbs", "harga tbs"],
      name: "PEMBELIAN TBS",
      url: "https://www.ptpn4apps.id/hargatbsapp/public/login",
    },
    {
      keywords: ["ritel", "teh", "ritel teh"],
      name: "RITEL TEH N4",
      url: "https://www.ptpn4apps.id:8090/ptpn4_teh/public/login",
    },
    {
      keywords: ["inventory", "msi inventory", "stok barang"],
      name: "MSI INVENTORY",
      url: "https://www.ptpn4apps.id/ptpn4-inv-web/public/login",
    },
    {
      keywords: ["doctrace au31", "au31"],
      name: "DOCTRACE AU31 v1.0",
      url: "https://www.ptpn4apps.id:8090/doctraceau31/public/login",
    },
    {
      keywords: ["doctrace spp", "spp"],
      name: "DOCTRACE SPP",
      url: "https://www.ptpn4apps.id:8090/doctrace/public/login",
    },
    {
      keywords: ["meeting", "rapat", "booking rapat"],
      name: "MEETING BOOKING SYSTEM",
      url: "https://www.ptpn4apps.id:8090/mbs/public/login",
    },
    {
      keywords: ["official", "website resmi", "web ptpn4"],
      name: "OFFICIAL WEBSITE PTPN4",
      url: "https://www.ptpn4.co.id/",
    },
  ];

  const matchedItems = linkMap
    .map((item) => {
      const found = item.keywords.some((keyword) =>
        msg.includes(keyword.toLowerCase())
      );
      return found ? item : null;
    })
    .filter(Boolean);

  if (matchedItems.length > 0) {
    const matched = matchedItems[0];
    return `Berikut link yang sesuai permintaan Anda:<br><br>🔗 <a href="${matched.url}" target="_blank">${matched.name}</a>`;
  }

  return `Maaf, saya tidak menemukan situs yang sesuai. Silakan coba kata lain seperti: <b>Profil</b>, <b>IMS</b>, <b>Bibit</b>, <b>Publik</b>, atau nama aplikasi seperti <b>Tanam Ulang</b>, <b>DHBB</b>, <b>DOCTRACE</b>, <b>TBS</b>, dll.`;
}

module.exports = { getReply };
