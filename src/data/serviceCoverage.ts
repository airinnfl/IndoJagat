export interface ServiceCoverageLocation {
  id: string;
  city: string;
  region: 'Jawa' | 'Sumatra' | 'Kalimantan' | 'Sulawesi';
  coordinates: {
    x: number;
    y: number;
  };
}

export const serviceCoverage: ServiceCoverageLocation[] = [
  { id: '01', city: 'Jabodetabek', region: 'Jawa', coordinates: { x: 315.2, y: 324.5 } },
  { id: '02', city: 'Bandung', region: 'Jawa', coordinates: { x: 335.8, y: 342.6 } },
  { id: '03', city: 'Semarang', region: 'Jawa', coordinates: { x: 406.3, y: 344.6 } },
  { id: '04', city: 'Surabaya', region: 'Jawa', coordinates: { x: 466, y: 351.3 } },
  { id: '05', city: 'Medan', region: 'Sumatra', coordinates: { x: 106.5, y: 74.2 } },
  { id: '06', city: 'Palembang', region: 'Sumatra', coordinates: { x: 262.3, y: 242 } },
  { id: '07', city: 'Balikpapan', region: 'Kalimantan', coordinates: { x: 570.6, y: 197.6 } },
  { id: '08', city: 'Makassar', region: 'Sulawesi', coordinates: { x: 636.6, y: 297.4 } },
];

export const coverageRegions = ['Jawa', 'Sumatra', 'Kalimantan', 'Sulawesi'] as const;
