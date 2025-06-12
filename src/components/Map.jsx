import maplibre from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useEffect, useRef, useState } from 'react';

const layerOptions = [
    { id: 'moran_bv_cluster', name: 'Moran Bivariate' },
    { id: 'getis_z', name: 'Getis-Ord Z' },
    { id: 'lisa_cluster', name: 'LISA Cluster' },
    { id: 'jumlah_banjir', name: 'Jumlah Banjir' },
    { id: 'kepadatan_penduduk', name: 'Kepadatan Penduduk' },
    { id: 'klasifikasi_minmax', name: 'Klasifikasi MCDA + MinMax' },
    { id: 'klasifikasi_qrank', name: 'Klasifikasi MCDA + Quantile Rank' },
];

const legends = {
    moran_bv_cluster: [
      { label: 'High-High', color: 'red' },
      { label: 'Low-High', color: 'blue' },
      { label: 'Low-Low', color: 'lightblue' },
      { label: 'High-Low', color: 'pink' },
      { label: 'Non-significant', color: 'lightgrey' },
    ],
    lisa_cluster: [
      { label: 'HH', color: 'red' },
      { label: 'LH', color: 'blue' },
      { label: 'LL', color: 'lightblue' },
      { label: 'HL', color: 'pink' },
      { label: 'Non-significant', color: 'lightgrey' },
    ],
    getis_z: [
      { label: 'Coldspot Signifikan (Z < -1.96)', color: '#262ebf' },
      { label: 'Netral (~Z = 0)', color: '#ffffbf' },
      { label: 'Hotspot Signifikan (Z > 1.96)', color: '#a50026' },
    ],
    jumlah_banjir: [
      { label: 'Rendah', color: '#deebf7' },
      { label: 'Sedang', color: '#9ecae1' },
      { label: 'Tinggi', color: '#3182bd' },
    ],
    kepadatan_penduduk: [
      { label: 'Rendah', color: '#edf8e9' },
      { label: 'Sedang', color: '#41ab5d' },
      { label: 'Tinggi', color: '#005a32' },
    ],
    klasifikasi_minmax: [
        { label: 'Rendah', color: '#deebf7' },
        { label: 'Sedang', color: '#6baed6' },
        { label: 'Tinggi', color: '#08306b' },
        { label: 'Sangat Tinggi', color: '#bd0026' },
        { label: 'Missing', color: '#dbdbd5' },
    ],
    klasifikasi_qrank: [
        { label: 'Rendah', color: '#deebf7' },
        { label: 'Sedang', color: '#6baed6' },
        { label: 'Tinggi', color: '#08306b' },
        { label: 'Sangat Tinggi', color: '#bd0026' },
        { label: 'Missing', color: '#dbdbd5' },
    ]
};
  

