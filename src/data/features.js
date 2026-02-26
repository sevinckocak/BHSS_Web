export const makeFeatures = ({
  iconTracking,
  iconVaccine,
  iconAssistant,
  iconVet,
}) => [
  {
    baslik: "Hayvan Takibi",
    ikonSrc: iconTracking,
    aciklama:
      "Sürüdeki her hayvanı tek tek kaydet, durumunu ve geçmişini takip et.",
  },
  {
    baslik: "Aşı Kayıtları",
    ikonSrc: iconVaccine,
    aciklama: "Aşı takvimini yönet, geciken aşıları gör ve kayıt altında tut.",
  },
  {
    baslik: "Akıllı Asistan",
    ikonSrc: iconAssistant,
    aciklama:
      "Belirtileri yaz, olası riskleri gör ve hızlı aksiyon önerileri al.",
  },
  {
    baslik: "Veteriner ile İletişim",
    ikonSrc: iconVet,
    aciklama:
      "Veterinere anlık mesaj at, vakaları kayıt altına al ve takip et.",
  },
];
