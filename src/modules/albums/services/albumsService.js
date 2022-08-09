import api from '../../../api';

export function getAlbumsList(userId) {
    return api.get(`albums?userId=${userId}`).then((response) => response.data);
}

export function getAlbumDetails(albumId) {
    return api.get(`photos?albumId=${albumId}`).then((response) => response.data);
}