const Map = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const popup = useRef(new maplibre.Popup({ closeButton: false, closeOnClick: false }));
    const [activeLayer, setActiveLayer] = useState('moran_bv_cluster');

    useEffect(() => {
        map.current = new maplibre.Map({
            container: mapContainer.current,
            style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
            center: [106.82, -6.2], //jakarta
            zoom: 10,
        });



        map.current.on('load', () => {
            fetch('/data/density_banjir_moranGetisOrd_MCDA.geojson')
                .then((res) => res.json())
                .then((geojsonData) => {
                    map.current.addSource('jakarta', {
                        type: 'geojson',
                        data: geojsonData,
                    });
      
                    const layerDefs = {
                        moran_bv_cluster: {
                            paint: {
                                'fill-color': [
                                    'match',
                                    ['get', 'moran_bv_cluster'],
                                    'High-High', 'red',
                                    'Low-High', 'blue',
                                    'Low-Low', 'lightblue',
                                    'High-Low', 'pink',
                                    'Non-significant', 'lightgrey',
                                    'white',
                                ],
                                'fill-opacity': 0.6,
                                'fill-outline-color': '#000',
                            },
                        },
                        getis_z: {
                            paint: {
                                'fill-color': [
                                    'interpolate',
                                    ['linear'],
                                    ['get', 'getis_z'],
                                    -2, '#262ebf',
                                    0, '#ffffbf',
                                    2, '#a50026',
                                ],
                                'fill-opacity': 0.6,
                                'fill-outline-color': '#000',
                            },
                        },
                        lisa_cluster: {
                            paint: {
                                'fill-color': [
                                    'match',
                                    ['get', 'lisa_cluster'],
                                    'HH', 'red',
                                    'LH', 'blue',
                                    'LL', 'lightblue',
                                    'HL', 'pink',
                                    'Non-significant', 'lightgrey',
                                    'white',
                                ],
                                'fill-opacity': 0.6,
                                'fill-outline-color': '#000',
                            },
                        },
                        jumlah_banjir: {
                            paint: {
                                'fill-color': [
                                    'interpolate',
                                    ['linear'],
                                    ['get', 'jumlah_banjir'],
                                    0, '#deebf7',
                                    10, '#9ecae1',
                                    20, '#3182bd',
                                ],
                                'fill-opacity': 0.6,
                                'fill-outline-color': '#000',
                            },
                        },
                        kepadatan_penduduk: {
                            paint: {
                                'fill-color': [
                                    'interpolate',
                                    ['linear'],
                                    ['get', 'Kepadatan_Penduduk'],
                                    0, '#edf8e9',
                                    10000, '#41ab5d',
                                    30000, '#005a32',
                                ],
                                'fill-opacity': 0.6,
                                'fill-outline-color': '#000',
                            },
                        },
                        klasifikasi_minmax: {
                            paint: {
                                'fill-color': [
                                    'match',
                                    ['get', 'klasifikasi_minmax'],
                                    'Rendah', '#deebf7',
                                    'Sedang', '#6baed6',
                                    'Tinggi', '#08306b',
                                    'Sangat Tinggi', '#bd0026',
                                    'Missing', 'lightgrey',
                                    'white',
                                ],
                                'fill-opacity': 0.6,
                                'fill-outline-color': '#000',
                            },
                        },
                        klasifikasi_qrank: {
                            paint: {
                                'fill-color': [
                                    'match',
                                    ['get', 'klasifikasi_qrank'],
                                    'Rendah', '#deebf7',
                                    'Sedang', '#6baed6',
                                    'Tinggi', '#08306b',
                                    'Sangat Tinggi', '#bd0026',
                                    'Missing', 'lightgrey',
                                    'white',
                                ],
                                'fill-opacity': 0.6,
                                'fill-outline-color': '#000',
                            },
                        },
                    };
      
                    layerOptions.forEach((layer) => {
                        map.current.addLayer({
                            id: layer.id,
                            type: 'fill',
                            source: 'jakarta',
                            paint: layerDefs[layer.id].paint,
                            layout: { visibility: layer.id === activeLayer ? 'visible' : 'none' },
                        });
                    });

                    // Setup popup hover untuk semua layer
                    layerOptions.forEach(({ id }) => {
                        map.current.on('mousemove', id, (e) => {
                            const feature = e.features?.[0];
                            if (!feature) return;
  
                            const props = feature.properties;
  
                            // isi popup berdasarkan layer aktif
                            let content = `<strong>${props.village || props.sub_district || 'Kelurahan Tidak Diketahui'}</strong><br/>`;
  
                            if (id === 'moran_bv_cluster') {
                                content += `
                                    Moran Cluster: ${props.moran_bv_cluster}<br/>
                                    Jumlah Banjir: ${props.jumlah_banjir}<br/>
                                    Kepadatan Penduduk: ${props.Kepadatan_Penduduk}
                                `;
                            } else if (id === 'getis_z') {
                                content += `
                                    Getis Z: ${props.getis_z}<br/>
                                    Jumlah Banjir: ${props.jumlah_banjir}
                                `;
                            } else if (id === 'lisa_cluster') {
                                content += `
                                    LISA Cluster: ${props.lisa_cluster}<br/>
                                    Kepadatan: ${props.Kepadatan_Penduduk}
                                `;
                            } else if (id === 'jumlah_banjir') {
                                content += `
                                    Jumlah Banjir: ${props.jumlah_banjir}
                                `;
                            } else if (id === 'kepadatan_penduduk') {
                                content += `
                                    Kepadatan Penduduk: ${props.Kepadatan_Penduduk}<br/>
                                    Jumlah Penduduk: ${props.Jumlah_Penduduk}
                                `;
                            } else if (id === 'klasifikasi_minmax') {
                                content += `
                                    Score MinMax: ${props.skor_minmax}<br/>
                                    Klasifikasi: ${props.klasifikasi_minmax}<br/>
                                `;
                            } else if (id === 'klasifikasi_qrank') {
                                content += `
                                    Score Quantile Rank: ${props.skor_qrank}<br/>
                                    Klasifikasi: ${props.klasifikasi_qrank}<br/>
                                `;
                            }
  
                            popup.current.setLngLat(e.lngLat).setHTML(content).addTo(map.current);
                        });
  
                        map.current.on('mouseleave', id, () => {
                            popup.current.remove();
                        });
                    });
      
                
                });
            });
      
            return () => {
                map.current?.remove();
            };
        }, []);

        const toggleLayer = (layerId) => {
            setActiveLayer(layerId);
            layerOptions.forEach(({ id }) => {
                const visibility = id === layerId ? 'visible' : 'none';
                map.current.setLayoutProperty(id, 'visibility', visibility);
            });
        };

    return (
        <>
            {/* Kontrol Layer */}
            <div className="absolute top-4 left-4 bg-white p-3 rounded shadow z-10">
                <h4 className="text-sm font-semibold mb-2">Pilih Layer:</h4>
                {layerOptions.map((layer) => (
                    <button
                        key={layer.id}
                        className={`block text-left text-sm mb-1 w-full px-2 py-1 rounded ${
                        activeLayer === layer.id ? 'bg-blue-500 text-white' : 'bg-gray-100'
                        }`}
                        onClick={() => toggleLayer(layer.id)}
                    >
                        {layer.name}
                    </button>
                ))}
            </div>

            {/* Legend */}
            <div className='absolute bottom-4 left-4 bg-white p-3 rounded shadow z-10 w-60'>
                <h4 className="text-sm font-semibold mb-2">Legend:</h4>
                {legends[activeLayer]?.map((item, index) => (
                    <div key={index} className="flex items-center mb-1">
                        <div className={`w-4 h-4 mr-2 rounded-sm`} style={{ backgroundColor: item.color }}></div>
                        <span className="text-sm">{item.label}</span>
                    </div>
                ))}
            </div>

            {/* Peta */}
            <div ref={mapContainer} className="w-full h-screen" />
        </>
    )
}

export default Map