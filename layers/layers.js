var wms_layers = [];

var lyr_SRTM30Hillshadebyterrestris_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ows.terrestris.de/osm/service",
    attributions: ' ',
                              params: {
                                "LAYERS": "SRTM30-Hillshade",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "SRTM30 Hillshade - by terrestris",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_SRTM30Hillshadebyterrestris_0, 0]);
var lyr_OpenStreetMapWMSbyterrestris_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ows.terrestris.de/osm/service",
    attributions: ' ',
                              params: {
                                "LAYERS": "OSM-WMS",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "OpenStreetMap WMS - by terrestris",
                            opacity: 0.850000,
                            
                            
                          });
              wms_layers.push([lyr_OpenStreetMapWMSbyterrestris_1, 0]);
var format_vlak_2 = new ol.format.GeoJSON();
var features_vlak_2 = format_vlak_2.readFeatures(json_vlak_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vlak_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vlak_2.addFeatures(features_vlak_2);
var lyr_vlak_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vlak_2, 
                style: style_vlak_2,
                interactive: false,
                title: '<img src="styles/legend/vlak_2.png" /> vlak'
            });
var format_tracks_3 = new ol.format.GeoJSON();
var features_tracks_3 = format_tracks_3.readFeatures(json_tracks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tracks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tracks_3.addFeatures(features_tracks_3);
var lyr_tracks_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tracks_3, 
                style: style_tracks_3,
                interactive: false,
                title: '<img src="styles/legend/tracks_3.png" /> tracks'
            });
var format_tracks_4 = new ol.format.GeoJSON();
var features_tracks_4 = format_tracks_4.readFeatures(json_tracks_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tracks_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tracks_4.addFeatures(features_tracks_4);
var lyr_tracks_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tracks_4, 
                style: style_tracks_4,
                interactive: false,
                title: '<img src="styles/legend/tracks_4.png" /> tracks'
            });
var format_tracks_5 = new ol.format.GeoJSON();
var features_tracks_5 = format_tracks_5.readFeatures(json_tracks_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tracks_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tracks_5.addFeatures(features_tracks_5);
var lyr_tracks_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tracks_5, 
                style: style_tracks_5,
                interactive: false,
                title: '<img src="styles/legend/tracks_5.png" /> tracks'
            });
var format_tracks_6 = new ol.format.GeoJSON();
var features_tracks_6 = format_tracks_6.readFeatures(json_tracks_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tracks_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tracks_6.addFeatures(features_tracks_6);
var lyr_tracks_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tracks_6, 
                style: style_tracks_6,
                interactive: false,
                title: '<img src="styles/legend/tracks_6.png" /> tracks'
            });
var format_fotky_7 = new ol.format.GeoJSON();
var features_fotky_7 = format_fotky_7.readFeatures(json_fotky_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fotky_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fotky_7.addFeatures(features_fotky_7);
var lyr_fotky_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fotky_7, 
                style: style_fotky_7,
                interactive: true,
                title: '<img src="styles/legend/fotky_7.png" /> fotky'
            });

lyr_SRTM30Hillshadebyterrestris_0.setVisible(true);lyr_OpenStreetMapWMSbyterrestris_1.setVisible(true);lyr_vlak_2.setVisible(true);lyr_tracks_3.setVisible(true);lyr_tracks_4.setVisible(true);lyr_tracks_5.setVisible(true);lyr_tracks_6.setVisible(true);lyr_fotky_7.setVisible(true);
var layersList = [lyr_SRTM30Hillshadebyterrestris_0,lyr_OpenStreetMapWMSbyterrestris_1,lyr_vlak_2,lyr_tracks_3,lyr_tracks_4,lyr_tracks_5,lyr_tracks_6,lyr_fotky_7];
lyr_vlak_2.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_tracks_3.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_tracks_4.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_tracks_5.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_tracks_6.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_fotky_7.set('fieldAliases', {'id': 'id', 'fotka': 'fotka', 'datum': 'datum', });
lyr_vlak_2.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_tracks_3.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_tracks_4.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_tracks_5.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_tracks_6.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_fotky_7.set('fieldImages', {'id': 'TextEdit', 'fotka': 'ExternalResource', 'datum': 'DateTime', });
lyr_vlak_2.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_tracks_3.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_tracks_4.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_tracks_5.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_tracks_6.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_fotky_7.set('fieldLabels', {'id': 'no label', 'fotka': 'header label', 'datum': 'inline label', });
lyr_fotky_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});