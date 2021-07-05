var wms_layers = [];
var format_batas_kec_jateng_diy_bako_june2004_plgon_0 = new ol.format.GeoJSON();
var features_batas_kec_jateng_diy_bako_june2004_plgon_0 = format_batas_kec_jateng_diy_bako_june2004_plgon_0.readFeatures(json_batas_kec_jateng_diy_bako_june2004_plgon_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_kec_jateng_diy_bako_june2004_plgon_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_batas_kec_jateng_diy_bako_june2004_plgon_0.addFeatures(features_batas_kec_jateng_diy_bako_june2004_plgon_0);var lyr_batas_kec_jateng_diy_bako_june2004_plgon_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_batas_kec_jateng_diy_bako_june2004_plgon_0, 
                style: style_batas_kec_jateng_diy_bako_june2004_plgon_0,
    title: 'batas_kec_jateng_diy_bako_june2004_plgon<br />\
    <img src="styles/legend/batas_kec_jateng_diy_bako_june2004_plgon_0_0.png" /> Brati<br />\
    <img src="styles/legend/batas_kec_jateng_diy_bako_june2004_plgon_0_1.png" /> Gabus<br />\
    <img src="styles/legend/batas_kec_jateng_diy_bako_june2004_plgon_0_2.png" /> Geyer<br />\
    <img src="styles/legend/batas_kec_jateng_diy_bako_june2004_plgon_0_3.png" /> Godong<br />\
    <img src="styles/legend/batas_kec_jateng_diy_bako_june2004_plgon_0_4.png" /> Grobogan<br />\
    <img src="styles/legend/batas_kec_jateng_diy_bako_june2004_plgon_0_5.png" /> Gubug<br />\
    <img src="styles/legend/batas_kec_jateng_diy_bako_june2004_plgon_0_6.png" /> Karangrayung<br />\
    <img src="styles/legend/batas_kec_jateng_diy_bako_june2004_plgon_0_7.png" /> Kedungjati<br />\
    <img src="styles/legend/batas_kec_jateng_diy_bako_june2004_plgon_0_8.png" /> Klambu<br />\
    <img src="styles/legend/batas_kec_jateng_diy_bako_june2004_plgon_0_9.png" /> Kradenan<br />\
    <img src="styles/legend/batas_kec_jateng_diy_bako_june2004_plgon_0_10.png" /> Ngaringan<br />\
    <img src="styles/legend/batas_kec_jateng_diy_bako_june2004_plgon_0_11.png" /> Penawangan<br />\
    <img src="styles/legend/batas_kec_jateng_diy_bako_june2004_plgon_0_12.png" /> Pulokulon<br />\
    <img src="styles/legend/batas_kec_jateng_diy_bako_june2004_plgon_0_13.png" /> Purwodadi<br />\
    <img src="styles/legend/batas_kec_jateng_diy_bako_june2004_plgon_0_14.png" /> Tanggungharjo<br />\
    <img src="styles/legend/batas_kec_jateng_diy_bako_june2004_plgon_0_15.png" /> Tawangharjo<br />\
    <img src="styles/legend/batas_kec_jateng_diy_bako_june2004_plgon_0_16.png" /> Tegowanu<br />\
    <img src="styles/legend/batas_kec_jateng_diy_bako_june2004_plgon_0_17.png" /> Toroh<br />\
    <img src="styles/legend/batas_kec_jateng_diy_bako_june2004_plgon_0_18.png" /> Wirosari<br />\
    <img src="styles/legend/batas_kec_jateng_diy_bako_june2004_plgon_0_19.png" /> <br />'
        });

lyr_batas_kec_jateng_diy_bako_june2004_plgon_0.setVisible(true);
var layersList = [lyr_batas_kec_jateng_diy_bako_june2004_plgon_0];
lyr_batas_kec_jateng_diy_bako_june2004_plgon_0.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'KECAMATAN': 'KECAMATAN', 'KODE_KEC': 'KODE_KEC', 'KODE_KAB': 'KODE_KAB', 'SHAPE_LENG': 'SHAPE_LENG', 'KODE_PROP': 'KODE_PROP', 'KABUPATEN': 'KABUPATEN', 'SHAPE_LE_1': 'SHAPE_LE_1', 'SHAPE_AREA': 'SHAPE_AREA', 'JMH_MI': 'JMH_MI', 'JMH_SD': 'JMH_SD', });
lyr_batas_kec_jateng_diy_bako_june2004_plgon_0.set('fieldImages', {'PROVINSI': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KODE_KEC': 'TextEdit', 'KODE_KAB': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'KODE_PROP': 'TextEdit', 'KABUPATEN': 'TextEdit', 'SHAPE_LE_1': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'JMH_MI': 'TextEdit', 'JMH_SD': 'TextEdit', });
lyr_batas_kec_jateng_diy_bako_june2004_plgon_0.set('fieldLabels', {'PROVINSI': 'no label', 'KECAMATAN': 'inline label', 'KODE_KEC': 'no label', 'KODE_KAB': 'no label', 'SHAPE_LENG': 'inline label', 'KODE_PROP': 'no label', 'KABUPATEN': 'no label', 'SHAPE_LE_1': 'no label', 'SHAPE_AREA': 'no label', 'JMH_MI': 'no label', 'JMH_SD': 'no label', });
lyr_batas_kec_jateng_diy_bako_june2004_plgon_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});