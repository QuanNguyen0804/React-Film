import * as httpRequest from '../utils/httpRequest';

export const listFilm = async (page: number) => {
    try {
        const res = await httpRequest.get('/danh-sach/phim-moi-cap-nhat', {
            params: {
                page
            },
        });

        return res;
    } catch (error) {
        console.log(error);
    }
};


export const filmDetail = async (slug: string) => {
    try {
        const res = await httpRequest.get('/phim/' + slug);

        return res;
    } catch (error) {
        console.log(error);
    }
};