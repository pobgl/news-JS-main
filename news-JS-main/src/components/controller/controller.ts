import AppLoader from './appLoader';
import {SourcesData} from '../view/viewData.interface'
import {NewsData} from '../view/viewData.interface'

export type CallbackType<T> = (data: T) => void;

class AppController extends AppLoader {
    getSources(callback: CallbackType<SourcesData>): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: CallbackType<NewsData>): void {
        let target = e.target as HTMLSpanElement;
        const newsContainer = e.currentTarget as HTMLDivElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: string | null = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
