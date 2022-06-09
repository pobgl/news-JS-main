import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '92d4a9bcde5b43669aa7a43e0f326bdf',
        });
    }
}

export default AppLoader;
