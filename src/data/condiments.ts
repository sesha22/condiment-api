type Condiment = {
  id: number;
  name?: string;
  spicy?: "normal" | "super";
};

export const condiments: Condiment[] = [
  {
    id: 1,
    name: "Sambal Matah",
    spicy: "normal",
  },
  {
    id: 2,
    name: "Sambal Bawang",
    spicy: "super",
  },
  {
    id: 3,
    name: "Sambal Hijau",
    spicy: "normal",
  },
  {
    id: 4,
    name: "Sambal Pecel",
    spicy: "super",
  },
  {
    id: 5,
    name: "Bawang Merah Goreng",
  },
  {
    id: 6,
    name: "Bawang Putih Goreng",
  },
];
